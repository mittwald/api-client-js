import { OpenApiSpec } from "../../openapi/OpenApiSpec.js";
import { CodeGenerationModel } from "./CodeGenerationModel.js";
import { OpenAPIV3 } from "openapi-types";

const normalize = (typeScript: string): string =>
  typeScript.replace(/\s+/g, " ").trim();

/**
 * End-to-end check for the `const` keyword: an OpenAPI document describing a
 * server-sent-event stream as a discriminated union has to pass validation and
 * has to compile into literal types, so that consumers can narrow the union.
 *
 * @see https://spec.openapis.org/oas/v3.2.0.html#server-sent-event-streams
 */
test("const keywords survive from the spec into the generated types", async () => {
  const document = {
    openapi: "3.0.3",
    info: { title: "Test", version: "1.0.0" },
    paths: {},
    components: {
      schemas: {
        ProgressEvent: {
          type: "object",
          required: ["event", "done", "progress"],
          properties: {
            event: { type: "string", const: "progress" },
            done: { type: "boolean", const: false },
            progress: { type: "number" },
          },
        },
        DoneEvent: {
          type: "object",
          required: ["event", "done", "exitCode"],
          properties: {
            event: { type: "string", const: "done" },
            done: { type: "boolean", const: true },
            exitCode: { type: "integer", const: 0 },
          },
        },
        StreamEvent: {
          oneOf: [
            { $ref: "#/components/schemas/ProgressEvent" },
            { $ref: "#/components/schemas/DoneEvent" },
          ],
        },
      },
    },
  } as unknown as OpenAPIV3.Document;

  const spec = await OpenApiSpec.parse(document);
  const model = CodeGenerationModel.fromDoc("Api", spec.document);
  const types = normalize(await model.compileTypes({ rootNamespace: "Api" }));

  expect(types).toContain(
    normalize(`
      export interface ProgressEvent {
        event: "progress";
        done: false;
        progress: number;
      }
    `),
  );

  expect(types).toContain(
    normalize(`
      export interface DoneEvent {
        event: "done";
        done: true;
        exitCode: 0;
      }
    `),
  );

  expect(types).toContain(
    normalize(`
      export type StreamEvent = Api.Components.Schemas.ProgressEvent
        | Api.Components.Schemas.DoneEvent;
    `),
  );
});

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

test("a deprecated request parameter is emitted with an @deprecated tag", async () => {
  const types = await compileTypes();

  expect(types).toMatch(deprecatedBefore("legacyFilter?"));
});

test("a deprecated referenced request parameter is emitted with an @deprecated tag", async () => {
  const types = await compileTypes();

  expect(types).toMatch(deprecatedBefore("legacySort?"));
});

/**
 * Component parameters are request-only, so they are compiled through
 * `compileAsRequestInput` rather than `compile`. Both paths have to apply the
 * type alias workaround, otherwise the standalone alias ends up with an empty
 * JSDoc block.
 */
test("a deprecated component parameter alias gets an @deprecated tag", async () => {
  const types = await compileTypes();

  expect(types).toMatch(deprecatedBefore("export type LegacySort"));
});
