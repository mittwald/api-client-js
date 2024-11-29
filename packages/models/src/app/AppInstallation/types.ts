import { MittwaldAPIV2 } from "@mittwald/api-client";

export type AppInstallationData =
  MittwaldAPIV2.Operations.AppGetAppinstallation.ResponseData;

export type AppInstallationListItemData =
  MittwaldAPIV2.Operations.AppListAppinstallations.ResponseData[number];

export type AppInstallationListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Get.Parameters.Query;

export type AppInstallationCreateRequestData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Post.Parameters.RequestBody;

export type AppInstallationUpdateRequestData =
  MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Patch.Parameters.RequestBody;

export type AppInstallationLinkDatabaseRequestData =
  MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabase.Patch.Parameters.RequestBody;

export type AppInstallationStatus =
  MittwaldAPIV2.Operations.AppRetrieveStatus.ResponseData;

export type AppInstallationCopyRequestData =
  MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdActionsCopy.Post.Parameters.RequestBody;
