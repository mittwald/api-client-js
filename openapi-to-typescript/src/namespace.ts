import { JSONSchema } from "json-schema-typed";
import { OpenAPIV3 } from "openapi-types";
import { transformNamespaceName } from "./transform";

export type TypeValueDefinition = JSONSchema | OpenAPIV3.ReferenceObject;
export interface TypeDefinition {
    [name: string]: TypeValueDefinition;
}

export interface Namespace {
    namespace: string;
    subNamespaces: Namespace[];
    types: TypeDefinition;
}

export const renderNamespace = (name: string, content: string = ""): string => `namespace ${transformNamespaceName(name)} {
    ${content}
}`;
