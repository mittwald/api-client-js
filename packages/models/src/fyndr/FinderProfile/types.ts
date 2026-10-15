import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type FinderProfileData =
  MittwaldAPIV2.Operations.LeadfyndrGetLeadFyndrProfile.ResponseData;

export type FinderProfileListItemData = FinderProfileData;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface FinderProfileListModelQueryData {}

export type FinderProfilePlanOptions = FinderProfileData["tariff"];
