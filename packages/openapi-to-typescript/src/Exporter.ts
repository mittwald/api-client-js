import { join } from "path";
import { readFileSync } from "fs";
import ejs, { Options, TemplateFunction } from "ejs";
import { NormalizedSpec } from "./NormalizedSpec";
import { viewHelpersFactory } from "./viewHelpers";
import prettier from "prettier";
import { getStatusLog } from "./statusLog";
import { wrapError } from "@mittwald/awesome-node-utils/error/wrapError";

export class Exporter {
    private readonly normalized: NormalizedSpec;

    public constructor(normalized: NormalizedSpec) {
        this.normalized = normalized;
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

    public exportDescriptors(namespace: string, typesModule: string): string {
        const jobLog = getStatusLog();
        jobLog?.start("rendering templates for 'descriptors'");

        const result = this.export(namespace, "descriptor/main.ejs", { typesModule });
        jobLog?.succeed("'descriptors' successfully rendered");
        return result;
    }

    public exportTypes(namespace: string): string {
        const jobLog = getStatusLog();
        jobLog?.start("rendering template for 'types'");
        const result = this.export(namespace, "types/main.ejs");
        jobLog?.succeed("'types' successfully rendered");
        return result;
    }

    public exportClient(namespace: string, descriptorsModule: string): string {
        const jobLog = getStatusLog();
        jobLog?.start("rendering template for 'client'");
        const result = this.export(namespace, "client/main.ejs", { descriptorsModule });
        jobLog?.succeed("'client' successfully rendered");
        return result;
    }

    public exportReactHooks(namespace: string, clientModule: string): string {
        const jobLog = getStatusLog();
        jobLog?.start("rendering template for 'react-hooks'");
        const result = this.export(namespace, "react-hooks/main.ejs", { clientModule });
        jobLog?.succeed("'react-hooks' successfully rendered");
        return result;
    }

    public export(namespace: string, filename: string, variables: Record<string, string> = {}): string {
        const jobLog = getStatusLog();
        const renderTemplate = Exporter.compileTemplate(filename);

        const result = wrapError(
            () =>
                renderTemplate({
                    ...this.normalized,
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
