import { MittwaldAPIV2 } from "@mittwald/api-client";

export type SystemSoftwareVersionData =
  MittwaldAPIV2.Operations.AppGetSystemsoftwareversion.ResponseData;

export type SystemSoftwareVersionListItemData =
  MittwaldAPIV2.Operations.AppListSystemsoftwareversions.ResponseData[number];
