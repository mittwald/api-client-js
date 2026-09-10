import { tsNamespaceName } from "./tsNamespaceName.js";

test("joins a single part", () => {
  expect(tsNamespaceName("components")).toBe("Components");
});

test("joins multiple parts with dots", () => {
  expect(tsNamespaceName("components", "schemas")).toBe("Components.Schemas");
});

test("converts each part to a TypeScript type name", () => {
  expect(tsNamespaceName("my-api", "some_schemas")).toBe("MyApi.SomeSchemas");
});

test("returns an empty string for no parts", () => {
  expect(tsNamespaceName()).toBe("");
});
