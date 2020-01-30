import { JSONSchema } from "json-schema-typed";
import { OpenAPIV3 } from "openapi-types";

export type TypeDefinition = JSONSchema | OpenAPIV3.ReferenceObject;

export interface Namespace {
    namespace: string;
    subNamespaces: Namespace[];
    types: {
        [name: string]: TypeDefinition;
    };
}
