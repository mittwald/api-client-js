import { MittwaldAPIV2 } from "@mittwald/api-client";

export type ExtensionData =
  MittwaldAPIV2.Operations.ExtensionGetExtension.ResponseData;

export type ExtensionListItemData =
  MittwaldAPIV2.Operations.ExtensionListExtensions.ResponseData[number];
