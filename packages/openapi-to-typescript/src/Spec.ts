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
        if (!options.skipValidation) {
            Spec.validateSpec(openAPISpec);
        } else {
            log?.warn("OpenAPI spec validation skipped!");
        }
        this.exporter = new Exporter(Spec.normalizeSpec(openAPISpec));
    }

    private static normalizeSpec(openAPISpec: object): NormalizedSpec {
        try {
            const log = getStatusLog();
            log?.start("normalizing OpenAPI spec");

            const normalized: NormalizedSpec = transformOpenAPIExpression.evaluate(openAPISpec);
            log?.succeed("OpenAPI spec normalized");

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
                "error while transforming OpenAPI spec with JSONata",
            );
        }
    }

    public static validateSpec(openAPISpec: object): void {
        const log = getStatusLog();
        log?.start("validating OpenAPI spec");

        debug("Validating %O", openAPISpec);
        const result = new OpenAPISchemaValidator({ version: 3 }).validate(openAPISpec as any);

        if (result.errors.length > 0) {
            throw new VError(
                {
                    cause: new Error(result.errors[0].message),
                    info: result.errors[0],
                },
                "OpenAPI spec is not valid",
            );
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
            let mergedOpenAPI = {};

            for (const path of paths) {
                const openAPI = await loadSpec(path);
                mergedOpenAPI = deepmerge(mergedOpenAPI, openAPI);
            }

            return new Spec(namespace, mergedOpenAPI, options);
        });
    }
    public getClient(reactHooks: boolean): string {
        return this.exporter.exportClient(this.namespace, reactHooks);
    }

    public writeClient(filename: string, reactHooks: boolean): void {
        const log = getStatusLog();

        log?.start(`writing 'client' to "${filename}"`);
        jp.write(filename, this.getClient(reactHooks));
        log?.succeed(`'client' written to "${filename}"`);
    }
}
