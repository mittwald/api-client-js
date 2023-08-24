/* eslint-disable */
/* prettier-ignore */
/* This file is auto-generated with acg (@mittwald/api-code-generator) */
import { Simplify } from "@mittwald/api-client-commons";
import { RequestType } from "@mittwald/api-client-commons";
import { Response } from "@mittwald/api-client-commons";
import { OpenAPIOperation } from "@mittwald/api-client-commons";
import { MittwaldAPIV2 } from "./types.js";

/** execute a runtime concerning action on a specific `AppInstallation` */
export const appExecuteAction: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdActionsAction.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdActionsAction.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdActionsAction.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdActionsAction.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdActionsAction.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdActionsAction.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdActionsAction.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}/actions/{action}",
  method: "POST",
  operationId: "app-execute-action",
};

/** get a specific `App` */
export const appGetApp: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppsAppId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppsAppId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppsAppId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppsAppId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppsAppId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppsAppId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/apps/{appId}",
  method: "GET",
  operationId: "app-get-app",
};

/** get a specific `AppInstallation` */
export const appGetAppinstallation: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}",
  method: "GET",
  operationId: "app-get-appinstallation",
};

/** start uninstallation process for a specific `AppInstallation` */
export const appUninstallAppinstallation: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}",
  method: "DELETE",
  operationId: "app-uninstall-appinstallation",
};

/** patch desired properties of a specific `AppInstallation` */
export const appPatchAppinstallation: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}",
  method: "PATCH",
  operationId: "app-patch-appinstallation",
};

/** get a specific `AppVersion` */
export const appGetAppversion: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersionsAppVersionId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersionsAppVersionId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersionsAppVersionId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersionsAppVersionId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersionsAppVersionId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersionsAppVersionId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/apps/{appId}/versions/{appVersionId}",
  method: "GET",
  operationId: "app-get-appversion",
};

/** get the missing requirements of an appInstallation for a specific target AppVersion */
export const appGetMissingDependenciesForAppinstallation: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdMissingDependencies.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdMissingDependencies.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdMissingDependencies.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdMissingDependencies.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdMissingDependencies.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdMissingDependencies.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}/missing-dependencies",
  method: "GET",
  operationId: "app-get-missing-dependencies-for-appinstallation",
};

/** get a specific `SystemSoftware` */
export const appGetSystemsoftware: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SystemsoftwaresSystemSoftwareId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SystemsoftwaresSystemSoftwareId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2SystemsoftwaresSystemSoftwareId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemsoftwaresSystemSoftwareId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemsoftwaresSystemSoftwareId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemsoftwaresSystemSoftwareId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/systemsoftwares/{systemSoftwareId}",
  method: "GET",
  operationId: "app-get-systemsoftware",
};

/** get a specific `SystemSoftwareVersion` */
export const appGetSystemsoftwareversion: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SystemsoftwareSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SystemsoftwareSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2SystemsoftwareSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemsoftwareSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemsoftwareSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemsoftwareSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/systemsoftware/{systemSoftwareId}/versions/{systemSoftwareVersionId}",
  method: "GET",
  operationId: "app-get-systemsoftwareversion",
};

/** create linkage between an `AppInstallation` and a `Database` */
export const appLinkDatabase: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabases.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabases.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabases.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabases.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabases.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabases.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabases.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}/databases",
  method: "PUT",
  operationId: "app-link-database",
};

/** get all `AppInstallations` inside a specific `Project` */
export const appListAppinstallations: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppinstallations.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppinstallations.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppinstallations.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppinstallations.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppinstallations.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/appinstallations",
  method: "GET",
  operationId: "app-list-appinstallations",
};

/** request a new `AppInstallation` */
export const appRequestAppinstallation: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppinstallations.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppinstallations.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppinstallations.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppinstallations.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppinstallations.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppinstallations.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppinstallations.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/appinstallations",
  method: "POST",
  operationId: "app-request-appinstallation",
};

/** get all available `Apps` */
export const appListApps: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Apps.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Apps.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Apps.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Apps.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Apps.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/apps",
  method: "GET",
  operationId: "app-list-apps",
};

/** get all `AppVersions` of a specific `App` */
export const appListAppversions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersions.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersions.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersions.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersions.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/apps/{appId}/versions",
  method: "GET",
  operationId: "app-list-appversions",
};

/** get all available `SystemSoftware` */
export const appListSystemsoftwares: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Systemsoftwares.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Systemsoftwares.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Systemsoftwares.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Systemsoftwares.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Systemsoftwares.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/systemsoftwares",
  method: "GET",
  operationId: "app-list-systemsoftwares",
};

/** get all available `SystemSoftwareVersions` of a specific `SystemSoftware` */
export const appListSystemsoftwareversions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SystemsoftwareSystemSoftwareIdVersions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SystemsoftwareSystemSoftwareIdVersions.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2SystemsoftwareSystemSoftwareIdVersions.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemsoftwareSystemSoftwareIdVersions.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemsoftwareSystemSoftwareIdVersions.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/systemsoftware/{systemSoftwareId}/versions",
  method: "GET",
  operationId: "app-list-systemsoftwareversions",
};

/** get all update candidates for a specific `AppVersion` */
export const appListUpdateCandidatesForAppversion: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersionsBaseAppVersionIdUpdateCandidates.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersionsBaseAppVersionIdUpdateCandidates.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersionsBaseAppVersionIdUpdateCandidates.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersionsBaseAppVersionIdUpdateCandidates.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersionsBaseAppVersionIdUpdateCandidates.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/apps/{appId}/versions/{baseAppVersionId}/update-candidates",
  method: "GET",
  operationId: "app-list-update-candidates-for-appversion",
};

/** reconcile detected apps to appInstallations of a project */
export const appReconcileDetectedApps: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectShortIdAppinstallations.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectShortIdAppinstallations.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectShortIdAppinstallations.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectShortIdAppinstallations.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectShortIdAppinstallations.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectShortIdAppinstallations.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectShortIdAppinstallations.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectShortId}/appinstallations",
  method: "PUT",
  operationId: "app-reconcile-detected-apps",
};

/** request a copy of an `AppInstallation` */
export const appRequestAppinstallationCopy: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsIdActionsCopy.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsIdActionsCopy.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsIdActionsCopy.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsIdActionsCopy.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsIdActionsCopy.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsIdActionsCopy.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsIdActionsCopy.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{id}/actions/copy",
  method: "POST",
  operationId: "app-request-appinstallation-copy",
};

/** get runtime status of a specific `AppInstallation` */
export const appRetrieveStatus: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdStatus.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdStatus.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdStatus.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdStatus.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdStatus.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdStatus.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}/status",
  method: "GET",
  operationId: "app-retrieve-status",
};

/** create linkage between an `AppInstallation` and `DatabaseUsers` */
export const appSetDatabaseUsers: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabasesDatabaseId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabasesDatabaseId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabasesDatabaseId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabasesDatabaseId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabasesDatabaseId.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabasesDatabaseId.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabasesDatabaseId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}/databases/{databaseId}",
  method: "PUT",
  operationId: "app-set-database-users",
};

/** remove linkage between an `AppInstallation` and a `Database` */
export const appUnlinkDatabase: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabasesDatabaseId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabasesDatabaseId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabasesDatabaseId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabasesDatabaseId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabasesDatabaseId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabasesDatabaseId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}/databases/{databaseId}",
  method: "DELETE",
  operationId: "app-unlink-database",
};

/** Get an Article. */
export const articleGetArticle: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ArticlesArticleId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ArticlesArticleId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ArticlesArticleId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ArticlesArticleId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ArticlesArticleId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ArticlesArticleId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/articles/{articleId}",
  method: "GET",
  operationId: "article-get-article",
};

/** List Articles. */
export const articleListArticles: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Articles.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Articles.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Articles.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Articles.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Articles.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/articles",
  method: "GET",
  operationId: "article-list-articles",
};

/** Export a ProjectBackup for download. */
export const backupCreateProjectBackupExport: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-backups/{projectBackupId}/export",
  method: "POST",
  operationId: "backup-create-project-backup-export",
};

/** Delete a ProjectBackupExport. */
export const backupDeleteProjectBackupExport: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-backups/{projectBackupId}/export",
  method: "DELETE",
  operationId: "backup-delete-project-backup-export",
};

/** List BackupSchedules belonging to a Project. */
export const backupListProjectBackupSchedules: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/backup-schedules",
  method: "GET",
  operationId: "backup-list-project-backup-schedules",
};

/** Create a BackupSchedule for a Project. */
export const backupCreateProjectBackupSchedule: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/backup-schedules",
  method: "POST",
  operationId: "backup-create-project-backup-schedule",
};

/** List Backups belonging to a Project. */
export const backupListProjectBackups: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/backups",
  method: "GET",
  operationId: "backup-list-project-backups",
};

/** Create a Backup of a Project. */
export const backupCreateProjectBackup: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/backups",
  method: "POST",
  operationId: "backup-create-project-backup",
};

/** Get a ProjectBackupSchedule. */
export const backupGetProjectBackupSchedule: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-backup-schedules/{projectBackupScheduleId}",
  method: "GET",
  operationId: "backup-get-project-backup-schedule",
};

/** Delete a ProjectBackupSchedule. */
export const backupDeleteProjectBackupSchedule: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-backup-schedules/{projectBackupScheduleId}",
  method: "DELETE",
  operationId: "backup-delete-project-backup-schedule",
};

/** Update a ProjectBackupSchedule. */
export const backupUpdateProjectBackupSchedule: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Patch.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Patch.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-backup-schedules/{projectBackupScheduleId}",
  method: "PATCH",
  operationId: "backup-update-project-backup-schedule",
};

/** Get a ProjectBackup. */
export const backupGetProjectBackup: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-backups/{projectBackupId}",
  method: "GET",
  operationId: "backup-get-project-backup",
};

/** Delete a ProjectBackup. */
export const backupDeleteProjectBackup: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-backups/{projectBackupId}",
  method: "DELETE",
  operationId: "backup-delete-project-backup",
};

/** Change the description of a ProjectBackup. */
export const backupUpdateProjectBackupDescription: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdDescription.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdDescription.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdDescription.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdDescription.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdDescription.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdDescription.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdDescription.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-backups/{projectBackupId}/description",
  method: "PATCH",
  operationId: "backup-update-project-backup-description",
};

