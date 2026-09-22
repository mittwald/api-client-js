import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { Project } from "../../project";

export type AppInstallationData =
  MittwaldAPIV2.Operations.AppGetAppinstallation.ResponseData;

export type AppInstallationListItemData =
  MittwaldAPIV2.Operations.AppListAppinstallations.ResponseData[number];

export type AppInstallationListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Get.Parameters.Query;

export type AppInstallationListQueryModelData = {
  project?: Project | string;
} & AppInstallationListQueryData;

export type AppInstallationCreateRequestData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Post.Parameters.RequestBody;

export type AppInstallationUpdateRequestData =
  MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Patch.Parameters.RequestBody;

export type AppInstallationStatus =
  MittwaldAPIV2.Operations.AppRetrieveStatus.ResponseData;

export type AppInstallationCopyRequestData =
  MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdActionsCopy.Post.Parameters.RequestBody;

export type AppInstallationStagingCreateRequestData =
  MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdActionsStaging.Post.Parameters.RequestBody;

export type AppInstallationStagingDetachRequestData =
  MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdActionsDetachStaging.Post.Parameters.RequestBody;

export type AppPhase = MittwaldAPIV2.Components.Schemas.AppPhase;

export type AppSavedUserInput =
  MittwaldAPIV2.Components.Schemas.AppSavedUserInput;

export type InstalledSystemSoftwareQuery =
  MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdSystemSoftware.Get.Parameters.Query;

export type AppInstallationSortOrder =
  MittwaldAPIV2.Components.Schemas.AppAppInstallationSortOrder;
