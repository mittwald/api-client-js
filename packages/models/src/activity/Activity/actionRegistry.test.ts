import { describe, expect, test } from "vitest";

import type { ActivityActionData } from "./types";

import { AppFailedAction, GenericAction } from "./actions";
import { createActivityAction } from "./actionRegistry";

const actionData = (data: object): ActivityActionData =>
  data as ActivityActionData;

describe("createActivityAction", () => {
  test("resolves app.failed and names the reason when there is one", () => {
    const withoutError = createActivityAction(
      actionData({
        parameters: { appInstallation: { name: "my-shop" } },
        name: "app.failed",
        changes: {},
      }),
    );

    expect(withoutError).toBeInstanceOf(AppFailedAction);
    expect(withoutError.titleKey).toBe("app.failed");

    const withError = createActivityAction(
      actionData({
        parameters: {
          appInstallation: { name: "my-shop" },
          error: { name: "out of disk space" },
        },
        name: "app.failed",
        changes: {},
      }),
    );

    expect(withError.titleKey).toBe("app.failed.withError");
    expect(withError.titleOptions).toEqual({ error: "out of disk space" });
  });

  test("falls back to the generic action for unknown names", () => {
    const action = createActivityAction(
      actionData({
        name: "future.thing-happened",
        parameters: {},
        changes: {},
      }),
    );

    expect(action).toBeInstanceOf(GenericAction);
    expect(action.titleKey).toBe("future.thing-happened");
  });
});
