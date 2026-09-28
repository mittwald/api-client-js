import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type FinderProfileData =
  MittwaldAPIV2.Operations.LeadfyndrGetLeadFyndrProfile.ResponseData;

export type FinderProfileListItemData = FinderProfileData;

export interface FinderProfileListModelQueryData {}

export type FinderProfilePlanOptions = FinderProfileData["tariff"];
