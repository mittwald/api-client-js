import { join } from "path";
import { readFileSync } from "fs";
import ejs, { Options, TemplateFunction } from "ejs";
import { NormalizedSpec } from "./NormalizedSpec.js";
import { viewHelpersFactory } from "./viewHelpers.js";
import prettier from "prettier";
import { getStatusLog } from "./statusLog.js";
import { wrapError } from "@mittwald/awesome-node-utils/error/wrapError.js";
import url, { URL } from "url";

export interface ExportOptions {
    reactHooks?: boolean;
    optionalHeaders?: string[];
}

export class SpecExporter {
    private spec: NormalizedSpec;

    public constructor(spec: NormalizedSpec) {
        this.spec = spec;
    }

    public updateSpec(spec: NormalizedSpec): void {
        this.spec = spec;
    }

    private static compileTemplate(templateFileName: string, options: Options = {}): TemplateFunction {
        const dirname = url.fileURLToPath(new URL(".", import.meta.url));
        const templateFilename = join(dirname, `../resources/templates/${templateFileName}`);
        const templateContent = readFileSync(templateFilename, "utf8");

        return ejs.compile(templateContent, {
            ...options,
            async: false,
            client: false,
            filename: templateFilename,
        });
    }

    public exportClient(namespace: string, opts?: ExportOptions): string {
        const jobLog = getStatusLog();
        jobLog?.start("rendering 'client'");
        const result = this.export(namespace, "client/main.ejs", { reactHooks: opts?.reactHooks ?? false }, opts);
        jobLog?.succeed("'client' successfully rendered");
        return result;
    }

    public exportRequestMockingFactory(namespace: string, mainFileImport: string, opts?: ExportOptions): string {
        const jobLog = getStatusLog();
        jobLog?.start("rendering 'request mocking factory'");
        const result = this.export(namespace, "request_mock/main.ejs", { mainFileImport }, opts);
        jobLog?.succeed("'request mocking factory' successfully rendered");
        return result;
    }

    private export(namespace: string, filename: string, variables: Record<string, string | boolean>, opts?: ExportOptions): string {
        const jobLog = getStatusLog();
        const renderTemplate = SpecExporter.compileTemplate(filename);

        const result = wrapError(
            () =>
                renderTemplate({
                    ...this.spec,
                    ...viewHelpersFactory(namespace, { optionalHeaders: opts?.optionalHeaders }),
                    ...variables,
                }),
            "TemplateError",
            "Failed while rendering the template",
        ) as string;

        jobLog?.update("formatting output code");

        return wrapError(
            () =>
                prettier.format(result, {
                    parser: "typescript",
                }),
            "FormattingFailed",
            "Failed to format generated code with Prettier. This is a bug. Call a dev!",
        ) as string;
    }
}
