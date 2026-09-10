import { extractComponentRefName } from "./extractComponentRefName.js";

test("extracts the name of a schema ref", () => {
  expect(
    extractComponentRefName("#/components/schemas/Project", "schemas"),
  ).toBe("Project");
});

test("extracts the name of a response ref", () => {
  expect(
    extractComponentRefName("#/components/responses/NotFound", "responses"),
  ).toBe("NotFound");
});

test("only looks at the last two segments", () => {
  expect(
    extractComponentRefName("#/foo/bar/components/schemas/Project", "schemas"),
  ).toBe("Project");
});

test("rejects a ref that belongs to a different component type", () => {
  expect(() =>
    extractComponentRefName("#/components/schemas/Project", "responses"),
  ).toThrow(
    "Could not extract ref name (component: responses, ref: #/components/schemas/Project)",
  );
});

test("rejects a ref without a component segment", () => {
  expect(() => extractComponentRefName("#/Project", "schemas")).toThrow(
    "Could not extract ref name",
  );
});

test("rejects an empty ref", () => {
  expect(() => extractComponentRefName("#/", "schemas")).toThrow(
    "Could not extract ref name",
  );
});
