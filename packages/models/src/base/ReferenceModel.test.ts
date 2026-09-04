import { ReferenceModel } from "./ReferenceModel.js";

class Project extends ReferenceModel {}
class NestedProject extends Project {}

test("exposes the id", () => {
  expect(new Project("abc").id).toBe("abc");
});

test("describes itself with class name and id", () => {
  expect(new Project("abc").describe()).toBe("Project@abc");
});

test("uses the name of the most derived class", () => {
  expect(new NestedProject("abc").describe()).toBe("NestedProject@abc");
});

test("does not override toString, so String() is not the description", () => {
  expect(String(new Project("abc"))).not.toBe("Project@abc");
});
