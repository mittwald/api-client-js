import { OpenAPIV3 } from "openapi-types";
import Document = OpenAPIV3.Document;
import dotProp from "dot-prop";

export type ResolveReference = <T>(refName: string) => NonNullable<T>;

export const makeResolveReference = (document: Document): ResolveReference => (refName) => {
    if (!refName.startsWith("#/")) {
        return undefined;
    }

    const dottedReferencePath = refName
        .substr(2)
        .split("/")
        .join(".");

    const result = dotProp.get(document, dottedReferencePath);

    if (!result) {
        throw new Error(`Could not resolve reference ${refName}`);
    }

    return result as any;
};
