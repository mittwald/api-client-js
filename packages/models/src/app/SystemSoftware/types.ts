import { MittwaldAPIV2 } from "@mittwald/api-client";

export type SystemSoftwareData =
  MittwaldAPIV2.Operations.AppGetSystemsoftware.ResponseData;

export type SystemSoftwareListItemData =
  MittwaldAPIV2.Operations.AppListSystemsoftwares.ResponseData[number];
