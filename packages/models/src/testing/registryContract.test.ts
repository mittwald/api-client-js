import { afterEach, describe, expect, test, vi } from "vitest";

import { buildContainerData, installBehaviors, resetBehaviors } from "./index.js";
import { config } from "../config/config.js";

afterEach(resetBehaviors);

describe("behavior registry contract", () => {
  test("fails fast before behaviors are installed", () => {
    expect(() => config.behaviors.container).toThrowError(/is not initialized/);
  });

  test("resolves behaviors after installBehaviors", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildContainerData({ id: "c-1" }));

    installBehaviors({ container: { find } });

    expect(config.behaviors.container.find).toBe(find);

    const container = await config.behaviors.container.find("c-1", "s-1");

    expect(container?.id).toBe("c-1");
    expect(find).toHaveBeenCalledWith("c-1", "s-1");
  });

  test("resetBehaviors restores fail-fast behavior", () => {
    installBehaviors({
      container: {
        find: vi.fn().mockResolvedValue(buildContainerData()),
      },
    });

    resetBehaviors();

    expect(() => config.behaviors.container).toThrowError(/is not initialized/);
  });
});
