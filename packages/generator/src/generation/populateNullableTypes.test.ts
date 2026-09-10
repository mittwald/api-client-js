import { OpenAPIV3 } from "openapi-types";
import { populateNullableTypes } from "./populateNullableTypes.js";

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
      anyOf: [{ type: "string", nullable: true }, { type: "null" }],
    });
  });

  test("keep sibling keywords inside the anyOf branch", () => {
    expect(populate({ type: "string", nullable: true, maxLength: 5 })).toEqual({
      anyOf: [
        { type: "string", nullable: true, maxLength: 5 },
        { type: "null" },
      ],
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
      anyOf: [{ type: "string", nullable: true }, { type: "null" }],
    });
  });

  test("nullable array items are wrapped", () => {
    const result = populate({
      type: "array",
      items: { type: "string", nullable: true },
    });

    expect(result).toEqual({
      type: "array",
      items: { anyOf: [{ type: "string", nullable: true }, { type: "null" }] },
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
      anyOf: [{ type: "number", nullable: true }, { type: "null" }],
    });
  });

  test.each(["allOf", "anyOf", "oneOf"] as const)(
    "recurses into %s branches",
    (key) => {
      const result = populate({
        [key]: [{ type: "string", nullable: true }, { type: "number" }],
      });

      expect(result[key]).toEqual([
        { anyOf: [{ type: "string", nullable: true }, { type: "null" }] },
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
      anyOf: [{ type: "string", nullable: true }, { type: "null" }],
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
      anyOf: [{ type: "string", nullable: true }, { type: "null" }],
    });
  });

  /**
   * Because the wrapped branch keeps its `nullable: true`, applying the
   * function twice to the same object nests another `anyOf`. A schema visited n
   * times therefore compiles to n nested `| null` unions — which is why a
   * shared OpenAPI document must not be fed to two models.
   */
  test("compounds when applied twice to the same schema", () => {
    const schema = {
      type: "object",
      properties: { name: { type: "string", nullable: true } },
    } as OpenAPIV3.SchemaObject;

    populate(schema);
    populate(schema);

    expect(schema.properties?.name).toEqual({
      anyOf: [
        {
          anyOf: [{ type: "string", nullable: true }, { type: "null" }],
        },
        { type: "null" },
      ],
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
