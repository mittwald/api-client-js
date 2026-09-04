import ObjectNotFoundError from "./ObjectNotFoundError.js";

test("builds a message from type and reference name", () => {
  expect(new ObjectNotFoundError("Project", "abc").message).toBe(
    "Project@abc not found",
  );
});

test("uses its own name instead of the inherited one", () => {
  expect(new ObjectNotFoundError("Project", "abc").name).toBe(
    "ObjectNotFoundError",
  );
});

test("is recognizable via instanceof after the prototype fix-up", () => {
  const error = new ObjectNotFoundError("Project", "abc");

  expect(error).toBeInstanceOf(ObjectNotFoundError);
  expect(error).toBeInstanceOf(Error);
});

test("can be caught by its own type", () => {
  expect(() => {
    throw new ObjectNotFoundError("Project", "abc");
  }).toThrow(ObjectNotFoundError);
});
