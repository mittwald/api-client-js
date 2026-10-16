import { OpenAPIV3 } from "openapi-types";
import {
  populateNullableTypes,
  populateNullableTypesForPathItem,
  populateNullableTypesForRequestBody,
  populateNullableTypesForResponse,
} from "./populateNullableTypes.js";

const populate = (schema: unknown): OpenAPIV3.SchemaObject =>
  populateNullableTypes(
    schema as OpenAPIV3.SchemaObject,
  ) as OpenAPIV3.SchemaObject;

describe("non-nullable schemas", () => {
  test("are returned unchanged", () => {
    expect(populate({ type: "string" })).toEqual({ type: "string" });
  });

  test("are returned unchanged when nullable is false", () => {
    expect(populate({ type: "string", nullable: false })).toEqual({
      type: "string",
      nullable: false,
    });
  });
});

describe("nullable schemas", () => {
  test("are wrapped in an anyOf with a null branch", () => {
    expect(populate({ type: "string", nullable: true })).toEqual({
      anyOf: [{ type: "string" }, { type: "null" }],
    });
  });

  test("keep sibling keywords inside the anyOf branch", () => {
    expect(populate({ type: "string", nullable: true, maxLength: 5 })).toEqual({
      anyOf: [{ type: "string", maxLength: 5 }, { type: "null" }],
    });
  });
  test("move JSDoc annotations onto the anyOf wrapper", () => {
    expect(
      populate({
        type: "string",
        nullable: true,
        description: "Set to null to remove.",
        deprecated: true,
      }),
    ).toEqual({
      description: "Set to null to remove.",
      deprecated: true,
      anyOf: [{ type: "string" }, { type: "null" }],
    });
  });
});

describe("references", () => {
  test("are returned unchanged", () => {
    const ref = { $ref: "#/components/schemas/Project" };

    expect(populateNullableTypes(ref)).toBe(ref);
  });
});

describe("nested structures", () => {
  test("nullable object properties are wrapped", () => {
    const result = populate({
      type: "object",
      properties: {
        name: { type: "string" },
        description: { type: "string", nullable: true },
      },
    });

    expect(result.properties?.name).toEqual({ type: "string" });
    expect(result.properties?.description).toEqual({
      anyOf: [{ type: "string" }, { type: "null" }],
    });
  });

  test("nullable array items are wrapped", () => {
    const result = populate({
      type: "array",
      items: { type: "string", nullable: true },
    });

    expect(result).toEqual({
      type: "array",
      items: { anyOf: [{ type: "string" }, { type: "null" }] },
    });
  });

  test("recurses into deeply nested properties", () => {
    const result = populate({
      type: "object",
      properties: {
        outer: {
          type: "object",
          properties: { inner: { type: "number", nullable: true } },
        },
      },
    });

    const outer = result.properties?.outer as OpenAPIV3.SchemaObject;
    expect(outer.properties?.inner).toEqual({
      anyOf: [{ type: "number" }, { type: "null" }],
    });
  });

  test.each(["allOf", "anyOf", "oneOf"] as const)(
    "recurses into %s branches",
    (key) => {
      const result = populate({
        [key]: [{ type: "string", nullable: true }, { type: "number" }],
      });

      expect(result[key]).toEqual([
        { anyOf: [{ type: "string" }, { type: "null" }] },
        { type: "number" },
      ]);
    },
  );

  test("leaves references inside properties untouched", () => {
    const result = populate({
      type: "object",
      properties: { project: { $ref: "#/components/schemas/Project" } },
    });

    expect(result.properties?.project).toEqual({
      $ref: "#/components/schemas/Project",
    });
  });

  test("wraps a nullable schema that also has nullable properties", () => {
    const result = populate({
      type: "object",
      nullable: true,
      properties: { name: { type: "string", nullable: true } },
    });

    const branch = result.anyOf?.[0] as OpenAPIV3.SchemaObject;
    expect(result.anyOf?.[1]).toEqual({ type: "null" });
    expect(branch.properties?.name).toEqual({
      anyOf: [{ type: "string" }, { type: "null" }],
    });
  });
});

