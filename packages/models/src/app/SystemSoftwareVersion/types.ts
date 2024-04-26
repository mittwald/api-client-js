import { MittwaldAPIV2 } from "@mittwald/api-client";

export type SystemSoftwareVersionData =
  MittwaldAPIV2.Operations.AppGetSystemsoftwareversion.ResponseData;

export type SystemSoftwareVersionListItemData =
  MittwaldAPIV2.Operations.AppListSystemsoftwareversions.ResponseData[number];

export type SystemSoftwareVersionListQuery =
  MittwaldAPIV2.Paths.V2SystemSoftwareSystemSoftwareIdVersions.Get.Parameters.Query;

// Todo: update when prod specs available
export type SystemSoftwareVersionFeePeriod = {
  feeValidFrom: string;
  feeValidUntil: string;
  monthlyPrice: number;
};
