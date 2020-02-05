import { transformNamespaceName } from "./transform";
import { objectEntries } from "@mittwald/awesome-node-utils/object/entries";

declare namespace Foo {
    type asd = {
        hello: string;
    };
}

export const referenceNameToInterfaceName = (refName: string, rootNamespaceName: string = ""): string => {
    let resolvedPaths = refName.substr(1, refName.length).split("/");

    if (rootNamespaceName) {
        resolvedPaths.unshift(rootNamespaceName);
    }

    // param reference musst be referenced within an interface
    const additionalPaths: string[] = [];
    if (resolvedPaths[resolvedPaths.length - 2].toLowerCase() === "parameters") {
        const refObjectName = resolvedPaths[resolvedPaths.length - 1];
        resolvedPaths = resolvedPaths.slice(0, resolvedPaths.length - 2);
        additionalPaths.push(`${transformNamespaceName("parameters")}["${refObjectName}"]`);
    }

    return resolvedPaths
        .map((s) => transformNamespaceName(s))
        .concat(additionalPaths)
        .filter((s) => s)
        .join(".");
};

export const replaceRef = (object: any, onReplaceRef: (ref: string) => any): any => {
    for (const [typeName, typeValue] of objectEntries(object)) {
        if (String(typeName) === "$ref") {
            object = onReplaceRef(typeValue);
        }

        if (typeof typeValue === "object") {
            object[typeName] = replaceRef(typeValue, onReplaceRef);
        }
    }

    return object;
};