/** Schedule the Termination of a ContractItem. */
export const contractTerminateContractItem: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/termination",
  method: "POST",
  operationId: "contract-terminate-contract-item",
};

/** Cancel the Termination for the referred ContractItem. */
export const contractCancelContractItemTermination: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Delete.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/termination",
  method: "DELETE",
  operationId: "contract-cancel-contract-item-termination",
};

/** Cancel the TariffChange for the referred ContractItem. */
export const contractCancelContractTariffChange: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTariffChange.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTariffChange.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTariffChange.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTariffChange.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTariffChange.Delete.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTariffChange.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTariffChange.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTariffChange.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/tariff-change",
  method: "DELETE",
  operationId: "contract-cancel-contract-tariff-change",
};

/** Schedule the Termination of a Contract. */
export const contractTerminateContract: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/termination",
  method: "POST",
  operationId: "contract-terminate-contract",
};

/** Cancel the Termination for the referred Contract. */
export const contractCancelContractTermination: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Delete.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/termination",
  method: "DELETE",
  operationId: "contract-cancel-contract-termination",
};

/** Return the BaseItem of the Contract with the given ID. */
export const contractGetBaseItemOfContract: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdBaseItems.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdBaseItems.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdBaseItems.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdBaseItems.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdBaseItems.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdBaseItems.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdBaseItems.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/base-items",
  method: "GET",
  operationId: "contract-get-base-item-of-contract",
};

/** Return the Contract for the given Domain. */
export const contractGetDetailOfContractByDomain: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdContract.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdContract.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdContract.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdContract.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdContract.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdContract.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdContract.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/contract",
  method: "GET",
  operationId: "contract-get-detail-of-contract-by-domain",
};

/** Return the Contract for the given Project. */
export const contractGetDetailOfContractByProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdContract.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdContract.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdContract.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdContract.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdContract.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdContract.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdContract.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/contract",
  method: "GET",
  operationId: "contract-get-detail-of-contract-by-project",
};

/** Return the Contract for the given Server. */
export const contractGetDetailOfContractByServer: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdContract.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdContract.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdContract.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdContract.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdContract.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdContract.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdContract.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/servers/{serverId}/contract",
  method: "GET",
  operationId: "contract-get-detail-of-contract-by-server",
};

/** Get the ContractItem with the given ID. */
export const contractGetDetailOfContractItem: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}",
  method: "GET",
  operationId: "contract-get-detail-of-contract-item",
};

/** Returns the Contract with the given ID. */
export const contractGetDetailOfContract: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}",
  method: "GET",
  operationId: "contract-get-detail-of-contract",
};

/** Return the next TerminationDate for the ContractItem with the given ID. */
export const contractGetNextTerminationDateForItem: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdNextTerminationDates.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdNextTerminationDates.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdNextTerminationDates.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdNextTerminationDates.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdNextTerminationDates.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdNextTerminationDates.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdNextTerminationDates.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/next-termination-dates",
  method: "GET",
  operationId: "contract-get-next-termination-date-for-item",
};

/** Return a list of Contracts for the given Customer. */
export const contractListContracts: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdContracts.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdContracts.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdContracts.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdContracts.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdContracts.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdContracts.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdContracts.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/contracts",
  method: "GET",
  operationId: "contract-list-contracts",
};

/** Get all conversation the authenticated user has created or has access to. */
export const conversationListConversations: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Conversations.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Conversations.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Conversations.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Conversations.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Conversations.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/conversations",
  method: "GET",
  operationId: "conversation-list-conversations",
};

/** Create a conversation. */
export const conversationCreateConversation: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2Conversations.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2Conversations.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Conversations.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Conversations.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Conversations.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Conversations.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Conversations.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/conversations",
  method: "POST",
  operationId: "conversation-create-conversation",
};

/** Get all message of the conversation. */
export const conversationListMessagesByConversation: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}/messages",
  method: "GET",
  operationId: "conversation-list-messages-by-conversation",
};

/** Send a new message in the conversation. */
export const conversationCreateMessage: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}/messages",
  method: "POST",
  operationId: "conversation-create-message",
};

/** Get a specific conversation category. */
export const conversationGetCategory: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationCategoriesCategoryId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationCategoriesCategoryId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationCategoriesCategoryId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationCategoriesCategoryId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationCategoriesCategoryId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationCategoriesCategoryId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationCategoriesCategoryId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/conversation-categories/{categoryId}",
  method: "GET",
  operationId: "conversation-get-category",
};

/** Get a support conversation. */
export const conversationGetConversation: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}",
  method: "GET",
  operationId: "conversation-get-conversation",
};

/** Update the basic properties of the conversation. */
export const conversationUpdateConversation: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Put.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}",
  method: "PUT",
  operationId: "conversation-update-conversation",
};

/** Get all conversation categories. */
export const conversationListCategories: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationCategories.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationCategories.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationCategories.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationCategories.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationCategories.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/conversation-categories",
  method: "GET",
  operationId: "conversation-list-categories",
};

/** Request a file upload token for the conversation. */
export const conversationRequestFileUpload: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdFiles.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdFiles.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdFiles.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdFiles.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdFiles.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdFiles.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdFiles.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}/files",
  method: "POST",
  operationId: "conversation-request-file-upload",
};

/** Update the status of a conversation. */
export const conversationSetConversationStatus: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdStatus.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdStatus.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdStatus.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdStatus.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdStatus.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdStatus.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdStatus.Put.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdStatus.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdStatus.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}/status",
  method: "PUT",
  operationId: "conversation-set-conversation-status",
};

/** Update the content of the message */
export const conversationUpdateMessage: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessagesMessageId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessagesMessageId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessagesMessageId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessagesMessageId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessagesMessageId.Patch.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessagesMessageId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessagesMessageId.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessagesMessageId.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessagesMessageId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}/messages/{messageId}",
  method: "PATCH",
  operationId: "conversation-update-message",
};

/** Abort a CronjobExecution. */
export const cronjobAbortExecution: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdActionsAbort.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdActionsAbort.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdActionsAbort.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdActionsAbort.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdActionsAbort.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdActionsAbort.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdActionsAbort.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}/executions/{executionId}/actions/abort",
  method: "POST",
  operationId: "cronjob-abort-execution",
};

/** List Cronjobs belonging to a Project. */
export const cronjobListCronjobs: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/cronjobs",
  method: "GET",
  operationId: "cronjob-list-cronjobs",
};

/** Create a Cronjob. */
export const cronjobCreateCronjob: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/cronjobs",
  method: "POST",
  operationId: "cronjob-create-cronjob",
};

/** List CronjobExecutions belonging to a Cronjob. */
export const cronjobListExecutions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}/executions",
  method: "GET",
  operationId: "cronjob-list-executions",
};

/** Trigger a Cronjob. */
export const cronjobCreateExecution: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}/executions",
  method: "POST",
  operationId: "cronjob-create-execution",
};

/** Get a Cronjob. */
export const cronjobGetCronjob: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}",
  method: "GET",
  operationId: "cronjob-get-cronjob",
};

/** Delete a Cronjob. */
export const cronjobDeleteCronjob: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Delete.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}",
  method: "DELETE",
  operationId: "cronjob-delete-cronjob",
};

/** Update a Cronjob. */
export const cronjobUpdateCronjob: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Patch.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Patch.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}",
  method: "PATCH",
  operationId: "cronjob-update-cronjob",
};

/** Get a CronjobExecution. */
export const cronjobGetExecution: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}/executions/{executionId}",
  method: "GET",
  operationId: "cronjob-get-execution",
};

/** Update a Cronjob's app id. */
export const cronjobUpdateCronjobAppId: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdAppId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdAppId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdAppId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdAppId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdAppId.Patch.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdAppId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdAppId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdAppId.Patch.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdAppId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}/app-id",
  method: "PATCH",
  operationId: "cronjob-update-cronjob-app-id",
};

/** Accept a CustomerInvite. */
export const customerAcceptCustomerInvite: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsAccept.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsAccept.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsAccept.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsAccept.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsAccept.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsAccept.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsAccept.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsAccept.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsAccept.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-invites/{inviteId}/actions/accept",
  method: "POST",
  operationId: "customer-accept-customer-invite",
};

/** Get all customer categories. */
export const customerListOfCustomerCategories: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategories.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategories.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategories.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerCategories.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerCategories.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-categories",
  method: "GET",
  operationId: "customer-list-of-customer-categories",
};

/** Create a new customer category. */
export const customerCreateCategory: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategories.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategories.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategories.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategories.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerCategories.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerCategories.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerCategories.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-categories",
  method: "POST",
  operationId: "customer-create-category",
};

/** Create a CustomerInvite. */
export const customerCreateCustomerInvite: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CustomerCustomerIdInvites.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCustomerIdInvites.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCustomerIdInvites.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCustomerIdInvites.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerCustomerIdInvites.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerCustomerIdInvites.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerCustomerIdInvites.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerCustomerIdInvites.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer/{customerId}/invites",
  method: "POST",
  operationId: "customer-create-customer-invite",
};

/** Get all customer profiles the authenticated user has access to. */
export const customerListCustomers: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Customers.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Customers.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Customers.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Customers.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Customers.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers",
  method: "GET",
  operationId: "customer-list-customers",
};

/** Create a new customer profile. */
export const customerCreateCustomer: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2Customers.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2Customers.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Customers.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Customers.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Customers.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Customers.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Customers.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers",
  method: "POST",
  operationId: "customer-create-customer",
};

/** Decline a CustomerInvite. */
export const customerDeclineCustomerInvite: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsDecline.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsDecline.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsDecline.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsDecline.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsDecline.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsDecline.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-invites/{inviteId}/actions/decline",
  method: "POST",
  operationId: "customer-decline-customer-invite",
};

/** Get a customer category. */
export const customerGetCustomerCategory: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-categories/{categoryId}",
  method: "GET",
  operationId: "customer-get-customer-category",
};

/** Update a customer category. */
export const customerUpdateCategory: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-categories/{categoryId}",
  method: "PUT",
  operationId: "customer-update-category",
};

/** Delete a customer category. */
export const customerDeleteCategory: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Delete.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-categories/{categoryId}",
  method: "DELETE",
  operationId: "customer-delete-category",
};

/** Get a CustomerInvite. */
export const customerGetCustomerInvite: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-invites/{inviteId}",
  method: "GET",
  operationId: "customer-get-customer-invite",
};

