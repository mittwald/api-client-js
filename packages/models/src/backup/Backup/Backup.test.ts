import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, test, vi } from "vitest";
import { DateTime } from "luxon";

import type {
  BackupCreatePathRestoreRequestData,
  BackupCreateExportRequestData,
  BackupCreateRequestData,
} from "./types.js";

import { buildBackupExportData } from "../../testing/builders/buildBackupExportData.js";
import {
  BackupDetailed,
  BackupListItem,
  BackupList,
  Backup,
} from "./Backup.js";
import { buildBackupData } from "../../testing/builders/buildBackupData.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import { BackupSchedule } from "../BackupSchedule/index.js";
import { AggregateMetaData } from "../../common/index.js";
import { BackupExport } from "./BackupExport.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import { Project } from "../../project/index.js";

vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

afterEach(resetBehaviors);

describe("Backup lookup and creation", () => {
  test("find delegates and returns a detailed backup", async () => {
    const find = vi.fn().mockResolvedValue(buildBackupData({ id: "b-1" }));
    installBehaviors({ backup: { find } });

    const result = await Backup.find("b-1");

    expect(find).toHaveBeenCalledWith("b-1");
    expect(result).toBeInstanceOf(BackupDetailed);
    expect(result?.id).toBe("b-1");
  });

  test("find returns undefined for a missing backup", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ backup: { find } });

    expect(await Backup.find("missing")).toBeUndefined();
  });

  test("get returns a detailed backup", async () => {
    installBehaviors({
      backup: {
        find: vi.fn().mockResolvedValue(buildBackupData({ id: "b-2" })),
      },
    });

    const result = await Backup.get("b-2");

    expect(result).toBeInstanceOf(BackupDetailed);
    expect(result.id).toBe("b-2");
  });

  test("get throws ObjectNotFoundError for a missing backup", async () => {
    installBehaviors({
      backup: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(Backup.get("missing")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("create delegates and returns a backup reference", async () => {
    const create = vi.fn().mockResolvedValue({ id: "created-id" });
    const data: BackupCreateRequestData = {
      expirationTime: "2024-02-01T00:00:00.000Z",
      description: "daily",
    };
    const project = Project.ofId("p-1");
    installBehaviors({ backup: { create } });

    const result = await Backup.create(project, data);

    expect(create).toHaveBeenCalledWith("p-1", data);
    expect(result).toBeInstanceOf(Backup);
    expect(result.id).toBe("created-id");
  });
});

describe("Backup list query", () => {
  test("materializes items and applies the default pagination limit", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildBackupData({ id: "b-1" })],
      totalCount: 7,
    });
    installBehaviors({ backup: { list } });

    const result = await Backup.query({
      project: Project.ofId("p-1"),
    }).execute();

    expect(result).toBeInstanceOf(BackupList);
    expect(result.items[0]).toBeInstanceOf(BackupListItem);
    expect(result.totalCount).toBe(7);
    expect(list).toHaveBeenCalledWith("p-1", {});
  });

  test("passes through an explicit pagination limit", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ backup: { list } });

    await Backup.query({
      project: Project.ofId("p-1"),
      limit: 5,
    }).execute();

    expect(list).toHaveBeenCalledWith(
      "p-1",
      expect.objectContaining({ limit: 5 }),
    );
  });

  test("getTotalCount returns the behavior total count", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 12, items: [] });
    installBehaviors({ backup: { list } });

    const result = await Backup.query({
      project: Project.ofId("p-1"),
    }).getTotalCount();

    expect(result).toBe(12);
  });
});

