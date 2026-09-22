import type { StorageMetricsData } from "../types";

export interface StorageMetricsBehaviors {
  findByProject: (projectId: string) => Promise<StorageMetricsData | undefined>;
  findByServer: (serverId: string) => Promise<StorageMetricsData | undefined>;
}
