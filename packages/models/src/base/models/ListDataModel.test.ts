import { afterEach, describe, expect, test } from "vitest";

import { buildContainerData, resetBehaviors } from "../../testing";
import { ListDataModel } from "./ListDataModel";

afterEach(resetBehaviors);

describe("ListDataModel", () => {
  test("carries the supplied items and total count", () => {
    const items = [buildContainerData()];

    const model = new ListDataModel(items, 3);

    expect(model.items).toEqual(items);
    expect(model.totalCount).toBe(3);
  });

  test("freezes its items", () => {
    const items = [buildContainerData()];
    const model = new ListDataModel(items, 1);

    expect(Object.isFrozen(model.items)).toBe(true);
    expect(() =>
      (model.items as typeof items).push(buildContainerData()),
    ).toThrow();
  });
});
