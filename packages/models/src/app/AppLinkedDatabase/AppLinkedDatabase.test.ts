import { afterEach, describe, expect, test } from "vitest";

import { buildAppLinkedDatabaseData } from "../../testing/builders/buildAppLinkedDatabaseData.js";
import { resetBehaviors } from "../../testing/installBehaviors.js";
import { AppLinkedDatabase } from "./AppLinkedDatabase.js";
import { MySql, Redis } from "../../database/index.js";
import { DataModel } from "../../base/index.js";

afterEach(resetBehaviors);

describe("AppLinkedDatabase", () => {
  test("maps a primary mysql database", () => {
    const linked = new AppLinkedDatabase(buildAppLinkedDatabaseData());

    expect(linked.database).toBeInstanceOf(MySql);
    expect(linked.database.id).toBe("db-id");
    expect(linked.id).toBe("db-id");
    expect(linked.isPrimary).toBe(true);
    expect(linked).toBeInstanceOf(DataModel);
  });

  test("maps a custom redis database", () => {
    const linked = new AppLinkedDatabase(
      buildAppLinkedDatabaseData({ purpose: "custom", kind: "redis" }),
    );

    expect(linked.database).toBeInstanceOf(Redis);
    expect(linked.isPrimary).toBe(false);
  });
});