/** Delete a CustomerInvite. */
export const customerDeleteCustomerInvite: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-invites/{inviteId}",
  method: "DELETE",
  operationId: "customer-delete-customer-invite",
};

/** Get a CustomerMembership. */
export const customerGetCustomerMembership: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsMembershipId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsMembershipId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsMembershipId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsMembershipId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsMembershipId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsMembershipId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-memberships/{membershipId}",
  method: "GET",
  operationId: "customer-get-customer-membership",
};

/** Delete a CustomerMembership. */
export const customerDeleteCustomerMembership: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsMembershipId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsMembershipId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsMembershipId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsMembershipId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsMembershipId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-memberships/{membershipId}",
  method: "DELETE",
  operationId: "customer-delete-customer-membership",
};

/** Update a CustomerMembership. */
export const customerUpdateCustomerMembership: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsMembershipId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsMembershipId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsMembershipId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsMembershipId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsMembershipId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsMembershipId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-memberships/{membershipId}",
  method: "PATCH",
  operationId: "customer-update-customer-membership",
};

/** Get a customer profile. */
export const customerGetCustomer: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}",
  method: "GET",
  operationId: "customer-get-customer",
};

/** Update a customer profile. */
export const customerUpdateCustomer: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}",
  method: "PUT",
  operationId: "customer-update-customer",
};

/** Delete a customer profile. */
export const customerDeleteCustomer: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Delete.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}",
  method: "DELETE",
  operationId: "customer-delete-customer",
};

/** Get a CustomerInvite by token. */
export const customerGetCustomerTokenInvite: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerTokenInvite.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerTokenInvite.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerTokenInvite.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerTokenInvite.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerTokenInvite.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerTokenInvite.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-token-invite",
  method: "GET",
  operationId: "customer-get-customer-token-invite",
};

/** Check if the customer profile has a valid contract partner configured. */
export const customerIsCustomerLegallyCompetent: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLegallyCompetent.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLegallyCompetent.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLegallyCompetent.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLegallyCompetent.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLegallyCompetent.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLegallyCompetent.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLegallyCompetent.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/legally-competent",
  method: "GET",
  operationId: "customer-is-customer-legally-competent",
};

/** Leave a Customer. */
export const customerLeaveCustomer: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CustomerCustomerIdActionsLeave.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCustomerIdActionsLeave.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCustomerIdActionsLeave.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCustomerIdActionsLeave.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerCustomerIdActionsLeave.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerCustomerIdActionsLeave.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer/{customerId}/actions/leave",
  method: "POST",
  operationId: "customer-leave-customer",
};

/** List CustomerInvites belonging to the executing user. */
export const customerListCustomerInvites: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvites.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvites.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvites.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvites.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvites.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvites.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-invites",
  method: "GET",
  operationId: "customer-list-customer-invites",
};

/** List CustomerMemberships belonging to the executing user. */
export const customerListCustomerMemberships: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMemberships.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMemberships.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMemberships.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMemberships.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMemberships.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMemberships.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-memberships",
  method: "GET",
  operationId: "customer-list-customer-memberships",
};

/** List Invites belonging to a Customer. */
export const customerListInvitesForCustomer: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvites.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvites.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvites.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvites.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvites.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvites.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/invites",
  method: "GET",
  operationId: "customer-list-invites-for-customer",
};

/** List Memberships belonging to a Customer. */
export const customerListMembershipsForCustomer: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdMemberships.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdMemberships.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdMemberships.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdMemberships.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdMemberships.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdMemberships.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/memberships",
  method: "GET",
  operationId: "customer-list-memberships-for-customer",
};

/** Request a new avatar upload for the customer profile. */
export const customerRequestAvatarUpload: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Post.Responses.$401.Content.ApplicationJson>,
      401,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/avatar",
  method: "POST",
  operationId: "customer-request-avatar-upload",
};

/** Remove the avatar picture of the customer profile. */
export const customerRemoveAvatar: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Delete.Responses.$401.Content.ApplicationJson>,
      401,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/avatar",
  method: "DELETE",
  operationId: "customer-remove-avatar",
};

/** Resend the mail for a CustomerInvite. */
export const customerResendCustomerInviteMail: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsResend.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsResend.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsResend.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsResend.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsResend.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsResend.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesInviteIdActionsResend.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-invites/{inviteId}/actions/resend",
  method: "POST",
  operationId: "customer-resend-customer-invite-mail",
};

/** List MySQLDatabases belonging to a Project. */
export const databaseListMysqlDatabases: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/mysql-databases",
  method: "GET",
  operationId: "database-list-mysql-databases",
};

/** Create a MySQLDatabase with a MySQLUser. */
export const databaseCreateMysqlDatabase: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/mysql-databases",
  method: "POST",
  operationId: "database-create-mysql-database",
};

/** List MySQLUsers belonging to a Database. */
export const databaseListMysqlUsers: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{databaseId}/users",
  method: "GET",
  operationId: "database-list-mysql-users",
};

/** Create a MySQLUser. */
export const databaseCreateMysqlUser: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{databaseId}/users",
  method: "POST",
  operationId: "database-create-mysql-user",
};

/** List RedisDatabases belonging to a Project. */
export const databaseListRedisDatabases: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/redis-databases",
  method: "GET",
  operationId: "database-list-redis-databases",
};

/** Create a RedisDatabase. */
export const databaseCreateRedisDatabase: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/redis-databases",
  method: "POST",
  operationId: "database-create-redis-database",
};

/** Get a MySQLDatabase. */
export const databaseGetMysqlDatabase: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{id}",
  method: "GET",
  operationId: "database-get-mysql-database",
};

/** Delete a MySQLDatabase. */
export const databaseDeleteMysqlDatabase: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Delete.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Delete.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{id}",
  method: "DELETE",
  operationId: "database-delete-mysql-database",
};

/** Get a MySQLUser. */
export const databaseGetMysqlUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{id}",
  method: "GET",
  operationId: "database-get-mysql-user",
};

/** Update a MySQLUser. */
export const databaseUpdateMysqlUser: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Put.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{id}",
  method: "PUT",
  operationId: "database-update-mysql-user",
};

/** Delete a MySQLUser. */
export const databaseDeleteMysqlUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Delete.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{id}",
  method: "DELETE",
  operationId: "database-delete-mysql-user",
};

/** Get a RedisDatabase. */
export const databaseGetRedisDatabase: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/redis-databases/{id}",
  method: "GET",
  operationId: "database-get-redis-database",
};

/** Delete a RedisDatabase. */
export const databaseDeleteRedisDatabase: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Delete.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Delete.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/redis-databases/{id}",
  method: "DELETE",
  operationId: "database-delete-redis-database",
};

/** Disable a MySQLUser. */
export const databaseDisableMysqlUser: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdActionsDisable.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdActionsDisable.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdActionsDisable.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdActionsDisable.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdActionsDisable.Post.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdActionsDisable.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdActionsDisable.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdActionsDisable.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{id}/actions/disable",
  method: "POST",
  operationId: "database-disable-mysql-user",
};

/** Enable a MySQLUser. */
export const databaseEnableMysqlUser: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdActionsEnable.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdActionsEnable.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdActionsEnable.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdActionsEnable.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdActionsEnable.Post.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdActionsEnable.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdActionsEnable.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdActionsEnable.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{id}/actions/enable",
  method: "POST",
  operationId: "database-enable-mysql-user",
};

/** Get a MySQLUser's PhpMyAdmin-URL. */
export const databaseGetMysqlUserPhpMyAdminUrl: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdPhpMyAdminUrl.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdPhpMyAdminUrl.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdPhpMyAdminUrl.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdPhpMyAdminUrl.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdPhpMyAdminUrl.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdPhpMyAdminUrl.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdPhpMyAdminUrl.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{id}/php-my-admin-url",
  method: "GET",
  operationId: "database-get-mysql-user-php-my-admin-url",
};

/** List available MySQL character sets and collations, optionally filtered by a MySQLVersion. */
export const databaseListMysqlCharsets: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlCharsets.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlCharsets.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlCharsets.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlCharsets.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlCharsets.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlCharsets.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlCharsets.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-charsets",
  method: "GET",
  operationId: "database-list-mysql-charsets",
};

/** List MySQLVersions. */
export const databaseListMysqlVersions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlVersions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlVersions.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlVersions.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlVersions.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlVersions.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlVersions.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlVersions.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-versions",
  method: "GET",
  operationId: "database-list-mysql-versions",
};

/** List RedisVersions. */
export const databaseListRedisVersions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2RedisVersions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2RedisVersions.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2RedisVersions.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisVersions.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisVersions.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisVersions.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisVersions.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/redis-versions",
  method: "GET",
  operationId: "database-list-redis-versions",
};

/** Update a MySQLDatabase's default character settings. */
export const databaseUpdateMysqlDatabaseDefaultCharset: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDefaultCharset.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDefaultCharset.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDefaultCharset.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDefaultCharset.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDefaultCharset.Patch.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDefaultCharset.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDefaultCharset.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDefaultCharset.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{id}/default-charset",
  method: "PATCH",
  operationId: "database-update-mysql-database-default-charset",
};

/** Update a MySQLDatabase's description. */
export const databaseUpdateMysqlDatabaseDescription: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDescription.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDescription.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDescription.Patch.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDescription.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDescription.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDescription.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{id}/description",
  method: "PATCH",
  operationId: "database-update-mysql-database-description",
};

/** Update a MySQLUser's password. */
export const databaseUpdateMysqlUserPassword: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdPassword.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdPassword.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdPassword.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdPassword.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdPassword.Patch.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdPassword.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdPassword.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdPassword.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{id}/password",
  method: "PATCH",
  operationId: "database-update-mysql-user-password",
};

/** Update a RedisDatabase's configuration. */
export const databaseUpdateRedisDatabaseConfiguration: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdConfiguration.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdConfiguration.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdConfiguration.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdConfiguration.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdConfiguration.Patch.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdConfiguration.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdConfiguration.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdConfiguration.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/redis-databases/{id}/configuration",
  method: "PATCH",
  operationId: "database-update-redis-database-configuration",
};

/** Update a RedisDatabase's description. */
export const databaseUpdateRedisDatabaseDescription: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdDescription.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdDescription.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdDescription.Patch.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdDescription.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdDescription.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdDescription.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/redis-databases/{id}/description",
  method: "PATCH",
  operationId: "database-update-redis-database-description",
};

