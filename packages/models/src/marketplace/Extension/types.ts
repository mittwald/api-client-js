import { type MittwaldAPIV2 } from "@mittwald/api-client";

export type ExtensionData =
  MittwaldAPIV2.Operations.ExtensionGetExtension.ResponseData;

export type ExtensionListItemData =
  MittwaldAPIV2.Operations.ExtensionListExtensions.ResponseData[number];

export type ExtensionListQueryData =
  MittwaldAPIV2.Paths.V2Extensions.Get.Parameters.Query;

export type ExtensionAssetData =
  MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset;

export type ExtensionPricePlanData =
  MittwaldAPIV2.Components.Schemas.MarketplaceMonthlyPricePlanStrategy;

export type MarketplacePricePlanDetails =
  MittwaldAPIV2.Components.Schemas.MarketplacePricePlanDetails;

export type ExtensionPricePlanVariantData =
  MittwaldAPIV2.Components.Schemas.MarketplaceMonthlyPricePlanStrategy[0];

export type ExtensionPricePlanVariantBaseData = ExtensionPricePlanVariantData;

export type MarketplaceSupportMeta =
  MittwaldAPIV2.Components.Schemas.MarketplaceSupportMeta;

export type ExtensionOrderRequestData =
  MittwaldAPIV2.Paths.V2ExtensionsExtensionIdOrder.Post.Parameters.RequestBody;

export type ExternalFrontend =
  MittwaldAPIV2.Components.Schemas.MarketplaceExternalComponent;

export type MarketplaceDetailedDescriptionsFormat =
  MittwaldAPIV2.Components.Schemas.MarketplaceDescriptionFormats;

export const frontendFragmentAnchors = [
  "/projects/project/apps/detail/menu-top/item",
  "/projects/project/apps/detail/general/section",
  "/projects/project/backups/detail/menu-top/item",
  "/projects/project/container/containers/detail/general/section",
  "/projects/project/container/containers/detail/menu-top/item",
  "/projects/project/domain/domains/detail/menu-top/item",
  "/projects/project/email/addresses/detail/menu-top/item",
  "/projects/project/menu/section/extensions/item",
  "/customers/customer/menu/section/extensions/item",
] as const;

export type FrontendFragmentAnchor = (typeof frontendFragmentAnchors)[number];

export type FrontendFragmentData =
  MittwaldAPIV2.Components.Schemas.MarketplaceFrontendFragment;
