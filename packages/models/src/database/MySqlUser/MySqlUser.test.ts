import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildMySqlUserData } from "../../testing/builders/buildMySqlUserData.js";
import { ListQueryModel, ReferenceModel } from "../../base/index.js";
import { AggregateMetaData } from "../../common/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import { MySql } from "../MySql/index.js";
import {
  MySqlUserListQuery,
  MySqlUserDetailed,
  MySqlUserListItem,
  MySqlUserList,
  MySqlUser,
} from "./MySqlUser.js";

afterEach(resetBehaviors);

describe("MySqlUser", () => {
  test("find delegates and maps found and missing users", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildMySqlUserData({ id: "u-1" }))
      .mockResolvedValueOnce(undefined);
    installBehaviors({ mySqlUser: { find } });

    const found = await MySqlUser.find("u-1");
    const missing = await MySqlUser.find("missing");

    expect(find).toHaveBeenNthCalledWith(1, "u-1");
    expect(found).toBeInstanceOf(MySqlUserDetailed);
    expect(found?.id).toBe("u-1");
    expect(missing).toBeUndefined();
  });

  test("get throws when the user is missing", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ mySqlUser: { find } });

    await expect(MySqlUser.get("missing")).rejects.toThrow();
  });

  test("create delegates and returns a reference", async () => {
    const create = vi.fn().mockResolvedValue({ id: "u-new" });
    installBehaviors({ mySqlUser: { create } });
    const data = {
      accessLevel: "full" as const,
      description: "created user",
      databaseId: "db-1",
      password: "secret",
    };

    const result = await MySqlUser.create(MySql.ofId("db-1"), data);

    expect(create).toHaveBeenCalledWith("db-1", data);
    expect(result).toBeInstanceOf(MySqlUser);
    expect(result.id).toBe("u-new");
  });

  test("getPhpMyAdminUrl delegates and returns the URL", async () => {
    const getPhpMyAdminUrl = vi
      .fn()
      .mockResolvedValue("https://phpmyadmin.example.com");
    installBehaviors({ mySqlUser: { getPhpMyAdminUrl } });

    const result = await MySqlUser.ofId("u-1").getPhpMyAdminUrl();

    expect(getPhpMyAdminUrl).toHaveBeenCalledWith("u-1");
    expect(result).toBe("https://phpmyadmin.example.com");
  });

  test("exposes derived user data", () => {
    const ready = new MySqlUserDetailed(
      buildMySqlUserData({
        accessLevel: "readonly",
        description: undefined,
        externalAccess: true,
        databaseId: "db-1",
        status: "ready",
        mainUser: true,
      }),
    );
    const pending = new MySqlUserDetailed(
      buildMySqlUserData({ status: "pending" }),
    );

    expect(ready.isReady).toBe(true);
    expect(pending.isReady).toBe(false);
    expect(ready.description).toBe("");
    expect(ready.database).toBeInstanceOf(MySql);
    expect(ready.database.id).toBe("db-1");
    expect(ready.mainUser).toBe(true);
    expect(ready.accessLevel).toBe("readonly");
    expect(ready.externalAccess).toBe(true);
  });

  test("query returns list items with ghostmaker identities", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildMySqlUserData({ id: "u-1" })],
    });
    installBehaviors({ mySqlUser: { list } });

    const result = await MySqlUser.query({
      database: MySql.ofId("db-1"),
    }).execute();

    expect(result).toBeInstanceOf(MySqlUserList);
    expect(result).toBeInstanceOf(MySqlUserListQuery);
    expect(result).toBeInstanceOf(ListQueryModel);
    expect(result.items).toBeDefined();
    expect(result.items[0]).toBeInstanceOf(MySqlUserListItem);

    const item = result.items[0];
    expect(item).toBeInstanceOf(MySqlUser);
    expect(item).toBeInstanceOf(ReferenceModel);
    expect(item.data).toBeDefined();
  });

  test("aggregateMetaData pins the cache identity", () => {
    expect(MySqlUser.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(MySqlUser.aggregateMetaData.domain).toBe("database");
    expect(MySqlUser.aggregateMetaData.aggregate).toBe("mysqluser");
  });

  test("findCommon delegates to the detailed variant on a bare reference", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildMySqlUserData({ id: "u-1" }))
      .mockResolvedValueOnce(undefined);
    installBehaviors({ mySqlUser: { find } });

    const found = await MySqlUser.ofId("u-1").findCommon();
    const missing = await MySqlUser.ofId("missing").findCommon();

    expect(find).toHaveBeenNthCalledWith(1, "u-1");
    expect(found).toBeInstanceOf(MySqlUserDetailed);
    expect(found?.id).toBe("u-1");
    expect(missing).toBeUndefined();
  });

  test("getCommon resolves on a bare reference and throws when missing", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildMySqlUserData({ id: "u-1" }))
      .mockResolvedValueOnce(undefined);
    installBehaviors({ mySqlUser: { find } });

    await expect(MySqlUser.ofId("u-1").getCommon()).resolves.toBeInstanceOf(
      MySqlUserDetailed,
    );
    await expect(MySqlUser.ofId("missing").getCommon()).rejects.toThrow();
  });

  test("findCommon/getCommon on a materialized model return it without another behavior call", () => {
    const find = vi.fn();
    installBehaviors({ mySqlUser: { find } });
    const detailed = new MySqlUserDetailed(buildMySqlUserData({ id: "u-1" }));
    const item = new MySqlUserListItem(buildMySqlUserData({ id: "u-2" }));

    expect(detailed.findCommon()).toBe(detailed);
    expect(detailed.getCommon()).toBe(detailed);
    expect(item.findCommon()).toBe(item);
    expect(item.getCommon()).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });
});