/** updates a-records for a specific zone */
export const dnsRecordAsetCustom: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedCustom.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedCustom.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedCustom.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedCustom.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedCustom.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedCustom.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedCustom.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/acombined/custom",
  method: "PUT",
  operationId: "dns-record-a-set-custom",
};

/** set a-records managed by ingress for a specific zone */
export const dnsRecordAsetManagedByIngress: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedManagedIngress.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedManagedIngress.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedManagedIngress.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedManagedIngress.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedManagedIngress.Post.Responses.$204.Content.ApplicationJson>,
      204,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedManagedIngress.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedManagedIngress.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/acombined/managed/ingress",
  method: "POST",
  operationId: "dns-record-a-set-managed-by-ingress",
};

/** updates cname-record for a specific zone */
export const dnsRecordCnameSet: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetCname.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetCname.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetCname.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetCname.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetCname.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetCname.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetCname.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/cname",
  method: "PUT",
  operationId: "dns-record-cname-set",
};

/** updates mx-records for a specific zone */
export const dnsRecordMxSetCustom: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetMxCustom.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetMxCustom.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetMxCustom.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetMxCustom.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetMxCustom.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetMxCustom.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetMxCustom.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/mx/custom",
  method: "PUT",
  operationId: "dns-record-mx-set-custom",
};

/** sets mx-records to managed for a specific zone */
export const dnsRecordMxSetManaged: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetMxManaged.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetMxManaged.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetMxManaged.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetMxManaged.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetMxManaged.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetMxManaged.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetMxManaged.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/mx/managed",
  method: "POST",
  operationId: "dns-record-mx-set-managed",
};

/** updates txt-records for a specific zone */
export const dnsRecordTxtSet: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetTxt.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetTxt.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetTxt.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetTxt.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetTxt.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetTxt.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetTxt.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/txt",
  method: "PUT",
  operationId: "dns-record-txt-set",
};

/** gets a specific zone */
export const dnsZoneGetSpecific: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}",
  method: "GET",
  operationId: "dns-zone-get-specific",
};

/** gets all dns zones by project id */
export const dnsZonesForProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDnsZones.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDnsZones.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDnsZones.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDnsZones.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDnsZones.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDnsZones.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/dns/zones",
  method: "GET",
  operationId: "dns-zones-for-project",
};

/** Abort a declare process. */
export const domainAbortDeclareProcess: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarations.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarations.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarations.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarations.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarations.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarations.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarations.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/declarations",
  method: "DELETE",
  operationId: "domain-abort-declare-process",
};

/** Change the ownerC of a domain. */
export const domainChangeOwnercOfDomain: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdHandlesOwnerc.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdHandlesOwnerc.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdHandlesOwnerc.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdHandlesOwnerc.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdHandlesOwnerc.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdHandlesOwnerc.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdHandlesOwnerc.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdHandlesOwnerc.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/handles/ownerc",
  method: "PUT",
  operationId: "domain-change-ownerc-of-domain",
};

/** Change the Project relation of a Domain. */
export const domainChangeProjectOfDomain: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdProjectId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdProjectId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdProjectId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdProjectId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdProjectId.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdProjectId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdProjectId.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdProjectId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/projectId",
  method: "PUT",
  operationId: "domain-change-project-of-domain",
};

/** Check if a Domain is available to register. */
export const domainCheckDomainAvailability: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2Domains.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2Domains.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Domains.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Domains.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Domains.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Domains.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Domains.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains",
  method: "POST",
  operationId: "domain-check-domain-availability",
};

/** Create an AuthCode for a Domains transfer out process. */
export const domainCreateAuthcodeForDomain: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/actions/create-authcode",
  method: "POST",
  operationId: "domain-create-authcode-for-domain",
};

/** Create an AuthCode2. */
export const domainCreateAuthcode2ForDomain: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode2.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode2.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode2.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode2.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode2.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode2.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode2.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode2.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/actions/create-authcode2",
  method: "POST",
  operationId: "domain-create-authcode2-for-domain",
};

/** Change all nameservers of a Domain. */
export const domainDeclareNameservers: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdNameservers.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdNameservers.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdNameservers.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdNameservers.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdNameservers.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdNameservers.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdNameservers.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdNameservers.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/nameservers",
  method: "PUT",
  operationId: "domain-declare-nameservers",
};

/** Update an AuthCode. */
export const domainDeclareProcessChangeAuthcode: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsAuthcode.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsAuthcode.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsAuthcode.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsAuthcode.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsAuthcode.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsAuthcode.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsAuthcode.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsAuthcode.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/declarations/authcode",
  method: "PUT",
  operationId: "domain-declare-process-change-authcode",
};

/** Update a Domain's OwnerC handle. */
export const domainDeclareProcessChangeHandles: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsHandles.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsHandles.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsHandles.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsHandles.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsHandles.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsHandles.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsHandles.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsHandles.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/declarations/handles",
  method: "PUT",
  operationId: "domain-declare-process-change-handles",
};

/** Get a Domain. */
export const domainGetDomain: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}",
  method: "GET",
  operationId: "domain-get-domain",
};

/** Delete a Domain. */
export const domainDeleteDomain: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Delete.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}",
  method: "DELETE",
  operationId: "domain-delete-domain",
};

/** Get a HandleSchema. */
export const domainGetHandleFields: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsHandleSchemaDomainName.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsHandleSchemaDomainName.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsHandleSchemaDomainName.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsHandleSchemaDomainName.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsHandleSchemaDomainName.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/handle-schema/{domainName}",
  method: "GET",
  operationId: "domain-get-handle-fields",
};

/** Get File Service Reference for a Screenshot of a domain. */
export const domainGetScreenshotForDomain: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScreenshotsNewest.Get.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScreenshotsNewest.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScreenshotsNewest.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScreenshotsNewest.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScreenshotsNewest.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScreenshotsNewest.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScreenshotsNewest.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/screenshots/newest",
  method: "GET",
  operationId: "domain-get-screenshot-for-domain",
};

/** Get a domain ownership. */
export const domainGetSpecificDomainOwnership: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domain-ownerships/{domainOwnershipId}",
  method: "GET",
  operationId: "domain-get-specific-domain-ownership",
};

/** Verify a domain ownership. */
export const domainVerifyDomainOwnership: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domain-ownerships/{domainOwnershipId}",
  method: "POST",
  operationId: "domain-verify-domain-ownership",
};

/** List all domain ownerships of a project. */
export const domainListDomainOwnerships: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDomainOwnerships.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDomainOwnerships.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDomainOwnerships.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDomainOwnerships.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDomainOwnerships.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDomainOwnerships.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/domain-ownerships",
  method: "GET",
  operationId: "domain-list-domain-ownerships",
};

/** List Domains belonging to a Project. */
export const domainListDomains: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDomains.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDomains.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDomains.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDomains.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDomains.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDomains.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/domains",
  method: "GET",
  operationId: "domain-list-domains",
};

/** Resend a domain email. */
export const domainResendDomainEmail: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsResendEmail.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsResendEmail.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsResendEmail.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsResendEmail.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsResendEmail.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsResendEmail.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsResendEmail.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsResendEmail.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/actions/resend-email",
  method: "POST",
  operationId: "domain-resend-domain-email",
};

/** Create a File. */
export const fileCreateFile: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2Files.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2Files.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Files.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Files.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Files.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Files.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Files.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Files.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/files",
  method: "POST",
  operationId: "file-create-file",
};

/** Get a File's meta. */
export const fileGetFileMeta: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2FilesIdMeta.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2FilesIdMeta.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2FilesIdMeta.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesIdMeta.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesIdMeta.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesIdMeta.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/files/{id}/meta",
  method: "GET",
  operationId: "file-get-file-meta",
};

/** Get a Token's upload rules. */
export const fileGetFileTokenRules: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2FileTokenRulesToken.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2FileTokenRulesToken.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2FileTokenRulesToken.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FileTokenRulesToken.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FileTokenRulesToken.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FileTokenRulesToken.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FileTokenRulesToken.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/file-token-rules/{token}",
  method: "GET",
  operationId: "file-get-file-token-rules",
};

/** Get a Type's upload rules. */
export const fileGetFileTypeRules: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2FileTypeRulesName.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2FileTypeRulesName.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2FileTypeRulesName.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FileTypeRulesName.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FileTypeRulesName.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FileTypeRulesName.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FileTypeRulesName.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/file-type-rules/{name}",
  method: "GET",
  operationId: "file-get-file-type-rules",
};

/** Get a File. */
export const fileGetFile: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2FilesId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2FilesId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2FilesId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesId.Get.Responses.$200.Content.ApplicationOctetStream>,
      200,
      "application/octet-stream"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesId.Get.Responses.$200.Content.Base64>,
      200,
      "base64"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesId.Get.Responses.$200.Content.Ocr>,
      200,
      "ocr"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/files/{id}",
  method: "GET",
  operationId: "file-get-file",
};

/** Create an Ingress. */
export const ingressCreate: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2Ingresses.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2Ingresses.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Ingresses.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Ingresses.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Ingresses.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Ingresses.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Ingresses.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/ingresses/",
  method: "POST",
  operationId: "ingress-create",
};

/** Get an Ingress. */
export const ingressGetSpecific: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/ingresses/{ingressId}",
  method: "GET",
  operationId: "ingress-get-specific",
};

/** Delete an Ingress. */
export const ingressDelete: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/ingresses/{ingressId}",
  method: "DELETE",
  operationId: "ingress-delete",
};

/** List Ingresses the user has access to. */
export const ingressListAccessible: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Ingresses.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Ingresses.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Ingresses.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Ingresses.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Ingresses.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Ingresses.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/ingresses",
  method: "GET",
  operationId: "ingress-list-accessible",
};

/** List Ingresses belonging to a project. */
export const ingressListForProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdIngresses.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdIngresses.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdIngresses.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdIngresses.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdIngresses.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdIngresses.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/ingresses",
  method: "GET",
  operationId: "ingress-list-for-project",
};

/** Update an Ingresses paths. */
export const ingressPaths: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdPaths.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdPaths.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdPaths.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdPaths.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdPaths.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdPaths.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdPaths.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/ingresses/{ingressId}/paths",
  method: "PUT",
  operationId: "ingress-paths",
};

/** Request ACME certificate issuance */
export const ingressRequestAcmeCertificateIssuance: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/ingresses/{ingressId}/actions/request-acme-certificate-issuance",
  method: "POST",
  operationId: "ingress-request-acme-certificate-issuance",
};

