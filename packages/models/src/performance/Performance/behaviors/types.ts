import type {
  PerformanceListQueryData,
  PerformanceListItemData,
  PerformanceData,
} from "../types.js";

export interface PerformanceBehaviors {
  list: (
    projectId: string,
    query?: PerformanceListQueryData,
  ) => Promise<{ items: PerformanceListItemData[]; totalCount: number }>;

  find: (
    hostname: string,
    path: string,
    date?: string,
  ) => Promise<PerformanceData | undefined>;
}
