import { OpenApiSpec } from "./OpenApiSpec.js";

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

test("a deprecated annotation next to a $ref does not invalidate the spec", async () => {
  const doc = buildDoc({
    components: {
      schemas: {
        Conversation: {
          type: "object",
          properties: {
            lastMessageAt: {
              $ref: "#/components/schemas/DateTime",
              deprecated: true,
            },
          },
        },
        DateTime: { type: "string", format: "date-time" },
      },
    },
  });

  await expect(OpenApiSpec.parse(doc)).resolves.toBeInstanceOf(OpenApiSpec);
});

test("unknown keywords are still rejected", async () => {
  const doc = docWithOperation({ bogusUnknownKey: true });

  await expect(OpenApiSpec.parse(doc)).rejects.toThrow(/OpenAPI is invalid/);
});