describe("mutation of the input", () => {
  /**
   * The function rewrites `properties`, `items` and the composition keys on the
   * schema it was given rather than on a copy. Callers that keep the original
   * document around — or that build a second model from it — see the rewritten
   * version.
   */
  test("rewrites nested properties on the given schema, not a copy", () => {
    const schema = {
      type: "object",
      properties: { name: { type: "string", nullable: true } },
    } as OpenAPIV3.SchemaObject;

    populate(schema);

    expect(schema.properties?.name).toEqual({
      anyOf: [{ type: "string" }, { type: "null" }],
    });
  });

  /**
   * The wrapped branch loses its `nullable: true`, so a second pass finds
   * nothing left to wrap. This matters because the document is rewritten in
   * place, so visiting a schema again must not stack another `| null` union.
   */
  test("is idempotent when applied twice to the same schema", () => {
    const schema = {
      type: "object",
      properties: { name: { type: "string", nullable: true } },
    } as OpenAPIV3.SchemaObject;

    populate(schema);
    populate(schema);

    expect(schema.properties?.name).toEqual({
      anyOf: [{ type: "string" }, { type: "null" }],
    });
  });

  test("is idempotent for a schema with no nullable members", () => {
    const schema = {
      type: "object",
      properties: { name: { type: "string" } },
    } as OpenAPIV3.SchemaObject;

    populate(schema);
    populate(schema);

    expect(schema.properties?.name).toEqual({ type: "string" });
  });
});

describe("operation-level schemas", () => {
  const nullableString = (): OpenAPIV3.SchemaObject => ({
    type: "string",
    nullable: true,
  });
  const wrapped = { anyOf: [{ type: "string" }, { type: "null" }] };

  test("request body schemas are wrapped per media type", () => {
    const requestBody = populateNullableTypesForRequestBody({
      content: {
        "application/json": { schema: nullableString() },
        "text/plain": {},
      },
    }) as OpenAPIV3.RequestBodyObject;

    expect(requestBody.content["application/json"]?.schema).toEqual(wrapped);
    expect(requestBody.content["text/plain"]).toEqual({});
  });

  test("response schemas are wrapped, responses without content are kept", () => {
    const response = populateNullableTypesForResponse({
      description: "ok",
      content: { "application/json": { schema: nullableString() } },
    }) as OpenAPIV3.ResponseObject;
    const empty = { description: "no content" };

    expect(response.content?.["application/json"]?.schema).toEqual(wrapped);
    expect(populateNullableTypesForResponse(empty)).toEqual(empty);
  });

  test("references to request bodies and responses are returned unchanged", () => {
    const ref = { $ref: "#/components/requestBodies/Project" };

    expect(populateNullableTypesForRequestBody(ref)).toBe(ref);
    expect(populateNullableTypesForResponse(ref)).toBe(ref);
  });

  test("path items are covered across parameters, bodies and responses", () => {
    const pathItem = populateNullableTypesForPathItem({
      patch: {
        parameters: [
          { name: "filter", in: "query", schema: nullableString() },
          { $ref: "#/components/parameters/Page" },
        ],
        requestBody: {
          content: { "application/json": { schema: nullableString() } },
        },
        responses: {
          "200": {
            description: "ok",
            content: { "application/json": { schema: nullableString() } },
          },
        },
      },
    });
    const operation = pathItem.patch as OpenAPIV3.OperationObject;
    const [parameter, parameterRef] = operation.parameters ?? [];
    const requestBody = operation.requestBody as OpenAPIV3.RequestBodyObject;
    const response = operation.responses["200"] as OpenAPIV3.ResponseObject;

    expect((parameter as OpenAPIV3.ParameterObject).schema).toEqual(wrapped);
    expect(parameterRef).toEqual({ $ref: "#/components/parameters/Page" });
    expect(requestBody.content["application/json"]?.schema).toEqual(wrapped);
    expect(response.content?.["application/json"]?.schema).toEqual(wrapped);
  });
});
