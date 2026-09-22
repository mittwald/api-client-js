import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type FinderProfileRequestData =
  MittwaldAPIV2.Components.Schemas.LeadfyndrProfileRequest;

export type FinderProfileRequestStatus = FinderProfileRequestData["status"];

export type FinderProfileRequestListItemData = FinderProfileRequestData;

export interface FinderProfileRequestListModelQueryData {}

export type FinderProfileTariffOptionsData =
  MittwaldAPIV2.Components.Schemas.LeadfyndrTariffOptions;

export type FinderProfileRequestRequestData =
  MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Post.Parameters.RequestBody;
