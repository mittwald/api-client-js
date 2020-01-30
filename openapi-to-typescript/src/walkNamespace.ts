import { OpenAPIV3 } from "openapi-types";
import { Namespace, TypeDefinition } from "./Namespace";
import { transformNamespaceName } from "./transform";
import { objectEntries } from "@mittwald/awesome-node-utils/object/entries";
import debug from "./debug";
import { JSONSchema, JSONSchemaType } from "json-schema-typed";
import { ResolveReference } from "./makeResolveReference";
import { Optional } from "@mittwald/awesome-node-utils/optional/optional";

export function walkNamespace(parentNamespace: Namespace, name: string, subject: any, resolveNamespace: ResolveReference): void {
    const dbg = debug.extend(name);
    dbg("filling namespace");

    if (!(typeof subject === "object")) {
        dbg("subject is not an object -> skip");
        return;
    }

    const schema: JSONSchema | undefined = subject.schema;
    const type: JSONSchemaType | undefined = subject.type;

    if (schema) {
        dbg("subject contains schema -> setting type to schema");
        const typeDef = subject.schema;
        parentNamespace.types[name] = typeDef as TypeDefinition;
        return;
    }

    if (type) {
        dbg("subject contains type -> setting type to subject itself");
        parentNamespace.types[name] = subject as TypeDefinition;
        return;
    }

    if (name === "parameters" && Array.isArray(subject)) {
        const parameters = subject as Array<OpenAPIV3.ReferenceObject | OpenAPIV3.ParameterObject>;

        dbg("handling %s parameters -> doing params 'special-handling'", parentNamespace.namespace);

        for (const parameter of parameters) {
            let resolvedParameter = parameter;

            if ("$ref" in resolvedParameter) {
                const ref = resolvedParameter.$ref;
                const resolvedAny = resolveNamespace(ref);
                // todo: maybe check it
                resolvedParameter = resolvedAny as OpenAPIV3.ParameterObject;
                resolvedParameter.schema = {
                    $ref: ref,
                };
            }

            const typeName = transformNamespaceName(resolvedParameter.in);

            let targetType = new Optional(parentNamespace.types[typeName]).or({
                required: [],
                properties: {},
            });

            parentNamespace.types[typeName] = targetType;

            if (!resolvedParameter.name) {
                dbg("parameter: %o", resolvedParameter);
                throw new Error("Param properties should contain a 'name'");
            }

            if (resolvedParameter.schema && !("$ref" in targetType)) {
                const properties = targetType.properties || {};
                targetType.properties = properties;

                if (resolvedParameter.required) {
                    targetType.required?.push(resolvedParameter.name);
                }

                properties[resolvedParameter.name] = resolvedParameter.schema as JSONSchema;
            }
        }
    }

    const namespace: Namespace = {
        namespace: transformNamespaceName(name),
        subNamespaces: [],
        types: {},
    };

    if (Array.isArray(subject)) {
        for (const entry of subject) {
            if (typeof entry === "object") {
                const name = entry.name;
                if (!name) {
                    continue;
                }
                walkNamespace(namespace, String(name), entry, resolveNamespace);
            }
        }
    } else {
        for (const [key, value] of objectEntries(subject)) {
            walkNamespace(namespace, String(key), value, resolveNamespace);
        }
    }

    if (namespace.subNamespaces.length === 0 && Object.keys(namespace.types).length === 0) {
        return;
    }

    parentNamespace.subNamespaces.push(namespace);
}
