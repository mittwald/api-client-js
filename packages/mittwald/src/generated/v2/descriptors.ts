/* eslint-disable */
/* prettier-ignore */
/* This file is auto-generated with acg (@mittwald/api-code-generator) */
import { Simplify } from "@mittwald/api-client-commons";
import { RequestType } from "@mittwald/api-client-commons";
import { Response } from "@mittwald/api-client-commons";
import { OpenAPIOperation } from "@mittwald/api-client-commons";
import { MittwaldAPIV2 } from "./types.js";

/** Trigger a runtime action belonging to an AppInstallation. */
export const appExecuteAction: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdActionsAction.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdActionsAction.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdActionsAction.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdActionsAction.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdActionsAction.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdActionsAction.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdActionsAction.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/app-installations/{appInstallationId}/actions/{action}",
  method: "POST",
  operationId: "app-execute-action",
};

/** Get an App. */
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
      Simplify<MittwaldAPIV2.Paths.V2AppsAppId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Get an AppInstallation. */
export const appGetAppinstallation: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/app-installations/{appInstallationId}",
  method: "GET",
  operationId: "app-get-appinstallation",
};

/** Trigger an uninstallation process for an AppInstallation. */
export const appUninstallAppinstallation: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/app-installations/{appInstallationId}",
  method: "DELETE",
  operationId: "app-uninstall-appinstallation",
};

/** Update properties belonging to an AppInstallation. */
export const appPatchAppinstallation: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/app-installations/{appInstallationId}",
  method: "PATCH",
  operationId: "app-patch-appinstallation",
};

