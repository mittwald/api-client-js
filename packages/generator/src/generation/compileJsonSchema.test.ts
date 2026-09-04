import { jest } from "@jest/globals";
import { compileJsonSchema } from "./compileJsonSchema.js";

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
