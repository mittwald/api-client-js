import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type ContributorData =
  MittwaldAPIV2.Components.Schemas.MarketplaceContributor;

export type OwnContributorData =
  MittwaldAPIV2.Components.Schemas.MarketplaceOwnContributor;

export type ContributorState =
  MittwaldAPIV2.Components.Schemas.MarketplaceContributorState;

export type ContributorListItemData =
  MittwaldAPIV2.Operations.ExtensionListContributors.ResponseData[number];

export type ContributorUpdateRequestData =
  MittwaldAPIV2.Operations.ContributorPatchContributor.RequestData;

export type ContributorListQueryData =
  MittwaldAPIV2.Paths.V2Contributors.Get.Parameters.Query;

export type ContributorImprint =
  MittwaldAPIV2.Components.Schemas.MarketplaceContributorImprint;

export type ContributorBillingInformationData =
  MittwaldAPIV2.Operations.ContributorGetBillingInformation.ResponseData;

export type ContributorIncomingInvoiceData =
  MittwaldAPIV2.Operations.ContributorListIncomingInvoices.ResponseData[number];

export type ContributorListIncomingInvoiceQueryData =
  MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesIncoming.Get.Parameters.Query;

export type ContributorOnBehalfInvoiceData =
  MittwaldAPIV2.Operations.ContributorListOnbehalfInvoices.ResponseData[number];