/** Get an AppVersion. */
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
      Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersionsAppVersionId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Get the installed `SystemSoftware' for a specific `AppInstallation`. */
export const appGetInstalledSystemsoftwareForAppinstallation: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdSystemSoftware.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdSystemSoftware.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdSystemSoftware.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdSystemSoftware.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdSystemSoftware.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdSystemSoftware.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdSystemSoftware.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/app-installations/{appInstallationId}/systemSoftware",
  method: "GET",
  operationId: "app-get-installed-systemsoftware-for-appinstallation",
};

/** Get the missing requirements of an appInstallation for a specific target AppVersion. */
export const appGetMissingDependenciesForAppinstallation: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdMissingDependencies.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdMissingDependencies.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdMissingDependencies.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdMissingDependencies.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdMissingDependencies.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdMissingDependencies.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdMissingDependencies.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/app-installations/{appInstallationId}/missing-dependencies",
  method: "GET",
  operationId: "app-get-missing-dependencies-for-appinstallation",
};

/** Get a SystemSoftware. */
export const appGetSystemsoftware: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/system-softwares/{systemSoftwareId}",
  method: "GET",
  operationId: "app-get-systemsoftware",
};

/** Get a SystemSoftwareVersion. */
export const appGetSystemsoftwareversion: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/system-softwares/{systemSoftwareId}/versions/{systemSoftwareVersionId}",
  method: "GET",
  operationId: "app-get-systemsoftwareversion",
};

/** Create linkage between an AppInstallation and a MySQLDatabase. */
export const appLinkDatabase: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabase.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabase.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabase.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabase.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabase.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabase.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabase.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabase.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabase.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/app-installations/{appInstallationId}/database",
  method: "PATCH",
  operationId: "app-link-database",
};

/** List AppInstallations that a user has access to. */
export const appListAppinstallationsForUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallations.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallations.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallations.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallations.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallations.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallations.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/app-installations",
  method: "GET",
  operationId: "app-list-appinstallations-for-user",
};

/** List AppInstallations belonging to a Project. */
export const appListAppinstallations: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/app-installations",
  method: "GET",
  operationId: "app-list-appinstallations",
};

/** Request an AppInstallation. */
export const appRequestAppinstallation: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppInstallations.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/app-installations",
  method: "POST",
  operationId: "app-request-appinstallation",
};

/** List Apps. */
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
      Simplify<MittwaldAPIV2.Paths.V2Apps.Get.Responses.$429.Content.ApplicationJson>,
      429,
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

/** List AppVersions belonging to an App. */
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
      Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersions.Get.Responses.$429.Content.ApplicationJson>,
      429,
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

/** List SystemSoftwares. */
export const appListSystemsoftwares: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SystemSoftwares.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SystemSoftwares.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2SystemSoftwares.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemSoftwares.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemSoftwares.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemSoftwares.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/system-softwares",
  method: "GET",
  operationId: "app-list-systemsoftwares",
};

/** List SystemSoftwareVersions belonging to a SystemSoftware. */
export const appListSystemsoftwareversions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareIdVersions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareIdVersions.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareIdVersions.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareIdVersions.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareIdVersions.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SystemSoftwaresSystemSoftwareIdVersions.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/system-softwares/{systemSoftwareId}/versions",
  method: "GET",
  operationId: "app-list-systemsoftwareversions",
};

/** List update candidates belonging to an AppVersion. */
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
      Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersionsBaseAppVersionIdUpdateCandidates.Get.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Replace a MySQL Database with another MySQL Database. */
export const appReplaceDatabase: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabaseReplace.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabaseReplace.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabaseReplace.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabaseReplace.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabaseReplace.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabaseReplace.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabaseReplace.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabaseReplace.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabaseReplace.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/app-installations/{appInstallationId}/database/replace",
  method: "PATCH",
  operationId: "app-replace-database",
};

/** Request a copy of an AppInstallation. */
export const appRequestAppinstallationCopy: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdActionsCopy.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdActionsCopy.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdActionsCopy.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdActionsCopy.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdActionsCopy.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdActionsCopy.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdActionsCopy.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdActionsCopy.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/app-installations/{appInstallationId}/actions/copy",
  method: "POST",
  operationId: "app-request-appinstallation-copy",
};

/** Get runtime status belonging to an AppInstallation. */
export const appRetrieveStatus: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdStatus.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdStatus.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdStatus.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdStatus.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdStatus.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdStatus.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdStatus.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/app-installations/{appInstallationId}/status",
  method: "GET",
  operationId: "app-retrieve-status",
};

/** Create linkage between an AppInstallation and DatabaseUsers. */
export const appSetDatabaseUsers: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabasesDatabaseIdUsers.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabasesDatabaseIdUsers.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabasesDatabaseIdUsers.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabasesDatabaseIdUsers.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabasesDatabaseIdUsers.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabasesDatabaseIdUsers.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabasesDatabaseIdUsers.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabasesDatabaseIdUsers.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/app-installations/{appInstallationId}/databases/{databaseId}/users",
  method: "PUT",
  operationId: "app-set-database-users",
};

/** Remove linkage between an AppInstallation and a Database. */
export const appUnlinkDatabase: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabasesDatabaseId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabasesDatabaseId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabasesDatabaseId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabasesDatabaseId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabasesDatabaseId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabasesDatabaseId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AppInstallationsAppInstallationIdDatabasesDatabaseId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/app-installations/{appInstallationId}/databases/{databaseId}",
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
      Simplify<MittwaldAPIV2.Paths.V2ArticlesArticleId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2Articles.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Delete.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Patch.Responses.$204.Content.Empty>,
      204,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Get table of contents for a ProjectBackup. */
export const backupGetProjectBackupDirectories: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdPath.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdPath.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdPath.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdPath.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdPath.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdPath.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdPath.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdPath.Get.Responses.$502.Content.ApplicationJson>,
      502,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdPath.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdPath.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-backups/{projectBackupId}/path",
  method: "GET",
  operationId: "backup-get-project-backup-directories",
};

/** Restore a ProjectBackup's path. */
export const backupRequestProjectBackupRestorePath: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdRestorePath.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdRestorePath.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdRestorePath.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdRestorePath.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdRestorePath.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdRestorePath.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdRestorePath.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdRestorePath.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdRestorePath.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdRestorePath.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-backups/{projectBackupId}/restore-path",
  method: "POST",
  operationId: "backup-request-project-backup-restore-path",
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdDescription.Patch.Responses.$429.Content.ApplicationJson>,
      429,
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

/** List Registries belonging to a Project. */
export const containerListRegistries: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/registries",
  method: "GET",
  operationId: "container-list-registries",
};

/** Create a Registry. */
export const containerCreateRegistry: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/registries",
  method: "POST",
  operationId: "container-create-registry",
};

/** Get a Stack. */
export const containerGetStack: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/stacks/{stackId}",
  method: "GET",
  operationId: "container-get-stack",
};

/** Declaratively create, update or delete Services or Volumes belonging to a Stack. */
export const containerDeclareStack: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Put.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Put.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Put.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/stacks/{stackId}",
  method: "PUT",
  operationId: "container-declare-stack",
};

/** Create, update or delete Services or Volumes belonging to a Stack. */
export const containerUpdateStack: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Patch.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Patch.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/stacks/{stackId}",
  method: "PATCH",
  operationId: "container-update-stack",
};

/** Get a Registry. */
export const containerGetRegistry: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/registries/{registryId}",
  method: "GET",
  operationId: "container-get-registry",
};

/** Delete a Registry. */
export const containerDeleteRegistry: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/registries/{registryId}",
  method: "DELETE",
  operationId: "container-delete-registry",
};

/** Update a Registry. */
export const containerUpdateRegistry: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Patch.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Patch.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/registries/{registryId}",
  method: "PATCH",
  operationId: "container-update-registry",
};

/** Get a Volume belonging to a Stack. */
export const containerGetVolume: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Get.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/stacks/{stackId}/volumes/{volumeId}",
  method: "GET",
  operationId: "container-get-volume",
};

/** Delete a Volume belonging to a Stack. */
export const containerDeleteVolume: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumesVolumeId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/stacks/{stackId}/volumes/{volumeId}",
  method: "DELETE",
  operationId: "container-delete-volume",
};

/** Get a ContainerImageConfig. */
export const containerGetContainerImageConfig: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContainerImageConfig.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContainerImageConfig.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContainerImageConfig.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContainerImageConfig.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContainerImageConfig.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContainerImageConfig.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContainerImageConfig.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContainerImageConfig.Get.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContainerImageConfig.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContainerImageConfig.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContainerImageConfig.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/container-image-config",
  method: "GET",
  operationId: "container-get-container-image-config",
};

/** Get logs belonging to a Service. */
export const containerGetServiceLogs: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdLogs.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdLogs.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdLogs.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdLogs.Get.Responses.$200.Content.TextPlain>,
      200,
      "text/plain"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdLogs.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdLogs.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdLogs.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdLogs.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdLogs.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdLogs.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/stacks/{stackId}/services/{serviceId}/logs",
  method: "GET",
  operationId: "container-get-service-logs",
};

/** Get a Service belonging to a Stack. */
export const containerGetService: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceId.Get.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/stacks/{stackId}/services/{serviceId}",
  method: "GET",
  operationId: "container-get-service",
};

/** List Services belonging to a Project. */
export const containerListServices: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdServices.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdServices.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdServices.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdServices.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdServices.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdServices.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdServices.Get.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdServices.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdServices.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdServices.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/services",
  method: "GET",
  operationId: "container-list-services",
};

/** List Volumes belonging to a Stack. */
export const containerListStackVolumes: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumes.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumes.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumes.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumes.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumes.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumes.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumes.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumes.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdVolumes.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/stacks/{stackId}/volumes",
  method: "GET",
  operationId: "container-list-stack-volumes",
};

/** List Stacks belonging to a Project. */
export const containerListStacks: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStacks.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStacks.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStacks.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStacks.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStacks.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStacks.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStacks.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStacks.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStacks.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/stacks",
  method: "GET",
  operationId: "container-list-stacks",
};

/** List Volumes belonging to a Project. */
export const containerListVolumes: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdVolumes.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdVolumes.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdVolumes.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdVolumes.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdVolumes.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdVolumes.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdVolumes.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdVolumes.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdVolumes.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/volumes",
  method: "GET",
  operationId: "container-list-volumes",
};

/** Pulls the latest version of the Service's image and optionally recreates the Service. */
export const containerPullImageForService: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsPull.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsPull.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsPull.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsPull.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsPull.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsPull.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsPull.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsPull.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsPull.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsPull.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsPull.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/stacks/{stackId}/services/{serviceId}/actions/pull",
  method: "POST",
  operationId: "container-pull-image-for-service",
};

/** Recreate a Service. */
export const containerRecreateService: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRecreate.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRecreate.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRecreate.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRecreate.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRecreate.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRecreate.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRecreate.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRecreate.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRecreate.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRecreate.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRecreate.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/stacks/{stackId}/services/{serviceId}/actions/recreate",
  method: "POST",
  operationId: "container-recreate-service",
};

/** Restart a started Service. */
export const containerRestartService: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRestart.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRestart.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRestart.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRestart.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRestart.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRestart.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRestart.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRestart.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRestart.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRestart.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsRestart.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/stacks/{stackId}/services/{serviceId}/actions/restart",
  method: "POST",
  operationId: "container-restart-service",
};

/** Start a stopped Service. */
export const containerStartService: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStart.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStart.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStart.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStart.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStart.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStart.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStart.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStart.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStart.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStart.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStart.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/stacks/{stackId}/services/{serviceId}/actions/start",
  method: "POST",
  operationId: "container-start-service",
};

/** Stop a started Service. */
export const containerStopService: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStop.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStop.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStop.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStop.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStop.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStop.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStop.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStop.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStop.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStop.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2StacksStackIdServicesServiceIdActionsStop.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/stacks/{stackId}/services/{serviceId}/actions/stop",
  method: "POST",
  operationId: "container-stop-service",
};

/** Validate a Registries' URI. */
export const containerValidateContainerRegistryUri: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ActionsValidateContainerRegistryUri.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ActionsValidateContainerRegistryUri.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ActionsValidateContainerRegistryUri.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ActionsValidateContainerRegistryUri.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsValidateContainerRegistryUri.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsValidateContainerRegistryUri.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsValidateContainerRegistryUri.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsValidateContainerRegistryUri.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsValidateContainerRegistryUri.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsValidateContainerRegistryUri.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsValidateContainerRegistryUri.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsValidateContainerRegistryUri.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/actions/validate-container-registry-uri",
  method: "POST",
  operationId: "container-validate-container-registry-uri",
};

/** Validate a Registries' credentials. */
export const containerValidateRegistryCredentials: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryIdActionsValidateCredentials.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryIdActionsValidateCredentials.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryIdActionsValidateCredentials.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryIdActionsValidateCredentials.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryIdActionsValidateCredentials.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryIdActionsValidateCredentials.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryIdActionsValidateCredentials.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryIdActionsValidateCredentials.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryIdActionsValidateCredentials.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryIdActionsValidateCredentials.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RegistriesRegistryIdActionsValidateCredentials.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/registries/{registryId}/actions/validate-credentials",
  method: "POST",
  operationId: "container-validate-registry-credentials",
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
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
    Simplify<null>,
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
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Delete.Responses.$429.Content.ApplicationJson>,
      429,
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
    Simplify<null>,
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
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTariffChange.Delete.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
    Simplify<null>,
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
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Delete.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdBaseItems.Get.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Return the Contract for the given Certificate. */
export const contractGetDetailOfContractByCertificate: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateIdContract.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateIdContract.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateIdContract.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateIdContract.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateIdContract.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateIdContract.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateIdContract.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateIdContract.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/certificates/{certificateId}/contract",
  method: "GET",
  operationId: "contract-get-detail-of-contract-by-certificate",
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
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdContract.Get.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Return the Contract for the given LeadFyndrProfile. */
export const contractGetDetailOfContractByLeadFyndr: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileContract.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileContract.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileContract.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileContract.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileContract.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileContract.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileContract.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileContract.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/lead-fyndr-profile/contract",
  method: "GET",
  operationId: "contract-get-detail-of-contract-by-lead-fyndr",
};

/** Return the Contract for the given Mail Address. */
export const contractGetDetailOfContractByMailAddress: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdContract.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdContract.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdContract.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdContract.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdContract.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdContract.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdContract.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdContract.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mail-addresses/{mailAddressId}/contract",
  method: "GET",
  operationId: "contract-get-detail-of-contract-by-mail-address",
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdContract.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdContract.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ContractsContractId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdContracts.Get.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Start the verification process of a contributor. */
export const contributorRequestVerification: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdVerificationProcess.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdVerificationProcess.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdVerificationProcess.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdVerificationProcess.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdVerificationProcess.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdVerificationProcess.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdVerificationProcess.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/verification-process",
  method: "POST",
  operationId: "contributor-request-verification",
};

/** Cancel the verification-process of a contributor. */
export const contributorCancelVerification: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdVerificationProcess.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdVerificationProcess.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdVerificationProcess.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdVerificationProcess.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdVerificationProcess.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdVerificationProcess.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdVerificationProcess.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/verification-process",
  method: "DELETE",
  operationId: "contributor-cancel-verification",
};

/** Get a Contributor. */
export const extensionGetContributor: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}",
  method: "GET",
  operationId: "extension-get-contributor",
};

/** Delete a Contributor. */
export const contributorDeleteContributor: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Delete.Responses.$412.Content.Empty>,
      412,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}",
  method: "DELETE",
  operationId: "contributor-delete-contributor",
};

/** Patch Contributor. */
export const contributorPatchContributor: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Patch.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}",
  method: "PATCH",
  operationId: "contributor-patch-contributor",
};

/** Express interest to be a contributor. */
export const contributorExpressInterestToContribute: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdContributor.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdContributor.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdContributor.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdContributor.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdContributor.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdContributor.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdContributor.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdContributor.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/contributor",
  method: "POST",
  operationId: "contributor-express-interest-to-contribute",
};

/** Get Contributor Billing Information. */
export const contributorGetBillingInformation: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdBillingInformation.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdBillingInformation.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdBillingInformation.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdBillingInformation.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdBillingInformation.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdBillingInformation.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdBillingInformation.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdBillingInformation.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/billing-information",
  method: "GET",
  operationId: "contributor-get-billing-information",
};

/** Update Contributor Billing Information. */
export const contributorUpdateBillingInformation: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdBillingInformation.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdBillingInformation.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdBillingInformation.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdBillingInformation.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdBillingInformation.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdBillingInformation.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdBillingInformation.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdBillingInformation.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdBillingInformation.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/billing-information",
  method: "PUT",
  operationId: "contributor-update-billing-information",
};

/** Get the Stripe Billing Portal Link for a Customer */
export const contributorGetCustomerBillingPortalLink: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdBillingPortal.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdBillingPortal.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdBillingPortal.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdBillingPortal.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdBillingPortal.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdBillingPortal.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdBillingPortal.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdBillingPortal.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/billing-portal",
  method: "GET",
  operationId: "contributor-get-customer-billing-portal-link",
};

/** Get the Stripe Dashboard Link for a Contributor. */
export const contributorGetLoginLink: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdDashboard.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdDashboard.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdDashboard.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdDashboard.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdDashboard.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdDashboard.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdDashboard.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdDashboard.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/dashboard",
  method: "GET",
  operationId: "contributor-get-login-link",
};

/** List ContractPartners of the contributor. */
export const contributorListContractPartnersOfContributor: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdContractPartners.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdContractPartners.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdContractPartners.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdContractPartners.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdContractPartners.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdContractPartners.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/contract-partners",
  method: "GET",
  operationId: "contributor-list-contract-partners-of-contributor",
};

/** List incoming Invoices of a Contributor. */
export const contributorListIncomingInvoices: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesIncoming.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesIncoming.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesIncoming.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesIncoming.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesIncoming.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesIncoming.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesIncoming.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesIncoming.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/invoices/incoming",
  method: "GET",
  operationId: "contributor-list-incoming-invoices",
};

/** List all invoices on behalf of a contributor. */
export const contributorListOnbehalfInvoices: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesOutgoing.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesOutgoing.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesOutgoing.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesOutgoing.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesOutgoing.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesOutgoing.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesOutgoing.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesOutgoing.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/invoices/outgoing",
  method: "GET",
  operationId: "contributor-list-onbehalf-invoices",
};

/** Request an Access Token for the Incoming Invoice file. */
export const contributorReceiptGetFileAccessToken: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesIncomingContributorReceiptIdFileAccessToken.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesIncomingContributorReceiptIdFileAccessToken.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesIncomingContributorReceiptIdFileAccessToken.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesIncomingContributorReceiptIdFileAccessToken.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesIncomingContributorReceiptIdFileAccessToken.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesIncomingContributorReceiptIdFileAccessToken.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesIncomingContributorReceiptIdFileAccessToken.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdInvoicesIncomingContributorReceiptIdFileAccessToken.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/invoices/incoming/{contributorReceiptId}/file-access-token",
  method: "GET",
  operationId: "contributor-receipt-get-file-access-token",
};

/** Reject a contributor verification request. */
export const contributorRejectContributorInternal: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.InternalV2ContributorsContributorIdActionsReject.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.InternalV2ContributorsContributorIdActionsReject.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.InternalV2ContributorsContributorIdActionsReject.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.InternalV2ContributorsContributorIdActionsReject.Post.Responses.$201.Content.Empty>,
      201,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.InternalV2ContributorsContributorIdActionsReject.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.InternalV2ContributorsContributorIdActionsReject.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.InternalV2ContributorsContributorIdActionsReject.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/internal-v2/contributors/{contributorId}/actions/reject",
  method: "POST",
  operationId: "contributor-reject-contributor-internal",
};

/** Add a deviating avatar to a Contributor. */
export const contributorRequestDeviatingContributorAvatarUpload: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdAvatar.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdAvatar.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdAvatar.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdAvatar.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdAvatar.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdAvatar.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdAvatar.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/avatar",
  method: "POST",
  operationId: "contributor-request-deviating-contributor-avatar-upload",
};

/** Delete deviating contributor avatar und return to the inherited customer avatar. */
export const contributorResetContributorAvatar: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdAvatar.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdAvatar.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdAvatar.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdAvatar.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdAvatar.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdAvatar.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdAvatar.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/avatar",
  method: "DELETE",
  operationId: "contributor-reset-contributor-avatar",
};

/** Rotate the secret for an extension instance. */
export const contributorRotateSecretForExtensionInstance: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdSecret.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdSecret.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdSecret.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdSecret.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdSecret.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdSecret.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdSecret.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdSecret.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdSecret.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/extensions/{extensionId}/extension-instances/{extensionInstanceId}/secret",
  method: "PUT",
  operationId: "contributor-rotate-secret-for-extension-instance",
};

/** Accept a contributor verification request */
export const contributorVerifyContributorInternal: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.InternalV2ContributorsContributorIdActionsVerify.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.InternalV2ContributorsContributorIdActionsVerify.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.InternalV2ContributorsContributorIdActionsVerify.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.InternalV2ContributorsContributorIdActionsVerify.Post.Responses.$201.Content.Empty>,
      201,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.InternalV2ContributorsContributorIdActionsVerify.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.InternalV2ContributorsContributorIdActionsVerify.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.InternalV2ContributorsContributorIdActionsVerify.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/internal-v2/contributors/{contributorId}/actions/verify",
  method: "POST",
  operationId: "contributor-verify-contributor-internal",
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
      Simplify<MittwaldAPIV2.Paths.V2Conversations.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2Conversations.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ConversationCategoriesCategoryId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Get members of a support conversation. */
export const conversationGetConversationMembers: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMembers.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMembers.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMembers.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMembers.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMembers.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMembers.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMembers.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMembers.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMembers.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}/members",
  method: "GET",
  operationId: "conversation-get-conversation-members",
};

/** Get preferences for customer conversations. */
export const conversationGetConversationPreferencesOfCustomer: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdConversationPreferences.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdConversationPreferences.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdConversationPreferences.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdConversationPreferences.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdConversationPreferences.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdConversationPreferences.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdConversationPreferences.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdConversationPreferences.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdConversationPreferences.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/conversation-preferences",
  method: "GET",
  operationId: "conversation-get-conversation-preferences-of-customer",
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
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Put.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Request an access token for the File belonging to the Conversation. */
export const conversationGetFileAccessToken: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdFilesFileIdAccessToken.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdFilesFileIdAccessToken.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdFilesFileIdAccessToken.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdFilesFileIdAccessToken.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdFilesFileIdAccessToken.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdFilesFileIdAccessToken.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdFilesFileIdAccessToken.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdFilesFileIdAccessToken.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}/files/{fileId}/access-token",
  method: "GET",
  operationId: "conversation-get-file-access-token",
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
      Simplify<MittwaldAPIV2.Paths.V2ConversationCategories.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdFiles.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdStatus.Put.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessagesMessageId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
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
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdActionsAbort.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdActionsAbort.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdActionsAbort.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdActionsAbort.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdActionsAbort.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdActionsAbort.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
    Simplify<null>,
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
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
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
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Get a CronjobExecution analysis for failed executions. */
export const cronjobGetExecutionAnalysis: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}/executions/{executionId}/analysis",
  method: "GET",
  operationId: "cronjob-get-execution-analysis",
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
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdAppId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
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
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsAccept.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsAccept.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsAccept.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsAccept.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsAccept.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsAccept.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsAccept.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsAccept.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsAccept.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsAccept.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-invites/{customerInviteId}/actions/accept",
  method: "POST",
  operationId: "customer-accept-customer-invite",
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
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvites.Get.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Create a CustomerInvite. */
export const customerCreateCustomerInvite: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvites.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvites.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvites.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvites.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvites.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvites.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvites.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvites.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvites.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvites.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/invites",
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
      Simplify<MittwaldAPIV2.Paths.V2Customers.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Customers.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2Customers.Post.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Lets us know your idea for our recommendation programm. */
export const customerCreateRecommendationSuggestion: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdRecommendationSuggestions.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdRecommendationSuggestions.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdRecommendationSuggestions.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdRecommendationSuggestions.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdRecommendationSuggestions.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdRecommendationSuggestions.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdRecommendationSuggestions.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdRecommendationSuggestions.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdRecommendationSuggestions.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdRecommendationSuggestions.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdRecommendationSuggestions.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/recommendation-suggestions",
  method: "POST",
  operationId: "customer-create-recommendation-suggestion",
};

/** Gets the Wallet of the Customer. */
export const customerGetWallet: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Get.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Get.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/wallet",
  method: "GET",
  operationId: "customer-get-wallet",
};

/** Create the Wallet for the Customer. */
export const customerCreateWallet: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdWallet.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/wallet",
  method: "POST",
  operationId: "customer-create-wallet",
};

/** Decline a CustomerInvite. */
export const customerDeclineCustomerInvite: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsDecline.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsDecline.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsDecline.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsDecline.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsDecline.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsDecline.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-invites/{customerInviteId}/actions/decline",
  method: "POST",
  operationId: "customer-decline-customer-invite",
};

/** Get a CustomerInvite. */
export const customerGetCustomerInvite: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-invites/{customerInviteId}",
  method: "GET",
  operationId: "customer-get-customer-invite",
};

/** Delete a CustomerInvite. */
export const customerDeleteCustomerInvite: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-invites/{customerInviteId}",
  method: "DELETE",
  operationId: "customer-delete-customer-invite",
};

/** Get a CustomerMembership. */
export const customerGetCustomerMembership: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsCustomerMembershipId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsCustomerMembershipId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsCustomerMembershipId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsCustomerMembershipId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsCustomerMembershipId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsCustomerMembershipId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsCustomerMembershipId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-memberships/{customerMembershipId}",
  method: "GET",
  operationId: "customer-get-customer-membership",
};

/** Delete a CustomerMembership. */
export const customerDeleteCustomerMembership: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsCustomerMembershipId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsCustomerMembershipId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsCustomerMembershipId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsCustomerMembershipId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsCustomerMembershipId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsCustomerMembershipId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-memberships/{customerMembershipId}",
  method: "DELETE",
  operationId: "customer-delete-customer-membership",
};

/** Update a CustomerMembership. */
export const customerUpdateCustomerMembership: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsCustomerMembershipId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsCustomerMembershipId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsCustomerMembershipId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsCustomerMembershipId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsCustomerMembershipId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsCustomerMembershipId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMembershipsCustomerMembershipId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-memberships/{customerMembershipId}",
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
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Get.Responses.$401.Content.ApplicationJson>,
      401,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Put.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2CustomerTokenInvite.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLegallyCompetent.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvites.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvites.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvites.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2CustomerMemberships.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMemberships.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerMemberships.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdMemberships.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Delete.Responses.$429.Content.ApplicationJson>,
      429,
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
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsResend.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsResend.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsResend.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsResend.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsResend.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsResend.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomerInvitesCustomerInviteIdActionsResend.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customer-invites/{customerInviteId}/actions/resend",
  method: "POST",
  operationId: "customer-resend-customer-invite-mail",
};

/** Copy a MySQLDatabase with a MySQLUser. */
export const databaseCopyMysqlDatabase: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdActionsCopy.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdActionsCopy.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdActionsCopy.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdActionsCopy.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdActionsCopy.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdActionsCopy.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdActionsCopy.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdActionsCopy.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdActionsCopy.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{mysqlDatabaseId}/actions/copy",
  method: "POST",
  operationId: "database-copy-mysql-database",
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdUsers.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdUsers.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdUsers.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdUsers.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdUsers.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdUsers.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdUsers.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdUsers.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{mysqlDatabaseId}/users",
  method: "GET",
  operationId: "database-list-mysql-users",
};

/** Create a MySQLUser. */
export const databaseCreateMysqlUser: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdUsers.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdUsers.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdUsers.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdUsers.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdUsers.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdUsers.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdUsers.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdUsers.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdUsers.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{mysqlDatabaseId}/users",
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{mysqlDatabaseId}",
  method: "GET",
  operationId: "database-get-mysql-database",
};

/** Delete a MySQLDatabase. */
export const databaseDeleteMysqlDatabase: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseId.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseId.Delete.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{mysqlDatabaseId}",
  method: "DELETE",
  operationId: "database-delete-mysql-database",
};

/** Get a MySQLUser. */
export const databaseGetMysqlUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{mysqlUserId}",
  method: "GET",
  operationId: "database-get-mysql-user",
};

/** Update a MySQLUser. */
export const databaseUpdateMysqlUser: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{mysqlUserId}",
  method: "PUT",
  operationId: "database-update-mysql-user",
};

/** Delete a MySQLUser. */
export const databaseDeleteMysqlUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{mysqlUserId}",
  method: "DELETE",
  operationId: "database-delete-mysql-user",
};

/** Get a RedisDatabase. */
export const databaseGetRedisDatabase: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/redis-databases/{redisDatabaseId}",
  method: "GET",
  operationId: "database-get-redis-database",
};

/** Delete a RedisDatabase. */
export const databaseDeleteRedisDatabase: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseId.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseId.Delete.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/redis-databases/{redisDatabaseId}",
  method: "DELETE",
  operationId: "database-delete-redis-database",
};

/** Disable a MySQLUser. */
export const databaseDisableMysqlUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdActionsDisable.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdActionsDisable.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdActionsDisable.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdActionsDisable.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdActionsDisable.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdActionsDisable.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdActionsDisable.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdActionsDisable.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{mysqlUserId}/actions/disable",
  method: "POST",
  operationId: "database-disable-mysql-user",
};

/** Enable a MySQLUser. */
export const databaseEnableMysqlUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdActionsEnable.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdActionsEnable.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdActionsEnable.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdActionsEnable.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdActionsEnable.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdActionsEnable.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdActionsEnable.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdActionsEnable.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{mysqlUserId}/actions/enable",
  method: "POST",
  operationId: "database-enable-mysql-user",
};

/** Get a MySQLUser's PhpMyAdmin-URL. */
export const databaseGetMysqlUserPhpMyAdminUrl: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdPhpMyAdminUrl.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdPhpMyAdminUrl.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdPhpMyAdminUrl.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdPhpMyAdminUrl.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdPhpMyAdminUrl.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdPhpMyAdminUrl.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdPhpMyAdminUrl.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdPhpMyAdminUrl.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{mysqlUserId}/php-my-admin-url",
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
      Simplify<MittwaldAPIV2.Paths.V2MysqlCharsets.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2MysqlVersions.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2RedisVersions.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdDefaultCharset.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdDefaultCharset.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdDefaultCharset.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdDefaultCharset.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdDefaultCharset.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdDefaultCharset.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdDefaultCharset.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdDefaultCharset.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdDefaultCharset.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{mysqlDatabaseId}/default-charset",
  method: "PATCH",
  operationId: "database-update-mysql-database-default-charset",
};

/** Update a MySQLDatabase's description. */
export const databaseUpdateMysqlDatabaseDescription: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdDescription.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdDescription.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdDescription.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdDescription.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdDescription.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdDescription.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdDescription.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{mysqlDatabaseId}/description",
  method: "PATCH",
  operationId: "database-update-mysql-database-description",
};

/** Update a MySQLUser's password. */
export const databaseUpdateMysqlUserPassword: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdPassword.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdPassword.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdPassword.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdPassword.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdPassword.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdPassword.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdPassword.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdPassword.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserIdPassword.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{mysqlUserId}/password",
  method: "PATCH",
  operationId: "database-update-mysql-user-password",
};

/** Update a RedisDatabase's configuration. */
export const databaseUpdateRedisDatabaseConfiguration: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseIdConfiguration.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseIdConfiguration.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseIdConfiguration.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseIdConfiguration.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseIdConfiguration.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseIdConfiguration.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseIdConfiguration.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseIdConfiguration.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseIdConfiguration.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/redis-databases/{redisDatabaseId}/configuration",
  method: "PATCH",
  operationId: "database-update-redis-database-configuration",
};

/** Update a RedisDatabase's description. */
export const databaseUpdateRedisDatabaseDescription: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseIdDescription.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseIdDescription.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseIdDescription.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseIdDescription.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseIdDescription.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseIdDescription.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseIdDescription.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/redis-databases/{redisDatabaseId}/description",
  method: "PATCH",
  operationId: "database-update-redis-database-description",
};

/** List Domains */
export const domainListDomains: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Domains.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Domains.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Domains.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Domains.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Domains.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Domains.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Domains.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains",
  method: "GET",
  operationId: "domain-list-domains",
};

/** Update the nameservers of a Domain. */
export const domainUpdateDomainNameservers: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdNameservers.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdNameservers.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdNameservers.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdNameservers.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdNameservers.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdNameservers.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdNameservers.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdNameservers.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdNameservers.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/nameservers",
  method: "PATCH",
  operationId: "domain-update-domain-nameservers",
};

/** Update the paths of an Ingress. */
export const ingressUpdateIngressPaths: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdPaths.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdPaths.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdPaths.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdPaths.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdPaths.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdPaths.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdPaths.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdPaths.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/ingresses/{ingressId}/paths",
  method: "PATCH",
  operationId: "ingress-update-ingress-paths",
};

/** Update the tls settings of an Ingress. */
export const ingressUpdateIngressTls: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Patch.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Patch.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/ingresses/{ingressId}/tls",
  method: "PATCH",
  operationId: "ingress-update-ingress-tls",
};

/** Update the autoresponder of a MailAddress. */
export const mailUpdateMailAddressAutoresponder: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAutoresponder.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAutoresponder.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAutoresponder.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAutoresponder.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAutoresponder.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAutoresponder.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAutoresponder.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAutoresponder.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAutoresponder.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAutoresponder.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAutoresponder.Patch.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAutoresponder.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mail-addresses/{mailAddressId}/autoresponder",
  method: "PATCH",
  operationId: "mail-update-mail-address-autoresponder",
};

/** Update the forward addresses of a MailAddresses. */
export const mailUpdateMailAddressForwardAddresses: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdForwardAddresses.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdForwardAddresses.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdForwardAddresses.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdForwardAddresses.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdForwardAddresses.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdForwardAddresses.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdForwardAddresses.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdForwardAddresses.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdForwardAddresses.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdForwardAddresses.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdForwardAddresses.Patch.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdForwardAddresses.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mail-addresses/{mailAddressId}/forward-addresses",
  method: "PATCH",
  operationId: "mail-update-mail-address-forward-addresses",
};

/** Update the password for a MailAddress. */
export const mailUpdateMailAddressPassword: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdPassword.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdPassword.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdPassword.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdPassword.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdPassword.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdPassword.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdPassword.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdPassword.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdPassword.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdPassword.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdPassword.Patch.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdPassword.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mail-addresses/{mailAddressId}/password",
  method: "PATCH",
  operationId: "mail-update-mail-address-password",
};

/** Update the quota of a MailAddress. */
export const mailUpdateMailAddressQuota: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdQuota.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdQuota.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdQuota.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdQuota.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdQuota.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdQuota.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdQuota.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdQuota.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdQuota.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdQuota.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdQuota.Patch.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdQuota.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mail-addresses/{mailAddressId}/quota",
  method: "PATCH",
  operationId: "mail-update-mail-address-quota",
};

/** Update the spam protection of a MailAddress. */
export const mailUpdateMailAddressSpamProtection: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdSpamProtection.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdSpamProtection.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdSpamProtection.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdSpamProtection.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdSpamProtection.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdSpamProtection.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdSpamProtection.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdSpamProtection.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdSpamProtection.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdSpamProtection.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdSpamProtection.Patch.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdSpamProtection.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mail-addresses/{mailAddressId}/spam-protection",
  method: "PATCH",
  operationId: "mail-update-mail-address-spam-protection",
};

/** Update a mail setting of a Project. */
export const mailUpdateProjectMailSetting: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettingsMailSetting.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettingsMailSetting.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettingsMailSetting.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettingsMailSetting.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettingsMailSetting.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettingsMailSetting.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettingsMailSetting.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettingsMailSetting.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettingsMailSetting.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettingsMailSetting.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettingsMailSetting.Patch.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettingsMailSetting.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/mail-settings/{mailSetting}",
  method: "PATCH",
  operationId: "mail-update-project-mail-setting",
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
      Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptions.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfPersonalInformation.Put.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Create a DNSZone. */
export const dnsCreateDnsZone: OpenAPIOperation<
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
      Simplify<MittwaldAPIV2.Paths.V2DnsZones.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZones.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/dns-zones",
  method: "POST",
  operationId: "dns-create-dns-zone",
};

/** Get a DNSZone. */
export const dnsGetDnsZone: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/dns-zones/{dnsZoneId}",
  method: "GET",
  operationId: "dns-get-dns-zone",
};

/** Delete a DNSZone. */
export const dnsDeleteDnsZone: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/dns-zones/{dnsZoneId}",
  method: "DELETE",
  operationId: "dns-delete-dns-zone",
};

/** Get a zone file for a DNSZone. */
export const dnsGetZoneFile: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdZoneFile.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdZoneFile.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdZoneFile.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdZoneFile.Get.Responses.$200.Content.TextPlain>,
      200,
      "text/plain"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdZoneFile.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdZoneFile.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdZoneFile.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/dns-zones/{dnsZoneId}/zone-file",
  method: "GET",
  operationId: "dns-get-zone-file",
};

/** List DNSZones belonging to a Project. */
export const dnsListDnsZones: OpenAPIOperation<
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDnsZones.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDnsZones.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/dns-zones",
  method: "GET",
  operationId: "dns-list-dns-zones",
};

/** Set a record set on a DNSZone to managed. */
export const dnsSetRecordSetManaged: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdRecordSetsRecordSetActionsSetManaged.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdRecordSetsRecordSetActionsSetManaged.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdRecordSetsRecordSetActionsSetManaged.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdRecordSetsRecordSetActionsSetManaged.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdRecordSetsRecordSetActionsSetManaged.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdRecordSetsRecordSetActionsSetManaged.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdRecordSetsRecordSetActionsSetManaged.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdRecordSetsRecordSetActionsSetManaged.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdRecordSetsRecordSetActionsSetManaged.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/dns-zones/{dnsZoneId}/record-sets/{recordSet}/actions/set-managed",
  method: "POST",
  operationId: "dns-set-record-set-managed",
};

/** Update a record set on a DNSZone. */
export const dnsUpdateRecordSet: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdRecordSetsRecordSet.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdRecordSetsRecordSet.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdRecordSetsRecordSet.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdRecordSetsRecordSet.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdRecordSetsRecordSet.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdRecordSetsRecordSet.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdRecordSetsRecordSet.Put.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdRecordSetsRecordSet.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DnsZonesDnsZoneIdRecordSetsRecordSet.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/dns-zones/{dnsZoneId}/record-sets/{recordSet}",
  method: "PUT",
  operationId: "dns-update-record-set",
};

/** Abort a Domain declaration. */
export const domainAbortDomainDeclaration: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclaration.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclaration.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclaration.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclaration.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclaration.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclaration.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclaration.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclaration.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/declaration",
  method: "DELETE",
  operationId: "domain-abort-domain-declaration",
};

/** Create a scheduled deletion of a Domain. */
export const domainCreateScheduledDeletion: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScheduledDeletion.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScheduledDeletion.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScheduledDeletion.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScheduledDeletion.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScheduledDeletion.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScheduledDeletion.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScheduledDeletion.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScheduledDeletion.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/scheduled-deletion",
  method: "POST",
  operationId: "domain-create-scheduled-deletion",
};

/** Cancel a scheduled deletion of a Domain. */
export const domainCancelScheduledDeletion: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScheduledDeletion.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScheduledDeletion.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScheduledDeletion.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScheduledDeletion.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScheduledDeletion.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScheduledDeletion.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdScheduledDeletion.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/scheduled-deletion",
  method: "DELETE",
  operationId: "domain-cancel-scheduled-deletion",
};

/** Check if a Domain is available to register. */
export const domainCheckDomainRegistrability: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DomainRegistrable.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainRegistrable.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainRegistrable.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainRegistrable.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainRegistrable.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainRegistrable.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainRegistrable.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainRegistrable.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domain-registrable",
  method: "POST",
  operationId: "domain-check-domain-registrability",
};

/** Check if a Domain is available to transfer. */
export const domainCheckDomainTransferability: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DomainTransferable.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainTransferable.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainTransferable.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainTransferable.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainTransferable.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainTransferable.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainTransferable.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainTransferable.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domain-transferable",
  method: "POST",
  operationId: "domain-check-domain-transferability",
};

/** Create an auth code for a Domains transfer-out process. */
export const domainCreateDomainAuthCode: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsAuthCode.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsAuthCode.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsAuthCode.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsAuthCode.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsAuthCode.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsAuthCode.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsAuthCode.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsAuthCode.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/actions/auth-code",
  method: "POST",
  operationId: "domain-create-domain-auth-code",
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
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
    Simplify<null>,
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
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Get the latest screenshot's FileReference belonging to a Domain. */
export const domainGetLatestScreenshot: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsLatestScreenshot.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsLatestScreenshot.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsLatestScreenshot.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsLatestScreenshot.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsLatestScreenshot.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsLatestScreenshot.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsLatestScreenshot.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/latest-screenshot",
  method: "GET",
  operationId: "domain-get-latest-screenshot",
};

/** List the contact schemas for a TLD. */
export const domainListTldContactSchemas: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DomainTldsTldContactSchemas.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainTldsTldContactSchemas.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainTldsTldContactSchemas.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainTldsTldContactSchemas.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainTldsTldContactSchemas.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainTldsTldContactSchemas.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domain-tlds/{tld}/contact-schemas",
  method: "GET",
  operationId: "domain-list-tld-contact-schemas",
};

/** List TLDs. */
export const domainListTlds: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DomainTlds.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainTlds.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainTlds.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainTlds.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainTlds.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainTlds.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domain-tlds",
  method: "GET",
  operationId: "domain-list-tlds",
};

/** Resend a Domain email. */
export const domainResendDomainEmail: OpenAPIOperation<
  RequestType<
    Simplify<null>,
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
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsResendEmail.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsResendEmail.Post.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Suggest a list of domains based on a prompt using AI. */
export const domainSuggest: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DomainSuggestions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainSuggestions.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainSuggestions.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainSuggestions.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainSuggestions.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainSuggestions.Get.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainSuggestions.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainSuggestions.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domain-suggestions",
  method: "GET",
  operationId: "domain-suggest",
};

/** Update the auth code of a Domain. */
export const domainUpdateDomainAuthCode: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdAuthCode.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdAuthCode.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdAuthCode.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdAuthCode.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdAuthCode.Patch.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdAuthCode.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdAuthCode.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdAuthCode.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdAuthCode.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/auth-code",
  method: "PATCH",
  operationId: "domain-update-domain-auth-code",
};

/** Update a contact of a Domain. */
export const domainUpdateDomainContact: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdContactsContact.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdContactsContact.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdContactsContact.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdContactsContact.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdContactsContact.Patch.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdContactsContact.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdContactsContact.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdContactsContact.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdContactsContact.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/contacts/{contact}",
  method: "PATCH",
  operationId: "domain-update-domain-contact",
};

/** Update a Domain's project id. */
export const domainUpdateDomainProjectId: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdProjectId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdProjectId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdProjectId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdProjectId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdProjectId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdProjectId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdProjectId.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdProjectId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdProjectId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/project-id",
  method: "PATCH",
  operationId: "domain-update-domain-project-id",
};

/** Authenticate your external application using the extensionInstanceSecret. */
export const extensionAuthenticateInstance: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTokens.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTokens.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTokens.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTokens.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTokens.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTokens.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTokens.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/extension-instances/{extensionInstanceId}/tokens",
  method: "POST",
  operationId: "extension-authenticate-instance",
};

/** Authenticate your external application using a session token and an extension secret */
export const extensionAuthenticateWithSessionToken: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2AuthenticateSessionToken.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2AuthenticateSessionToken.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AuthenticateSessionToken.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AuthenticateSessionToken.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AuthenticateSessionToken.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AuthenticateSessionToken.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AuthenticateSessionToken.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AuthenticateSessionToken.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/authenticate-session-token",
  method: "POST",
  operationId: "extension-authenticate-with-session-token",
};

/** Schedule an Extension Instance Termination for the next possible date. */
export const extensionScheduleExtensionTermination: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTermination.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTermination.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTermination.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTermination.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTermination.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTermination.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTermination.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTermination.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTermination.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/extension-instances/{extensionInstanceId}/termination",
  method: "POST",
  operationId: "extension-schedule-extension-termination",
};

/** Cancel an Extension Instance Termination. */
export const extensionCancelExtensionTermination: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTermination.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTermination.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTermination.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTermination.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTermination.Delete.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTermination.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTermination.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTermination.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdTermination.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/extension-instances/{extensionInstanceId}/termination",
  method: "DELETE",
  operationId: "extension-cancel-extension-termination",
};

/** Schedule an Extension Instance Variant change for the next possible date. */
export const extensionScheduleExtensionVariantChange: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContractVariantChange.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContractVariantChange.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContractVariantChange.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContractVariantChange.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContractVariantChange.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContractVariantChange.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContractVariantChange.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContractVariantChange.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContractVariantChange.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/extension-instances/{extensionInstanceId}/contract/variant-change",
  method: "POST",
  operationId: "extension-schedule-extension-variant-change",
};

/** Cancel an Extension Instance Variant Change. */
export const extensionCancelExtensionVariantChange: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContractVariantChange.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContractVariantChange.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContractVariantChange.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContractVariantChange.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContractVariantChange.Delete.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContractVariantChange.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContractVariantChange.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContractVariantChange.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContractVariantChange.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/extension-instances/{extensionInstanceId}/contract/variant-change",
  method: "DELETE",
  operationId: "extension-cancel-extension-variant-change",
};

/** Change the context of an Extension. */
export const extensionChangeContext: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdContext.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdContext.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdContext.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdContext.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdContext.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdContext.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdContext.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdContext.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/extensions/{extensionId}/context",
  method: "PUT",
  operationId: "extension-change-context",
};

/** Consent to extension scopes. */
export const extensionConsentToExtensionScopes: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdScopes.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdScopes.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdScopes.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdScopes.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdScopes.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdScopes.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdScopes.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdScopes.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/extension-instances/{extensionInstanceId}/scopes",
  method: "PATCH",
  operationId: "extension-consent-to-extension-scopes",
};

/** Create the OnboardingProcess of a Contributor. */
export const extensionCreateContributorOnboardingProcess: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdOnboardingProcess.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdOnboardingProcess.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdOnboardingProcess.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdOnboardingProcess.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdOnboardingProcess.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdOnboardingProcess.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdOnboardingProcess.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdOnboardingProcess.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdOnboardingProcess.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/onboarding-process",
  method: "POST",
  operationId: "extension-create-contributor-onboarding-process",
};

/** List ExtensionInstances. */
export const extensionListExtensionInstances: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstances.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstances.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstances.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstances.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstances.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstances.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstances.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/extension-instances",
  method: "GET",
  operationId: "extension-list-extension-instances",
};

/** Create an ExtensionInstance. */
export const extensionCreateExtensionInstance: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstances.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstances.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstances.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstances.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstances.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstances.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstances.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstances.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstances.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstances.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstances.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/extension-instances",
  method: "POST",
  operationId: "extension-create-extension-instance",
};

/** Create an access token retrieval key for an extension instance. */
export const extensionCreateRetrievalKey: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsCreateAccessTokenRetrievalKey.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsCreateAccessTokenRetrievalKey.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsCreateAccessTokenRetrievalKey.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsCreateAccessTokenRetrievalKey.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsCreateAccessTokenRetrievalKey.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsCreateAccessTokenRetrievalKey.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsCreateAccessTokenRetrievalKey.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/extension-instances/{extensionInstanceId}/actions/create-access-token-retrieval-key",
  method: "POST",
  operationId: "extension-create-retrieval-key",
};

/** Get an ExtensionInstance. */
export const extensionGetExtensionInstance: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/extension-instances/{extensionInstanceId}",
  method: "GET",
  operationId: "extension-get-extension-instance",
};

/** Delete a free ExtensionInstance. If the Extension is chargable the contract must be terminated instead. */
export const extensionDeleteExtensionInstance: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceId.Delete.Responses.$204.Content.ApplicationJson>,
      204,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/extension-instances/{extensionInstanceId}",
  method: "DELETE",
  operationId: "extension-delete-extension-instance",
};

/** Get Extension of own contributor. */
export const extensionGetOwnExtension: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/extensions/{extensionId}",
  method: "GET",
  operationId: "extension-get-own-extension",
};

/** Delete an extension. */
export const extensionDeleteExtension: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/extensions/{extensionId}",
  method: "DELETE",
  operationId: "extension-delete-extension",
};

/** Patch Extension. */
export const extensionPatchExtension: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Patch.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Patch.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/extensions/{extensionId}",
  method: "PATCH",
  operationId: "extension-patch-extension",
};

/** Disable an ExtensionInstance. */
export const extensionDisableExtensionInstance: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsDisable.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsDisable.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsDisable.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsDisable.Post.Responses.$204.Content.ApplicationJson>,
      204,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsDisable.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsDisable.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsDisable.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/extension-instances/{extensionInstanceId}/actions/disable",
  method: "POST",
  operationId: "extension-disable-extension-instance",
};

/** Dry run a webhook with random or given values. */
export const extensionDryRunWebhook: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdActionsDryRunWebhookKind.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdActionsDryRunWebhookKind.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdActionsDryRunWebhookKind.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdActionsDryRunWebhookKind.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdActionsDryRunWebhookKind.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdActionsDryRunWebhookKind.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdActionsDryRunWebhookKind.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/extensions/{extensionId}/extension-instances/{extensionInstanceId}/actions/dry-run/{webhookKind}",
  method: "POST",
  operationId: "extension-dry-run-webhook",
};

/** Enable an ExtensionInstance. */
export const extensionEnableExtensionInstance: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsEnable.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsEnable.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsEnable.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsEnable.Post.Responses.$204.Content.ApplicationJson>,
      204,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsEnable.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsEnable.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdActionsEnable.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/extension-instances/{extensionInstanceId}/actions/enable",
  method: "POST",
  operationId: "extension-enable-extension-instance",
};

/** Generate an Extension secret for the given Extension. */
export const extensionGenerateExtensionSecret: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdSecret.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdSecret.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdSecret.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdSecret.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdSecret.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdSecret.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdSecret.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdSecret.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdSecret.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/extensions/{extensionId}/secret",
  method: "POST",
  operationId: "extension-generate-extension-secret",
};

/** Generate a session token to transmit it to the extensions frontend fragment. */
export const extensionGenerateSessionToken: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdSessionsSessionId.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdSessionsSessionId.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdSessionsSessionId.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdSessionsSessionId.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdSessionsSessionId.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdSessionsSessionId.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdSessionsSessionId.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdSessionsSessionId.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/extension-instances/{extensionInstanceId}/sessions/{sessionId}",
  method: "POST",
  operationId: "extension-generate-session-token",
};

/** Get all open extension orders for given customer */
export const extensionGetCustomerExtensionInstanceOrders: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdExtensionOrders.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdExtensionOrders.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdExtensionOrders.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdExtensionOrders.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdExtensionOrders.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdExtensionOrders.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdExtensionOrders.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdExtensionOrders.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/extension-orders",
  method: "GET",
  operationId: "extension-get-customer-extension-instance-orders",
};

/** Get the Contract Strategy of an Extension Instance */
export const extensionGetExtensionInstanceContract: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContract.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContract.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContract.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContract.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContract.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContract.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContract.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContract.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/extension-instances/{extensionInstanceId}/contract",
  method: "GET",
  operationId: "extension-get-extension-instance-contract",
};

/** Update or Create Contract for existing Extension Instances. */
export const extensionUpdateExtensionInstanceContract: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContract.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContract.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContract.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContract.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContract.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContract.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContract.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContract.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdContract.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/extension-instances/{extensionInstanceId}/contract",
  method: "PUT",
  operationId: "extension-update-extension-instance-contract",
};

/** Get the ExtensionInstance of a specific customer and extension, if existing. */
export const extensionGetExtensionInstanceForCustomer: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdExtensionsExtensionId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdExtensionsExtensionId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdExtensionsExtensionId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdExtensionsExtensionId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdExtensionsExtensionId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdExtensionsExtensionId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdExtensionsExtensionId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/extensions/{extensionId}",
  method: "GET",
  operationId: "extension-get-extension-instance-for-customer",
};

/** Get the ExtensionInstance of a specific project and extension, if existing. */
export const extensionGetExtensionInstanceForProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdExtensionsExtensionId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdExtensionsExtensionId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdExtensionsExtensionId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdExtensionsExtensionId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdExtensionsExtensionId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdExtensionsExtensionId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdExtensionsExtensionId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/extensions/{extensionId}",
  method: "GET",
  operationId: "extension-get-extension-instance-for-project",
};

/** Get an Extension. */
export const extensionGetExtension: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionsExtensionId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionsExtensionId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionsExtensionId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionsExtensionId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionsExtensionId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionsExtensionId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionsExtensionId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/extensions/{extensionId}",
  method: "GET",
  operationId: "extension-get-extension",
};

/** Get all open extension orders for given project */
export const extensionGetProjectExtensionInstanceOrders: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdExtensionOrders.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdExtensionOrders.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdExtensionOrders.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdExtensionOrders.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdExtensionOrders.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdExtensionOrders.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdExtensionOrders.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdExtensionOrders.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/extension-orders",
  method: "GET",
  operationId: "extension-get-project-extension-instance-orders",
};

/** Get the public key to verify the webhook signature. */
export const extensionGetPublicKey: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2PublicKeysSerial.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2PublicKeysSerial.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2PublicKeysSerial.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PublicKeysSerial.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PublicKeysSerial.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PublicKeysSerial.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PublicKeysSerial.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/public-keys/{serial}",
  method: "GET",
  operationId: "extension-get-public-key",
};

/** Invalidate the given Extension secret immediately. */
export const extensionInvalidateExtensionSecret: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdSecretExtensionSecretId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdSecretExtensionSecretId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdSecretExtensionSecretId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdSecretExtensionSecretId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdSecretExtensionSecretId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdSecretExtensionSecretId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdSecretExtensionSecretId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdSecretExtensionSecretId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdSecretExtensionSecretId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/extensions/{extensionId}/secret/{extensionSecretId}",
  method: "DELETE",
  operationId: "extension-invalidate-extension-secret",
};

/** List Contributors. */
export const extensionListContributors: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Contributors.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Contributors.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Contributors.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Contributors.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Contributors.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Contributors.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors",
  method: "GET",
  operationId: "extension-list-contributors",
};

/** List Extensions. */
export const extensionListExtensions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Extensions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Extensions.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Extensions.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Extensions.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Extensions.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Extensions.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/extensions",
  method: "GET",
  operationId: "extension-list-extensions",
};

/** List Extensions of own contributor. */
export const extensionListOwnExtensions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensions.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensions.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensions.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensions.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensions.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/extensions",
  method: "GET",
  operationId: "extension-list-own-extensions",
};

/** Register an Extension. */
export const extensionRegisterExtension: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensions.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensions.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensions.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensions.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensions.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensions.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensions.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensions.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/extensions",
  method: "POST",
  operationId: "extension-register-extension",
};

/** List Scopes. */
export const extensionListScopes: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Scopes.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Scopes.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Scopes.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Scopes.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Scopes.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Scopes.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/scopes",
  method: "GET",
  operationId: "extension-list-scopes",
};

/** Order Extension with saved payment method */
export const extensionOrderExtension: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ExtensionsExtensionIdOrder.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionsExtensionIdOrder.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionsExtensionIdOrder.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ExtensionsExtensionIdOrder.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionsExtensionIdOrder.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionsExtensionIdOrder.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionsExtensionIdOrder.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionsExtensionIdOrder.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionsExtensionIdOrder.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ExtensionsExtensionIdOrder.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/extensions/{extensionId}/order",
  method: "POST",
  operationId: "extension-order-extension",
};

/** Remove an asset of an extension. */
export const extensionRemoveAsset: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdAssetsAssetRefId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdAssetsAssetRefId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdAssetsAssetRefId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdAssetsAssetRefId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdAssetsAssetRefId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdAssetsAssetRefId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdAssetsAssetRefId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/extensions/{extensionId}/assets/{assetRefId}",
  method: "DELETE",
  operationId: "extension-remove-asset",
};

/** Add a logo to an extension. */
export const extensionRequestLogoUpload: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdLogo.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdLogo.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdLogo.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdLogo.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdLogo.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdLogo.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdLogo.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/extensions/{extensionId}/logo",
  method: "POST",
  operationId: "extension-request-logo-upload",
};

/** Remove the logo of an extension. */
export const extensionRemoveLogo: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdLogo.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdLogo.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdLogo.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdLogo.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdLogo.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdLogo.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdLogo.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/extensions/{extensionId}/logo",
  method: "DELETE",
  operationId: "extension-remove-logo",
};

/** Add an asset to an extension. */
export const extensionRequestAssetUpload: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdAssets.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdAssets.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdAssets.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdAssets.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdAssets.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdAssets.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdAssets.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdAssets.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdAssets.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdAssets.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/extensions/{extensionId}/assets",
  method: "POST",
  operationId: "extension-request-asset-upload",
};

/** Start the verification process of an Extension. */
export const extensionRequestExtensionVerification: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdVerificationProcess.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdVerificationProcess.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdVerificationProcess.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdVerificationProcess.Post.Responses.$204.Content.ApplicationJson>,
      204,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdVerificationProcess.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdVerificationProcess.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdVerificationProcess.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/extensions/{extensionId}/verification-process",
  method: "POST",
  operationId: "extension-request-extension-verification",
};

/** Publish or withdraw an Extension. */
export const extensionSetExtensionPublishedState: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdPublished.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdPublished.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdPublished.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdPublished.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdPublished.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdPublished.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdPublished.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdPublished.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/extensions/{extensionId}/published",
  method: "PUT",
  operationId: "extension-set-extension-published-state",
};

/** Creates or Updates Pricing for an Extension. */
export const extensionUpdateExtensionPricing: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdPricing.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdPricing.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdPricing.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdPricing.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdPricing.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdPricing.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdPricing.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdPricing.Put.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdPricing.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ContributorsContributorIdExtensionsExtensionIdPricing.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/contributors/{contributorId}/extensions/{extensionId}/pricing",
  method: "PUT",
  operationId: "extension-update-extension-pricing",
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
      Simplify<MittwaldAPIV2.Paths.V2Files.Post.Responses.$401.Content.ApplicationJson>,
      401,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Files.Post.Responses.$406.Content.ApplicationJson>,
      406,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Files.Post.Responses.$422.Content.ApplicationJson>,
      422,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Files.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
    Simplify<MittwaldAPIV2.Paths.V2FilesFileIdMeta.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2FilesFileIdMeta.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2FilesFileIdMeta.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileIdMeta.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileIdMeta.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileIdMeta.Get.Responses.$401.Content.ApplicationJson>,
      401,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileIdMeta.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileIdMeta.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileIdMeta.Get.Responses.$422.Content.ApplicationJson>,
      422,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileIdMeta.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileIdMeta.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileIdMeta.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/files/{fileId}/meta",
  method: "GET",
  operationId: "file-get-file-meta",
};

/** Get a FileUploadToken's rules. */
export const fileGetFileUploadTokenRules: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2FileUploadTokensFileUploadTokenRules.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2FileUploadTokensFileUploadTokenRules.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2FileUploadTokensFileUploadTokenRules.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FileUploadTokensFileUploadTokenRules.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FileUploadTokensFileUploadTokenRules.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FileUploadTokensFileUploadTokenRules.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FileUploadTokensFileUploadTokenRules.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FileUploadTokensFileUploadTokenRules.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FileUploadTokensFileUploadTokenRules.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/file-upload-tokens/{fileUploadToken}/rules",
  method: "GET",
  operationId: "file-get-file-upload-token-rules",
};

/** Get a FileUploadType's rules. */
export const fileGetFileUploadTypeRules: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2FileUploadTypesFileUploadTypeRules.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2FileUploadTypesFileUploadTypeRules.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2FileUploadTypesFileUploadTypeRules.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FileUploadTypesFileUploadTypeRules.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FileUploadTypesFileUploadTypeRules.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FileUploadTypesFileUploadTypeRules.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FileUploadTypesFileUploadTypeRules.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FileUploadTypesFileUploadTypeRules.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/file-upload-types/{fileUploadType}/rules",
  method: "GET",
  operationId: "file-get-file-upload-type-rules",
};

/** Get a File. */
export const fileGetFile: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2FilesFileId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2FilesFileId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2FilesFileId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileId.Get.Responses.$200.Content.ApplicationOctetStream>,
      200,
      "application/octet-stream"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileId.Get.Responses.$200.Content.TextPlainBase64>,
      200,
      "text/plain;base64"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileId.Get.Responses.$401.Content.ApplicationJson>,
      401,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileId.Get.Responses.$422.Content.ApplicationJson>,
      422,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/files/{fileId}",
  method: "GET",
  operationId: "file-get-file",
};

/** Get a File with user-friendly url. */
export const fileGetFileWithName: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2FilesFileIdFileName.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2FilesFileIdFileName.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2FilesFileIdFileName.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileIdFileName.Get.Responses.$200.Content.ApplicationOctetStream>,
      200,
      "application/octet-stream"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileIdFileName.Get.Responses.$200.Content.TextPlainBase64>,
      200,
      "text/plain;base64"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileIdFileName.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileIdFileName.Get.Responses.$401.Content.ApplicationJson>,
      401,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileIdFileName.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileIdFileName.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileIdFileName.Get.Responses.$422.Content.ApplicationJson>,
      422,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileIdFileName.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileIdFileName.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2FilesFileIdFileName.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/files/{fileId}/{fileName}",
  method: "GET",
  operationId: "file-get-file-with-name",
};

/** List Ingresses. */
export const ingressListIngresses: OpenAPIOperation<
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
      Simplify<MittwaldAPIV2.Paths.V2Ingresses.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
  operationId: "ingress-list-ingresses",
};

/** Create an Ingress. */
export const ingressCreateIngress: OpenAPIOperation<
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
      Simplify<MittwaldAPIV2.Paths.V2Ingresses.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Ingresses.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Ingresses.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/ingresses",
  method: "POST",
  operationId: "ingress-create-ingress",
};

/** Get an Ingress. */
export const ingressGetIngress: OpenAPIOperation<
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
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
  operationId: "ingress-get-ingress",
};

/** Delete an Ingress. */
export const ingressDeleteIngress: OpenAPIOperation<
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
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
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
  operationId: "ingress-delete-ingress",
};

/** Verifiy the ownership of an Ingress. */
export const ingressIngressVerifyOwnership: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsVerifyOwnership.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsVerifyOwnership.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsVerifyOwnership.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsVerifyOwnership.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsVerifyOwnership.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsVerifyOwnership.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsVerifyOwnership.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsVerifyOwnership.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsVerifyOwnership.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/ingresses/{ingressId}/actions/verify-ownership",
  method: "POST",
  operationId: "ingress-ingress-verify-ownership",
};

/** List Ingresses compatible with a certificate. */
export const ingressListIngressesCompatibleWithCertificate: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ActionsListIngressesCompatibleWithCertificate.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ActionsListIngressesCompatibleWithCertificate.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ActionsListIngressesCompatibleWithCertificate.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ActionsListIngressesCompatibleWithCertificate.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsListIngressesCompatibleWithCertificate.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsListIngressesCompatibleWithCertificate.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsListIngressesCompatibleWithCertificate.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsListIngressesCompatibleWithCertificate.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsListIngressesCompatibleWithCertificate.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/actions/list-ingresses-compatible-with-certificate",
  method: "POST",
  operationId: "ingress-list-ingresses-compatible-with-certificate",
};

/** Request the ACME certificate issuance of an Ingress. */
export const ingressRequestIngressAcmeCertificateIssuance: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Responses.$204.Content.Empty>,
      204,
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
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
  operationId: "ingress-request-ingress-acme-certificate-issuance",
};

/** Get details of an Invoice. */
export const invoiceDetail: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2InvoicesInvoiceId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvoicesInvoiceId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2InvoicesInvoiceId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2InvoicesInvoiceId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2InvoicesInvoiceId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2InvoicesInvoiceId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2InvoicesInvoiceId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2InvoicesInvoiceId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/invoices/{invoiceId}",
  method: "GET",
  operationId: "invoice-detail",
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
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Put.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Request an Access Token for the Invoice file. */
export const invoiceGetFileAccessToken: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesInvoiceIdFileAccessToken.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesInvoiceIdFileAccessToken.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesInvoiceIdFileAccessToken.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesInvoiceIdFileAccessToken.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesInvoiceIdFileAccessToken.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesInvoiceIdFileAccessToken.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesInvoiceIdFileAccessToken.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesInvoiceIdFileAccessToken.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/invoices/{invoiceId}/file-access-token",
  method: "GET",
  operationId: "invoice-get-file-access-token",
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
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoices.Get.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Get your LeadFyndr request. */
export const leadfyndrGetLeadFyndrProfileRequest: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/lead-fyndr-profile-request",
  method: "GET",
  operationId: "leadfyndr-get-lead-fyndr-profile-request",
};

/** Create a new access request for LeadFyndr. */
export const leadfyndrCreateLeadFyndrAccessRequest: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileRequest.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/lead-fyndr-profile-request",
  method: "POST",
  operationId: "leadfyndr-create-lead-fyndr-access-request",
};

/** Create an export of unlocked leads for the given customerId. */
export const leadfyndrCreateLeadsExport: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExport.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExport.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExport.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExport.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExport.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExport.Post.Responses.$200.Content.TextCsv>,
      200,
      "text/csv"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExport.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExport.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExport.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExport.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExport.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExport.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/unlocked-leads-export",
  method: "POST",
  operationId: "leadfyndr-create-leads-export",
};

/** Get cities in DACH. */
export const leadfyndrGetCities: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Cities.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Cities.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Cities.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Cities.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Cities.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Cities.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Cities.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Cities.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Cities.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/cities",
  method: "GET",
  operationId: "leadfyndr-get-cities",
};

/** Get lead tariff options. How many leads did you unlock this month? */
export const leadfyndrGetLeadFyndrProfileTariffOptions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileTariff.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileTariff.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileTariff.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileTariff.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileTariff.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileTariff.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileTariff.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileTariff.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfileTariff.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/lead-fyndr-profile/tariff",
  method: "GET",
  operationId: "leadfyndr-get-lead-fyndr-profile-tariff-options",
};

/** Get your LeadFyndr profile. */
export const leadfyndrGetLeadFyndrProfile: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfile.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfile.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfile.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfile.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfile.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfile.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfile.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfile.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadFyndrProfile.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/lead-fyndr-profile",
  method: "GET",
  operationId: "leadfyndr-get-lead-fyndr-profile",
};

/** Get a simple lead. Use the unlocked route for more detail leads. */
export const leadfyndrGetLead: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadsLeadId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadsLeadId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadsLeadId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadsLeadId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadsLeadId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadsLeadId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadsLeadId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadsLeadId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeadsLeadId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/leads/{leadId}",
  method: "GET",
  operationId: "leadfyndr-get-lead",
};

/** Get unlocked leads export history for the given customerId. */
export const leadfyndrGetLeadsExportHistory: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExports.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExports.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExports.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExports.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExports.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExports.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExports.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExports.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExports.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/unlocked-leads-exports",
  method: "GET",
  operationId: "leadfyndr-get-leads-export-history",
};

/** Get a detail of a unlocked lead. Organisation can unlock leads. */
export const leadfyndrGetUnlockedLead: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/unlocked-leads/{leadId}",
  method: "GET",
  operationId: "leadfyndr-get-unlocked-lead",
};

/** Unlock a lead for the given customerId. */
export const leadfyndrUnlockLead: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadId.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadId.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadId.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadId.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadId.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadId.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadId.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadId.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadId.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/unlocked-leads/{leadId}",
  method: "POST",
  operationId: "leadfyndr-unlock-lead",
};

/** Get all leads. Use the unlocked routes for more lead details. */
export const leadfyndrListLeads: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeads.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeads.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeads.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeads.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeads.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeads.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLeads.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/leads",
  method: "GET",
  operationId: "leadfyndr-list-leads",
};

/** Get all unlocked leads. Organisation can unlock leads. */
export const leadfyndrListUnlockedLeads: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeads.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeads.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeads.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeads.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeads.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeads.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeads.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeads.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeads.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/unlocked-leads",
  method: "GET",
  operationId: "leadfyndr-list-unlocked-leads",
};

/** Reserve a unlocked lead for the given customerId. */
export const leadfyndrReserveUnlockedLead: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadIdReservation.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadIdReservation.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadIdReservation.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadIdReservation.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadIdReservation.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadIdReservation.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadIdReservation.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadIdReservation.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadIdReservation.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadIdReservation.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/unlocked-leads/{leadId}/reservation",
  method: "POST",
  operationId: "leadfyndr-reserve-unlocked-lead",
};

/** Removes a reservation on a unlocked lead for the given customerId. */
export const leadfyndrRemoveUnlockedLeadReservation: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadIdReservation.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadIdReservation.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadIdReservation.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadIdReservation.Delete.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadIdReservation.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadIdReservation.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadIdReservation.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadIdReservation.Delete.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadIdReservation.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsLeadIdReservation.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/unlocked-leads/{leadId}/reservation",
  method: "DELETE",
  operationId: "leadfyndr-remove-unlocked-lead-reservation",
};

/** Get a Licence. */
export const licenceGetLicence: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/licences/{licenceId}",
  method: "GET",
  operationId: "licence-get-licence",
};

/** List Licences belonging to a Project. */
export const licenceListLicencesForProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdLicences.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdLicences.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdLicences.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdLicences.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdLicences.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdLicences.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdLicences.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdLicences.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdLicences.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/licences",
  method: "GET",
  operationId: "licence-list-licences-for-project",
};

/** rotate a Licence's key, i.e. revoke the old and generate a new one. */
export const licenceRotateLicenceKey: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceIdActionsRotateLicenceKey.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceIdActionsRotateLicenceKey.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceIdActionsRotateLicenceKey.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceIdActionsRotateLicenceKey.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceIdActionsRotateLicenceKey.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceIdActionsRotateLicenceKey.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceIdActionsRotateLicenceKey.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceIdActionsRotateLicenceKey.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceIdActionsRotateLicenceKey.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceIdActionsRotateLicenceKey.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceIdActionsRotateLicenceKey.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2LicencesLicenceIdActionsRotateLicenceKey.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/licences/{licenceId}/actions/rotate-licence-key",
  method: "POST",
  operationId: "licence-rotate-licence-key",
};

/** Validate a Licence's key for a project. */
export const licenceValidateLicenceKeyForProject: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdActionsValidateLicenceKey.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdActionsValidateLicenceKey.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdActionsValidateLicenceKey.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdActionsValidateLicenceKey.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdActionsValidateLicenceKey.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdActionsValidateLicenceKey.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdActionsValidateLicenceKey.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdActionsValidateLicenceKey.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdActionsValidateLicenceKey.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdActionsValidateLicenceKey.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdActionsValidateLicenceKey.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdActionsValidateLicenceKey.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/actions/validate-licence-key",
  method: "POST",
  operationId: "licence-validate-licence-key-for-project",
};

/** List DeliveryBoxes belonging to a Project. */
export const mailListDeliveryBoxes: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/delivery-boxes",
  method: "GET",
  operationId: "mail-list-delivery-boxes",
};

/** Create a DeliveryBox. */
export const mailCreateDeliverybox: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Post.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/delivery-boxes",
  method: "POST",
  operationId: "mail-create-deliverybox",
};

/** List MailAddresses belonging to a Project. */
export const mailListMailAddresses: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/mail-addresses",
  method: "GET",
  operationId: "mail-list-mail-addresses",
};

/** Create a MailAddress. */
export const mailCreateMailAddress: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Post.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/mail-addresses",
  method: "POST",
  operationId: "mail-create-mail-address",
};

/** Get a DeliveryBox. */
export const mailGetDeliveryBox: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/delivery-boxes/{deliveryBoxId}",
  method: "GET",
  operationId: "mail-get-delivery-box",
};

/** Delete a DeliveryBox. */
export const mailDeleteDeliveryBox: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Delete.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/delivery-boxes/{deliveryBoxId}",
  method: "DELETE",
  operationId: "mail-delete-delivery-box",
};

/** Get a MailAddress. */
export const mailGetMailAddress: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mail-addresses/{mailAddressId}",
  method: "GET",
  operationId: "mail-get-mail-address",
};

/** Delete a MailAddress. */
export const mailDeleteMailAddress: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Delete.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mail-addresses/{mailAddressId}",
  method: "DELETE",
  operationId: "mail-delete-mail-address",
};

/** Disable the mail-archive of a MailAddress. */
export const mailDisableMailArchive: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdMailArchive.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdMailArchive.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdMailArchive.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdMailArchive.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdMailArchive.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdMailArchive.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdMailArchive.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdMailArchive.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdMailArchive.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdMailArchive.Delete.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdMailArchive.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mail-addresses/{mailAddressId}/mail-archive",
  method: "DELETE",
  operationId: "mail-disable-mail-archive",
};

/** List backups belonging to a MailAddress. */
export const mailListBackupsForMailAddress: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdBackups.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdBackups.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdBackups.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdBackups.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdBackups.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdBackups.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdBackups.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdBackups.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdBackups.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdBackups.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mail-addresses/{mailAddressId}/backups",
  method: "GET",
  operationId: "mail-list-backups-for-mail-address",
};

/** List MailAddresses. */
export const mailListMailAddressesForUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddresses.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddresses.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddresses.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddresses.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddresses.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddresses.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddresses.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddresses.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddresses.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddresses.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddresses.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mail-addresses/",
  method: "GET",
  operationId: "mail-list-mail-addresses-for-user",
};

/** List mail settings of a Project. */
export const mailListProjectMailSettings: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettings.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettings.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettings.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettings.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettings.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettings.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettings.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettings.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettings.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettings.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailSettings.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/mail-settings",
  method: "GET",
  operationId: "mail-list-project-mail-settings",
};

/** Check if a Migration between two projects is possible. */
export const mailMigrationCheckMigrationIsPossible: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MailMigrationsActionsPossibilityCheck.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailMigrationsActionsPossibilityCheck.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailMigrationsActionsPossibilityCheck.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailMigrationsActionsPossibilityCheck.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailMigrationsActionsPossibilityCheck.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailMigrationsActionsPossibilityCheck.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailMigrationsActionsPossibilityCheck.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailMigrationsActionsPossibilityCheck.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mail-migrations/actions/possibility-check",
  method: "POST",
  operationId: "mail-migration-check-migration-is-possible",
};

/** Get a Migration. */
export const mailMigrationGetMigration: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MailMigrationsMigrationId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailMigrationsMigrationId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailMigrationsMigrationId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailMigrationsMigrationId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailMigrationsMigrationId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailMigrationsMigrationId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailMigrationsMigrationId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mail-migrations/{migrationId}",
  method: "GET",
  operationId: "mail-migration-get-migration",
};

/** List Migrations belonging to a Project in customer center or mStudio. */
export const mailMigrationListMigrations: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MailMigrations.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailMigrations.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailMigrations.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailMigrations.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailMigrations.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailMigrations.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailMigrations.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mail-migrations",
  method: "GET",
  operationId: "mail-migration-list-migrations",
};

/** Request a Mail Migration between two projects. */
export const mailMigrationRequestMailMigration: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MailMigrationsActionsRequest.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailMigrationsActionsRequest.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailMigrationsActionsRequest.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailMigrationsActionsRequest.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailMigrationsActionsRequest.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailMigrationsActionsRequest.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailMigrationsActionsRequest.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailMigrationsActionsRequest.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailMigrationsActionsRequest.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mail-migrations/actions/request",
  method: "POST",
  operationId: "mail-migration-request-mail-migration",
};

/** Recover emails for a MailAddress from a backup. */
export const mailRecoverMailAddressEmails: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdBackupsBackupIdRecovery.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdBackupsBackupIdRecovery.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdBackupsBackupIdRecovery.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdBackupsBackupIdRecovery.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdBackupsBackupIdRecovery.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdBackupsBackupIdRecovery.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdBackupsBackupIdRecovery.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdBackupsBackupIdRecovery.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mail-addresses/{mailAddressId}/backups/{backupId}/recovery",
  method: "POST",
  operationId: "mail-recover-mail-address-emails",
};

/** Update the description of a DeliveryBox. */
export const mailUpdateDeliveryBoxDescription: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdDescription.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdDescription.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdDescription.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdDescription.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdDescription.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdDescription.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdDescription.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdDescription.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdDescription.Patch.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdDescription.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/delivery-boxes/{deliveryBoxId}/description",
  method: "PATCH",
  operationId: "mail-update-delivery-box-description",
};

/** Update the password of a DeliveryBox. */
export const mailUpdateDeliveryBoxPassword: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdPassword.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdPassword.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdPassword.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdPassword.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdPassword.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdPassword.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdPassword.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdPassword.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdPassword.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdPassword.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdPassword.Patch.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2DeliveryBoxesDeliveryBoxIdPassword.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/delivery-boxes/{deliveryBoxId}/password",
  method: "PATCH",
  operationId: "mail-update-delivery-box-password",
};

/** Update a MailAddress. */
export const mailUpdateMailAddressAddress: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAddress.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAddress.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAddress.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAddress.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAddress.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAddress.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAddress.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAddress.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAddress.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAddress.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAddress.Patch.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAddress.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mail-addresses/{mailAddressId}/address",
  method: "PATCH",
  operationId: "mail-update-mail-address-address",
};

/** Update the catch-all of a MailAddress. */
export const mailUpdateMailAddressCatchAll: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdCatchAll.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdCatchAll.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdCatchAll.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdCatchAll.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdCatchAll.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdCatchAll.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdCatchAll.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdCatchAll.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdCatchAll.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdCatchAll.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdCatchAll.Patch.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdCatchAll.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/mail-addresses/{mailAddressId}/catch-all",
  method: "PATCH",
  operationId: "mail-update-mail-address-catch-all",
};

/** Get payment method details */
export const marketplaceCustomerGetPaymentMethod: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdPaymentMethod.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdPaymentMethod.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdPaymentMethod.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdPaymentMethod.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdPaymentMethod.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdPaymentMethod.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdPaymentMethod.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdPaymentMethod.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/payment-method",
  method: "GET",
  operationId: "marketplace-customer-get-payment-method",
};

/** Get the link to update the marketplace payment method */
export const marketplaceCustomerUpdatePaymentMethod: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdPaymentMethod.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdPaymentMethod.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdPaymentMethod.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdPaymentMethod.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdPaymentMethod.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdPaymentMethod.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdPaymentMethod.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdPaymentMethod.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdPaymentMethod.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/payment-method",
  method: "PUT",
  operationId: "marketplace-customer-update-payment-method",
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
      Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptionsSelf.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptionsSelf.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
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

/** Get the counts for unread notifications of the user. */
export const notificationsCountUnreadNotifications: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationUnreadCounts.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationUnreadCounts.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationUnreadCounts.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NotificationUnreadCounts.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NotificationUnreadCounts.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NotificationUnreadCounts.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/notification-unread-counts",
  method: "GET",
  operationId: "notifications-count-unread-notifications",
};

/** List all unread notifications. */
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
      Simplify<MittwaldAPIV2.Paths.V2Notifications.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
    Simplify<MittwaldAPIV2.Paths.V2NotificationsActionsReadAll.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsActionsReadAll.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsActionsReadAll.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsActionsReadAll.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NotificationsActionsReadAll.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NotificationsActionsReadAll.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NotificationsActionsReadAll.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NotificationsActionsReadAll.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/notifications/actions/read-all",
  method: "POST",
  operationId: "notifications-read-all-notifications",
};

/** Mark notification as read. */
export const notificationsReadNotification: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2NotificationsNotificationIdStatus.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsNotificationIdStatus.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsNotificationIdStatus.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsNotificationIdStatus.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NotificationsNotificationIdStatus.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NotificationsNotificationIdStatus.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NotificationsNotificationIdStatus.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2NotificationsNotificationIdStatus.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/notifications/{notificationId}/status",
  method: "PUT",
  operationId: "notifications-read-notification",
};

/** Get list of Orders. */
export const orderListOrders: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Orders.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Orders.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Orders.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Orders.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Orders.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Orders.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/orders",
  method: "GET",
  operationId: "order-list-orders",
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
      Simplify<MittwaldAPIV2.Paths.V2Orders.Post.Responses.$422.Content.ApplicationJson>,
      422,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Orders.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2TariffChanges.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2OrdersOrderId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdOrders.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdOrders.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2OrderPreviews.Post.Responses.$422.Content.ApplicationJson>,
      422,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2OrderPreviews.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2TariffChangePreviews.Post.Responses.$422.Content.ApplicationJson>,
      422,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2TariffChangePreviews.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
    Simplify<MittwaldAPIV2.Paths.V2PageInsights.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2PageInsights.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2PageInsights.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PageInsights.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PageInsights.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PageInsights.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PageInsights.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PageInsights.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/page-insights",
  method: "GET",
  operationId: "pageinsights-get-performance-data",
};

/** Get all data for a given strace. */
export const pageinsightsGetStraceData: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStracesStraceId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStracesStraceId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStracesStraceId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStracesStraceId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStracesStraceId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStracesStraceId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStracesStraceId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStracesStraceId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/straces/{straceId}",
  method: "GET",
  operationId: "pageinsights-get-strace-data",
};

/** List websites (specified as domain and path) from a project where performance data is available. */
export const pageinsightsListPerformanceDataForProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdPageInsights.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdPageInsights.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdPageInsights.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdPageInsights.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdPageInsights.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdPageInsights.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdPageInsights.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdPageInsights.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/page-insights",
  method: "GET",
  operationId: "pageinsights-list-performance-data-for-project",
};

/** Schedule a strace measurement for a single http request. */
export const pageinsightsScheduleStrace: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStraces.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStraces.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStraces.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStraces.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStraces.Post.Responses.$202.Content.ApplicationJson>,
      202,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStraces.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStraces.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStraces.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStraces.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStraces.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/straces",
  method: "POST",
  operationId: "pageinsights-schedule-strace",
};

/** Get a PasswordPolicy. */
export const passwordValidationGetPasswordPolicy: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2PasswordPoliciesPasswordPolicy.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2PasswordPoliciesPasswordPolicy.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2PasswordPoliciesPasswordPolicy.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PasswordPoliciesPasswordPolicy.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PasswordPoliciesPasswordPolicy.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PasswordPoliciesPasswordPolicy.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/password-policies/{passwordPolicy}",
  method: "GET",
  operationId: "password-validation-get-password-policy",
};

/** Accept a ProjectInvite. */
export const projectAcceptProjectInvite: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsAccept.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsAccept.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsAccept.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsAccept.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsAccept.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsAccept.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsAccept.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsAccept.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsAccept.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsAccept.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-invites/{projectInviteId}/actions/accept",
  method: "POST",
  operationId: "project-accept-project-invite",
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdInvites.Get.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Create a ProjectInvite. */
export const projectCreateProjectInvite: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdInvites.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdInvites.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdInvites.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdInvites.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdInvites.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdInvites.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdInvites.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdInvites.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdInvites.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/invites",
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
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdProjects.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdProjects.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdProjects.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsDecline.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsDecline.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsDecline.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsDecline.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsDecline.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsDecline.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-invites/{projectInviteId}/actions/decline",
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Delete.Responses.$429.Content.ApplicationJson>,
      429,
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
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-invites/{projectInviteId}",
  method: "GET",
  operationId: "project-get-project-invite",
};

/** Delete a ProjectInvite. */
export const projectDeleteProjectInvite: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-invites/{projectInviteId}",
  method: "DELETE",
  operationId: "project-delete-project-invite",
};

/** Get a ProjectMembership */
export const projectGetProjectMembership: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-memberships/{projectMembershipId}",
  method: "GET",
  operationId: "project-get-project-membership",
};

/** Delete a ProjectMembership. */
export const projectDeleteProjectMembership: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-memberships/{projectMembershipId}",
  method: "DELETE",
  operationId: "project-delete-project-membership",
};

/** Update a ProjectMembership. */
export const projectUpdateProjectMembership: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-memberships/{projectMembershipId}",
  method: "PATCH",
  operationId: "project-update-project-membership",
};

/** Get a Project. */
export const projectGetProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}",
  method: "GET",
  operationId: "project-get-project",
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Delete.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDirectories.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDirectories.Get.Responses.$502.Content.ApplicationJson>,
      502,
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
  path: "/v2/projects/{projectId}/filesystem-directories",
  method: "GET",
  operationId: "project-file-system-get-directories",
};

/** Get a Project directory filesystem usage. */
export const projectFileSystemGetDiskUsage: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDiskUsage.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDiskUsage.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDiskUsage.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDiskUsage.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDiskUsage.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDiskUsage.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDiskUsage.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDiskUsage.Get.Responses.$502.Content.ApplicationJson>,
      502,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDiskUsage.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDiskUsage.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/filesystem-disk-usage",
  method: "GET",
  operationId: "project-file-system-get-disk-usage",
};

/** Get a Project file's content. */
export const projectFileSystemGetFileContent: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFileContent.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFileContent.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFileContent.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFileContent.Get.Responses.$200.Content.ApplicationOctetStream>,
      200,
      "application/octet-stream"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFileContent.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFileContent.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFileContent.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFileContent.Get.Responses.$502.Content.ApplicationJson>,
      502,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFileContent.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFileContent.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/filesystem-file-content",
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdJwt.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdJwt.Get.Responses.$502.Content.ApplicationJson>,
      502,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFiles.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFiles.Get.Responses.$502.Content.ApplicationJson>,
      502,
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
  path: "/v2/projects/{projectId}/filesystem-files",
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectTokenInvite.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMembershipsSelf.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMembershipsSelf.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMembershipsSelf.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ServersServerId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMemberships.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvites.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvites.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvites.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectMemberships.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMemberships.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectMemberships.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2Projects.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Projects.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2Servers.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsResend.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsResend.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsResend.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsResend.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsResend.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsResend.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectInvitesProjectInviteIdActionsResend.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/project-invites/{projectInviteId}/actions/resend",
  method: "POST",
  operationId: "project-resend-project-invite-mail",
};

/** Update a Project's description. */
export const projectUpdateProjectDescription: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDescription.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDescription.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDescription.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDescription.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDescription.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDescription.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDescription.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/description",
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
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdDescription.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdDescription.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdDescription.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdDescription.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdDescription.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/servers/{serverId}/description",
  method: "PATCH",
  operationId: "project-update-server-description",
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
      Simplify<MittwaldAPIV2.Paths.V2LegacyTariffChange.Post.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Relocate an external Project to mittwald. */
export const relocationCreateRelocation: OpenAPIOperation<
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
      Simplify<MittwaldAPIV2.Paths.V2Relocation.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
  operationId: "relocation-create-relocation",
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSftpUsers.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSftpUsers.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSftpUsers.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSftpUsers.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSftpUsers.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
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
      Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshUsers.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshUsers.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshUsers.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshUsers.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshUsers.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
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
    Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2SshUsersSshUserId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/ssh-users/{sshUserId}",
  method: "PATCH",
  operationId: "ssh-user-update-ssh-user",
};

/** Check the replacement of a Certificate. */
export const sslCheckReplaceCertificate: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateIdActionsCheckReplaceCertificate.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateIdActionsCheckReplaceCertificate.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateIdActionsCheckReplaceCertificate.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateIdActionsCheckReplaceCertificate.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateIdActionsCheckReplaceCertificate.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateIdActionsCheckReplaceCertificate.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateIdActionsCheckReplaceCertificate.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateIdActionsCheckReplaceCertificate.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/certificates/{certificateId}/actions/check-replace-certificate",
  method: "POST",
  operationId: "ssl-check-replace-certificate",
};

/** List CertificateRequests belonging to a Project or an Ingress. */
export const sslListCertificateRequests: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CertificateRequests.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CertificateRequests.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CertificateRequests.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateRequests.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateRequests.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateRequests.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateRequests.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/certificate-requests",
  method: "GET",
  operationId: "ssl-list-certificate-requests",
};

/** Create a CertificateRequest. */
export const sslCreateCertificateRequest: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CertificateRequests.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CertificateRequests.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CertificateRequests.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CertificateRequests.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateRequests.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateRequests.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateRequests.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateRequests.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateRequests.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/certificate-requests",
  method: "POST",
  operationId: "ssl-create-certificate-request",
};

/** Delete a CertificateRequest. */
export const sslDeleteCertificateRequest: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CertificateRequestCertificateRequestId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CertificateRequestCertificateRequestId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CertificateRequestCertificateRequestId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateRequestCertificateRequestId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateRequestCertificateRequestId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateRequestCertificateRequestId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateRequestCertificateRequestId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/certificate-request/{certificateRequestId}",
  method: "DELETE",
  operationId: "ssl-delete-certificate-request",
};

/** Delete a Certificate. */
export const sslDeleteCertificate: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CertificateCertificateId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CertificateCertificateId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CertificateCertificateId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateCertificateId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateCertificateId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateCertificateId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateCertificateId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/certificate/{certificateId}",
  method: "DELETE",
  operationId: "ssl-delete-certificate",
};

/** Get a CertificateRequest. */
export const sslGetCertificateRequest: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CertificateRequestsCertificateRequestId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CertificateRequestsCertificateRequestId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CertificateRequestsCertificateRequestId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateRequestsCertificateRequestId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateRequestsCertificateRequestId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateRequestsCertificateRequestId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificateRequestsCertificateRequestId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/certificate-requests/{certificateRequestId}",
  method: "GET",
  operationId: "ssl-get-certificate-request",
};

/** Get a Certificate. */
export const sslGetCertificate: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/certificates/{certificateId}",
  method: "GET",
  operationId: "ssl-get-certificate",
};

/** Update a Certificate. */
export const sslReplaceCertificate: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateId.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateId.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateId.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2CertificatesCertificateId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/certificates/{certificateId}",
  method: "PUT",
  operationId: "ssl-replace-certificate",
};

/** List Certificates belonging to a Project or an Ingress. */
export const sslListCertificates: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Certificates.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Certificates.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Certificates.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Certificates.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Certificates.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Certificates.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Certificates.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/certificates",
  method: "GET",
  operationId: "ssl-list-certificates",
};

/** Get storage space Statistics belonging to a Project. */
export const storagespaceGetProjectStatistics: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStorageSpaceStatistics.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStorageSpaceStatistics.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStorageSpaceStatistics.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStorageSpaceStatistics.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStorageSpaceStatistics.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStorageSpaceStatistics.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStorageSpaceStatistics.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStorageSpaceStatistics.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStorageSpaceStatistics.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStorageSpaceStatistics.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/storage-space-statistics",
  method: "GET",
  operationId: "storagespace-get-project-statistics",
};

/** Get storage space Statistics belonging to a Server. */
export const storagespaceGetServerStatistics: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdStorageSpaceStatistics.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdStorageSpaceStatistics.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdStorageSpaceStatistics.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdStorageSpaceStatistics.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdStorageSpaceStatistics.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdStorageSpaceStatistics.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdStorageSpaceStatistics.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdStorageSpaceStatistics.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdStorageSpaceStatistics.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdStorageSpaceStatistics.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/servers/{serverId}/storage-space-statistics",
  method: "GET",
  operationId: "storagespace-get-server-statistics",
};

/** Update a Project's storage space notification threshold. */
export const storagespaceReplaceProjectNotificationThreshold: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStorageSpaceNotificationThreshold.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStorageSpaceNotificationThreshold.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStorageSpaceNotificationThreshold.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStorageSpaceNotificationThreshold.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStorageSpaceNotificationThreshold.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStorageSpaceNotificationThreshold.Put.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStorageSpaceNotificationThreshold.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStorageSpaceNotificationThreshold.Put.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdStorageSpaceNotificationThreshold.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/storage-space-notification-threshold",
  method: "PUT",
  operationId: "storagespace-replace-project-notification-threshold",
};

/** Update a Server's storage space notification threshold. */
export const storagespaceReplaceServerNotificationThreshold: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdStorageSpaceNotificationThreshold.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdStorageSpaceNotificationThreshold.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdStorageSpaceNotificationThreshold.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdStorageSpaceNotificationThreshold.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdStorageSpaceNotificationThreshold.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdStorageSpaceNotificationThreshold.Put.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdStorageSpaceNotificationThreshold.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdStorageSpaceNotificationThreshold.Put.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ServersServerIdStorageSpaceNotificationThreshold.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/servers/{serverId}/storage-space-notification-threshold",
  method: "PUT",
  operationId: "storagespace-replace-server-notification-threshold",
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
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhone.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhone.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhone.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdPhone.Delete.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2AuthenticateMfa.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2Authenticate.Post.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Authenticate an user with an access token retrieval key. */
export const userAuthenticateWithAccessTokenRetrievalKey: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2AuthenticateTokenRetrievalKey.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2AuthenticateTokenRetrievalKey.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AuthenticateTokenRetrievalKey.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2AuthenticateTokenRetrievalKey.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AuthenticateTokenRetrievalKey.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AuthenticateTokenRetrievalKey.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AuthenticateTokenRetrievalKey.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2AuthenticateTokenRetrievalKey.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/authenticate-token-retrieval-key",
  method: "POST",
  operationId: "user-authenticate-with-access-token-retrieval-key",
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmail.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmail.Put.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPassword.Put.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsToken.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Put.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsMfa.Delete.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPasswordConfirmReset.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokens.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokens.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfFeedback.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeys.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeys.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeys.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeys.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Put.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Put.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelf.Delete.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsPasswordUpdatedAt.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdSettings.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdSettings.Put.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Get poll settings for the specified user. */
export const userGetPollStatus: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2PollSettingsUserId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2PollSettingsUserId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2PollSettingsUserId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PollSettingsUserId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PollSettingsUserId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PollSettingsUserId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PollSettingsUserId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PollSettingsUserId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/poll-settings/{userId}",
  method: "GET",
  operationId: "user-get-poll-status",
};

/** Store new or update poll settings. */
export const userPostPollStatus: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2PollSettingsUserId.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2PollSettingsUserId.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2PollSettingsUserId.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2PollSettingsUserId.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PollSettingsUserId.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PollSettingsUserId.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PollSettingsUserId.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PollSettingsUserId.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2PollSettingsUserId.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/poll-settings/{userId}",
  method: "POST",
  operationId: "user-post-poll-status",
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessionsTokenId.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessionsTokenId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersUserId.Put.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsInitMfa.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsActionsInitPasswordReset.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsActionsInitPasswordReset.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsActionsInitPasswordReset.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdFeedback.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessions.Get.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Refresh a session. */
export const userRefreshSession: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessions.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessions.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessions.Put.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessions.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessions.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessions.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessions.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessions.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/self/sessions",
  method: "PUT",
  operationId: "user-refresh-session",
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfSessions.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
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
      Simplify<MittwaldAPIV2.Paths.V2Logout.Put.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Obtain authorization from the resource owner. */
export const userOauthGetAuthorization: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Oauth2Authorize.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Oauth2Authorize.Get.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Oauth2Authorize.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Oauth2Authorize.Get.Responses.$302.Content.Empty>,
      302,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Oauth2Authorize.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Oauth2Authorize.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Oauth2Authorize.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/oauth2/authorize",
  method: "GET",
  operationId: "user-oauth-get-authorization",
};

/** Retrieve Access Token from Authorization Code. */
export const userOauthRetrieveAccessToken: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2Oauth2Token.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2Oauth2Token.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Oauth2Token.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2Oauth2Token.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Oauth2Token.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Oauth2Token.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Oauth2Token.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2Oauth2Token.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/oauth2/token",
  method: "POST",
  operationId: "user-oauth-retrieve-access-token",
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
      Simplify<MittwaldAPIV2.Paths.V2Register.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdAvatar.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdAvatar.Delete.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsResendEmail.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsSupportCode.Get.Responses.$429.Content.ApplicationJson>,
      429,
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
      Simplify<MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsVerifyEmail.Post.Responses.$429.Content.ApplicationJson>,
      429,
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
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdActionsVerifyPhone.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdActionsVerifyPhone.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdActionsVerifyPhone.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2UsersUserIdActionsVerifyPhone.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdActionsVerifyPhone.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdActionsVerifyPhone.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdActionsVerifyPhone.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdActionsVerifyPhone.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdActionsVerifyPhone.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2UsersUserIdActionsVerifyPhone.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/users/{userId}/actions/verify-phone",
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
      Simplify<MittwaldAPIV2.Paths.V2VerifyRegistration.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
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
      Simplify<MittwaldAPIV2.Paths.V2VerifyRegistration.Post.Responses.$429.Content.ApplicationJson>,
      429,
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

/** Check if an email is from mittwald. */
export const verificationDetectPhishingEmail: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ActionsDetectPhishingEmail.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ActionsDetectPhishingEmail.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ActionsDetectPhishingEmail.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ActionsDetectPhishingEmail.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsDetectPhishingEmail.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsDetectPhishingEmail.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsDetectPhishingEmail.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsDetectPhishingEmail.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/actions/detect-phishing-email",
  method: "POST",
  operationId: "verification-detect-phishing-email",
};

/** Check if an address exists. */
export const verificationVerifyAddress: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ActionsVerifyAddress.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ActionsVerifyAddress.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ActionsVerifyAddress.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ActionsVerifyAddress.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsVerifyAddress.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsVerifyAddress.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsVerifyAddress.Post.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsVerifyAddress.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/actions/verify-address",
  method: "POST",
  operationId: "verification-verify-address",
};

/** Check if a company exists. */
export const verificationVerifyCompany: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV2.Paths.V2ActionsVerifyCompany.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ActionsVerifyCompany.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ActionsVerifyCompany.Post.Parameters.Query>,
    Simplify<MittwaldAPIV2.Paths.V2ActionsVerifyCompany.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsVerifyCompany.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsVerifyCompany.Post.Responses.$412.Content.Empty>,
      412,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsVerifyCompany.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsVerifyCompany.Post.Responses.$500.Content.Empty>,
      500,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV2.Paths.V2ActionsVerifyCompany.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v2/actions/verify-company",
  method: "POST",
  operationId: "verification-verify-company",
};
