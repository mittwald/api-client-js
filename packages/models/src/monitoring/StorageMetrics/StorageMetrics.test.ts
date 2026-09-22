import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";
import { DateTime } from "luxon";

import { StorageMetricsDetailed, StorageMetrics } from "./StorageMetrics";
import {
  buildStorageStatisticsCategoryData,
  buildStorageMetricsData,
} from "../../testing/builders/buildStorageMetricsData";
import { ReferenceModel } from "../../base";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";
import { Project } from "../../project";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

afterEach(resetBehaviors);

describe("StorageMetrics reference and delegation", () => {
  test("ofId creates a storage metrics reference with its kind", () => {
    const metrics = StorageMetrics.ofId("sm-1", "project");

    expect(metrics).toBeInstanceOf(StorageMetrics);
    expect(metrics).toBeInstanceOf(ReferenceModel);
    expect(metrics.id).toBe("sm-1");
    expect(metrics.kind).toBe("project");
  });

  test.each([
    ["project", "findByProject"],
    ["server", "findByServer"],
  ] as const)("find delegates %s metrics to %s", async (kind, behaviorName) => {
    const findByProject = vi.fn().mockResolvedValue(buildStorageMetricsData());
    const findByServer = vi.fn().mockResolvedValue(buildStorageMetricsData());
    installBehaviors({ storageMetrics: { findByProject, findByServer } });

    const result = await StorageMetrics.find("sm-1", kind);

    expect({ findByProject, findByServer }[behaviorName]).toHaveBeenCalledWith(
      "sm-1",
    );
    expect(
      behaviorName === "findByProject" ? findByServer : findByProject,
    ).not.toHaveBeenCalled();
    expect(result).toBeInstanceOf(StorageMetricsDetailed);
    expect(result?.data).toBeDefined();
  });

  test("find returns undefined when the behavior finds no metrics", async () => {
    const findByServer = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ storageMetrics: { findByServer } });

    await expect(
      StorageMetrics.find("missing", "server"),
    ).resolves.toBeUndefined();
  });

  test("get returns detailed metrics when found", async () => {
    const findByProject = vi
      .fn()
      .mockResolvedValue(
        buildStorageMetricsData({ kind: "project", id: "sm-2" }),
      );
    installBehaviors({ storageMetrics: { findByProject } });

    const result = await StorageMetrics.get("sm-2", "project");

    expect(findByProject).toHaveBeenCalledWith("sm-2");
    expect(result).toBeInstanceOf(StorageMetricsDetailed);
    expect(result.id).toBe("sm-2");
  });

  test("get rejects when no metrics are found", async () => {
    installBehaviors({
      storageMetrics: { findByServer: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(StorageMetrics.get("missing", "server")).rejects.toBeDefined();
  });
});

describe("StorageMetricsDetailed", () => {
  test("derives notification state and total usage", () => {
    const active = new StorageMetricsDetailed(
      buildStorageMetricsData({
        notificationThresholdInBytes: 500,
        meta: { totalUsageInBytes: 250 },
      }),
    );
    const inactive = new StorageMetricsDetailed(buildStorageMetricsData());

    expect(active.notificationActive).toBe(true);
    expect(active.notificationThreshold?.value).toBe(500);
    expect(active.totalStorageUsage.value).toBe(250);
    expect(inactive.notificationActive).toBe(false);
    expect(inactive.notificationThreshold).toBeUndefined();
  });

  test.each([
    [100, true, false],
    [95, false, true],
    [50, false, false],
  ])(
    "derives exceeded states at %s percent",
    (percentage, storageExceeded, storageAlmostExceeded) => {
      const metrics = new StorageMetricsDetailed(
        buildStorageMetricsData({
          meta: { totalUsageInPercentage: percentage, totalUsageInBytes: 100 },
        }),
      );

      expect(metrics.storageExceeded).toBe(storageExceeded);
      expect(metrics.storageAlmostExceeded).toBe(storageAlmostExceeded);
    },
  );

  test("derives the storage limit and its constrained suggestion", () => {
    const withoutLimit = new StorageMetricsDetailed(buildStorageMetricsData());
    const withLimit = new StorageMetricsDetailed(
      buildStorageMetricsData({
        meta: { totalUsageInBytes: 100, limitInBytes: 1000 },
      }),
    );

    expect(withoutLimit.storageLimit).toBeUndefined();
    expect(withLimit.storageLimit?.value).toBe(1000);
    expect(withLimit.notificationThresholdSuggestion.value).toBe(1000);
  });

  test("suggests one GiB when usage below one GiB has no limit", () => {
    const metrics = new StorageMetricsDetailed(
      buildStorageMetricsData({ meta: { totalUsageInBytes: 1 } }),
    );

    expect(metrics.notificationThresholdSuggestion.value).toBe(1073741824);
  });

  test("hides total available storage when the threshold is used as limit", () => {
    const metrics = new StorageMetricsDetailed(
      buildStorageMetricsData({
        meta: {
          notificationThresholdUsedAsLimit: true,
          totalUsageInBytes: 500,
          totalFreeInBytes: 500,
        },
      }),
    );

    expect(metrics.totalStorageAvailable).toBeUndefined();
  });

  test("materializes statistic categories", () => {
    const metrics = new StorageMetricsDetailed(
      buildStorageMetricsData({
        statisticCategories: [
          buildStorageStatisticsCategoryData({ totalUsageInBytes: 1234 }),
        ],
      }),
    );

    expect(metrics.statisticCategories.webspace.totalUsage.value).toBe(1234);
  });

  test("sorts project statistics by descending usage", () => {
    const metrics = new StorageMetricsDetailed(
      buildStorageMetricsData({
        childStatistics: [
          buildStorageMetricsData({
            meta: { totalUsageInBytes: 100 },
            kind: "project",
            id: "p-low",
          }),
          buildStorageMetricsData({
            meta: { totalUsageInBytes: 999 },
            id: "server-child",
            kind: "server",
          }),
          buildStorageMetricsData({
            meta: { totalUsageInBytes: 500 },
            kind: "project",
            id: "p-high",
          }),
        ],
      }),
    );

    expect(metrics.projectStatistics).toHaveLength(2);
    expect(
      metrics.projectStatistics?.map((item) => item.totalStorageUsage.value),
    ).toEqual([500, 100]);
    expect(metrics.projectStatistics?.map((item) => item.project.id)).toEqual([
      "p-high",
      "p-low",
    ]);
    expect(
      metrics.projectStatistics?.every(
        (item) => item.project instanceof Project,
      ),
    ).toBe(true);
  });

  test("parses the exceedance timestamp", () => {
    const metrics = new StorageMetricsDetailed(
      buildStorageMetricsData({
        meta: {
          totalExceedanceInBytesSetAt: "2025-01-02T03:04:05.000Z",
          totalUsageInBytes: 100,
        },
      }),
    );

    expect(metrics.exceedanceSetAt).toBeInstanceOf(DateTime);
  });
});
