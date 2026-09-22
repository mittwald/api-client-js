import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, expect, test, vi } from "vitest";

import ObjectNotFoundError from "../../errors/ObjectNotFoundError";
import { resetBehaviors } from "../../testing";
import { Project } from "../../project";

// ObjectNotFoundError's react-coupled model-name import is unsuitable for the node test environment.
vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function"
      ? (type as { name?: string }).name
      : undefined,
}));

import assertObjectFound from "./assertObjectFound";

afterEach(resetBehaviors);

class Foo {}

test("returns normally and narrows a defined value", () => {
  const value: { name: string } | undefined = { name: "found" };

  assertObjectFound(value, Foo, "abc");

  expect(value.name).toBe("found");
});

test("throws an ObjectNotFoundError containing the type and string reference", () => {
  try {
    assertObjectFound(undefined, Foo, "abc");
  } catch (error) {
    expect(error).toBeInstanceOf(ObjectNotFoundError);
    expect(error).toMatchObject({
      name: "ObjectNotFoundError",
      refName: "abc",
      type: "Foo",
    });
    expect(error).toHaveProperty("message", expect.stringMatching(/Foo@abc not found/));
    return;
  }

  throw new Error("Expected assertObjectFound to throw");
});

test("uses a reference model string representation as the reference name", () => {
  const project = Project.ofId("p-1");

  try {
    assertObjectFound(undefined, Foo, project);
  } catch (error) {
    expect(error).toBeInstanceOf(ObjectNotFoundError);
    expect(error).toHaveProperty("refName", project.toString());
    return;
  }

  throw new Error("Expected assertObjectFound to throw");
});
