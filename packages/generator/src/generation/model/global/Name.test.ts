import { Name } from "./Name.js";

const parentName = new Name("Parent");

test("TS variable name is camelcased", () => {
  const testName = new Name("ChildName");
  expect(testName.tsVar).toEqual("childName");
});

test("Namespaced name includes parent name", () => {
  const testName = new Name("ChildName", parentName);
  expect(testName.tsTypeWithNamespace).toEqual("Parent.ChildName");
});
