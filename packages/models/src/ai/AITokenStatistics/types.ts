import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type AIBillingPeriodsData =
  MittwaldAPIV2.Operations.AiHostingPlanGetBillingPeriods.ResponseData;

export type AIBillingPeriodData = AIBillingPeriodsData["periods"][number];

export type AITokenUsageData =
  MittwaldAPIV2.Operations.AiHostingPlanGetUsageStats.ResponseData;

export type AIDailyTokenUsageData = AITokenUsageData["daily"][number];

export type AITokenUsageKeyData = AITokenUsageData["keys"][number];

export type AIModelUsageData = AITokenUsageData["modelShare"][number];

export interface AITokenUsageRange {
  startDate: string;
  endDate: string;
}
