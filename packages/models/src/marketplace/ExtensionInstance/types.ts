import { MittwaldAPIV2 } from "@mittwald/api-client";

export type ExtensionInstanceData =
  MittwaldAPIV2.Operations.ExtensionGetExtensionInstance.ResponseData;

export type ExtensionInstanceListItemData =
  MittwaldAPIV2.Operations.ExtensionListExtensionInstances.ResponseData[number];

export type ExtensionInstanceListQuery =
  MittwaldAPIV2.Paths.V2ExtensionInstances.Get.Parameters.Query;

export type ExtensionInstanceCreateRequestData =
  MittwaldAPIV2.Paths.V2ExtensionInstances.Post.Parameters.RequestBody;

export type ExtensionInstanceConsentToScopesRequestData =
  MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdScopes.Patch.Parameters.RequestBody;
