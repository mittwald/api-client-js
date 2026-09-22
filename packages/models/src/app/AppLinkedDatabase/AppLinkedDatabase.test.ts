import { afterEach, describe, expect, test } from "vitest";

import { buildAppLinkedDatabaseData } from "../../testing/builders/buildAppLinkedDatabaseData";
import { resetBehaviors } from "../../testing/installBehaviors";
import { AppLinkedDatabase } from "./AppLinkedDatabase";
import { MySql, Redis } from "../../database";
import { DataModel } from "../../base";

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
