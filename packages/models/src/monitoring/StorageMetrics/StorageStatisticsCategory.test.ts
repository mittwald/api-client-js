import { afterEach, describe, expect, test } from "vitest";
import { DateTime } from "luxon";

import { buildStorageStatisticsCategoryData } from "../../testing/builders/buildStorageMetricsData.js";
import { StorageStatisticsCategory } from "./StorageStatisticsCategory.js";
import { resetBehaviors } from "../../testing/installBehaviors.js";

afterEach(resetBehaviors);

describe("StorageStatisticsCategory", () => {
  test("uses empty values when constructed without data", () => {
    const category = new StorageStatisticsCategory(undefined);

    expect(category.kind).toBeUndefined();
    expect(category.totalUsage.value).toBe(0);
    expect(category.updatedAt).toBeUndefined();
    expect(category.data).toBeUndefined();
  });

  test("exposes frozen category data and its total usage", () => {
    const category = new StorageStatisticsCategory(
      buildStorageStatisticsCategoryData({
        totalUsageInBytes: 2048,
        kind: "mysqlDatabase",
      }),
    );

    expect(category.kind).toBe("mysqlDatabase");
    expect(category.totalUsage.value).toBe(2048);
    expect(Object.isFrozen(category.data)).toBe(true);
  });

  test("uses the first resource timestamp as updatedAt", () => {
    const category = new StorageStatisticsCategory(
      buildStorageStatisticsCategoryData({
        resources: [
          {
            usageInBytesSetAt: "2025-01-02T03:04:05.000Z",
            usageInBytes: 100,
            id: "resource-1",
            name: "Resource",
          },
        ],
      }),
    );

    expect(category.updatedAt).toBeInstanceOf(DateTime);
  });

  test("has no updatedAt without resources", () => {
    const category = new StorageStatisticsCategory(
      buildStorageStatisticsCategoryData(),
    );

    expect(category.updatedAt).toBeUndefined();
  });
});
