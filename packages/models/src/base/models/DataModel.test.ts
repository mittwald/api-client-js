import { afterEach, describe, expect, test } from "vitest";

import { buildContainerData, resetBehaviors } from "../../testing/index.js";
import { DataModel } from "./DataModel.js";

afterEach(resetBehaviors);

describe("DataModel", () => {
  test("carries the supplied data", () => {
    const data = buildContainerData();

    const model = new DataModel(data);

    expect(model.data).toBe(data);
    expect(model.data).toEqual(data);
  });
});
