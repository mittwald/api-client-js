import type { MittwaldAPIV2 } from "@mittwald/api-client";
import type { DateTime } from "luxon";
export type ContributorExtensionData =
  MittwaldAPIV2.Operations.ExtensionGetOwnExtension.ResponseData;

export type ContributorExtensionUpdateRequestData =
  MittwaldAPIV2.Operations.ExtensionPatchExtension.RequestData;

export type ContributorExtensionUpdatePricingRequestData =
  MittwaldAPIV2.Operations.ExtensionUpdateExtensionPricing.RequestData;

export type ContributorExtensionListItemData =
  MittwaldAPIV2.Operations.ExtensionListOwnExtensions.ResponseData[number];

export type PricePlanEditingVariantData =
  MittwaldAPIV2.Components.Schemas.ExtensionVariant;

export type ContributorExtensionListQueryData =
  MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensions.Get.Parameters.Query;

export type MarketplaceExtensionDeprecation =
  MittwaldAPIV2.Components.Schemas.MarketplaceExtensionDeprecation;

export type MarketplaceWebhookUrls =
  MittwaldAPIV2.Components.Schemas.MarketplaceWebhookUrls;

export type MarketplaceWebhookUrl =
  MittwaldAPIV2.Components.Schemas.MarketplaceWebhookUrl;

export type MarketplaceExtendedSupportMeta =
  MittwaldAPIV2.Components.Schemas.MarketplaceSupportMeta & {
    inherited: boolean;
  };

export type MarketplaceWebhookType = keyof MarketplaceWebhookUrls;

export type UpdatePricingResponseData =
  MittwaldAPIV2.Operations.ExtensionUpdateExtensionPricing.ResponseData;

export interface ExtensionSecret {
  usableUntil?: DateTime;
  secretId: string;
}

export type MarketplaceGenerateSecretResponse =
  MittwaldAPIV2.Operations.ExtensionGenerateExtensionSecret.ResponseData;
