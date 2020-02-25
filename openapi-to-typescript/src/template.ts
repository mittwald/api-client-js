import { join } from "path";
import { readFileSync } from "fs";
import ejs, { Options, TemplateFunction } from "ejs";
import { replaceRefsTypeNames, replaceRefWithConst } from "./references";
import { schemaToTypeTS } from "@mittwald/awesome-node-utils/mapping/schemaToTs";
import { makeNamespace, transformNamespaceName } from "./namespace";
import { IntermediateFormat } from "./IntermediateFormat";
import { Schema } from "@mittwald/awesome-node-utils/types/schema";
import { getDescriptorName } from "./descriptor";

export const prepareTemplate = (templateFileName: string, options: Options = {}): TemplateFunction => {
    const templateFilename = join(process.cwd(), `resources/templates/${templateFileName}`);
    const templateContent = readFileSync(templateFilename, "utf8");

    return ejs.compile(templateContent, {
        ...options,
        async: false,
        client: false,
        filename: templateFilename,
    });
};

const renderSchemaToTypeScript = (rootNamespace: string, schema: Schema): string => {
    const withConsts = replaceRefWithConst(schema);
    const ts = schemaToTypeTS(withConsts);
    return replaceRefsTypeNames(rootNamespace, ts);
};

export const renderIntermediaFormatToNamespaceTemplate = (intermediateFormat: IntermediateFormat, rootNamespaceName: string): string => {
    const renderTemplate = prepareTemplate("namespaced-types.ejs");

    return renderTemplate({
        ...intermediateFormat,
        formatTs: renderSchemaToTypeScript,
        tsName: transformNamespaceName,
        rootNamespace: transformNamespaceName(rootNamespaceName),
    });
};

export const renderIntermediaFormatToDescriptorTemplate = (intermediaFormat: IntermediateFormat, rootNamespaceName: string): string => {
    const renderTemplate = prepareTemplate("descriptor/descriptor.ejs");

    return renderTemplate({
        ...intermediaFormat,
        getDescriptorName,
        makeNamespace,
        rootNamespace: transformNamespaceName(rootNamespaceName),
    });
};