describe("Backup common variant", () => {
  test("findCommon on a reference delegates to findDetailed", async () => {
    const find = vi.fn().mockResolvedValue(buildBackupData({ id: "b-1" }));
    installBehaviors({ backup: { find } });

    const result = await Backup.ofId("b-1").findCommon();

    expect(find).toHaveBeenCalledWith("b-1");
    expect(result).toBeInstanceOf(BackupDetailed);
    expect(result?.id).toBe("b-1");
  });

  test("findCommon on a reference returns undefined when not found", async () => {
    installBehaviors({
      backup: { find: vi.fn().mockResolvedValue(undefined) },
    });

    expect(await Backup.ofId("missing").findCommon()).toBeUndefined();
  });

  test("getCommon on a reference delegates and returns the detailed variant", async () => {
    const find = vi.fn().mockResolvedValue(buildBackupData({ id: "b-3" }));
    installBehaviors({ backup: { find } });

    const result = await Backup.ofId("b-3").getCommon();

    expect(find).toHaveBeenCalledWith("b-3");
    expect(result).toBeInstanceOf(BackupDetailed);
    expect(result.id).toBe("b-3");
  });

  test("getCommon on a missing reference throws ObjectNotFoundError", async () => {
    installBehaviors({
      backup: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(Backup.ofId("missing").getCommon()).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("findCommon and getCommon on a materialized model do not re-fetch", () => {
    const find = vi.fn();
    installBehaviors({ backup: { find } });
    const item = new BackupListItem(buildBackupData({ id: "b-4" }));

    expect(item.findCommon()).toBe(item);
    expect(item.getCommon()).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });
});

describe("Backup aggregate metadata", () => {
  test("carries the projectbackup aggregate identity", () => {
    expect(Backup.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(Backup.aggregateMetaData.domain).toBe("backup");
    expect(Backup.aggregateMetaData.aggregate).toBe("projectbackup");
  });
});

describe("Backup data", () => {
  test("maps dates and derived values", () => {
    const item = new BackupListItem(
      buildBackupData({
        requestedAt: "2024-01-03T00:00:00.000Z",
        createdAt: "2024-01-02T00:00:00.000Z",
        expiresAt: "2024-01-04T00:00:00.000Z",
        status: "Completed",
        deletable: true,
      }),
    );

    expect(item.createdAt).toBeInstanceOf(DateTime);
    expect(item.createdAt?.isValid).toBe(true);
    expect(item.requestedAt?.toUTC().toISO()).toBe("2024-01-03T00:00:00.000Z");
    expect(item.expiresAt).toBeInstanceOf(DateTime);
    expect(item.isCompleted).toBe(true);
    expect(item.isDeletable).toBe(true);
  });

  test("leaves absent dates undefined and maps non-completed status", () => {
    const item = new BackupListItem(
      buildBackupData({
        requestedAt: undefined,
        createdAt: undefined,
        expiresAt: undefined,
        status: "Pending",
      }),
    );

    expect(item.createdAt).toBeUndefined();
    expect(item.requestedAt).toBeUndefined();
    expect(item.expiresAt).toBeUndefined();
    expect(item.isCompleted).toBe(false);
  });

  test("maps schedule, export, and project references", () => {
    const item = new BackupListItem(
      buildBackupData({
        export: buildBackupExportData(),
        projectId: "p-1",
        parentId: "s-1",
      }),
    );

    expect(item.schedule).toBeInstanceOf(BackupSchedule);
    expect(item.schedule?.id).toBe("s-1");
    expect(item.export).toBeInstanceOf(BackupExport);
    expect(item.project).toBeInstanceOf(Project);
    expect(item.project.id).toBe("p-1");
  });

  test("leaves absent schedule and export undefined", () => {
    const item = new BackupListItem(
      buildBackupData({ parentId: undefined, export: undefined }),
    );

    expect(item.schedule).toBeUndefined();
    expect(item.export).toBeUndefined();
  });

  test("exposes restore details only while a restore is running", () => {
    const running = new BackupListItem(
      buildBackupData({
        restore: {
          pathRestore: {
            determinedTargetPath: "/a",
            clearTargetPath: false,
            sourcePaths: ["/a"],
          },
          databaseRestores: [
            { databaseBackupDump: "dump-1", targetDatabaseId: "db-1" },
          ],
          phase: "running",
        },
      }),
    );
    const completed = new BackupListItem(
      buildBackupData({
        restore: {
          pathRestore: {
            determinedTargetPath: "/b",
            clearTargetPath: false,
            sourcePaths: ["/b"],
          },
          databaseRestores: [
            { databaseBackupDump: "dump-2", targetDatabaseId: "db-2" },
          ],
          phase: "completed",
        },
      }),
    );

    expect(running.restoreInProgress).toBe(true);
    expect(running.restorePaths).toEqual(["/a"]);
    expect(running.restoreDatabases).toEqual(["dump-1"]);
    expect(completed.restoreInProgress).toBe(false);
    expect(completed.restorePaths).toBeUndefined();
    expect(completed.restoreDatabases).toBeUndefined();
  });

  test("leaves restore details undefined when no restore is present", () => {
    const item = new BackupListItem(buildBackupData({ restore: undefined }));

    expect(item.restoreInProgress).toBe(false);
    expect(item.restorePaths).toBeUndefined();
    expect(item.restoreDatabases).toBeUndefined();
  });

  test("leaves restore paths and databases undefined while running without them", () => {
    const item = new BackupListItem(
      buildBackupData({ restore: { phase: "running" } }),
    );

    expect(item.restoreInProgress).toBe(true);
    expect(item.restorePaths).toBeUndefined();
    expect(item.restoreDatabases).toBeUndefined();
  });

  test("findCommon and getCommon return an existing common model", () => {
    const item = new BackupListItem(buildBackupData());

    expect(item.findCommon()).toBe(item);
    expect(item.getCommon()).toBe(item);
  });
});

describe("Backup export", () => {
  test("maps completed export data", () => {
    const result = new BackupExport(
      buildBackupExportData({
        expiresAt: "2024-01-01T00:00:00.000Z",
        downloadURL: "https://x",
        phase: "Completed",
        format: "zip",
      }),
    );

    expect(result.isCompleted).toBe(true);
    expect(result.isPending).toBe(false);
    expect(result.downloadUrl).toBe("https://x");
    expect(result.format).toBe("zip");
    expect(result.expiresAt).toBeInstanceOf(DateTime);
  });

  test("maps a pending export", () => {
    const result = new BackupExport(
      buildBackupExportData({ phase: "Pending" }),
    );

    expect(result.isCompleted).toBe(false);
    expect(result.isPending).toBe(true);
  });
});

describe("Backup mutations", () => {
  test("delegates mutations to their behaviors", async () => {
    const deleteBehavior = vi.fn().mockResolvedValue(undefined);
    const updateDescription = vi.fn().mockResolvedValue(undefined);
    const updateExpiryDate = vi.fn().mockResolvedValue(undefined);
    const createExport = vi.fn().mockResolvedValue(undefined);
    const createRestoreRequest = vi.fn().mockResolvedValue(undefined);
    const exportData: BackupCreateExportRequestData = { format: "zip" };
    const restoreData: BackupCreatePathRestoreRequestData = {
      pathRestore: {
        clearTargetPath: false,
        sourcePaths: ["/a"],
      },
    };
    installBehaviors({
      backup: {
        delete: deleteBehavior,
        createRestoreRequest,
        updateDescription,
        updateExpiryDate,
        createExport,
      },
    });
    const backup = Backup.ofId("b-1");

    await backup.delete();
    await backup.updateDescription("d");
    await backup.updateExpiryDate("2024-01-01T00:00:00.000Z");
    await backup.createExport(exportData);
    await backup.createRestoreRequest(restoreData);

    expect(deleteBehavior).toHaveBeenCalledWith("b-1");
    expect(updateDescription).toHaveBeenCalledWith("b-1", "d");
    expect(updateExpiryDate).toHaveBeenCalledWith(
      "b-1",
      "2024-01-01T00:00:00.000Z",
    );
    expect(createExport).toHaveBeenCalledWith("b-1", exportData);
    expect(createRestoreRequest).toHaveBeenCalledWith("b-1", restoreData);
  });
});
