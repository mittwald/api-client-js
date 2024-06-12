import { MittwaldAPIV2 } from "@mittwald/api-client";

export type AppInstallationData =
  MittwaldAPIV2.Operations.AppGetAppinstallation.ResponseData;

export type AppInstallationListItemData =
  MittwaldAPIV2.Operations.AppListAppinstallations.ResponseData[number];

export type AppInstallationListQuery =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Get.Parameters.Query;

export type AppInstallationCreateRequestData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Post.Parameters.RequestBody;

export type AppInstallationUpdateRequestData =
  MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Patch.Parameters.RequestBody;

// ToDo: Move to App when App model is merged (https://github.com/mittwald/api-client-js/pull/96)
export type AppUpdatePolicy =
  MittwaldAPIV2.Components.Schemas.AppAppUpdatePolicy;

// ToDo: Move to App when App model is merged (https://github.com/mittwald/api-client-js/pull/96)
export type AppUserInput = MittwaldAPIV2.Components.Schemas.AppUserInput;

// ToDo: Move to App when App model is merged (https://github.com/mittwald/api-client-js/pull/96)
export type AppAction = MittwaldAPIV2.Components.Schemas.AppAction;

export type AppLinkDatabaseRequestData =
  MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabase.Patch.Parameters.RequestBody;

export type AppInstallationStatus =
  MittwaldAPIV2.Operations.AppRetrieveStatus.ResponseData;

export type AppInstallationCopyRequestData =
  MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdActionsCopy.Post.Parameters.RequestBody;

export type AppInstallationMissingDependencies =
  MittwaldAPIV2.Operations.AppGetMissingDependenciesForAppinstallation.ResponseData;
