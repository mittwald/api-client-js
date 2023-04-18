import { join } from "path";
import { readFileSync } from "fs";
import ejs, { Options, TemplateFunction } from "ejs";
import { NormalizedSpec } from "./NormalizedSpec.js";
import { viewHelpersFactory } from "./viewHelpers.js";
import prettier from "prettier";
import { getStatusLog } from "./statusLog.js";
import { wrapError } from "@mittwald/awesome-node-utils/error/wrapError.js";
import * as url from "url";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

export interface ExportOptions {
  reactHooks?: boolean;
  optionalHeaders?: string[];
}

const fileHeader = `/* eslint-disable */
/* prettier-ignore */

/**
* This file is auto-generated with openapi2ts (@mittwald/openapi-to-typescript)
*/

`;

export class SpecExporter {
  private spec: NormalizedSpec;

  public constructor(spec: NormalizedSpec) {
    this.spec = spec;
  }

  public updateSpec(spec: NormalizedSpec): void {
    this.spec = spec;
  }

  private static compileTemplate(
    templateFileName: string,
    options: Options = {},
  ): TemplateFunction {
    const templateFilename = join(
      dirname,
      `../resources/templates/${templateFileName}`,
    );
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
    const result = this.export(
      namespace,
      "client/main.ejs",
      { reactHooks: opts?.reactHooks ?? false },
      opts,
    );
    jobLog?.succeed("'client' successfully rendered");
    return result;
  }

  public exportClientV2(namespace: string, opts?: ExportOptions): string {
    const jobLog = getStatusLog();
    jobLog?.start("rendering 'client'");
    const result = this.export(namespace, "client/client.ejs", {}, opts);
    jobLog?.succeed("'client' successfully rendered");
    return result;
  }

  public exportTypesV2(namespace: string, opts?: ExportOptions): string {
    const jobLog = getStatusLog();
    jobLog?.start("rendering 'types'");
    const result = this.export(namespace, "client/types.ejs", {}, opts);
    jobLog?.succeed("'types' successfully rendered");
    return result;
  }

  public exportOperationsV2(namespace: string, opts?: ExportOptions): string {
    const jobLog = getStatusLog();
    jobLog?.start("rendering 'operations'");
    const result = this.export(namespace, "client/operations.ejs", {}, opts);
    jobLog?.succeed("'operations' successfully rendered");
    return result;
  }

  public exportRequestMockingFactory(
    namespace: string,
    mainFileImport: string,
    opts?: ExportOptions,
  ): string {
    const jobLog = getStatusLog();
    jobLog?.start("rendering 'request mocking factory'");
    const result = this.export(
      namespace,
      "request_mock/main.ejs",
      { mainFileImport },
      opts,
    );
    jobLog?.succeed("'request mocking factory' successfully rendered");
    return result;
  }

  private export(
    namespace: string,
    filename: string,
    variables: Record<string, string | boolean>,
    opts?: ExportOptions,
  ): string {
    const jobLog = getStatusLog();
    const renderTemplate = SpecExporter.compileTemplate(filename);

    const result = wrapError(
      () =>
        renderTemplate({
          ...this.spec,
          ...viewHelpersFactory(namespace, {
            optionalHeaders: opts?.optionalHeaders,
          }),
          ...variables,
        }),
      "TemplateError",
      "Failed while rendering the template",
    ) as string;

    jobLog?.update("formatting output code");

    return wrapError(
      () =>
        fileHeader +
        prettier.format(result, {
          parser: "typescript",
          plugins: [],
        }),
      "FormattingFailed",
      "Failed to format generated code with Prettier. This is a bug. Call a dev!",
    ) as string;
  }
}
