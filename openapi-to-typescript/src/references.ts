import { objectEntries } from "@mittwald/awesome-node-utils/object/entries";
import { transformNamespaceName } from "./namespace";

export const replaceRefsTypeNames = (rootNamespace: string, ts: string): string =>
    ts.replace(/"(#.+?)"/gm, (_, match) => {
        return `${rootNamespace}.${match
            .substring(2)
            .split("/")
            .map(transformNamespaceName)
            .join(".")}`;
    });

export const replaceRefWithConst = (schema: any): any => {
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
