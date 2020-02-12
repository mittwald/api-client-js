import { Spec } from "../Spec";
import { join } from "path";
import { readFileSync, writeFileSync } from "fs";
import ejs from "ejs";
import { schemaToTypeTS } from "@mittwald/awesome-node-utils/mapping/schemaToTs";
import { objectEntries } from "@mittwald/awesome-node-utils/object/entries";
import prettier from "prettier";
import { pascalCase } from "@mittwald/awesome-node-utils/text/formatter";

const NAMESPACE_NAME_SEPARATOR = ".";

const transformNamespaceName = (name: string): string => {
    const snakedName = name.replace(/[^a-zA-Z0-9_]/gm, NAMESPACE_NAME_SEPARATOR);
    const pascalCased = snakedName
        .split(NAMESPACE_NAME_SEPARATOR)
        .map(pascalCase)
        .filter((s) => s.trim() !== "")
        .join(NAMESPACE_NAME_SEPARATOR);
    return /^\d/.test(pascalCased) ? "$" + pascalCased : pascalCased;
};

const replaceRefsTypeNames = (rootNamespace: string, ts: string): string =>
    ts.replace(/"(#.+?)"/gm, (_, match) => {
        return `${rootNamespace}.${match
            .substring(2)
            .replace(/\//g, ".")
            .split(".")
            .map(pascalCase)
            .join(".")}`;
    });

const replaceRefWithConst = (schema: any): any => {
    if (typeof schema === "object") {
        if ("$ref" in schema) {
            return {
                const: schema.$ref,
            };
        } else {
            for (const [key, value] of objectEntries(schema)) {
                schema[key] = replaceRefWithConst(value);
            }
        }
    }
    return schema;
};

const templateFilename = join(process.cwd(), "resources/templates/namespaced-types.ejs");
const spec = Spec.fromYamlFile(join(process.cwd(), "resources/examples/complex.yaml"));
const templateContent = readFileSync(templateFilename, "utf8");

const template = ejs.compile(templateContent, {
    filename: templateFilename,
});

const rendered = template({
    ...spec.intermediateFormat,
    formatTs: (rootNamespace: string, schema: any) => {
        const withConsts = replaceRefWithConst(schema);
        const ts = schemaToTypeTS(withConsts);
        return replaceRefsTypeNames(rootNamespace, ts);
    },
    tsName: transformNamespaceName,
    rootNamespace: "API",
});

const pretty = prettier.format(rendered, {
    parser: "typescript",
});

writeFileSync(join(process.cwd(), "resources/build/types.ts"), pretty, { encoding: "utf8" });
