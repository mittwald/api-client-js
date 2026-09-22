import { afterEach, expect, test } from "vitest";

import { resetBehaviors } from "../../testing";
import { Project } from "../../project";
import { extractId } from "./extractId";

afterEach(resetBehaviors);

test("returns a string reference unchanged", () => {
  expect(extractId("abc")).toBe("abc");
});

test("returns the id of a reference model", () => {
  expect(extractId(Project.ofId("p-1"))).toBe("p-1");
});

test("returns undefined for an undefined reference", () => {
  expect(extractId(undefined)).toBeUndefined();
});
