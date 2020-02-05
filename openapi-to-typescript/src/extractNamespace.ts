import { OpenAPIV3 } from "openapi-types";
import { Namespace } from "./namespace";
import { transformNamespaceName } from "./transform";
import { makeResolveReference } from "./makeResolveReference";
import Document = OpenAPIV3.Document;
import { walkNamespace } from "./walkNamespace";

export function extractNamespace(namespaceName: string, spec: Document): Namespace {
    const resolveNamespace = makeResolveReference(spec);
    const rootNamespace: Namespace = {
        namespace: transformNamespaceName(namespaceName),
        subNamespaces: [],
        types: {},
    };

    if (spec.components) {
        walkNamespace(rootNamespace, "Components", spec.components, resolveNamespace);
    }

    walkNamespace(rootNamespace, "Paths", spec.paths, resolveNamespace);

    return rootNamespace;
}
