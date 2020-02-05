import { Namespace, renderNamespace } from "./namespace";
import { transformNamespaceName } from "./transform";
import { schemaToTypeTS } from "@mittwald/awesome-node-utils/mapping/schemaToTs";
import { objectEntries } from "@mittwald/awesome-node-utils/object/entries";
import prettier from "prettier";
import { replaceSchemaReferencesWithPlaceholder } from "./makeResolveReference";

const transformIncompleteTypes = (name: string, types: object): object => {
    const containsTypes = objectEntries(types).some(([typeName, typeObject]) => "properties" in typeObject || typeName === "allOf");
    if (!containsTypes) {
        types = {
            [name]: {
                type: "object",
                properties: types,
            },
        };
    }

    return types;
};

export const renderInterfaceOrType = (rootNamespace: Namespace, name: string, types: object): string => {
    const { replacedTypes, restoreResolvedReferences } = replaceSchemaReferencesWithPlaceholder(rootNamespace.namespace, types);
    types = transformIncompleteTypes(name, replacedTypes);

    let result = "";
    for (const [typeName, typeObject] of objectEntries(types)) {
        let renderedInterface = "";

        if (typeName === "allOf") {
            renderedInterface = `type ${transformNamespaceName(String(name))} = ${schemaToTypeTS({
                allOf: typeObject,
            })};`;
        } else {
            renderedInterface = `interface ${transformNamespaceName(String(typeName))} ${schemaToTypeTS(typeObject)};`;
        }

        result = result.concat(restoreResolvedReferences(renderedInterface));
    }

    return result;
};

export function namespaceToTypeScript(
    namespace: Namespace,
    rootNamespace: Namespace = namespace,
    renderedTypescript: string = "",
    skipRenderNamespace: boolean = false,
): string {
    let subRenderedNamespace = "";
    let isLastNamespaceWithOnlyTypes = false;

    for (const index in objectEntries(namespace.subNamespaces)) {
        const subNamespace = namespace.subNamespaces[index];
        isLastNamespaceWithOnlyTypes =
            subNamespace.subNamespaces.length === 0 &&
            Object.keys(subNamespace.types).length >= 1 &&
            !objectEntries(subNamespace.types).some(([, object]) => "properties" in object);
        subRenderedNamespace = namespaceToTypeScript(subNamespace, rootNamespace, subRenderedNamespace, isLastNamespaceWithOnlyTypes);
    }

    if (Object.keys(namespace.types).length >= 1) {
        subRenderedNamespace = subRenderedNamespace.concat(renderInterfaceOrType(rootNamespace, namespace.namespace, namespace.types));
    }

    if (skipRenderNamespace) {
        return renderedTypescript.concat(subRenderedNamespace);
    }

    renderedTypescript = renderedTypescript.concat(renderNamespace(namespace.namespace, subRenderedNamespace));

    // if we walked through the hole document
    // insert a declare and check the returned typescript
    if (namespace.namespace === rootNamespace.namespace) {
        renderedTypescript = prettier.format(`declare ${renderedTypescript}`, {
            parser: "typescript",
        });
    }

    return renderedTypescript;
}
