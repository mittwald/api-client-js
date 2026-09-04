import { joinedId } from "./joinedId.js";

test("joins parts with a pipe separator", () => {
  expect(joinedId("a", "b", "c")).toBe("a | b | c");
});

test("stringifies numeric parts", () => {
  expect(joinedId(1, "b", 2)).toBe("1 | b | 2");
});

test("returns a single part unchanged", () => {
  expect(joinedId("a")).toBe("a");
});

test("returns an empty string for no parts", () => {
  expect(joinedId()).toBe("");
});

test("distinguishes different orderings", () => {
  expect(joinedId("a", "b")).not.toBe(joinedId("b", "a"));
});
