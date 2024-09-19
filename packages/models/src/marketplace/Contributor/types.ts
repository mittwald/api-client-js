import { MittwaldAPIV2 } from "@mittwald/api-client";

export type ContributorData =
  MittwaldAPIV2.Operations.ExtensionGetContributor.ResponseData;

export type ContributorListItemData =
  MittwaldAPIV2.Operations.ExtensionListContributors.ResponseData[number];

export type ContributorListQuery =
  MittwaldAPIV2.Paths.V2Contributors.Get.Parameters.Query;
