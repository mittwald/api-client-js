import { afterEach, expect, test } from "vitest";

import { resetBehaviors } from "../../testing";
import { required } from "./required";

afterEach(resetBehaviors);

test("returns present values unchanged", () => {
  expect(required(0)).toBe(0);
  expect(required("")).toBe("");
  expect(required(false)).toBe(false);
});

test("throws for undefined", () => {
  expect(() => required(undefined)).toThrowError(/value/);
});

test("throws for null", () => {
  expect(() => required(null)).toThrowError(/value/);
});

test("includes the value type in the error message", () => {
  expect(() => required(undefined, "projectId")).toThrowError(/projectId/);
});
