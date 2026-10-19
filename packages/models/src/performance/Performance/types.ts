import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type PerformanceData =
  MittwaldAPIV2.Operations.PageinsightsGetPerformanceData.ResponseData;

export type PerformanceListItemData =
  MittwaldAPIV2.Operations.PageinsightsListPerformanceDataForProject.ResponseData[number];

export type PerformanceSubpageItemData = NonNullable<
  PerformanceListItemData["paths"]
>[number];

export type PerformanceListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdPageInsights.Get.Parameters.Query;

export interface PerformanceMetricData {
  mediumThreshold: number;
  lowThreshold: number;
  highest: number;
  value?: number;
  lowest: number;
  text?: string;
}

export interface PerformanceIdentifier {
  projectId: string;
  hostname: string;
  path?: string;
  date?: string;
}
