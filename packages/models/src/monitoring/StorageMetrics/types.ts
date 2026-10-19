import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { Project } from "../../project/index.js";
import type { Bytes } from "../../common/index.js";

export type StorageMetricsData =
  MittwaldAPIV2.Components.Schemas.StoragespaceStatistics;

export type StorageMetricsKind =
  MittwaldAPIV2.Components.Schemas.StoragespaceStatisticsKind;

export type ServerProjectStatistics = {
  notificationThreshold?: Bytes;
  totalStorageUsage: Bytes;
  project: Project;
}[];
