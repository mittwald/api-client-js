import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

import type {
  BackupScheduleCreateRequestData,
  BackupScheduleUpdateRequestData,
} from "./types.js";

import { buildBackupScheduleData } from "../../testing/builders/buildBackupScheduleData.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import { Project } from "../../project/index.js";
import {
  BackupScheduleDetailed,
  BackupScheduleListItem,
  BackupScheduleList,
  BackupSchedule,
} from "./BackupSchedule.js";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

afterEach(resetBehaviors);

describe("BackupSchedule lookup and creation", () => {
  test("find delegates and returns a detailed schedule", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildBackupScheduleData({ id: "s-1" }));
    installBehaviors({ backupSchedule: { find } });

    const result = await BackupSchedule.find("s-1");

    expect(find).toHaveBeenCalledWith("s-1");
    expect(result).toBeInstanceOf(BackupScheduleDetailed);
    expect(result?.id).toBe("s-1");
  });

  test("find returns undefined for a missing schedule", async () => {
    installBehaviors({
      backupSchedule: { find: vi.fn().mockResolvedValue(undefined) },
    });

    expect(await BackupSchedule.find("missing")).toBeUndefined();
  });

  test("get returns a detailed schedule", async () => {
    installBehaviors({
      backupSchedule: {
        find: vi
          .fn()
          .mockResolvedValue(buildBackupScheduleData({ id: "s-2" })),
      },
    });

    const result = await BackupSchedule.get("s-2");

    expect(result).toBeInstanceOf(BackupScheduleDetailed);
    expect(result.id).toBe("s-2");
  });

  test("get throws ObjectNotFoundError for a missing schedule", async () => {
    installBehaviors({
      backupSchedule: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(BackupSchedule.get("missing")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("create delegates and returns a schedule reference", async () => {
    const create = vi
      .fn()
      .mockResolvedValue(buildBackupScheduleData({ id: "created-id" }));
    const data: BackupScheduleCreateRequestData = {
      description: "nightly",
      schedule: "0 3 * * *",
      ttl: "P7D",
    };
    installBehaviors({ backupSchedule: { create } });

    const result = await BackupSchedule.create(Project.ofId("p-1"), data);

    expect(create).toHaveBeenCalledWith("p-1", data);
    expect(result).toBeInstanceOf(BackupSchedule);
    expect(result.id).toBe("created-id");
  });
});

describe("BackupSchedule list query", () => {
  test("materializes items and derives total count", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [
        buildBackupScheduleData({ id: "s-1" }),
        buildBackupScheduleData({ id: "s-2" }),
      ],
      totalCount: 2,
    });
    installBehaviors({ backupSchedule: { list } });

    const result = await BackupSchedule.query(Project.ofId("p-1")).execute();

    expect(result).toBeInstanceOf(BackupScheduleList);
    expect(result.items).toHaveLength(2);
    expect(result.items[0]).toBeInstanceOf(BackupScheduleListItem);
    expect(result.totalCount).toBe(2);
    expect(list).toHaveBeenCalledWith("p-1", expect.any(Object));
  });
});

describe("BackupSchedule common variant", () => {
  test("findCommon on a reference delegates to findDetailed", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildBackupScheduleData({ id: "s-1" }));
    installBehaviors({ backupSchedule: { find } });

    const result = await BackupSchedule.ofId("s-1").findCommon();

    expect(find).toHaveBeenCalledWith("s-1");
    expect(result).toBeInstanceOf(BackupScheduleDetailed);
    expect(result?.id).toBe("s-1");
  });

  test("findCommon on a reference resolves undefined when not found", async () => {
    installBehaviors({
      backupSchedule: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      BackupSchedule.ofId("missing").findCommon(),
    ).resolves.toBeUndefined();
  });

  test("getCommon on a reference delegates and returns the detailed variant", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildBackupScheduleData({ id: "s-3" }));
    installBehaviors({ backupSchedule: { find } });

    const result = await BackupSchedule.ofId("s-3").getCommon();

    expect(find).toHaveBeenCalledWith("s-3");
    expect(result).toBeInstanceOf(BackupScheduleDetailed);
    expect(result.id).toBe("s-3");
  });

  test("getCommon on a missing reference rejects with ObjectNotFoundError", async () => {
    installBehaviors({
      backupSchedule: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      BackupSchedule.ofId("missing").getCommon(),
    ).rejects.toBeInstanceOf(ObjectNotFoundError);
  });

  test("findCommon and getCommon on a materialized model do not re-fetch", async () => {
    const find = vi.fn();
    installBehaviors({ backupSchedule: { find } });
    const item = new BackupScheduleListItem(
      buildBackupScheduleData({ id: "s-4" }),
    );

    await expect(item.findCommon()).resolves.toBe(item);
    await expect(item.getCommon()).resolves.toBe(item);
    expect(find).not.toHaveBeenCalled();
  });
});

describe("BackupSchedule data", () => {
  test("maps data and project reference", () => {
    const item = new BackupScheduleListItem(
      buildBackupScheduleData({
        description: "nightly",
        schedule: "0 4 * * *",
        isSystemBackup: true,
        projectId: "p-1",
        ttl: "P7D",
      }),
    );

    expect(item.description).toBe("nightly");
    expect(item.ttl).toBe("P7D");
    expect(item.schedule).toBe("0 4 * * *");
    expect(item.isSystemBackup).toBe(true);
    expect(item.project).toBeInstanceOf(Project);
    expect(item.project.id).toBe("p-1");
  });

  test("leaves absent optional fields undefined", () => {
    const item = new BackupScheduleListItem(
      buildBackupScheduleData({
        description: undefined,
        schedule: undefined,
        ttl: undefined,
      }),
    );

    expect(item.description).toBeUndefined();
    expect(item.ttl).toBeUndefined();
    expect(item.schedule).toBeUndefined();
  });

  test("findCommon and getCommon resolve to an existing common model", async () => {
    const item = new BackupScheduleListItem(buildBackupScheduleData());

    await expect(item.findCommon()).resolves.toBe(item);
    await expect(item.getCommon()).resolves.toBe(item);
  });
});

describe("BackupSchedule mutations", () => {
  test("update delegates with id and data", async () => {
    const update = vi.fn().mockResolvedValue(undefined);
    const data: BackupScheduleUpdateRequestData = { description: "updated" };
    installBehaviors({ backupSchedule: { update } });

    await BackupSchedule.ofId("s-1").update(data);

    expect(update).toHaveBeenCalledWith("s-1", data);
  });

  test("delete delegates with the id", async () => {
    const deleteBehavior = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ backupSchedule: { delete: deleteBehavior } });

    await BackupSchedule.ofId("s-1").delete();

    expect(deleteBehavior).toHaveBeenCalledWith("s-1");
  });
});
