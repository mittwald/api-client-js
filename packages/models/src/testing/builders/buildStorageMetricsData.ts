import type { StorageStatisticsCategoryApiData } from "../../monitoring/StorageMetrics/StorageStatisticsCategory";
import type { StorageMetricsData } from "../../monitoring/StorageMetrics/types";

export function buildStorageMetricsData(
  overrides?: Partial<StorageMetricsData>,
): StorageMetricsData {
  return {
    meta: { totalUsageInBytes: 1073741824 },
    name: "test-metrics",
    kind: "server",
    id: "sm-1",
    ...overrides,
  };
}

export function buildStorageStatisticsCategoryData(
  overrides?: Partial<StorageStatisticsCategoryApiData>,
): StorageStatisticsCategoryApiData {
  return {
    totalUsageInBytes: 0,
    kind: "webspace",
    ...overrides,
  };
}
