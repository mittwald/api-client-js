import { MittwaldAPIV2 } from "@mittwald/api-client";
import { SystemSoftware } from "../SystemSoftware/index.js";

export type SystemSoftwareVersionData =
  MittwaldAPIV2.Operations.AppGetSystemsoftwareversion.ResponseData;

export type SystemSoftwareVersionListItemData =
  MittwaldAPIV2.Operations.AppListSystemsoftwareversions.ResponseData[number];

export type SystemSoftwareVersionListQueryData =
  MittwaldAPIV2.Paths.V2SystemSoftwareSystemSoftwareIdVersions.Get.Parameters.Query;

export type SystemSoftwareVersionListQueryModelData =
  SystemSoftwareVersionListQueryData & {
    systemSoftware: SystemSoftware;
  };
