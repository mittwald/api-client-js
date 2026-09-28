import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildVolumeData } from "../../testing/builders/buildVolumeData.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import { installBehaviors, resetBehaviors } from "../../testing/index.js";
import { volumeNameRegExp } from "./types.js";
import { Container } from "../Container/index.js";
import { Project } from "../../project/index.js";
import { Bytes } from "../../common/index.js";
import {
  VolumeListQuery,
  VolumeDetailed,
  VolumeListItem,
  VolumeList,
  Volume,
} from "./Volume.js";

afterEach(resetBehaviors);

describe("Volume", () => {
  test("find delegates to the behavior and returns a detailed volume", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildVolumeData({ stackId: "s-1", id: "v-1" }));
    installBehaviors({ volume: { find } });

    const result = await Volume.find("v-1", "s-1");

    expect(find).toHaveBeenCalledWith("v-1", "s-1");
    expect(result).toBeInstanceOf(VolumeDetailed);
    expect(result?.id).toBe("v-1");
  });

  test("find returns undefined when the volume is missing", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ volume: { find } });

    await expect(Volume.find("missing", "s-1")).resolves.toBeUndefined();
    expect(find).toHaveBeenCalledWith("missing", "s-1");
  });

  test("findCommon delegates to find and returns a detailed volume for a bare reference", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildVolumeData({ stackId: "s-c", id: "v-c" }));
    installBehaviors({ volume: { find } });

    const result = await Volume.ofId("v-c", "s-c").findCommon();

    expect(find).toHaveBeenCalledWith("v-c", "s-c");
    expect(result).toBeInstanceOf(VolumeDetailed);
    expect(result?.id).toBe("v-c");
  });

  test("findCommon maps a missing volume to undefined for a bare reference", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ volume: { find } });

    await expect(Volume.ofId("m", "s").findCommon()).resolves.toBeUndefined();
    expect(find).toHaveBeenCalledWith("m", "s");
  });

  test("getCommon rejects with ObjectNotFoundError for a missing bare reference", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ volume: { find } });

    await expect(Volume.ofId("m", "s").getCommon()).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("get returns a detailed volume", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildVolumeData({ stackId: "s-2", id: "v-2" }));
    installBehaviors({ volume: { find } });

    const result = await Volume.get("v-2", "s-2");

    expect(result).toBeInstanceOf(VolumeDetailed);
    expect(result.id).toBe("v-2");
  });

  test("get rejects with ObjectNotFoundError when the volume is missing", async () => {
    installBehaviors({
      volume: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(Volume.get("missing", "s-1")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("ofId keeps the stack id", () => {
    const volume = Volume.ofId("v-1", "s-1");

    expect(volume).toBeInstanceOf(Volume);
    expect(volume.stackId).toBe("s-1");
  });

  test("findDetailed and getDetailed delegate with id and stack id", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildVolumeData({ stackId: "s-3", id: "v-3" }));
    installBehaviors({ volume: { find } });
    const volume = Volume.ofId("v-3", "s-3");

    await expect(volume.findDetailed()).resolves.toBeInstanceOf(VolumeDetailed);
    await expect(volume.getDetailed()).resolves.toBeInstanceOf(VolumeDetailed);
    expect(find).toHaveBeenNthCalledWith(1, "v-3", "s-3");
    expect(find).toHaveBeenNthCalledWith(2, "v-3", "s-3");
  });

  test("findCommon and getCommon reuse an already materialized volume without re-fetching", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildVolumeData({ stackId: "s-r", id: "v-r" }));
    installBehaviors({ volume: { find } });
    const detailed = await Volume.get("v-r", "s-r");
    find.mockClear();

    await expect(detailed.findCommon()).resolves.toBe(detailed);
    await expect(detailed.getCommon()).resolves.toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("create delegates and returns a reference with the stack id", async () => {
    const create = vi.fn().mockResolvedValue({ id: "v-created" });
    installBehaviors({ volume: { create } });

    const result = await Volume.create("cache", "s-1");

    expect(create).toHaveBeenCalledWith("s-1", "cache");
    expect(result).toBeInstanceOf(Volume);
    expect(result.id).toBe("v-created");
    expect(result.stackId).toBe("s-1");
  });

  test("delete delegates with id and stack id", async () => {
    const deleteVolume = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ volume: { delete: deleteVolume } });

    await Volume.ofId("v-1", "s-1").delete();

    expect(deleteVolume).toHaveBeenCalledWith("v-1", "s-1");
  });

  test("generateRandomName appends four valid characters", () => {
    const initial = "volume";
    const result = Volume.generateRandomName(initial);

    expect(result).toMatch(volumeNameRegExp);
    expect(result.startsWith(`${initial}-`)).toBe(true);
    expect(result).toHaveLength(initial.length + 5);
  });

  test("query executes with the project and materializes list items", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildVolumeData({ id: "v-1" })],
      totalCount: 7,
    });
    installBehaviors({ volume: { list } });
    const query = Volume.query({
      project: Project.ofId("p-1"),
      limit: 5,
    });

    const result = await query.execute();

    expect(query).toBeInstanceOf(VolumeListQuery);
    expect(list).toHaveBeenCalledWith("p-1", { limit: 5 });
    expect(result).toBeInstanceOf(VolumeList);
    expect(result.items).toHaveLength(1);
    expect(result.items[0]).toBeInstanceOf(VolumeListItem);
    expect(result.totalCount).toBe(7);
  });

  test("refine merges query values", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ volume: { list } });

    await Volume.query({ project: Project.ofId("p-1"), limit: 10 })
      .refine({ page: 2 })
      .execute();

    expect(list).toHaveBeenCalledWith("p-1", { limit: 10, page: 2 });
  });

  test("getTotalCount refines the query with limit one", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 12, items: [] });
    installBehaviors({ volume: { list } });

    await expect(
      Volume.query({
        project: Project.ofId("p-1"),
        page: 3,
      }).getTotalCount(),
    ).resolves.toBe(12);
    expect(list).toHaveBeenCalledWith("p-1", { limit: 1, page: 3 });
  });

  test("exposes derived properties and linked containers", async () => {
    const data = buildVolumeData({
      linkedServices: ["container-a", "container-b"],
      storageUsageInBytes: 2048,
      name: "data-volume",
      stackId: "s-data",
      orphaned: true,
      id: "v-data",
    });
    installBehaviors({ volume: { find: vi.fn().mockResolvedValue(data) } });

    const volume = await Volume.get("v-data", "s-data");

    expect(volume.name).toBe("data-volume");
    expect(volume.storageUsageInBytes).toBe(2048);
    expect(volume.storageUsage).toBeInstanceOf(Bytes);
    expect(volume.orphaned).toBe(true);
    expect(volume.stack.id).toBe("s-data");
    expect(volume.linkedContainers).toHaveLength(2);
    expect(
      volume.linkedContainers.every((item) => item instanceof Container),
    ).toBe(true);
    expect(volume.linkedContainers.map((item) => item.id)).toEqual([
      "container-a",
      "container-b",
    ]);
    expect(
      volume.linkedContainers.every((item) => item.stackId === "s-data"),
    ).toBe(true);
  });

  test("linkedContainers is empty when linkedServices is absent", async () => {
    const data = buildVolumeData({ linkedServices: undefined });
    installBehaviors({ volume: { find: vi.fn().mockResolvedValue(data) } });

    const volume = await Volume.get(data.id, data.stackId);

    expect(volume.linkedContainers).toEqual([]);
  });
});
