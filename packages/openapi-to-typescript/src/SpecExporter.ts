import { join } from "path";
import { readFileSync } from "fs";
import ejs, { Options, TemplateFunction } from "ejs";
import { NormalizedSpec } from "./NormalizedSpec";
import { viewHelpersFactory } from "./viewHelpers";
import prettier from "prettier";
import { getStatusLog } from "./statusLog";
import { wrapError } from "@mittwald/awesome-node-utils/error/wrapError";

export class SpecExporter {
    private readonly spec: NormalizedSpec;

    public constructor(spec: NormalizedSpec) {
        this.spec = spec;
    }

    private static compileTemplate(templateFileName: string, options: Options = {}): TemplateFunction {
        const templateFilename = join(__dirname, `../resources/templates/${templateFileName}`);
        const templateContent = readFileSync(templateFilename, "utf8");

        return ejs.compile(templateContent, {
            ...options,
            async: false,
            client: false,
            filename: templateFilename,
        });
    }

    public exportClient(namespace: string, reactHooks: boolean): string {
        const jobLog = getStatusLog();
        jobLog?.start("rendering 'client'");
        const result = this.export(namespace, "client/main.ejs", { reactHooks });
        jobLog?.succeed("'client' successfully rendered");
        return result;
    }

    public exportRequestMockingFactory(namespace: string, mainFileImport: string): string {
        const jobLog = getStatusLog();
        jobLog?.start("rendering 'request mocking factory'");
        const result = this.export(namespace, "request_mock/main.ejs", { mainFileImport });
        jobLog?.succeed("'request mocking factory' successfully rendered");
        return result;
    }

    public export(namespace: string, filename: string, variables: Record<string, string | boolean> = {}): string {
        const jobLog = getStatusLog();
        const renderTemplate = SpecExporter.compileTemplate(filename);

        const result = wrapError(
            () =>
                renderTemplate({
                    ...this.spec,
                    ...viewHelpersFactory(namespace),
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
