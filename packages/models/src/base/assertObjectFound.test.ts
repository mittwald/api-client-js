import assertObjectFound from "./assertObjectFound.js";
import { ReferenceModel } from "./ReferenceModel.js";
import ObjectNotFoundError from "../errors/ObjectNotFoundError.js";

class Project extends ReferenceModel {}

test("passes through a defined object", () => {
  expect(() => assertObjectFound({ id: "abc" }, Project, "abc")).not.toThrow();
});

test("passes through falsy values that are not undefined", () => {
  expect(() => assertObjectFound(null, Project, "abc")).not.toThrow();
  expect(() => assertObjectFound(0, Project, "abc")).not.toThrow();
});

test("throws an ObjectNotFoundError for undefined", () => {
  expect(() => assertObjectFound(undefined, Project, "abc")).toThrow(
    ObjectNotFoundError,
  );
});

test("names the class and the reference id in the message", () => {
  expect(() => assertObjectFound(undefined, Project, "abc")).toThrow(
    "Project@abc not found",
  );
});

/**
 * `assertObjectFound` calls `toString()` on a `ReferenceModel`, but
 * `ReferenceModel` only implements `describe()`, so the reference degrades to
 * the default object representation instead of `Project@abc`.
 */
test("does not resolve a ReferenceModel reference to a readable name", () => {
  expect(() =>
    assertObjectFound(undefined, Project, new Project("abc")),
  ).toThrow("Project@[object Object] not found");
});
