import { transformOpenAPIExpression } from "./jsonata/transforms";
import { ExportOptions, SpecExporter } from "./SpecExporter";
import OpenAPISchemaValidator from "openapi-schema-validator";
import VError from "verror";
import { getStatusLog, StatusLog, useStatusLog } from "./statusLog";
import { NormalizedSpec } from "./NormalizedSpec";
import { runWithContext } from "@mittwald/awesome-node-utils/context/run";
import { objectEntries } from "@mittwald/awesome-node-utils/object/entries";
import deepmerge from "deepmerge";
import { loadSpec } from "./loadSpec";
import jp from "fs-jetpack";
import jsyaml from "js-yaml";
import debug from "./debug";
import SwaggerParser from "@apidevtools/swagger-parser";
import path from "path";
import { getSubFileName } from "./lib";

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

    public constructor(namespace: string, openAPISpec: object, options: SpecOptions = {}) {
        const log = getStatusLog();
        this.options = options;
        log?.info(`used namespace: ${namespace}`);
        this.namespace = namespace;
        this._normalized = Spec.normalizeSpec(openAPISpec);
        this.exporter = new SpecExporter(this._normalized);
    }

    private static removeIfRef(item: any): void {
        if (typeof item !== "object") {
            return;
        }

        for (const [propName, propValue] of Object.entries(item)) {
            if (propValue && typeof propValue === "object") {
                if ("$ref" in propValue) {
                    item[propName] = {
                        $ref: (propValue as any)["$ref"],
                    };
                } else {
                    Spec.removeIfRef(propValue);
                }
            }
        }
    }

    private static normalizeSpec(openAPISpec: object): NormalizedSpec {
        try {
            const log = getStatusLog();
            log?.start("normalizing OpenAPI spec");

            const normalized: NormalizedSpec = transformOpenAPIExpression.evaluate(openAPISpec);
            Spec.removeIfRef(normalized);

            log?.succeed("OpenAPI spec normalized");
            debug("normalized spec: %O", normalized);

            objectEntries(normalized.paths).forEach(([path, ops]) =>
                log?.info(`Path found: ${path} (methods: ${Object.keys(ops).join(", ")})`),
            );

            return normalized;
        } catch (err) {
            throw new VError(
                {
                    name: "TransformationError",
                    info: err,
                    cause: new Error(err.message),
                },
                "Error while transforming OpenAPI spec with JSONata. This usually happens, when the spec is invalid. You might get more details on the cause, when not skipping validation.",
            );
        }
    }

    public static async validateSpec(spec: any): Promise<void> {
        const log = getStatusLog();
        log?.start("validating OpenAPI/Swagger spec");

        debug("Validating %O", spec);

        delete spec["__meta"];

        if ("swagger" in spec) {
            try {
                await SwaggerParser.validate(spec, {});
            } catch (err) {
                console.log(err);
                throw new VError(
                    {
                        cause: err,
                    },
                    `Swagger spec is not valid: ${err.name}`,
                );
            }
        } else {
            const result = new OpenAPISchemaValidator({ version: 3 }).validate(spec);

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

    private static runInContext(options: SpecOptions, specFactory: () => Promise<Spec>): (specRunnable: SpecRunnable) => void {
        return (specRunnable) => {
            const { statusLog, throwErrors } = options;

            const fail = (error: Error): void => {
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
                    fail(error);
                }
            });
        };
    }

    public static fromFiles(namespace: string, paths: string[], options: SpecOptions = {}): (specRunnable: SpecRunnable) => void {
        return Spec.runInContext(options, async () => {
            let mergedSpec = {};

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

            return new Spec(namespace, mergedSpec, options);
        });
    }

    public getClient(opts?: ExportOptions): string {
        return this.exporter.exportClient(this.namespace, opts);
    }

    public getRequestMockingFactory(mainFileImport: string): string {
        return this.exporter.exportRequestMockingFactory(this.namespace, mainFileImport);
    }

    public writeClient(filename: string, opts?: ExportOptions): void {
        const log = getStatusLog();

        log?.start(`writing 'client' to "${filename}"`);
        jp.write(filename, this.getClient(opts));
        log?.succeed(`'client' written to "${filename}"`);
    }

    public writeRequestMockingFactory(filename: string): void {
        const log = getStatusLog();

        const mocksFilename = getSubFileName(filename, ".mocks.ts");
        const mainFileImport = path.basename(path.relative(mocksFilename, filename), ".ts");

        log?.start(`writing 'request mocking factory' to "${mocksFilename}"`);
        jp.write(mocksFilename, this.getRequestMockingFactory(mainFileImport));
        log?.succeed(`'request mocking factory' written to "${mocksFilename}"`);
    }

    public updateSpec(spec: NormalizedSpec): void {
        this._normalized = spec;
        this.exporter.updateSpec(spec);
    }

    public get normalized(): NormalizedSpec {
        return this._normalized;
    }
}
