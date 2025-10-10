import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type ContributorData =
  MittwaldAPIV2.Components.Schemas.MarketplaceContributor;

export type ContributorListItemData =
  MittwaldAPIV2.Operations.ExtensionListContributors.ResponseData[number];

export type ContributorListQueryData =
  MittwaldAPIV2.Paths.V2Contributors.Get.Parameters.Query;

export type ContributorIncomingInvoiceData =
  MittwaldAPIV2.Operations.ContributorListIncomingInvoices.ResponseData[number];

export type ContributorListIncomingInvoiceQueryData =
  MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesIncoming.Get.Parameters.Query;
