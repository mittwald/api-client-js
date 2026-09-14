import { makeError } from "./makeError.js";

test("passes an Error through unchanged", () => {
  const error = new TypeError("boom");

  expect(makeError(error)).toBe(error);
});

test("passes a subclass of Error through unchanged", () => {
  class CustomError extends Error {}
  const error = new CustomError("boom");

  expect(makeError(error)).toBe(error);
});

test("wraps an error-shaped object, keeping name and message", () => {
  const error = makeError({ name: "HttpError", message: "not found" });

  expect(error).toBeInstanceOf(Error);
  expect(error.name).toBe("HttpError");
  expect(error.message).toBe("not found");
});

test("falls back to the Error name when none is given", () => {
  expect(makeError({ message: "boom" }).name).toBe("Error");
});

test("falls back to an empty message when none is given", () => {
  expect(makeError({ name: "HttpError" }).message).toBe("");
});

/**
 * `dot-prop` returns the value itself when the subject is not an object, so a
 * thrown string ends up as both the name and the message of the wrapper.
 */
test("wraps a thrown string, using it as name and message", () => {
  const error = makeError("boom");

  expect(error).toBeInstanceOf(Error);
  expect(error.name).toBe("boom");
  expect(error.message).toBe("boom");
});

test("wraps undefined into an Error", () => {
  expect(makeError(undefined)).toBeInstanceOf(Error);
});
