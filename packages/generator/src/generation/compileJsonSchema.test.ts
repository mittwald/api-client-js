import { JSONSchema } from "json-schema-to-typescript";
import { compileJsonSchema } from "./compileJsonSchema.js";

const normalize = (typeScript: string): string =>
  typeScript.replace(/\s+/g, " ").trim();

test.each([
  ["boolean", { type: "boolean", const: false }, "value: false;"],
  ["string", { type: "string", const: "foo" }, 'value: "foo";'],
  ["number", { type: "number", const: 42 }, "value: 42;"],
  ["integer", { type: "integer", const: 0 }, "value: 0;"],
  ["null", { type: "null", const: null }, "value: null;"],
])(
  "const keyword on a %s property compiles to a literal type",
  async (_name, propertySchema, expected) => {
    const compiled = await compileJsonSchema(
      {
        type: "object",
        required: ["value"],
        properties: { value: propertySchema },
      } as JSONSchema,
      "WithConst",
    );

    expect(normalize(compiled)).toContain(expected);
  },
);

test("const keyword is equivalent to a single-valued enum", async () => {
  const schemaWithConst = {
    type: "object",
    required: ["value"],
    properties: { value: { type: "string", const: "foo" } },
  } as JSONSchema;

  const schemaWithEnum = {
    type: "object",
    required: ["value"],
    properties: { value: { type: "string", enum: ["foo"] } },
  } as JSONSchema;

  expect(await compileJsonSchema(schemaWithConst, "Tagged")).toEqual(
    await compileJsonSchema(schemaWithEnum, "Tagged"),
  );
});

test("const-tagged members compile to a discriminated union", async () => {
  const compiled = await compileJsonSchema(
    {
      oneOf: [
        {
          type: "object",
          required: ["event", "done", "progress"],
          properties: {
            event: { type: "string", const: "progress" },
            done: { type: "boolean", const: false },
            progress: { type: "number" },
          },
        },
        {
          type: "object",
          required: ["event", "done"],
          properties: {
            event: { type: "string", const: "done" },
            done: { type: "boolean", const: true },
          },
        },
      ],
    } as JSONSchema,
    "StreamEvent",
  );

  // Both discriminants must be literal types, otherwise TypeScript cannot
  // narrow the union by checking `event` or `done`.
  expect(normalize(compiled)).toEqual(
    normalize(`
      export type StreamEvent =
        | {
            event: "progress";
            done: false;
            progress: number;
          }
        | {
            event: "done";
            done: true;
          };
    `),
  );
});
