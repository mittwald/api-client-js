import { transformOpenAPIExpression } from "./jsonata/transforms";
import { Exporter } from "./Exporter";
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

interface SpecOptions {
    statusLog?: StatusLog;
    throwErrors?: boolean;
    skipValidation?: boolean;
}

export type SpecRunnable = (spec: Spec) => void;
export type FileFormat = "yaml" | "json";

export class Spec {
    private readonly exporter: Exporter;
    public readonly namespace: string;
    private readonly options: SpecOptions;

    private constructor(namespace: string, openAPISpec: object, options: SpecOptions = {}) {
        const log = getStatusLog();
        this.options = options;
        log?.info(`used namespace: ${namespace}`);
        this.namespace = namespace;
        this.exporter = new Exporter(Spec.normalizeSpec(openAPISpec));
    }

    private static normalizeSpec(openAPISpec: object): NormalizedSpec {
        try {
            const log = getStatusLog();
            log?.start("normalizing OpenAPI spec");

            const normalized: NormalizedSpec = transformOpenAPIExpression.evaluate(openAPISpec);
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
                        .then((spec) => {
                            specRunnable(spec);
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
                mergedSpec = deepmerge(mergedSpec, openAPI);
            }

            if (!options.skipValidation) {
                await Spec.validateSpec(mergedSpec);
            } else {
                getStatusLog()?.warn("Spec validation skipped!");
            }

            return new Spec(namespace, mergedSpec, options);
        });
    }

    public getClient(reactHooks: boolean): string {
        return this.exporter.exportClient(this.namespace, reactHooks);
    }

    public getRequestMockingFactory(mainFileImport: string): string {
        return this.exporter.exportRequestMockingFactory(this.namespace, mainFileImport);
    }

    public writeClient(filename: string, reactHooks: boolean): void {
        const log = getStatusLog();

        log?.start(`writing 'client' to "${filename}"`);
        jp.write(filename, this.getClient(reactHooks));
        log?.succeed(`'client' written to "${filename}"`);
    }

    public writeRequestMockingFactory(filename: string): void {
        const log = getStatusLog();

        const mocksFilename = path.join(path.dirname(filename), path.basename(filename, ".ts") + ".mocks.ts");
        const mainFileImport = path.basename(path.relative(mocksFilename, filename), ".ts");

        log?.start(`writing 'request mocking factory' to "${mocksFilename}"`);
        jp.write(mocksFilename, this.getRequestMockingFactory(mainFileImport));
        log?.succeed(`'request mocking factory' written to "${mocksFilename}"`);
    }
}
