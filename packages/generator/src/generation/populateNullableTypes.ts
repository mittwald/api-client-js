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
    const { nullable: ignoredNullable, ...schemaWithoutNullable } = schema;
    return {
      anyOf: [
        schemaWithoutNullable as OpenAPIV3.SchemaObject,
        { type: "null" } as unknown as OpenAPIV3.SchemaObject,
      ],
    };
  }

  return schema;
}

export function populateNullableTypesForRequestBody(
  requestBody: OpenAPIV3.ReferenceObject | OpenAPIV3.RequestBodyObject,
): OpenAPIV3.ReferenceObject | OpenAPIV3.RequestBodyObject {
  if (!requestBody || "$ref" in requestBody) {
    return requestBody;
  }
  for (const mediaType in requestBody.content) {
    const mediaTypeObject = requestBody.content[mediaType];
    if (mediaTypeObject?.schema) {
      mediaTypeObject.schema = populateNullableTypes(mediaTypeObject.schema);
    }
  }
  return requestBody;
}

export function populateNullableTypesForResponse(
  response: OpenAPIV3.ReferenceObject | OpenAPIV3.ResponseObject,
): OpenAPIV3.ReferenceObject | OpenAPIV3.ResponseObject {
  if (!response || "$ref" in response) {
    return response;
  }
  if (response.content) {
    for (const mediaType in response.content) {
      const mediaTypeObject = response.content[mediaType];
      if (mediaTypeObject?.schema) {
        mediaTypeObject.schema = populateNullableTypes(mediaTypeObject.schema);
      }
    }
  }
  return response;
}

export function populateNullableTypesForPathItem(
  pathItem: OpenAPIV3.ReferenceObject | OpenAPIV3.PathItemObject,
): OpenAPIV3.ReferenceObject | OpenAPIV3.PathItemObject {
  if (!pathItem || "$ref" in pathItem) {
    return pathItem;
  }

  for (const httpMethod of Object.values(OpenAPIV3.HttpMethods)) {
    const operation = pathItem[httpMethod];

    if (!operation) {
      continue;
    }

    if (operation.parameters) {
      operation.parameters.forEach((param) => {
        if (param && !("$ref" in param) && param.schema) {
          param.schema = populateNullableTypes(param.schema);
        }
      });
    }

    if (operation.requestBody) {
      operation.requestBody = populateNullableTypesForRequestBody(
        operation.requestBody,
      );
    }

    if (operation.responses) {
      for (const statusCode in operation.responses) {
        const response = operation.responses[statusCode];
        if (response) {
          operation.responses[statusCode] =
            populateNullableTypesForResponse(response);
        }
      }
    }
  }

  return pathItem;
}
