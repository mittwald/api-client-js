import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type CustomerAIPlanData =
  MittwaldAPIV2.Operations.AiHostingCustomerGetPlan.ResponseData;

export type CustomerAIPlanListQueryData = Record<string, never>;

export type CustomerAIPlanKeys = CustomerAIPlanData["keys"];
export type CustomerAIPlanLimit = CustomerAIPlanData["rateLimit"];
export type CustomerAIPlanTokens = {
  formattedPlanLimit: string;
  formattedUsed: string;
} & CustomerAIPlanData["tokens"];

type TopUsageItem = NonNullable<CustomerAIPlanData["topUsages"]>[number] & {
  formattedTokenUsed: string;
};
export type CustomerAIPlanTopUsage = TopUsageItem[];
