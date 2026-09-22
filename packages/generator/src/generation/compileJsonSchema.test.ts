import { JSONSchema } from "json-schema-to-typescript";
import { compileJsonSchema } from "./compileJsonSchema.js";
import { jest } from "@jest/globals";

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

jest.setTimeout(30_000);

test("compiles an object schema into an interface", async () => {
  const output = await compileJsonSchema(
    {
      type: "object",
      required: ["id"],
      properties: { id: { type: "string" }, name: { type: "string" } },
    },
    "Pet",
  );

  expect(output).toContain("export interface Pet {");
  expect(output).toContain("id: string;");
  expect(output).toContain("name?: string;");
});

test("emits no banner comment", async () => {
  const output = await compileJsonSchema({ type: "string" }, "Name");

  expect(output).not.toContain("/* eslint-disable */");
  expect(output.trimStart().startsWith("export")).toBe(true);
});

test("disallows additional properties by default", async () => {
  const output = await compileJsonSchema(
    { type: "object", properties: { id: { type: "string" } } },
    "Pet",
  );

  expect(output).not.toContain("[k: string]: unknown");
});

test("lets callers override the defaults", async () => {
  const output = await compileJsonSchema(
    { type: "object", properties: { id: { type: "string" } } },
    "Pet",
    { additionalProperties: true },
  );

  expect(output).toContain("[k: string]: unknown");
});

test("compiles a scalar schema into a type alias", async () => {
  const output = await compileJsonSchema({ type: "string" }, "Name");

  expect(output).toContain("export type Name = string;");
});

test("compiles an enum into a union", async () => {
  const output = await compileJsonSchema(
    { type: "string", enum: ["asc", "desc"] },
    "Order",
  );

  expect(output).toContain('"asc"');
  expect(output).toContain('"desc"');
});
