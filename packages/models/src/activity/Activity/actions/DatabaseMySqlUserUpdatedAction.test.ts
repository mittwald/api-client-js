import { describe, expect, test } from "vitest";

import type { ActivityActionData } from "../types.js";

import { createActivityAction } from "../actionRegistry.js";

const permissions = {
  permissionsWrite: true,
  externalAccess: false,
  permissionsRead: true,
};

const updatedAction = (changes: object) =>
  createActivityAction({
    parameters: {
      databaseDescription: { name: "my-db" },
      description: { name: "new-name" },
    },
    name: "database.mysql-user-updated",
    changes,
  } as unknown as ActivityActionData);

describe("DatabaseMySqlUserUpdatedAction", () => {
  test("uses the rename title when only the description changed", () => {
    const action = updatedAction({
      before: { description: "old-name", ...permissions },
      after: { description: "new-name", ...permissions },
    });

    expect(action.titleKey).toBe("database.mysql-user-updated.renamed");
    expect(action.titleOptions).toMatchObject({
      oldDescription: "old-name",
      description: "new-name",
      database: "my-db",
    });
  });

  test("falls back to the main user label as the old name", () => {
    const action = updatedAction({
      after: { description: "new-name", ...permissions },
      before: { description: null, ...permissions },
    });

    expect(action.titleOptions.oldDescription).toEqual({
      translationKey: "mainUser",
    });
  });

  test.each([
    [
      "a permission changed alongside the description",
      {
        after: {
          description: "new-name",
          ...permissions,
          permissionsWrite: false,
        },
        before: { description: "old-name", ...permissions },
      },
    ],
    [
      "only a permission changed",
      {
        after: { description: "same", ...permissions, externalAccess: true },
        before: { description: "same", ...permissions },
      },
    ],
    [
      "one side is missing",
      { after: { description: "new-name", ...permissions } },
    ],
  ])("keeps the generic title when %s", (_name, changes) => {
    expect(updatedAction(changes).titleKey).toBe("database.mysql-user-updated");
  });
});
