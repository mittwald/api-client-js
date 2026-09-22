import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildMySqlCharsetListItemData } from "../../testing/builders/buildMySqlCharsetListItemData.js";
import { buildMySqlDatabaseData } from "../../testing/builders/buildMySqlDatabaseData.js";
import { buildMySqlVersionData } from "../../testing/builders/buildMySqlVersionData.js";
import { ListQueryModel, ReferenceModel } from "../../base/index.js";
import { AggregateMetaData } from "../../common/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import { Project } from "../../project/index.js";
import {
  MySqlCharsetListItem,
  MySqlCharsetList,
  MySqlCharset,
} from "./MySqlCharset.js";
import {
  MySqlListQuery,
  MySqlDetailed,
  MySqlListItem,
  MySqlCommon,
  MySqlList,
  MySql,
} from "./MySql.js";

afterEach(resetBehaviors);

describe("MySql", () => {
  test("find delegates and maps found and missing databases", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildMySqlDatabaseData({ id: "db-1" }))
      .mockResolvedValueOnce(undefined);
    installBehaviors({ mySql: { find } });

    const found = await MySql.find("db-1");
    const missing = await MySql.find("missing");

    expect(find).toHaveBeenNthCalledWith(1, "db-1");
    expect(find).toHaveBeenNthCalledWith(2, "missing");
    expect(found).toBeInstanceOf(MySqlDetailed);
    expect(found?.id).toBe("db-1");
    expect(missing).toBeUndefined();
  });

  test("get returns a detailed database or throws when it is missing", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildMySqlDatabaseData({ id: "db-1" }))
      .mockResolvedValueOnce(undefined);
    installBehaviors({ mySql: { find } });

    await expect(MySql.get("db-1")).resolves.toBeInstanceOf(MySqlDetailed);
    await expect(MySql.get("missing")).rejects.toThrow();
  });

  test("create delegates with the API request shape", async () => {
    const create = vi.fn().mockResolvedValue({ id: "db-new" });
    installBehaviors({ mySql: { create } });

    const result = await MySql.create(Project.ofId("p-1"), {
      description: "created database",
      password: "secret",
      version: "8.0",
    });

    expect(create).toHaveBeenCalledWith("p-1", {
      database: { description: "created database", version: "8.0" },
      user: { accessLevel: "full", password: "secret" },
    });
    expect(result).toBeInstanceOf(MySql);
    expect(result.id).toBe("db-new");
  });

  test("listVersions excludes disabled versions and sorts descending", async () => {
    const listVersions = vi
      .fn()
      .mockResolvedValue([
        buildMySqlVersionData({ disabled: true, number: "1.0" }),
        buildMySqlVersionData({ number: "5.7", name: "5.7", id: "v-57" }),
        buildMySqlVersionData({ number: "8.0", name: "8.0", id: "v-80" }),
      ]);
    installBehaviors({ mySql: { listVersions } });

    const versions = await MySql.listVersions();

    expect(versions.map(({ number }) => number)).toEqual(["8.0", "5.7"]);
    await expect(MySql.getLatestVersion()).resolves.toMatchObject({
      number: "8.0",
    });
  });

  test("exposes derived database data", () => {
    const database = new MySqlDetailed(
      buildMySqlDatabaseData({
        finalizers: ["app:installation:app-installation-id"],
        storageUsageInBytes: 4096,
        name: "db_user_abc123",
      }),
    );
    const withoutFinalizers = new MySqlDetailed(buildMySqlDatabaseData());

    expect(database.type).toBe("MySQL");
    expect(database.shortId).toBe("abc123");
    expect(database.storageUsage.value).toBe(4096);
    expect(database.linkedAppInstallations).toHaveLength(1);
    expect(database.linkedAppInstallations[0]?.id).toBe("app-installation-id");
    expect(withoutFinalizers.linkedAppInstallations).toEqual([]);
    expect(withoutFinalizers.mainUser).toBeUndefined();
  });

  test("query returns a sorted, paginated list with ghostmaker identities", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [
        buildMySqlDatabaseData({ description: "b", id: "db-b" }),
        buildMySqlDatabaseData({ description: "a", id: "db-a" }),
      ],
      totalCount: 5,
    });
    installBehaviors({ mySql: { list } });
    const query = MySql.query({ project: Project.ofId("p-1") });

    const result = await query.execute();

    expect(result).toBeInstanceOf(MySqlList);
    expect(result).toBeInstanceOf(MySqlListQuery);
    expect(result).toBeInstanceOf(ListQueryModel);
    expect(result.items).toBeDefined();
    expect(result.items.map(({ description }) => description)).toEqual([
      "a",
      "b",
    ]);
    expect(result.items.every((item) => item instanceof MySqlListItem)).toBe(
      true,
    );
    expect(result.totalCount).toBe(5);
    await expect(query.getTotalCount()).resolves.toBe(5);
  });

  test("list items preserve their reference and data identities", () => {
    const item = new MySqlListItem(buildMySqlDatabaseData());

    expect(item).toBeInstanceOf(MySqlListItem);
    expect(item).toBeInstanceOf(MySqlCommon);
    expect(item).toBeInstanceOf(MySql);
    expect(item).toBeInstanceOf(ReferenceModel);
    expect(item.data).toBeDefined();
  });

  test("aggregateMetaData pins the cache identity", () => {
    expect(MySql.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(MySql.aggregateMetaData.domain).toBe("database");
    expect(MySql.aggregateMetaData.aggregate).toBe("mysqldb");
  });

  test("findCommon delegates to the detailed variant on a bare reference", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildMySqlDatabaseData({ id: "db-1" }))
      .mockResolvedValueOnce(undefined);
    installBehaviors({ mySql: { find } });

    const found = await MySql.ofId("db-1").findCommon();
    const missing = await MySql.ofId("missing").findCommon();

    expect(find).toHaveBeenNthCalledWith(1, "db-1");
    expect(found).toBeInstanceOf(MySqlDetailed);
    expect(found?.id).toBe("db-1");
    expect(missing).toBeUndefined();
  });

  test("getCommon resolves on a bare reference and throws when missing", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildMySqlDatabaseData({ id: "db-1" }))
      .mockResolvedValueOnce(undefined);
    installBehaviors({ mySql: { find } });

    await expect(MySql.ofId("db-1").getCommon()).resolves.toBeInstanceOf(
      MySqlDetailed,
    );
    await expect(MySql.ofId("missing").getCommon()).rejects.toThrow();
  });

  test("findCommon/getCommon on a materialized model return it without another behavior call", () => {
    const find = vi.fn();
    installBehaviors({ mySql: { find } });
    const detailed = new MySqlDetailed(buildMySqlDatabaseData({ id: "db-1" }));
    const item = new MySqlListItem(buildMySqlDatabaseData({ id: "db-2" }));

    expect(detailed.findCommon()).toBe(detailed);
    expect(detailed.getCommon()).toBe(detailed);
    expect(item.findCommon()).toBe(item);
    expect(item.getCommon()).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });
});

describe("MySqlCharset", () => {
  test("query returns charset list items", async () => {
    const listCharsets = vi.fn().mockResolvedValue({
      items: [buildMySqlCharsetListItemData({ name: "utf8mb4" })],
      totalCount: 1,
    });
    installBehaviors({ mySql: { listCharsets } });

    const result = await MySqlCharset.query().execute();

    expect(result).toBeInstanceOf(MySqlCharsetList);
    expect(result.items[0]).toBeInstanceOf(MySqlCharsetListItem);
    expect(result.items[0]?.name).toBe("utf8mb4");
    expect(result.items[0]?.collations).toEqual(["utf8mb4_general_ci"]);
  });
});
