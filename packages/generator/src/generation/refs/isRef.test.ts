import { OpenAPIV3 } from "openapi-types";
import { isRef } from "./isRef.js";

test("recognizes a reference object", () => {
  expect(isRef({ $ref: "#/components/schemas/Project" })).toBe(true);
});

test("rejects an object without $ref", () => {
  expect(isRef({ type: "string" } as OpenAPIV3.SchemaObject)).toBe(false);
});

test("rejects an empty object", () => {
  expect(isRef({})).toBe(false);
});

test("rejects a $ref that is not a string", () => {
  expect(isRef({ $ref: 42 } as unknown as OpenAPIV3.ReferenceObject)).toBe(
    false,
  );
});

test("accepts an empty $ref string", () => {
  expect(isRef({ $ref: "" })).toBe(true);
});

test("recognizes a schema that carries both $ref and other keys", () => {
  expect(
    isRef({ $ref: "#/components/schemas/Project", description: "a project" }),
  ).toBe(true);
});
