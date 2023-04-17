import { transformOpenAPIExpression } from "./jsonata/transforms.js";
import { ExportOptions, SpecExporter } from "./SpecExporter.js";
import VError from "verror";
import { getStatusLog, StatusLog, useStatusLog } from "./statusLog.js";
import { NormalizedSpec } from "./NormalizedSpec.js";
import { runWithContext } from "@mittwald/awesome-node-utils/context/run.js";
import { objectEntries } from "@mittwald/awesome-node-utils/object/entries.js";
import deepmerge from "deepmerge";
import { loadSpec } from "./loadSpec.js";
import jp from "fs-jetpack";
import jsyaml from "js-yaml";
import debug from "./debug.js";
import SwaggerParser from "@apidevtools/swagger-parser";
import path from "path";
import OpenAPISchemaValidatorDefault from "openapi-schema-validator";
import is from "@sindresorhus/is";
import { OpenAPIV3 } from "openapi-types";

const { default: OpenAPISchemaValidator } =
  OpenAPISchemaValidatorDefault as unknown as {
    default: typeof OpenAPISchemaValidatorDefault;
  };

interface SpecOptions {
  statusLog?: StatusLog;
  throwErrors?: boolean;
  skipValidation?: boolean;
}

export type SpecRunnable = (spec: Spec) => Promise<void>;
export type FileFormat = "yaml" | "json";

export class Spec {
  private readonly exporter: SpecExporter;
  public readonly namespace: string;
  private readonly options: SpecOptions;
  private _normalized: NormalizedSpec;

  private constructor(
    namespace: string,
    normnalizedSpec: NormalizedSpec,
    options: SpecOptions = {},
  ) {
    const log = getStatusLog();
    this.options = options;
    log?.info(`used namespace: ${namespace}`);
    this.namespace = namespace;
    this._normalized = normnalizedSpec;
    this.exporter = new SpecExporter(this._normalized);
  }

  public static async fromOpenApiSpec(
    namespace: string,
    openAPISpec: object,
    options: SpecOptions = {},
  ): Promise<Spec> {
    return new Spec(namespace, await Spec.normalizeSpec(openAPISpec), options);
  }

  private static removeIfRef(item: unknown): void {
    if (!is.nonEmptyObject(item)) {
      return;
    }

    for (const [propName, propValue] of Object.entries(item)) {
      if (is.nonEmptyObject(propValue)) {
        if ("$ref" in propValue) {
          item[propName] = {
            $ref: propValue["$ref"],
          };
        } else {
          Spec.removeIfRef(propValue);
        }
      }
    }
  }

  private static async normalizeSpec(
    openAPISpec: object,
  ): Promise<NormalizedSpec> {
    try {
      const log = getStatusLog();
      log?.start("normalizing OpenAPI spec");

      const normalized: NormalizedSpec =
        await transformOpenAPIExpression.evaluate(openAPISpec);
      Spec.removeIfRef(normalized);

      log?.succeed("OpenAPI spec normalized");
      debug("normalized spec: %O", normalized);

      objectEntries(normalized.paths).forEach(([path, ops]) =>
        log?.info(
          `Path found: ${path} (methods: ${Object.keys(ops).join(", ")})`,
        ),
      );

      return normalized;
    } catch (err) {
      throw new VError(
        {
          name: "TransformationError",
          cause: err as Error,
        },
        "Error while transforming OpenAPI spec with JSONata. This usually happens, when the spec is invalid. You might get more details on the cause, when not skipping validation.",
      );
    }
  }

  public static async validateSpec(spec: OpenAPIV3.Document): Promise<void> {
    const log = getStatusLog();
    log?.start("validating OpenAPI/Swagger spec");

    debug("Validating %O", spec);

    if ("__meta" in spec) {
      delete spec.__meta;
    }

    if ("swagger" in spec) {
      try {
        await SwaggerParser.validate(spec, {});
      } catch (err) {
        console.log(err);
        throw new VError(err as Error, "Swagger spec is not valid");
      }
    } else {
      const result = new OpenAPISchemaValidator({
        version: 3,
      }).validate(spec);

      if (result.errors.length > 0) {
        throw new VError(
          {
            cause: new Error(result.errors[0].message),
            info: result.errors[0],
          },
          "OpenAPI spec is not valid",
        );
      }
    }

    log?.succeed("OpenAPI is valid");
  }

  private static runInContext(
    options: SpecOptions,
    specFactory: () => Promise<Spec>,
  ): (specRunnable: SpecRunnable) => void {
    return (specRunnable) => {
      const { statusLog, throwErrors } = options;

      const fail = (error: unknown): void => {
        if (!(error instanceof Error)) {
          throw error;
        }

        let message = error.message;

        const infos = VError.info(error);
        if (Object.keys(infos).length > 0) {
          message += "\n" + jsyaml.dump(infos);
        }

        statusLog?.fail(message);
        if (throwErrors) {
          throw error;
        }
      };

      runWithContext(() => {
        const statusLogContext = useStatusLog();

        if (statusLog) {
          statusLogContext.set(statusLog);
        }

        try {
          specFactory()
            .then(async (spec) => {
              await specRunnable(spec);
            })
            .catch(fail);
        } catch (error) {
          fail(error as Error);
        }
      });
    };
  }

  public static fromFiles(
    namespace: string,
    paths: string[],
    options: SpecOptions = {},
  ): (specRunnable: SpecRunnable) => void {
    return Spec.runInContext(options, async () => {
      let mergedSpec: OpenAPIV3.Document = {
        openapi: "",
        info: {
          version: "",
          title: "",
        },
        paths: {},
      };

      for (const path of paths) {
        const openAPI = await loadSpec(path);
        mergedSpec = deepmerge(mergedSpec, openAPI, {
          arrayMerge: (target, source) => source,
        });
      }

      if (!options.skipValidation) {
        await Spec.validateSpec(mergedSpec);
      } else {
        getStatusLog()?.warn("Spec validation skipped!");
      }

      return Spec.fromOpenApiSpec(namespace, mergedSpec, options);
    });
  }

  public writeFiles(outputDir: string, opts?: ExportOptions): void {
    const log = getStatusLog();

    const typesFilename = path.join(outputDir, "types.ts");
    const operationsFilename = path.join(outputDir, "operations.ts");
    const clientFilename = path.join(outputDir, "client.ts");

    log?.start(`writing 'types' to "${typesFilename}"`);
    jp.write(typesFilename, this.exporter.exportTypesV2(this.namespace, opts));
    log?.succeed(`'client' written to "${typesFilename}"`);

    log?.start(`writing 'operations' to "${operationsFilename}"`);
    jp.write(
      operationsFilename,
      this.exporter.exportOperationsV2(this.namespace, opts),
    );
    log?.succeed(`'operations' written to "${operationsFilename}"`);

    log?.start(`writing 'client' to "${clientFilename}"`);
    jp.write(
      clientFilename,
      this.exporter.exportClientV2(this.namespace, opts),
    );
    log?.succeed(`'client' written to "${clientFilename}"`);
  }

  public updateSpec(spec: NormalizedSpec): void {
    this._normalized = spec;
    this.exporter.updateSpec(spec);
  }

  public get normalized(): NormalizedSpec {
    return this._normalized;
  }
}
