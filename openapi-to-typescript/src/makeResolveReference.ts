import { OpenAPIV3 } from "openapi-types";
import Document = OpenAPIV3.Document;
import dotProp from "dot-prop";
import { Namespace } from "./namespace";
import { referenceNameToInterfaceName, replaceRef } from "./replaceReferences";
import uuid from "uuid";

export type ResolveReference = (refName: string) => any;

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

    return result;
};

export interface ReferenceHolder {
    [refID: string]: string;
}

export interface ReferenceResolveObject {
    replacedTypes: Object;
    restoreResolvedReferences: (renderedInterface: string) => string;
}

export const replaceSchemaReferencesWithPlaceholder = (rootNamespaceName: string, types: Object): ReferenceResolveObject => {
    const refHolder: ReferenceHolder = {};

    types = replaceRef(types, (refName) => {
        const refID = uuid.v4();
        refHolder[refID] = referenceNameToInterfaceName(refName, rootNamespaceName);
        return {
            const: refID,
        };
    });

    const restoreResolvedReferences = (renderedInterface: string): string => {
        for (const refUID in refHolder) {
            const refIDRegex = new RegExp(`\"${refUID}\"|\'${refUID}\'`, "gm");
            renderedInterface = renderedInterface.replace(refIDRegex, refHolder[refUID]);
        }
        return renderedInterface;
    };

    return {
        replacedTypes: types,
        restoreResolvedReferences,
    };
};
