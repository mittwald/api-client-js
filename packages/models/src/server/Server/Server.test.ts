import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import { ListQueryModel, ReferenceModel } from "../../base/index.js";
import { config } from "../../config/config.js";
import {
  buildServerListItemData,
  installBehaviors,
  resetBehaviors,
} from "../../testing/index.js";
import {
  ServerListQuery,
  ServerDetailed,
  ServerListItem,
  ServerCommon,
  ServerList,
  Server,
} from "./Server.js";

afterEach(resetBehaviors);

describe("Server list query", () => {
  test("applies the default pagination limit", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildServerListItemData({ id: "s-1" })],
      totalCount: 1,
    });
    installBehaviors({ server: { list } });

    const result = await Server.query().execute();

    expect(result).toBeInstanceOf(ServerList);
    expect(result.items).toHaveLength(1);
    expect(result.items[0]).toBeInstanceOf(ServerListItem);
    expect(result.totalCount).toBe(1);
    expect(list).toHaveBeenCalledWith(
      expect.objectContaining({ limit: config.defaultPaginationLimit }),
    );
  });

  test("uses an explicit pagination limit instead of the default", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ server: { list } });

    await Server.query({ limit: 5 }).execute();

    expect(5).not.toBe(config.defaultPaginationLimit);
    expect(list).toHaveBeenCalledWith(expect.objectContaining({ limit: 5 }));
  });

  test("materializes behavior items and total count", async () => {
    const items = [
      buildServerListItemData({ id: "s-1" }),
      buildServerListItemData({ id: "s-2" }),
    ];
    const list = vi.fn().mockResolvedValue({ totalCount: 7, items });
    installBehaviors({ server: { list } });

    const result = await Server.query({ limit: 2 }).execute();

    expect(result.items).toHaveLength(2);
    expect(result.items).toEqual([
      expect.objectContaining({ id: "s-1" }),
      expect.objectContaining({ id: "s-2" }),
    ]);
    expect(result.items.every((item) => item instanceof ServerListItem)).toBe(
      true,
    );
    expect(result.totalCount).toBe(7);
  });
});

describe("Server ghostmaker identity", () => {
  // Regression net for the planned polytype-to-mixin migration (ADR-0004).
  test("preserves the item composition chain", () => {
    const item = new ServerListItem(buildServerListItemData());

    expect(item).toBeInstanceOf(ServerListItem);
    expect(item).toBeInstanceOf(ServerCommon);
    expect(item).toBeInstanceOf(Server);
    expect(item).toBeInstanceOf(ReferenceModel);
    expect(item.data).toBeDefined();
  });

  test("preserves the list query composition chain", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildServerListItemData()],
      totalCount: 1,
    });
    installBehaviors({ server: { list } });

    const result = await Server.query().execute();

    expect(result).toBeInstanceOf(ServerList);
    expect(result).toBeInstanceOf(ServerListQuery);
    expect(result).toBeInstanceOf(ListQueryModel);
    expect(result.items).toBeDefined();
  });
});

