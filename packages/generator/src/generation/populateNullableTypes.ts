import { OpenAPIV3 } from "openapi-types";

export function populateNullableTypes(
  schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
): OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject {
  if (!schema || "$ref" in schema) {
    return schema;
  }

  if (schema.properties) {
    for (const key in schema.properties) {
      schema.properties[key] = populateNullableTypes(schema.properties[key]);
    }
  }

  if ("items" in schema && schema.items) {
    schema.items = populateNullableTypes(schema.items);
  }

  const compositionKeys = ["allOf", "anyOf", "oneOf"] as const;

  compositionKeys.forEach((key) => {
    const entries = schema[key];
    if (Array.isArray(entries)) {
      schema[key] = entries.map(populateNullableTypes);
    }
  });

  if (schema.nullable) {
    return {
      anyOf: [schema, { type: "null" } as unknown as OpenAPIV3.SchemaObject],
    };
  }

  return schema;
}
