import { OpenAPIV3 } from "openapi-types";
import { CodeGenerationModel } from "./CodeGenerationModel.js";

const doc = {
  openapi: "3.0.3",
  info: { title: "Test API", version: "1.0.0" },
  paths: {
    "/conversations": {
      get: {
        operationId: "conversation-list",
        tags: ["conversation"],
        parameters: [
          {
            name: "legacyFilter",
            in: "query",
            deprecated: true,
            schema: { type: "string" },
          },
          { $ref: "#/components/parameters/LegacySort" },
        ],
        responses: {
          "200": {
            description: "OK",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Conversation" },
              },
            },
          },
        },
      },
    },
  },
  components: {
    parameters: {
      LegacySort: {
        name: "legacySort",
        in: "query",
        deprecated: true,
        schema: { type: "string" },
      },
    },
    schemas: {
      Conversation: {
        type: "object",
        properties: {
          lastMessageAt: {
            type: "string",
            format: "date-time",
            deprecated: true,
          },
          referenced: {
            $ref: "#/components/schemas/LegacyState",
            deprecated: true,
          },
        },
      },
      LegacyState: {
        type: "string",
        enum: ["enabled", "disabled"],
        deprecated: true,
      },
    },
  },
} as unknown as OpenAPIV3.Document;

const compileTypes = () =>
  CodeGenerationModel.fromDoc("Api", doc).compileTypes({
    rootNamespace: "Api",
  });

/** Matches an `@deprecated` JSDoc tag directly in front of `declaration`. */
const deprecatedBefore = (declaration: string): RegExp =>
  new RegExp(
    `@deprecated[^;{}]*?\\*/\\s*${declaration.replace(/[$?]/g, "\\$&")}`,
  );

test("a deprecated schema property is emitted with an @deprecated tag", async () => {
  const types = await compileTypes();

  expect(types).toMatch(deprecatedBefore("lastMessageAt?"));
});

test("a deprecated standalone type gets an @deprecated tag", async () => {
  const types = await compileTypes();

  expect(types).toMatch(deprecatedBefore("export type LegacyState"));
});

test("a deprecated annotation next to a $ref survives the ref conversion", async () => {
  const types = await compileTypes();

  expect(types).toMatch(deprecatedBefore("referenced?"));
});

test("a deprecated request parameter is emitted with an @deprecated tag", async () => {
  const types = await compileTypes();

  expect(types).toMatch(deprecatedBefore("legacyFilter?"));
});

test("a deprecated referenced request parameter is emitted with an @deprecated tag", async () => {
  const types = await compileTypes();

  expect(types).toMatch(deprecatedBefore("legacySort?"));
});