describe("Server detail lookup", () => {
  test("find delegates to the behavior and returns a detailed server", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildServerListItemData({ id: "s-1" }));
    installBehaviors({ server: { find } });

    const result = await Server.find("s-1");

    expect(find).toHaveBeenCalledWith("s-1", undefined);
    expect(result).toBeInstanceOf(ServerDetailed);
    expect(result?.id).toBe("s-1");
  });

  test("find returns undefined when the server is missing", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ server: { find } });

    await expect(Server.find("missing")).resolves.toBeUndefined();
    expect(find).toHaveBeenCalledWith("missing", undefined);
  });

  test("get returns a detailed server", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildServerListItemData({ id: "s-2" }));
    installBehaviors({ server: { find } });

    const result = await Server.get("s-2");

    expect(result).toBeInstanceOf(ServerDetailed);
    expect(result.id).toBe("s-2");
  });

  test("get rejects with ObjectNotFoundError when the server is missing", async () => {
    installBehaviors({
      server: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(Server.get("missing")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("findDetailed and getDetailed delegate with the reference id", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildServerListItemData({ id: "s-3" }));
    installBehaviors({ server: { find } });
    const server = Server.ofId("s-3");

    await expect(server.findDetailed()).resolves.toBeInstanceOf(ServerDetailed);
    await expect(server.getDetailed()).resolves.toBeInstanceOf(ServerDetailed);
    expect(find).toHaveBeenNthCalledWith(1, "s-3", undefined);
    expect(find).toHaveBeenNthCalledWith(2, "s-3", undefined);
  });

  test("findCommon and getCommon reuse an already common instance without calling the behavior", async () => {
    const find = vi.fn().mockResolvedValue(buildServerListItemData());
    installBehaviors({ server: { find } });
    const item = new ServerListItem(buildServerListItemData({ id: "s-4" }));

    await expect(item.findCommon()).resolves.toBe(item);
    await expect(item.getCommon()).resolves.toBe(item);
    expect(find).not.toHaveBeenCalled();
  });

  test("findCommon delegates to the detailed lookup for a bare reference", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildServerListItemData({ id: "s-5" }));
    installBehaviors({ server: { find } });

    const result = await Server.ofId("s-5").findCommon();

    expect(result).toBeInstanceOf(ServerDetailed);
    expect(result).toBeInstanceOf(ServerCommon);
    expect(find).toHaveBeenCalledWith("s-5", undefined);
  });

  test("getCommon delegates to the detailed lookup for a bare reference", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildServerListItemData({ id: "s-6" }));
    installBehaviors({ server: { find } });

    const result = await Server.ofId("s-6").getCommon();

    expect(result).toBeInstanceOf(ServerDetailed);
    expect(result.id).toBe("s-6");
  });

  test("findCommon resolves undefined for a missing bare reference", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ server: { find } });

    await expect(Server.ofId("missing").findCommon()).resolves.toBeUndefined();
  });

  test("getCommon rejects with ObjectNotFoundError for a missing bare reference", async () => {
    installBehaviors({
      server: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(Server.ofId("missing").getCommon()).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });
});

describe("Server aggregate metadata", () => {
  test("pins the domain and aggregate identity", () => {
    expect(Server.aggregateMetaData).toMatchObject({
      aggregate: "placementgroup",
      domain: "project",
    });
  });

  test("findAggregate materializes metadata only for an id", () => {
    expect(Server.findAggregate("s-1")).toEqual({
      id: "s-1",
      ...Server.aggregateMetaData,
    });
    expect(Server.findAggregate(undefined)).toBeUndefined();
  });
});

describe("Server optional and derived properties", () => {
  test("omits the avatar when no image reference is present", () => {
    const item = new ServerListItem(
      buildServerListItemData({ imageRefId: undefined }),
    );

    expect(item.avatar).toBeUndefined();
  });

  test("materializes the avatar file from the image reference", () => {
    const item = new ServerListItem(
      buildServerListItemData({ imageRefId: "file-1" }),
    );

    expect(item.avatar?.id).toBe("file-1");
  });

  test("leaves cluster name and disabled reason undefined when absent", () => {
    const item = new ServerListItem(
      buildServerListItemData({
        disabledReason: undefined,
        clusterName: undefined,
      }),
    );

    expect(item.clusterName).toBeUndefined();
    expect(item.disabledReason).toBeUndefined();
  });

  test("derives numeric capacity from machine type and storage strings", () => {
    const item = new ServerListItem(
      buildServerListItemData({
        machineType: { name: "big-machine", memory: "8Gi", cpu: "4" },
        storage: "50Gi",
      }),
    );

    expect(item.vcpu).toBe(4);
    expect(item.ram).toBe(8);
    expect(item.storage).toBe(50);
  });
});
