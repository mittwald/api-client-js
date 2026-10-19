import type { StorageMetricsData } from "../types.js";

export interface StorageMetricsBehaviors {
  findByProject: (projectId: string) => Promise<StorageMetricsData | undefined>;
  findByServer: (serverId: string) => Promise<StorageMetricsData | undefined>;
}
