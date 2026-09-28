import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type ProjectAIPlanData =
  MittwaldAPIV2.Operations.AiHostingProjectGetPlan.ResponseData;

export type ProjectAIPlanListItemData =
  MittwaldAPIV2.Operations.AiHostingProjectGetPlans.ResponseData["plans"][number];

export type ProjectAIPlanListQueryData = Record<string, never>;

export type ProjectAIPlanLicences = ProjectAIPlanData["keys"];
