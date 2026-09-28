import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type CronjobExecutionData =
  MittwaldAPIV2.Operations.CronjobGetExecution.ResponseData;

export type CronjobExecutionListItemData =
  MittwaldAPIV2.Operations.CronjobListExecutions.ResponseData[number];

export type CronjobExecutionListQueryData =
  MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Get.Parameters.Query;

export type CronjobExecutionStatus = CronjobExecutionData["status"];

export type CronjobExecutionAnalysisData =
  MittwaldAPIV2.Components.Schemas.CronjobCronjobExecutionAnalysis;

export interface StructuredLogLine {
  stream: "stdout" | "stderr";
  message: string;
}