/** Update an Ingresses tls settings. */
export const ingressTls: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/ingresses/{ingressId}/tls",
  method: "PUT",
  operationId: "ingress-tls",
};

/** Get details of an Invoice. */
export const invoiceDetailOfInvoice: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesInvoiceId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesInvoiceId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesInvoiceId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesInvoiceId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesInvoiceId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesInvoiceId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesInvoiceId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/invoices/{invoiceId}",
  method: "GET",
  operationId: "invoice-detail-of-invoice",
};

/** Get InvoiceSettings of a Customer. */
export const invoiceGetDetailOfInvoiceSettings: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/invoice-settings",
  method: "GET",
  operationId: "invoice-get-detail-of-invoice-settings",
};

/** Update InvoiceSettings of a Customer. */
export const invoiceUpdateInvoiceSettings: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/invoice-settings",
  method: "PUT",
  operationId: "invoice-update-invoice-settings",
};

/** List Invoices of a Customer. */
export const invoiceListCustomerInvoices: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoices.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoices.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoices.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoices.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoices.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoices.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoices.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/invoices",
  method: "GET",
  operationId: "invoice-list-customer-invoices",
};

/** Get all deliveryboxes by project ID */
export const mailDeliveryboxList: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Get.Responses.$403.Content.Empty>,
      403,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Get.Responses.$404.Content.Empty>,
      404,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Get.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Get.Responses.$503.Content.Empty>,
      503,
      "empty"
    >
> = {
  path: "/v2/projects/{projectId}/deliveryboxes",
  method: "GET",
  operationId: "mail-deliverybox-list",
};

/** Create a new deliverybox */
export const mailDeliveryboxCreate: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Post.Responses.$403.Content.Empty>,
      403,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Post.Responses.$404.Content.Empty>,
      404,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Post.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Post.Responses.$503.Content.Empty>,
      503,
      "empty"
    >
> = {
  path: "/v2/projects/{projectId}/deliveryboxes",
  method: "POST",
  operationId: "mail-deliverybox-create",
};

/** Get a specific deliverybox */
export const mailDeliveryboxGetSpecific: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesId.Get.Responses.$403.Content.Empty>,
      403,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesId.Get.Responses.$404.Content.Empty>,
      404,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesId.Get.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesId.Get.Responses.$503.Content.Empty>,
      503,
      "empty"
    >
> = {
  path: "/v2/deliveryboxes/{id}",
  method: "GET",
  operationId: "mail-deliverybox-get-specific",
};

/** Delete a specific deliverybox */
export const mailDeliveryboxDelete: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesId.Delete.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesId.Delete.Responses.$403.Content.Empty>,
      403,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesId.Delete.Responses.$404.Content.Empty>,
      404,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesId.Delete.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesId.Delete.Responses.$503.Content.Empty>,
      503,
      "empty"
    >
> = {
  path: "/v2/deliveryboxes/{id}",
  method: "DELETE",
  operationId: "mail-deliverybox-delete",
};

/** Update the description of an deliverybox */
export const mailDeliveryboxUpdateDescription: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdDescription.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdDescription.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdDescription.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdDescription.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdDescription.Put.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdDescription.Put.Responses.$403.Content.Empty>,
      403,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdDescription.Put.Responses.$404.Content.Empty>,
      404,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdDescription.Put.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdDescription.Put.Responses.$503.Content.Empty>,
      503,
      "empty"
    >
> = {
  path: "/v2/deliveryboxes/{id}/description",
  method: "PUT",
  operationId: "mail-deliverybox-update-description",
};

/** Update the password for a specific deliverybox */
export const mailDeliveryboxUpdatePassword: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdPassword.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdPassword.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdPassword.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdPassword.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdPassword.Put.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdPassword.Put.Responses.$403.Content.Empty>,
      403,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdPassword.Put.Responses.$404.Content.Empty>,
      404,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdPassword.Put.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdPassword.Put.Responses.$503.Content.Empty>,
      503,
      "empty"
    >
> = {
  path: "/v2/deliveryboxes/{id}/password",
  method: "PUT",
  operationId: "mail-deliverybox-update-password",
};

/** Get all mail addresses for a project ID */
export const mailMailaddressList: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Get.Responses.$403.Content.Empty>,
      403,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Get.Responses.$404.Content.Empty>,
      404,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Get.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Get.Responses.$503.Content.Empty>,
      503,
      "empty"
    >
> = {
  path: "/v2/projects/{projectId}/mailaddresses",
  method: "GET",
  operationId: "mail-mailaddress-list",
};

/** Create a new mail address */
export const mailMailaddressCreate: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Post.Responses.$403.Content.Empty>,
      403,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Post.Responses.$404.Content.Empty>,
      404,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Post.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Post.Responses.$503.Content.Empty>,
      503,
      "empty"
    >
> = {
  path: "/v2/projects/{projectId}/mailaddresses",
  method: "POST",
  operationId: "mail-mailaddress-create",
};

/** Get a specific mail address */
export const mailMailaddressGetSpecific: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesId.Get.Responses.$403.Content.Empty>,
      403,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesId.Get.Responses.$404.Content.Empty>,
      404,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesId.Get.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesId.Get.Responses.$503.Content.Empty>,
      503,
      "empty"
    >
> = {
  path: "/v2/mailaddresses/{id}",
  method: "GET",
  operationId: "mail-mailaddress-get-specific",
};

/** Delete a specific mail address */
export const mailMailaddressDelete: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesId.Delete.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesId.Delete.Responses.$403.Content.Empty>,
      403,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesId.Delete.Responses.$404.Content.Empty>,
      404,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesId.Delete.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesId.Delete.Responses.$503.Content.Empty>,
      503,
      "empty"
    >
> = {
  path: "/v2/mailaddresses/{id}",
  method: "DELETE",
  operationId: "mail-mailaddress-delete",
};

/** Update mail-address */
export const mailMailaddressUpdateAddress: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAddress.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAddress.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAddress.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAddress.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAddress.Put.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAddress.Put.Responses.$403.Content.Empty>,
      403,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAddress.Put.Responses.$404.Content.Empty>,
      404,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAddress.Put.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAddress.Put.Responses.$503.Content.Empty>,
      503,
      "empty"
    >
> = {
  path: "/v2/mailaddresses/{id}/address",
  method: "PUT",
  operationId: "mail-mailaddress-update-address",
};

/** Update the auto responder of a mail address */
export const mailMailaddressUpdateAutoresponder: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAutoResponder.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAutoResponder.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAutoResponder.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAutoResponder.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAutoResponder.Put.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAutoResponder.Put.Responses.$403.Content.Empty>,
      403,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAutoResponder.Put.Responses.$404.Content.Empty>,
      404,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAutoResponder.Put.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAutoResponder.Put.Responses.$503.Content.Empty>,
      503,
      "empty"
    >
> = {
  path: "/v2/mailaddresses/{id}/autoResponder",
  method: "PUT",
  operationId: "mail-mailaddress-update-autoresponder",
};

/** Enable or disable the catchAll flag for a specific mail address */
export const mailMailaddressUpdateCatchall: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdCatchAll.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdCatchAll.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdCatchAll.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdCatchAll.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdCatchAll.Put.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdCatchAll.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdCatchAll.Put.Responses.$403.Content.Empty>,
      403,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdCatchAll.Put.Responses.$404.Content.Empty>,
      404,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdCatchAll.Put.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdCatchAll.Put.Responses.$503.Content.Empty>,
      503,
      "empty"
    >
> = {
  path: "/v2/mailaddresses/{id}/catchAll",
  method: "PUT",
  operationId: "mail-mailaddress-update-catchall",
};

/** Update the addresses an email is forwarded to */
export const mailMailaddressUpdateForwardaddresses: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdForwardaddresses.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdForwardaddresses.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdForwardaddresses.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdForwardaddresses.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdForwardaddresses.Put.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdForwardaddresses.Put.Responses.$403.Content.Empty>,
      403,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdForwardaddresses.Put.Responses.$404.Content.Empty>,
      404,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdForwardaddresses.Put.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdForwardaddresses.Put.Responses.$503.Content.Empty>,
      503,
      "empty"
    >
> = {
  path: "/v2/mailaddresses/{id}/forwardaddresses",
  method: "PUT",
  operationId: "mail-mailaddress-update-forwardaddresses",
};

/** Update the password for a specific mail address */
export const mailMailaddressUpdatePassword: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdPassword.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdPassword.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdPassword.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdPassword.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdPassword.Put.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdPassword.Put.Responses.$403.Content.Empty>,
      403,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdPassword.Put.Responses.$404.Content.Empty>,
      404,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdPassword.Put.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdPassword.Put.Responses.$503.Content.Empty>,
      503,
      "empty"
    >
> = {
  path: "/v2/mailaddresses/{id}/password",
  method: "PUT",
  operationId: "mail-mailaddress-update-password",
};

/** Update the quota of a mailbox */
export const mailMailaddressUpdateQuota: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdQuota.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdQuota.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdQuota.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdQuota.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdQuota.Put.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdQuota.Put.Responses.$403.Content.Empty>,
      403,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdQuota.Put.Responses.$404.Content.Empty>,
      404,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdQuota.Put.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdQuota.Put.Responses.$503.Content.Empty>,
      503,
      "empty"
    >
> = {
  path: "/v2/mailaddresses/{id}/quota",
  method: "PUT",
  operationId: "mail-mailaddress-update-quota",
};

/** Update the spamprotection of a mailbox */
export const mailMailaddressUpdateSpamprotection: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdSpamprotection.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdSpamprotection.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdSpamprotection.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdSpamprotection.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdSpamprotection.Put.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdSpamprotection.Put.Responses.$403.Content.Empty>,
      403,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdSpamprotection.Put.Responses.$404.Content.Empty>,
      404,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdSpamprotection.Put.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdSpamprotection.Put.Responses.$503.Content.Empty>,
      503,
      "empty"
    >
> = {
  path: "/v2/mailaddresses/{id}/spamprotection",
  method: "PUT",
  operationId: "mail-mailaddress-update-spamprotection",
};

/** Get settings for a given project ID */
export const mailProjectsettingGetSpecific: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettings.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettings.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettings.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettings.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettings.Get.Responses.$403.Content.Empty>,
      403,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettings.Get.Responses.$404.Content.Empty>,
      404,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettings.Get.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettings.Get.Responses.$503.Content.Empty>,
      503,
      "empty"
    >
> = {
  path: "/v2/projects/{projectId}/mailsettings",
  method: "GET",
  operationId: "mail-projectsetting-get-specific",
};

