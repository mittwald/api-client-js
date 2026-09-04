import { OpenAPIV3 } from "openapi-types";
import { assertNoRefs } from "./assertNoRefs.js";

test("passes for a plain schema object", () => {
  expect(() =>
    assertNoRefs({ type: "string" } as OpenAPIV3.SchemaObject),
  ).not.toThrow();
});

test("passes for an empty object", () => {
  expect(() => assertNoRefs({})).not.toThrow();
});

test("throws for a reference object", () => {
  expect(() => assertNoRefs({ $ref: "#/components/schemas/Project" })).toThrow(
    "$ref's are not supported here (ref: #/components/schemas/Project)",
  );
});
