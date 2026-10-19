import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type SystemSoftwareVersionData =
  MittwaldAPIV2.Operations.AppGetSystemsoftwareversion.ResponseData;

export type SystemSoftwareVersionListItemData =
  MittwaldAPIV2.Operations.AppListSystemsoftwareversions.ResponseData[number];

export type SystemSoftwareVersionListQueryData =
  MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareIdVersions.Get.Parameters.Query;

export type FeePeriodData =
  MittwaldAPIV2.Components.Schemas.FeePeriodBasedFeeStrategy["periods"][0];
