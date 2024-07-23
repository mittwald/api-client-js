import { MittwaldAPIV2 } from "@mittwald/api-client";

export type AppVersionData =
  MittwaldAPIV2.Operations.AppGetAppversion.ResponseData;

export type AppVersionListItemData =
  MittwaldAPIV2.Operations.AppListAppversions.ResponseData[number];

export type AppVersionListQuery =
  MittwaldAPIV2.Paths.V2AppsAppIdVersions.Get.Parameters.Query;
