import { MittwaldAPIV2 } from "@mittwald/api-client";

export type ExtensionInstanceData =
  MittwaldAPIV2.Operations.ExtensionGetExtensionInstance.ResponseData;

export type ExtensionInstanceListItemData =
  MittwaldAPIV2.Operations.ExtensionListExtensionInstances.ResponseData[number];