/** Update blacklist for a given project ID */
export const mailProjectsettingUpdateBlacklist: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsBlacklist.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsBlacklist.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsBlacklist.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsBlacklist.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsBlacklist.Put.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsBlacklist.Put.Responses.$403.Content.Empty>,
      403,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsBlacklist.Put.Responses.$404.Content.Empty>,
      404,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsBlacklist.Put.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsBlacklist.Put.Responses.$503.Content.Empty>,
      503,
      "empty"
    >
> = {
  path: "/v2/projects/{projectId}/mailsettings/blacklist",
  method: "PUT",
  operationId: "mail-projectsetting-update-blacklist",
};

/** Update whitelist for a given project ID */
export const mailProjectsettingUpdateWhitelist: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsWhitelist.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsWhitelist.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsWhitelist.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsWhitelist.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsWhitelist.Put.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsWhitelist.Put.Responses.$403.Content.Empty>,
      403,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsWhitelist.Put.Responses.$404.Content.Empty>,
      404,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsWhitelist.Put.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsWhitelist.Put.Responses.$503.Content.Empty>,
      503,
      "empty"
    >
> = {
  path: "/v2/projects/{projectId}/mailsettings/whitelist",
  method: "PUT",
  operationId: "mail-projectsetting-update-whitelist",
};

/** Getting the subscription status of the subscription. */
export const newsletterGetInfo: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptionsSelf.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptionsSelf.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptionsSelf.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptionsSelf.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptionsSelf.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/newsletter-subscriptions/self",
  method: "GET",
  operationId: "newsletter-get-info",
};

/** Unsubscribe a user from the mStudio newsletter. */
export const newsletterUnsubscribeUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptionsSelf.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptionsSelf.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptionsSelf.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptionsSelf.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptionsSelf.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/newsletter-subscriptions/self",
  method: "DELETE",
  operationId: "newsletter-unsubscribe-user",
};

/** Subscribe a user to the mStudio newsletter. */
export const newsletterSubscribeUser: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptions.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptions.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptions.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptions.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptions.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptions.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptions.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/newsletter-subscriptions",
  method: "POST",
  operationId: "newsletter-subscribe-user",
};

/** Get the counts for unread notifications of the user. */
export const notificationsCountUnreadNotifications: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsUnreadCounts.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsUnreadCounts.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsUnreadCounts.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NotificationsUnreadCounts.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NotificationsUnreadCounts.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/notifications/unread-counts",
  method: "GET",
  operationId: "notifications-count-unread-notifications",
};

/** List all unread notifications */
export const notificationsListNotifications: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Notifications.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Notifications.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Notifications.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Notifications.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Notifications.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/notifications",
  method: "GET",
  operationId: "notifications-list-notifications",
};

/** Mark all notifications as read. */
export const notificationsReadAllNotifications: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2NotificationsStatus.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsStatus.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsStatus.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsStatus.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NotificationsStatus.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NotificationsStatus.Put.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NotificationsStatus.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/notifications/status",
  method: "PUT",
  operationId: "notifications-read-all-notifications",
};

/** Mark notification as read. */
export const notificationsReadNotification: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2NotificationsMessageIdStatus.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsMessageIdStatus.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsMessageIdStatus.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsMessageIdStatus.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NotificationsMessageIdStatus.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NotificationsMessageIdStatus.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NotificationsMessageIdStatus.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/notifications/{messageId}/status",
  method: "PUT",
  operationId: "notifications-read-notification",
};

/** Create an Order. */
export const orderCreateOrder: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2Orders.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2Orders.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Orders.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Orders.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Orders.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Orders.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Orders.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/orders",
  method: "POST",
  operationId: "order-create-order",
};

/** Create TariffChange Order. */
export const orderCreateTariffChange: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2TariffChanges.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2TariffChanges.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2TariffChanges.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2TariffChanges.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2TariffChanges.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2TariffChanges.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2TariffChanges.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/tariff-changes",
  method: "POST",
  operationId: "order-create-tariff-change",
};

/** Get Order for Customer. */
export const orderGetOrder: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersOrderId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersOrderId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersOrderId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2OrdersOrderId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2OrdersOrderId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/orders/{orderId}",
  method: "GET",
  operationId: "order-get-order",
};

/** Get list of Orders of a Customer. */
export const orderListCustomerOrders: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdOrders.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdOrders.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdOrders.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdOrders.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdOrders.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/orders",
  method: "GET",
  operationId: "order-list-customer-orders",
};

/** Get list of Orders of a Project. */
export const orderListProjectOrders: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdOrders.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdOrders.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdOrders.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdOrders.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdOrders.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/orders",
  method: "GET",
  operationId: "order-list-project-orders",
};

/** Preview Order. */
export const orderPreviewOrder: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2OrderPreviews.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2OrderPreviews.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2OrderPreviews.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2OrderPreviews.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2OrderPreviews.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2OrderPreviews.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2OrderPreviews.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/order-previews",
  method: "POST",
  operationId: "order-preview-order",
};

/** Preview TariffChange. */
export const orderPreviewTariffChange: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2TariffChangePreviews.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2TariffChangePreviews.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2TariffChangePreviews.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2TariffChangePreviews.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2TariffChangePreviews.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2TariffChangePreviews.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2TariffChangePreviews.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/tariff-change-previews",
  method: "POST",
  operationId: "order-preview-tariff-change",
};

/** Get detailed performance data for a given domain and path. */
export const pageinsightsGetPerformanceData: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Pageinsights.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Pageinsights.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Pageinsights.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Pageinsights.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Pageinsights.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Pageinsights.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Pageinsights.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/pageinsights",
  method: "GET",
  operationId: "pageinsights-get-performance-data",
};

/** List websites (specified as domain and path) from a project where performance data is available. */
export const pageinsightsListPerformanceDataForProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsIdPageinsights.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsIdPageinsights.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsIdPageinsights.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsIdPageinsights.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsIdPageinsights.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsIdPageinsights.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsIdPageinsights.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{id}/pageinsights",
  method: "GET",
  operationId: "pageinsights-list-performance-data-for-project",
};

/** Get a password policy. */
export const passwordValidationGetPasswordPolicy: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2PasswordPoliciesPath.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2PasswordPoliciesPath.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2PasswordPoliciesPath.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PasswordPoliciesPath.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PasswordPoliciesPath.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/password/policies/{path}",
  method: "GET",
  operationId: "password-validation-get-password-policy",
};

/** Accept a ProjectInvite. */
export const projectAcceptProjectInvite: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsAccept.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsAccept.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsAccept.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsAccept.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsAccept.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsAccept.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsAccept.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsAccept.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsAccept.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-invites/{inviteId}/actions/accept",
  method: "POST",
  operationId: "project-accept-project-invite",
};

/** Create a ProjectInvite. */
export const projectCreateProjectInvite: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectProjectIdInvites.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectProjectIdInvites.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectProjectIdInvites.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectProjectIdInvites.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectProjectIdInvites.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectProjectIdInvites.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectProjectIdInvites.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectProjectIdInvites.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project/{projectId}/invites",
  method: "POST",
  operationId: "project-create-project-invite",
};

/** Create a Project belonging to a Server. */
export const projectCreateProject: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdProjects.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdProjects.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdProjects.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdProjects.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdProjects.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdProjects.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdProjects.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdProjects.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/servers/{serverId}/projects",
  method: "POST",
  operationId: "project-create-project",
};

/** Decline a ProjectInvite. */
export const projectDeclineProjectInvite: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsDecline.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsDecline.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsDecline.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsDecline.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsDecline.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsDecline.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-invites/{inviteId}/actions/decline",
  method: "POST",
  operationId: "project-decline-project-invite",
};

/** Request a Project avatar upload. */
export const projectRequestProjectAvatarUpload: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/avatar",
  method: "POST",
  operationId: "project-request-project-avatar-upload",
};

/** Delete a Project's avatar. */
export const projectDeleteProjectAvatar: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/avatar",
  method: "DELETE",
  operationId: "project-delete-project-avatar",
};

/** Get a ProjectInvite. */
export const projectGetProjectInvite: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-invites/{inviteId}",
  method: "GET",
  operationId: "project-get-project-invite",
};

/** Delete a ProjectInvite. */
export const projectDeleteProjectInvite: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-invites/{inviteId}",
  method: "DELETE",
  operationId: "project-delete-project-invite",
};

/** Get a ProjectMembership */
export const projectGetProjectMembership: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsMembershipId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsMembershipId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsMembershipId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsMembershipId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsMembershipId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsMembershipId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-memberships/{membershipId}",
  method: "GET",
  operationId: "project-get-project-membership",
};

/** Delete a ProjectMembership. */
export const projectDeleteProjectMembership: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsMembershipId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsMembershipId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsMembershipId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsMembershipId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsMembershipId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-memberships/{membershipId}",
  method: "DELETE",
  operationId: "project-delete-project-membership",
};

/** Update a ProjectMembership. */
export const projectUpdateProjectMembership: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsMembershipId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsMembershipId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsMembershipId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsMembershipId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsMembershipId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsMembershipId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-memberships/{membershipId}",
  method: "PATCH",
  operationId: "project-update-project-membership",
};

/** Delete a Project. */
export const projectDeleteProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Delete.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}",
  method: "DELETE",
  operationId: "project-delete-project",
};

/** Request a Server avatar upload. */
export const projectRequestServerAvatarUpload: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/servers/{serverId}/avatar",
  method: "POST",
  operationId: "project-request-server-avatar-upload",
};

/** Delete a Server's avatar. */
export const projectDeleteServerAvatar: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/servers/{serverId}/avatar",
  method: "DELETE",
  operationId: "project-delete-server-avatar",
};

/** List directories belonging to a Project. */
export const projectFileSystemGetDirectories: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDirectories.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDirectories.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDirectories.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDirectories.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDirectories.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDirectories.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDirectories.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDirectories.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/filesystem/directories",
  method: "GET",
  operationId: "project-file-system-get-directories",
};

/** Get a Project directory filesystem usage. */
export const projectFileSystemGetDiskUsage: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemUsagesDisk.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemUsagesDisk.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemUsagesDisk.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemUsagesDisk.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemUsagesDisk.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemUsagesDisk.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemUsagesDisk.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemUsagesDisk.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/filesystem/usages/disk",
  method: "GET",
  operationId: "project-file-system-get-disk-usage",
};

