import { afterEach, describe, expect, test } from "vitest";

import { ReferenceModel } from "./ReferenceModel";
import { resetBehaviors } from "../../testing";

afterEach(resetBehaviors);

class TestReference extends ReferenceModel {}

describe("ReferenceModel", () => {
  test("constructs a reference from an id", () => {
    const reference = new TestReference("reference-id");

    expect(reference.id).toBe("reference-id");
    expect(reference.describe()).toBe("TestReference@reference-id");
  });
});
