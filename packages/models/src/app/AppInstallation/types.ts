import { MittwaldAPIV2 } from "@mittwald/api-client";

export type AppInstallationListQuery =
  MittwaldAPIV2.Paths.V2Apps.Get.Parameters.Query;

export type AppInstallationData =
  MittwaldAPIV2.Operations.AppGetApp.ResponseData;

export type AppInstallationCompactData =
  MittwaldAPIV2.Operations.AppListApps.ResponseData[number];
