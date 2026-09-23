import { OpenAPIV3 } from "openapi-types";
import { OpenApiSpec } from "./OpenApiSpec.js";

const documentWithSchemas = (
  schemas: Record<string, unknown>,
): OpenAPIV3.Document =>
  ({
    openapi: "3.0.3",
    info: { title: "Test", version: "1.0.0" },
    paths: {},
    components: { schemas },
  }) as unknown as OpenAPIV3.Document;

test.each([
  ["boolean", { type: "boolean", const: false }],
  ["string", { type: "string", const: "foo" }],
  ["number", { type: "number", const: 42 }],
  ["integer", { type: "integer", const: 0 }],
])("a %s schema using the const keyword validates", async (_name, schema) => {
  const spec = await OpenApiSpec.parse(documentWithSchemas({ Tagged: schema }));

  expect(spec.document.components?.schemas?.Tagged).toEqual(schema);
});

test("a discriminated union tagged with const validates", async () => {
  const schemas = {
    ProgressEvent: {
      type: "object",
      required: ["event", "done"],
      properties: {
        event: { type: "string", const: "progress" },
        done: { type: "boolean", const: false },
      },
    },
    DoneEvent: {
      type: "object",
      required: ["event", "done"],
      properties: {
        event: { type: "string", const: "done" },
        done: { type: "boolean", const: true },
      },
    },
    StreamEvent: {
      oneOf: [
        { $ref: "#/components/schemas/ProgressEvent" },
        { $ref: "#/components/schemas/DoneEvent" },
      ],
    },
  };

  const spec = await OpenApiSpec.parse(documentWithSchemas(schemas));

  expect(spec.document.components?.schemas).toEqual(schemas);
});

test("unknown schema keywords are still rejected", async () => {
  await expect(
    OpenApiSpec.parse(
      documentWithSchemas({
        Broken: { type: "string", definitelyNotAKeyword: true },
      }),
    ),
  ).rejects.toThrow(/Failed parsing OpenAPISpec/);
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const buildDoc = (overrides: Record<string, any> = {}): any => ({
  openapi: "3.0.3",
  info: { title: "Test API", version: "1.0.0" },
  paths: {},
  ...overrides,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const docWithSchema = (schema: any) =>
  buildDoc({
    components: {
      schemas: {
        Conversation: schema,
      },
    },
  });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const docWithOperation = (operation: any) =>
  buildDoc({
    paths: {
      "/conversations": {
        get: {
          operationId: "conversation-list",
          responses: { "200": { description: "OK" } },
          ...operation,
        },
      },
    },
  });

test("a deprecated schema property does not invalidate the spec", async () => {
  const doc = docWithSchema({
    type: "object",
    properties: {
      lastMessageAt: {
        type: "string",
        format: "date-time",
        deprecated: true,
      },
    },
  });

  await expect(OpenApiSpec.parse(doc)).resolves.toBeInstanceOf(OpenApiSpec);
});

test("a deprecated schema object does not invalidate the spec", async () => {
  const doc = docWithSchema({
    type: "object",
    deprecated: true,
    properties: { id: { type: "string" } },
  });

  await expect(OpenApiSpec.parse(doc)).resolves.toBeInstanceOf(OpenApiSpec);
});

test("a deprecated operation does not invalidate the spec", async () => {
  const doc = docWithOperation({ deprecated: true });

  await expect(OpenApiSpec.parse(doc)).resolves.toBeInstanceOf(OpenApiSpec);
});

test("a deprecated parameter does not invalidate the spec", async () => {
  const doc = docWithOperation({
    parameters: [
      {
        name: "legacyFilter",
        in: "query",
        deprecated: true,
        schema: { type: "string" },
      },
    ],
  });

  await expect(OpenApiSpec.parse(doc)).resolves.toBeInstanceOf(OpenApiSpec);
});

test("a deprecated response header does not invalidate the spec", async () => {
  const doc = docWithOperation({
    responses: {
      "200": {
        description: "OK",
        headers: {
          "X-Legacy": { deprecated: true, schema: { type: "string" } },
        },
      },
    },
  });

  await expect(OpenApiSpec.parse(doc)).resolves.toBeInstanceOf(OpenApiSpec);
});

test("unknown keywords are still rejected", async () => {
  const doc = docWithOperation({ bogusUnknownKey: true });

  await expect(OpenApiSpec.parse(doc)).rejects.toThrow(/OpenAPI is invalid/);
});