/** Get a Project file's content. */
export const projectFileSystemGetFileContent: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFilesRaw.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFilesRaw.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFilesRaw.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFilesRaw.Get.Responses.$200.Content.TextPlain>,
      200,
      "text/plain"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFilesRaw.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFilesRaw.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFilesRaw.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFilesRaw.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/filesystem/files/raw",
  method: "GET",
  operationId: "project-file-system-get-file-content",
};

/** Get a Project's file/filesystem authorization token. */
export const projectFileSystemGetJwt: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdJwt.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdJwt.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdJwt.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdJwt.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdJwt.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdJwt.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdJwt.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/jwt",
  method: "GET",
  operationId: "project-file-system-get-jwt",
};

/** Get a Project file's information. */
export const projectFileSystemListFiles: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFiles.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFiles.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFiles.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFiles.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFiles.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFiles.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFiles.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFiles.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/filesystem/files",
  method: "GET",
  operationId: "project-file-system-list-files",
};

/** Get a ProjectInvite by token. */
export const projectGetProjectTokenInvite: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectTokenInvite.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectTokenInvite.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectTokenInvite.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectTokenInvite.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectTokenInvite.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectTokenInvite.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-token-invite",
  method: "GET",
  operationId: "project-get-project-token-invite",
};

/** Get a Project. */
export const projectGetProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{id}",
  method: "GET",
  operationId: "project-get-project",
};

/** Get the executing user's membership in a Project. */
export const projectGetSelfMembershipForProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMembershipsSelf.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMembershipsSelf.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMembershipsSelf.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMembershipsSelf.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMembershipsSelf.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMembershipsSelf.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/memberships/self",
  method: "GET",
  operationId: "project-get-self-membership-for-project",
};

/** Get a Server. */
export const projectGetServer: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/servers/{serverId}",
  method: "GET",
  operationId: "project-get-server",
};

/** Leave a Project. */
export const projectLeaveProject: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdLeave.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdLeave.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdLeave.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdLeave.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdLeave.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdLeave.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/leave",
  method: "POST",
  operationId: "project-leave-project",
};

/** List Invites belonging to a Project. */
export const projectListInvitesForProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdInvites.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdInvites.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdInvites.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdInvites.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdInvites.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdInvites.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/invites",
  method: "GET",
  operationId: "project-list-invites-for-project",
};

/** List Memberships belonging to a Project. */
export const projectListMembershipsForProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMemberships.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMemberships.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMemberships.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMemberships.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMemberships.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMemberships.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/memberships",
  method: "GET",
  operationId: "project-list-memberships-for-project",
};

/** List ProjectInvites belonging to the executing user. */
export const projectListProjectInvites: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvites.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvites.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvites.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvites.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvites.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvites.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-invites",
  method: "GET",
  operationId: "project-list-project-invites",
};

/** List ProjectMemberships belonging to the executing user. */
export const projectListProjectMemberships: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMemberships.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMemberships.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMemberships.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMemberships.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMemberships.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMemberships.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-memberships",
  method: "GET",
  operationId: "project-list-project-memberships",
};

/** List Projects belonging to the executing user. */
export const projectListProjects: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Projects.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Projects.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Projects.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Projects.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Projects.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Projects.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects",
  method: "GET",
  operationId: "project-list-projects",
};

/** List Servers belonging to the executing user. */
export const projectListServers: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Servers.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Servers.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Servers.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Servers.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Servers.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Servers.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/servers",
  method: "GET",
  operationId: "project-list-servers",
};

/** Resend the mail for a ProjectInvite. */
export const projectResendProjectInviteMail: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsResend.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsResend.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsResend.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsResend.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsResend.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsResend.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesInviteIdActionsResend.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-invites/{inviteId}/actions/resend",
  method: "POST",
  operationId: "project-resend-project-invite-mail",
};

/** Update a Project's description. */
export const projectUpdateProjectDescription: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsIdDescription.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsIdDescription.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsIdDescription.Patch.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsIdDescription.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsIdDescription.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsIdDescription.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{id}/description",
  method: "PATCH",
  operationId: "project-update-project-description",
};

/** Update a Servers's description. */
export const projectUpdateServerDescription: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdDescription.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdDescription.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdDescription.Patch.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdDescription.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
> = {
  path: "/v2/servers/{serverId}/description",
  method: "PATCH",
  operationId: "project-update-server-description",
};

/** Relocate an external Project to mittwald. */
export const redirectusCreateRelocation: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2Relocation.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2Relocation.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Relocation.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Relocation.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Relocation.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Relocation.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Relocation.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/relocation",
  method: "POST",
  operationId: "redirectus-create-relocation",
};

/** Register a tariff change for a legacy tariff. */
export const relocationCreateLegacyTariffChange: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2LegacyTariffChange.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2LegacyTariffChange.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2LegacyTariffChange.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2LegacyTariffChange.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2LegacyTariffChange.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2LegacyTariffChange.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2LegacyTariffChange.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/legacy-tariff-change",
  method: "POST",
  operationId: "relocation-create-legacy-tariff-change",
};

/** Obtain a service token. */
export const servicetokenAuthenticateService: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ServicesAccessKeyIdActionsAuthenticate.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ServicesAccessKeyIdActionsAuthenticate.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ServicesAccessKeyIdActionsAuthenticate.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ServicesAccessKeyIdActionsAuthenticate.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServicesAccessKeyIdActionsAuthenticate.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServicesAccessKeyIdActionsAuthenticate.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/services/{accessKeyId}/actions/authenticate",
  method: "POST",
  operationId: "servicetoken-authenticate-service",
};

/** Get all SFTPUsers for a Project. */
export const sftpUserListSftpUsers: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSftpUsers.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSftpUsers.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSftpUsers.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSftpUsers.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSftpUsers.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSftpUsers.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/sftp-users",
  method: "GET",
  operationId: "sftp-user-list-sftp-users",
};

/** Create an SFTPUser for a Project. */
export const sftpUserCreateSftpUser: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSftpUsers.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSftpUsers.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSftpUsers.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSftpUsers.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSftpUsers.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSftpUsers.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSftpUsers.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/sftp-users",
  method: "POST",
  operationId: "sftp-user-create-sftp-user",
};

/** Get an SFTPUser. */
export const sftpUserGetSftpUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/sftp-users/{sftpUserId}",
  method: "GET",
  operationId: "sftp-user-get-sftp-user",
};

/** Delete an SFTPUser. */
export const sftpUserDeleteSftpUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/sftp-users/{sftpUserId}",
  method: "DELETE",
  operationId: "sftp-user-delete-sftp-user",
};

/** Update an SFTPUser. */
export const sftpUserUpdateSftpUser: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/sftp-users/{sftpUserId}",
  method: "PATCH",
  operationId: "sftp-user-update-sftp-user",
};

/** Get all SSHUsers for a Project. */
export const sshUserListSshUsers: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshUsers.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshUsers.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshUsers.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshUsers.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshUsers.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshUsers.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/ssh-users",
  method: "GET",
  operationId: "ssh-user-list-ssh-users",
};

/** Create an SSHUser for a Project. */
export const sshUserCreateSshUser: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshUsers.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshUsers.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshUsers.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshUsers.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshUsers.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshUsers.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshUsers.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/ssh-users",
  method: "POST",
  operationId: "ssh-user-create-ssh-user",
};

/** Get an SSHUser. */
export const sshUserGetSshUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/ssh-users/{sshUserId}",
  method: "GET",
  operationId: "ssh-user-get-ssh-user",
};

/** Delete an SSHUser. */
export const sshUserDeleteSshUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/ssh-users/{sshUserId}",
  method: "DELETE",
  operationId: "ssh-user-delete-ssh-user",
};

/** Update an SSHUser. */
export const sshUserUpdateSshUser: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2SshusersSshUserId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SshusersSshUserId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshusersSshUserId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2SshusersSshUserId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SshusersSshUserId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SshusersSshUserId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SshusersSshUserId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/sshusers/{sshUserId}",
  method: "PATCH",
  operationId: "ssh-user-update-ssh-user",
};

/** Add phone number and start verification process. */
export const userAddPhoneNumber: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhone.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhone.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhone.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhone.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhone.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhone.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhone.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhone.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhone.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/{userId}/phone",
  method: "POST",
  operationId: "user-add-phone-number",
};

/** Remove phone number. */
export const userRemovePhoneNumber: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhone.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhone.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhone.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhone.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhone.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhone.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/{userId}/phone",
  method: "DELETE",
  operationId: "user-remove-phone-number",
};

/** Validate your second factor. */
export const userAuthenticateMfa: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2AuthenticateMfa.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2AuthenticateMfa.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AuthenticateMfa.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AuthenticateMfa.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AuthenticateMfa.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AuthenticateMfa.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AuthenticateMfa.Post.Responses.$408.Content.ApplicationJson>,
      408,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AuthenticateMfa.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/authenticate-mfa",
  method: "POST",
  operationId: "user-authenticate-mfa",
};

/** Authenticate yourself to get an access token. */
export const userAuthenticate: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2Authenticate.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2Authenticate.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Authenticate.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Authenticate.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Authenticate.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Authenticate.Post.Responses.$202.Content.ApplicationJson>,
      202,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Authenticate.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Authenticate.Post.Responses.$401.Content.ApplicationJson>,
      401,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Authenticate.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/authenticate",
  method: "POST",
  operationId: "user-authenticate",
};

/** Get your verified Email-Address. */
export const userGetOwnEmail: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmail.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmail.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmail.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmail.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmail.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmail.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/credentials/email",
  method: "GET",
  operationId: "user-get-own-email",
};

/** Change your Email-Address. */
export const userChangeEmail: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmail.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmail.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmail.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmail.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmail.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmail.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmail.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/credentials/email",
  method: "PUT",
  operationId: "user-change-email",
};

/** Change your password. */
export const userChangePassword: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPassword.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPassword.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPassword.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPassword.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPassword.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPassword.Put.Responses.$202.Content.ApplicationJson>,
      202,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPassword.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPassword.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/credentials/password",
  method: "PUT",
  operationId: "user-change-password",
};

/** Check token for validity. */
export const userCheckToken: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsToken.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsToken.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsToken.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsToken.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsToken.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsToken.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/credentials/token",
  method: "POST",
  operationId: "user-check-token",
};

/** Get your current multi factor auth status. */
export const userGetMfaStatus: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/credentials/mfa",
  method: "GET",
  operationId: "user-get-mfa-status",
};

