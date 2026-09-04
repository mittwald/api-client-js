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
