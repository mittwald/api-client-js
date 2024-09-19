import { MittwaldAPIV2 } from "@mittwald/api-client";

export type AppInstallationListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Get.Parameters.Query;

export type AppInstallationData =
  MittwaldAPIV2.Operations.AppGetAppinstallation.ResponseData;

export type AppInstallationListItemData =
  MittwaldAPIV2.Operations.AppListAppinstallations.ResponseData[number];