/** Reset RecoveryCodes for MFA. */
export const userResetRecoverycodes: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/credentials/mfa",
  method: "PUT",
  operationId: "user-reset-recoverycodes",
};

/** Confirm Multi Factor Authentication. */
export const userConfirmMfa: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/credentials/mfa",
  method: "POST",
  operationId: "user-confirm-mfa",
};

/** Disable Multi Factor Authentication. */
export const userDisableMfa: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/credentials/mfa",
  method: "DELETE",
  operationId: "user-disable-mfa",
};

/** Confirm password reset. */
export const userConfirmPasswordReset: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPasswordConfirmReset.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPasswordConfirmReset.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPasswordConfirmReset.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPasswordConfirmReset.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPasswordConfirmReset.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPasswordConfirmReset.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPasswordConfirmReset.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/credentials/password/confirm-reset",
  method: "POST",
  operationId: "user-confirm-password-reset",
};

/** List all of your ApiTokens. */
export const userListApiTokens: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokens.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokens.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokens.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokens.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokens.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/api-tokens",
  method: "GET",
  operationId: "user-list-api-tokens",
};

/** Store a new ApiToken. */
export const userCreateApiToken: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokens.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokens.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokens.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokens.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokens.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokens.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokens.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/api-tokens",
  method: "POST",
  operationId: "user-create-api-token",
};

/** Submit your user feedback. */
export const userCreateFeedback: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfFeedback.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfFeedback.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfFeedback.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfFeedback.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfFeedback.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfFeedback.Post.Responses.$401.Content.ApplicationJson>,
      401,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfFeedback.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfFeedback.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/feedback",
  method: "POST",
  operationId: "user-create-feedback",
};

/** Get your stored ssh-keys. */
export const userListSshKeys: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeys.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeys.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeys.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeys.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeys.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/ssh-keys",
  method: "GET",
  operationId: "user-list-ssh-keys",
};

/** Store a new ssh-key. */
export const userCreateSshKey: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeys.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeys.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeys.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeys.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeys.Post.Responses.$201.Content.Empty>,
      201,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeys.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeys.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/ssh-keys",
  method: "POST",
  operationId: "user-create-ssh-key",
};

/** Get a specific ApiToken. */
export const userGetApiToken: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/api-tokens/{apiTokenId}",
  method: "GET",
  operationId: "user-get-api-token",
};

/** Update an existing `ApiToken`. */
export const userEditApiToken: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/api-tokens/{apiTokenId}",
  method: "PUT",
  operationId: "user-edit-api-token",
};

/** Deletes an ApiToken. */
export const userDeleteApiToken: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/api-tokens/{apiTokenId}",
  method: "DELETE",
  operationId: "user-delete-api-token",
};

/** Get a specific stored ssh-key. */
export const userGetSshKey: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/ssh-keys/{sshKeyId}",
  method: "GET",
  operationId: "user-get-ssh-key",
};

/** Edit a stored ssh-key. */
export const userEditSshKey: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/ssh-keys/{sshKeyId}",
  method: "PUT",
  operationId: "user-edit-ssh-key",
};

/** Remove a ssh-key. */
export const userDeleteSshKey: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/ssh-keys/{sshKeyId}",
  method: "DELETE",
  operationId: "user-delete-ssh-key",
};

/** Delete your account and all your personal data. */
export const userDeleteUser: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelf.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelf.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelf.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelf.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelf.Delete.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelf.Delete.Responses.$202.Content.ApplicationJson>,
      202,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelf.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelf.Delete.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelf.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self",
  method: "DELETE",
  operationId: "user-delete-user",
};

/** Get your account information. */
export const userGetOwnAccount: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfPersonalInformation.Get.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfPersonalInformation.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfPersonalInformation.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfPersonalInformation.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfPersonalInformation.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfPersonalInformation.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/personal-information",
  method: "GET",
  operationId: "user-get-own-account",
};

/** Update your account information. */
export const userUpdateAccount: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfPersonalInformation.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfPersonalInformation.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfPersonalInformation.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfPersonalInformation.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfPersonalInformation.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfPersonalInformation.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfPersonalInformation.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/personal-information",
  method: "PUT",
  operationId: "user-update-account",
};

/** The timestamp of your latest password change. */
export const userGetPasswordUpdatedAt: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPasswordUpdatedAt.Get.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPasswordUpdatedAt.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPasswordUpdatedAt.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPasswordUpdatedAt.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPasswordUpdatedAt.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPasswordUpdatedAt.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/credentials/password-updated-at",
  method: "GET",
  operationId: "user-get-password-updated-at",
};

/** Get personalized settings. */
export const userGetPersonalizedSettings: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdSettings.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdSettings.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdSettings.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdSettings.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdSettings.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/{userId}/settings",
  method: "GET",
  operationId: "user-get-personalized-settings",
};

/** Update personalized GUI settings. */
export const userUpdatePersonalizedSettings: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdSettings.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdSettings.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdSettings.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdSettings.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdSettings.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdSettings.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdSettings.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/{userId}/settings",
  method: "PUT",
  operationId: "user-update-personalized-settings",
};

/** Get a specific session. */
export const userGetSession: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessionsTokenId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessionsTokenId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessionsTokenId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessionsTokenId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessionsTokenId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessionsTokenId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/sessions/{tokenId}",
  method: "GET",
  operationId: "user-get-session",
};

/** Terminate a specific Session. */
export const userTerminateSession: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessionsTokenId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessionsTokenId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessionsTokenId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessionsTokenId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessionsTokenId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessionsTokenId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/sessions/{tokenId}",
  method: "DELETE",
  operationId: "user-terminate-session",
};

/** Get profile information for a user. */
export const userGetUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserId.Get.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/{userId}",
  method: "GET",
  operationId: "user-get-user",
};

/** Change personal information. */
export const userUpdatePersonalInformation: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersUserId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserId.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/{userId}",
  method: "PUT",
  operationId: "user-update-personal-information",
};

/** Initialize Multi Factor Authentication. If successful, it needs to be confirmed, before usage of mfa. */
export const userInitMfa: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsInitMfa.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsInitMfa.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsInitMfa.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsInitMfa.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsInitMfa.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsInitMfa.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsInitMfa.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/credentials/init-mfa",
  method: "POST",
  operationId: "user-init-mfa",
};

/** Initialize password reset process. */
export const userInitPasswordReset: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsActionsInitPasswordReset.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsActionsInitPasswordReset.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsActionsInitPasswordReset.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsActionsInitPasswordReset.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsActionsInitPasswordReset.Post.Responses.$201.Content.Empty>,
      201,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsActionsInitPasswordReset.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsActionsInitPasswordReset.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/credentials/actions/init-password-reset",
  method: "POST",
  operationId: "user-init-password-reset",
};

/** Submitted feedback of the given user. */
export const userListFeedback: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdFeedback.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdFeedback.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdFeedback.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdFeedback.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdFeedback.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/{userId}/feedback",
  method: "GET",
  operationId: "user-list-feedback",
};

/** List all sessions. */
export const userListSessions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessions.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessions.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessions.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessions.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/sessions",
  method: "GET",
  operationId: "user-list-sessions",
};

/** Terminate all sessions, except the current session. */
export const userTerminateAllSessions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessions.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessions.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessions.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessions.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessions.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/sessions",
  method: "DELETE",
  operationId: "user-terminate-all-sessions",
};

/** Terminate session and invalidate access token. */
export const userLogout: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2Logout.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2Logout.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Logout.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Logout.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Logout.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Logout.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Logout.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/logout",
  method: "PUT",
  operationId: "user-logout",
};

/** Register with email and password. */
export const userRegister: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2Register.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2Register.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Register.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Register.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Register.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Register.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Register.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/register",
  method: "POST",
  operationId: "user-register",
};

/** Request a new avatar image upload. */
export const userRequestAvatarUpload: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdAvatar.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdAvatar.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdAvatar.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdAvatar.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdAvatar.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdAvatar.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdAvatar.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/{userId}/avatar",
  method: "POST",
  operationId: "user-request-avatar-upload",
};

/** Remove Avatar. */
export const userRemoveAvatar: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdAvatar.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdAvatar.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdAvatar.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdAvatar.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdAvatar.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdAvatar.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/{userId}/avatar",
  method: "DELETE",
  operationId: "user-remove-avatar",
};

/** Resend the Email-Address verification email. */
export const userResendVerificationEmail: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsResendEmail.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsResendEmail.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsResendEmail.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsResendEmail.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsResendEmail.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsResendEmail.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsResendEmail.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsResendEmail.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/credentials/email/actions/resend-email",
  method: "POST",
  operationId: "user-resend-verification-email",
};

/** Request a support code. */
export const userSupportCodeRequest: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsSupportCode.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsSupportCode.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsSupportCode.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsSupportCode.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsSupportCode.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/credentials/support-code",
  method: "GET",
  operationId: "user-support-code-request",
};

/** Verify an added Email-Address. */
export const userVerifyEmail: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsVerifyEmail.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsVerifyEmail.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsVerifyEmail.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsVerifyEmail.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsVerifyEmail.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsVerifyEmail.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsVerifyEmail.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsVerifyEmail.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/credentials/email/actions/verify-email",
  method: "POST",
  operationId: "user-verify-email",
};

/** Verify phone number. */
export const userVerifyPhoneNumber: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhoneVerify.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhoneVerify.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhoneVerify.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhoneVerify.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhoneVerify.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhoneVerify.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhoneVerify.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhoneVerify.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhoneVerify.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/{userId}/phone/verify",
  method: "POST",
  operationId: "user-verify-phone-number",
};

/** Verify your registration. */
export const userVerifyRegistration: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2VerifyRegistration.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2VerifyRegistration.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2VerifyRegistration.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2VerifyRegistration.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2VerifyRegistration.Post.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2VerifyRegistration.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2VerifyRegistration.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2VerifyRegistration.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/verify-registration",
  method: "POST",
  operationId: "user-verify-registration",
};

/** updates srv-records for a specific zone */
export const dnsRecordSrvSet: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetSrv.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetSrv.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetSrv.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetSrv.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetSrv.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetSrv.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetSrv.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/srv",
  method: "PATCH",
  operationId: "dns-record-srv-set",
};

/** creates a sub zone for a given dns zone */
export const dnsSubZoneCreate: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DnsZones.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZones.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZones.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZones.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZones.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZones.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZones.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/dns/zones",
  method: "POST",
  operationId: "dns-sub-zone-create",
};
