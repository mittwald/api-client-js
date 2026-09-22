import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildRedisDatabaseData } from "../../testing/builders/buildRedisDatabaseData";
import { buildRedisVersionData } from "../../testing/builders/buildRedisVersionData";
import { ListQueryModel, ReferenceModel } from "../../base";
import { AggregateMetaData, Bytes } from "../../common";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";
import { Project } from "../../project";
import {
  RedisListQuery,
  RedisDetailed,
  RedisListItem,
  RedisList,
  Redis,
} from "./Redis";

afterEach(resetBehaviors);

describe("Redis", () => {
  test("find delegates and maps found and missing databases", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildRedisDatabaseData({ id: "redis-1" }))
      .mockResolvedValueOnce(undefined);
    installBehaviors({ redis: { find } });

    const found = await Redis.find("redis-1");
    const missing = await Redis.find("missing");

    expect(find).toHaveBeenNthCalledWith(1, "redis-1");
    expect(found).toBeInstanceOf(RedisDetailed);
    expect(found?.id).toBe("redis-1");
    expect(missing).toBeUndefined();
  });

  test("get returns a detailed database or throws when it is missing", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildRedisDatabaseData({ id: "redis-1" }))
      .mockResolvedValueOnce(undefined);
    installBehaviors({ redis: { find } });

    await expect(Redis.get("redis-1")).resolves.toBeInstanceOf(RedisDetailed);
    await expect(Redis.get("missing")).rejects.toThrow();
  });

  test("create delegates and returns a reference", async () => {
    const create = vi.fn().mockResolvedValue({ id: "redis-new" });
    installBehaviors({ redis: { create } });
    const data = {
      description: "created redis",
      version: "7.0",
    };

    const result = await Redis.create(Project.ofId("p-1"), data);

    expect(create).toHaveBeenCalledWith("p-1", data);
    expect(result).toBeInstanceOf(Redis);
    expect(result.id).toBe("redis-new");
  });

  test("listVersions delegates, excludes disabled versions, and sorts descending", async () => {
    const listVersions = vi
      .fn()
      .mockResolvedValue([
        buildRedisVersionData({ disabled: true, number: "1.0" }),
        buildRedisVersionData({ number: "6.0", name: "6.0", id: "v-60" }),
        buildRedisVersionData({ number: "7.0", name: "7.0", id: "v-70" }),
      ]);
    installBehaviors({ redis: { listVersions } });
    const project = Project.ofId("p-1");

    const versions = await Redis.listVersions(project);

    expect(listVersions).toHaveBeenCalledWith("p-1");
    expect(versions.map(({ number }) => number)).toEqual(["7.0", "6.0"]);
    await expect(Redis.getLatestVersion(project)).resolves.toMatchObject({
      number: "7.0",
    });
  });

  test("exposes derived database data", () => {
    const database = new RedisDetailed(
      buildRedisDatabaseData({
        configuration: {
          maxMemoryPolicy: "noeviction",
          maxMemory: "536870912",
          additionalFlags: [],
          persistent: true,
        },
        finalizers: ["app:installation:app-installation-id"],
        storageUsageInBytes: 4096,
      }),
    );
    const withoutConfiguration = new RedisDetailed(
      buildRedisDatabaseData({ configuration: undefined }),
    );
    const withoutFinalizers = new RedisDetailed(buildRedisDatabaseData());

    expect(database.type).toBe("Redis");
    expect(database.connectionString).toBe("redis://redis.example.com:6379");
    expect(database.configuration?.persistent).toBe(true);
    expect(database.configuration?.maxMemory).toBeInstanceOf(Bytes);
    expect(database.configuration?.maxMemory?.value).toBe(512 * 1024 * 1024);
    expect(database.configuration?.maxMemoryPolicy).toBe("noeviction");
    expect(withoutConfiguration.configuration).toBeUndefined();
    expect(database.linkedAppInstallations[0]?.id).toBe("app-installation-id");
    expect(withoutFinalizers.linkedAppInstallations).toEqual([]);
    expect(database.storageUsage.value).toBe(4096);
  });

  test("query returns a sorted, paginated list with ghostmaker identities", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [
        buildRedisDatabaseData({ description: "b", id: "redis-b" }),
        buildRedisDatabaseData({ description: "a", id: "redis-a" }),
      ],
      totalCount: 3,
    });
    installBehaviors({ redis: { list } });
    const query = Redis.query({ project: Project.ofId("p-1") });

    const result = await query.execute();

    expect(result).toBeInstanceOf(RedisList);
    expect(result).toBeInstanceOf(RedisListQuery);
    expect(result).toBeInstanceOf(ListQueryModel);
    expect(result.items).toBeDefined();
    expect(result.items.map(({ description }) => description)).toEqual([
      "a",
      "b",
    ]);
    expect(result.items.every((item) => item instanceof RedisListItem)).toBe(
      true,
    );
    expect(result.totalCount).toBe(3);
    await expect(query.getTotalCount()).resolves.toBe(3);

    const item = result.items[0];
    expect(item).toBeInstanceOf(Redis);
    expect(item).toBeInstanceOf(ReferenceModel);
    expect(item.data).toBeDefined();
  });

  test("aggregateMetaData pins the cache identity", () => {
    expect(Redis.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(Redis.aggregateMetaData.domain).toBe("database");
    expect(Redis.aggregateMetaData.aggregate).toBe("redisdb");
  });

  test("findCommon delegates to the detailed variant on a bare reference", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildRedisDatabaseData({ id: "redis-1" }))
      .mockResolvedValueOnce(undefined);
    installBehaviors({ redis: { find } });

    const found = await Redis.ofId("redis-1").findCommon();
    const missing = await Redis.ofId("missing").findCommon();

    expect(find).toHaveBeenNthCalledWith(1, "redis-1");
    expect(found).toBeInstanceOf(RedisDetailed);
    expect(found?.id).toBe("redis-1");
    expect(missing).toBeUndefined();
  });

  test("getCommon resolves on a bare reference and throws when missing", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildRedisDatabaseData({ id: "redis-1" }))
      .mockResolvedValueOnce(undefined);
    installBehaviors({ redis: { find } });

    await expect(Redis.ofId("redis-1").getCommon()).resolves.toBeInstanceOf(
      RedisDetailed,
    );
    await expect(Redis.ofId("missing").getCommon()).rejects.toThrow();
  });

  test("findCommon/getCommon on a materialized model return it without another behavior call", () => {
    const find = vi.fn();
    installBehaviors({ redis: { find } });
    const detailed = new RedisDetailed(
      buildRedisDatabaseData({ id: "redis-1" }),
    );
    const item = new RedisListItem(buildRedisDatabaseData({ id: "redis-2" }));

    expect(detailed.findCommon()).toBe(detailed);
    expect(detailed.getCommon()).toBe(detailed);
    expect(item.findCommon()).toBe(item);
    expect(item.getCommon()).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });

  test("configuration derives optional fields defensively when absent", () => {
    const withPartialConfiguration = new RedisDetailed(
      buildRedisDatabaseData({ configuration: {} }),
    );

    expect(withPartialConfiguration.configuration).toBeDefined();
    expect(withPartialConfiguration.configuration?.maxMemory).toBeUndefined();
    expect(
      withPartialConfiguration.configuration?.maxMemoryPolicy,
    ).toBeUndefined();
    expect(withPartialConfiguration.configuration?.persistent).toBe(false);
  });
});
