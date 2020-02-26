import { schemaToTypeTS } from "@mittwald/awesome-node-utils/mapping/schemaToTs";
import { Schema } from "@mittwald/awesome-node-utils/types/schema";
import { camelCase, pascalCase } from "@mittwald/awesome-node-utils/text/formatter";
import { objectEntries } from "@mittwald/awesome-node-utils/object/entries";

const namespaceNameSeparator = "_";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const viewHelpersFactory = (namespace: string) => {
    function transformNamespaceName(name: string): string {
        const snakedName = name.replace(/[^a-zA-Z0-9_]/gm, namespaceNameSeparator);
        const pascalCased = snakedName
            .split(namespaceNameSeparator)
            .map(pascalCase)
            .filter((s) => s.trim() !== "")
            .join(namespaceNameSeparator);

        return /^\d/.test(pascalCased) ? "$" + pascalCased : pascalCased;
    }

    function replaceRefsTypeNames(rootNamespace: string, ts: string): string {
        return ts.replace(/"(#.+?)"/gm, (_, match) => {
            return `${rootNamespace}.${match
                .substring(2)
                .split("/")
                .map(transformNamespaceName)
                .join(".")}`;
        });
    }

    function replaceRefWithConst(schema: any): any {
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
    }

    function formatTs(namespace: string, schema: Schema): string {
        const withConsts = replaceRefWithConst(schema);
        const ts = schemaToTypeTS(withConsts);
        return replaceRefsTypeNames(namespace, ts);
    }

    function tsName(name: string): string {
        const snakedName = name.replace(/[^a-zA-Z0-9_]/gm, namespaceNameSeparator);
        const pascalCased = snakedName
            .split(namespaceNameSeparator)
            .map(pascalCase)
            .filter((s) => s.trim() !== "")
            .join(namespaceNameSeparator);

        return /^\d/.test(pascalCased) ? "$" + pascalCased : pascalCased;
    }

    function joinNamespace(...args: string[]): string {
        return args.map(transformNamespaceName).join(".");
    }

    const rootNamespace = transformNamespaceName(namespace);

    return {
        camelCase,
        pascalCase,
        rootNamespace,
        joinNamespace,
        transformNamespaceName,
        tsName,
        formatTs,
        replaceRefsTypeNames,
        replaceRefWithConst,
    };
};
