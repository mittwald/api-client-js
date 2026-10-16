import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { FrontendFragmentAnchor, Extension } from "../Extension/index.js";
import type { Customer } from "../../customer/index.js";
import type { Project } from "../../project/index.js";

export type ExtensionInstanceData =
  MittwaldAPIV2.Operations.ExtensionGetExtensionInstance.ResponseData;

export type ExtensionInstanceListItemData =
  MittwaldAPIV2.Operations.ExtensionListExtensionInstances.ResponseData[number];

export type ExtensionInstanceListQueryData =
  MittwaldAPIV2.Paths.V2ExtensionInstances.Get.Parameters.Query;

export type ExtensionInstanceListQueryModelData = {
  anchor?: FrontendFragmentAnchor;
  extension?: Extension | string;
  customer?: Customer | string;
  project?: Project | string;
} & Omit<
  ExtensionInstanceListQueryData,
  "extensionId" | "contextId" | "context"
>;

export type ExtensionInstanceCreateRequestData =
  MittwaldAPIV2.Paths.V2ExtensionInstances.Post.Parameters.RequestBody;

export type ExtensionInstanceConsentToScopesRequestData =
  MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdScopes.Patch.Parameters.RequestBody;

export type MarketplaceContext =
  MittwaldAPIV2.Components.Schemas.MarketplaceContext;

export type ExtensionInstanceChargeability =
  MittwaldAPIV2.Components.Schemas.MarketplaceExtensionInstanceChargeability;

export type ExtensionInstanceRetrievalKeyData =
  MittwaldAPIV2.Operations.ExtensionCreateRetrievalKey.ResponseData;

export type ExtensionInstanceContractData =
  MittwaldAPIV2.Operations.ExtensionGetExtensionInstanceContract.ResponseData;

export type ExtensionInstanceContractStatus =
  MittwaldAPIV2.Components.Schemas.ExtensionExtensionInstanceContract["status"];

export type OpenCustomerExtensionOrderData =
  MittwaldAPIV2.Operations.ExtensionGetCustomerExtensionInstanceOrders.ResponseData[number];

export type OpenProjectExtensionOrderData =
  MittwaldAPIV2.Operations.ExtensionGetCustomerExtensionInstanceOrders.ResponseData[number];

export interface OpenExtensionOrder {
  context: MarketplaceContext;
  referencedId: string;
  extension: Extension;
}

export type ExtensionSessionTokenData =
  MittwaldAPIV2.Operations.ExtensionGenerateSessionToken.ResponseData;

export type AccessTokenRetrievalKey =
  MittwaldAPIV2.Operations.ExtensionCreateRetrievalKey.ResponseData;
