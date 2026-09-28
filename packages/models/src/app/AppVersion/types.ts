import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { App } from "../../index.js";

export type AppVersionData =
  MittwaldAPIV2.Operations.AppGetAppversion.ResponseData;

export type AppVersionListItemData =
  MittwaldAPIV2.Operations.AppListAppversions.ResponseData[number];

export type AppVersionListQueryData =
  MittwaldAPIV2.Paths.V2AppsAppIdVersions.Get.Parameters.Query;

export type AppVersionListQueryModelData = {
  app: string | App;
} & AppVersionListQueryData;

export type AppDefaultCronjobData =
  MittwaldAPIV2.Components.Schemas.AppDefaultCronjob;

export type SystemSoftwareDependency =
  MittwaldAPIV2.Components.Schemas.AppSystemSoftwareDependency;
