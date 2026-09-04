import { OpenAPIV3 } from "openapi-types";
import { CodeGenerationModel } from "../model/CodeGenerationModel.js";

const doc: OpenAPIV3.Document = {
  openapi: "3.0.0",
  info: { title: "test", version: "1" },
  components: {
    schemas: {
      Shared: {
        type: "object",
        required: ["createdAt"],
        properties: {
          createdAt: { type: "string", format: "date-time" },
        },
      },
      SharedWrapper: {
        type: "object",
        required: ["shared"],
        properties: {
          shared: { $ref: "#/components/schemas/Shared" },
        },
      },
      ResponseOnly: {
        type: "object",
        required: ["seenAt"],
        properties: {
          seenAt: { type: "string", format: "date-time" },
        },
      },
    },
  },
  paths: {
    "/things": {
      post: {
        operationId: "createThing",
        parameters: [
          {
            name: "since",
            in: "query",
            required: false,
            schema: { type: "string", format: "date-time" },
          },
          {
            name: "day",
            in: "query",
            required: false,
            schema: { type: "string", format: "date" },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["startsAt", "wrapper"],
                properties: {
                  startsAt: { type: "string", format: "date-time" },
                  dueDay: { type: "string", format: "date" },
                  wrapper: { $ref: "#/components/schemas/SharedWrapper" },
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "ok",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["finishedAt", "shared", "responseOnly"],
                  properties: {
                    finishedAt: { type: "string", format: "date-time" },
                    shared: { $ref: "#/components/schemas/Shared" },
                    responseOnly: { $ref: "#/components/schemas/ResponseOnly" },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

const compile = (): Promise<string> =>
  CodeGenerationModel.fromDoc("Test", doc).compileTypes({
    rootNamespace: "Test",
  });

const lineOf = (types: string, property: string): string => {
  const lines = types
    .split("\n")
    .filter((l) => l.trim().startsWith(`${property}`));
  expect(lines.length).toBeGreaterThan(0);
  return lines.join("\n");
};

describe("date-time widening", () => {
  let types: string;

  beforeAll(async () => {
    types = await compile();
  });

  test("request body date-time accepts a Date", () => {
    expect(lineOf(types, "startsAt")).toContain("string | Date");
  });

  test("request body date (YYYY-MM-DD) stays a string", () => {
    expect(lineOf(types, "dueDay")).not.toContain("Date");
  });

  test("query parameter date-time accepts a Date", () => {
    expect(lineOf(types, "since?")).toContain("string | Date");
  });

  test("query parameter date (YYYY-MM-DD) stays a string", () => {
    expect(lineOf(types, "day?")).not.toContain("Date");
  });

  test("response date-time stays a string", () => {
    expect(lineOf(types, "finishedAt")).not.toContain("Date");
  });

  test("shared component schemas stay unchanged", () => {
    // Components.Schemas.Shared is used by the response and must not change
    expect(lineOf(types, "createdAt")).toContain("createdAt: string;");
  });

  test("a widened request variant is emitted for shared schemas", () => {
    expect(types).toContain("namespace RequestSchemas");
    expect(lineOf(types, "createdAt")).toContain("createdAt: string | Date;");
  });

  test("request refs point at the widened variant", () => {
    expect(lineOf(types, "wrapper")).toContain(
      "Test.Components.RequestSchemas.SharedWrapper",
    );
    expect(lineOf(types, "shared")).toContain(
      "Test.Components.RequestSchemas.Shared",
    );
    expect(lineOf(types, "shared")).toContain("Test.Components.Schemas.Shared");
  });

  test("response-only schemas get no request variant", () => {
    expect(types).not.toContain("RequestSchemas.ResponseOnly");
  });
});
