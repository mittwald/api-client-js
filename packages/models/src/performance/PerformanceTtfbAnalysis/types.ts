import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type PerformanceTtfbAnalysisScheduleData =
  MittwaldAPIV2.Operations.PageinsightsScheduleStrace.ResponseData;

export type PerformanceTtfbAnalysisData =
  MittwaldAPIV2.Operations.PageinsightsGetStraceData.ResponseData;

export type SchedulePerformanceTtfbAnalysisData =
  MittwaldAPIV2.Operations.PageinsightsScheduleStrace.ResponseData<202>;

export type PerformanceTtfbAnalysisStraceData =
  MittwaldAPIV2.Components.Schemas.StraceData;

export type PerformanceTtfbAnalysisStraceDataFileOps =
  MittwaldAPIV2.Components.Schemas.StraceData["fileOps"];

export type PerformanceTtfbAnalysisStraceDataDatabaseQueries =
  MittwaldAPIV2.Components.Schemas.StraceData["dbQueries"];

export type PerformanceTtfbAnalysisStraceDataNetworkOps =
  MittwaldAPIV2.Components.Schemas.StraceData["networkingOps"];

export interface WithTtfb {
  totalTimeMs: number;
}

export interface PerformanceTtfbSummaryMetricData {
  slowdownFactor: number;
  userspaceMs: number;
  kernelMs: number;
}

export type PerformanceTtfbAnalysisStraceDataFileOpStats =
  NonNullable<PerformanceTtfbAnalysisStraceDataFileOps>[number]["stats"] &
    WithTtfb;
export type PerformanceTtfbAnalysisStraceDataDbQueryStats =
  NonNullable<PerformanceTtfbAnalysisStraceDataDatabaseQueries>[number]["stats"] &
    WithTtfb;
export type PerformanceTtfbAnalysisStraceDataNetworkingOpStats =
  NonNullable<PerformanceTtfbAnalysisStraceDataNetworkOps>[number]["stats"] &
    WithTtfb;

export type EnrichedFileOp =
  {
    stats: PerformanceTtfbAnalysisStraceDataFileOpStats;
  } & NonNullable<PerformanceTtfbAnalysisStraceDataFileOps>[number];
export type EnrichedFileOps = EnrichedFileOp[];

export type EnrichedDbQuery =
  NonNullable<PerformanceTtfbAnalysisStraceDataDatabaseQueries>[number] & {
    stats: PerformanceTtfbAnalysisStraceDataDbQueryStats;
  };
export type EnrichedDbQueries = EnrichedDbQuery[];

export type EnrichedNetworkingOp =
  {
    stats: PerformanceTtfbAnalysisStraceDataNetworkingOpStats;
  } & NonNullable<PerformanceTtfbAnalysisStraceDataNetworkOps>[number];
export type EnrichedNetworkingOps = EnrichedNetworkingOp[];
