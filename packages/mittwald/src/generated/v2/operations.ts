/* eslint-disable */
/* prettier-ignore */

/**
* This file is auto-generated with openapi2ts (@mittwald/openapi-to-typescript)
*/

import { MittwaldApiV2 } from "./types";
import { Simplify } from "@mittwald/api-client-commons/dist/type-fest";
import { Request } from "@mittwald/api-client-commons/dist/types/Request";
import { Response } from "@mittwald/api-client-commons/dist/types/Response";
import { OpenAPIOperation } from "@mittwald/api-client-commons/dist/types/OpenAPIOperation";

export const appGetAppV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Apps_AppId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Apps_AppId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Apps_AppId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Apps_AppId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Apps_AppId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/apps/{appId}",
  method: "GET",
  operationId: "appGetAppV2",
};

export const appGetAppsV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Apps.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Apps.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Apps.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/apps",
  method: "GET",
  operationId: "appGetAppsV2",
};

export const appinstallationExecuteActionV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Actions_Action.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Actions_Action.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Actions_Action.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Actions_Action.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Actions_Action.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}/actions/{action}",
  method: "POST",
  operationId: "appinstallationExecuteActionV2",
};

export const appinstallationGetAppinstallationV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}",
  method: "GET",
  operationId: "appinstallationGetAppinstallationV2",
};

export const appinstallationPatchAppinstallationV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Patch.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Patch.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}",
  method: "PATCH",
  operationId: "appinstallationPatchAppinstallationV2",
};

export const appinstallationUninstallAppinstallationV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}",
  method: "DELETE",
  operationId: "appinstallationUninstallAppinstallationV2",
};

export const appinstallationGetAppinstallationsV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Appinstallations.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Appinstallations.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Appinstallations.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Appinstallations.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/appinstallations",
  method: "GET",
  operationId: "appinstallationGetAppinstallationsV2",
};

export const appinstallationRequestAppinstallationV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Appinstallations.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Appinstallations.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Appinstallations.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Appinstallations.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Appinstallations.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Appinstallations.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/appinstallations",
  method: "POST",
  operationId: "appinstallationRequestAppinstallationV2",
};

export const appinstallationLinkDatabaseV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}/databases",
  method: "PUT",
  operationId: "appinstallationLinkDatabaseV2",
};

export const appinstallationRetrieveStatusV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Status.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Status.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Status.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Status.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Status.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}/status",
  method: "GET",
  operationId: "appinstallationRetrieveStatusV2",
};

export const appinstallationSetDatabaseUsersV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases_DatabaseId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases_DatabaseId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases_DatabaseId.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases_DatabaseId.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases_DatabaseId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}/databases/{databaseId}",
  method: "PUT",
  operationId: "appinstallationSetDatabaseUsersV2",
};

export const appinstallationUnlinkDatabaseV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases_DatabaseId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases_DatabaseId.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases_DatabaseId.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases_DatabaseId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}/databases/{databaseId}",
  method: "DELETE",
  operationId: "appinstallationUnlinkDatabaseV2",
};

export const appinstallationUpdateStatusV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_Id_Actions_Update_Status.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_Id_Actions_Update_Status.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_Id_Actions_Update_Status.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_Id_Actions_Update_Status.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_Id_Actions_Update_Status.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{id}/actions/update-status",
  method: "POST",
  operationId: "appinstallationUpdateStatusV2",
};

export const appversionGetAppversionV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_App_AppId_Versions_AppVersionId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_App_AppId_Versions_AppVersionId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_App_AppId_Versions_AppVersionId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_App_AppId_Versions_AppVersionId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_App_AppId_Versions_AppVersionId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/app/{appId}/versions/{appVersionId}",
  method: "GET",
  operationId: "appversionGetAppversionV2",
};

export const appversionGetAppversionsV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_App_AppId_Versions.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_App_AppId_Versions.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_App_AppId_Versions.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_App_AppId_Versions.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/app/{appId}/versions",
  method: "GET",
  operationId: "appversionGetAppversionsV2",
};

export const articleServiceGetArticleV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Articles_ArticleId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Articles_ArticleId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Articles_ArticleId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Articles_ArticleId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Articles_ArticleId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/articles/{articleId}",
  method: "GET",
  operationId: "articleServiceGetArticleV2",
};

export const articleServiceGetOrderableArticleV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Articles_ArticleId_Orderable.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Articles_ArticleId_Orderable.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Articles_ArticleId_Orderable.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Articles_ArticleId_Orderable.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Articles_ArticleId_Orderable.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/articles/{articleId}/orderable",
  method: "GET",
  operationId: "articleServiceGetOrderableArticleV2",
};

export const articleServiceListArticlesV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Articles.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Articles.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Articles.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/articles",
  method: "GET",
  operationId: "articleServiceListArticlesV2",
};

export const articleServiceListOrderableArticlesV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Articles_Orderable.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Articles_Orderable.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Articles_Orderable.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/articles/orderable",
  method: "GET",
  operationId: "articleServiceListOrderableArticlesV2",
};

export const backupServiceCreateProjectBackup: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Projectbackups.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Projectbackups.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Projectbackups.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Projectbackups.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Projectbackups.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Projectbackups.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Projectbackups.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/projectbackups",
  method: "POST",
  operationId: "backupServiceCreateProjectBackup",
};

export const backupServiceListProjectBackups: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Projectbackups.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Projectbackups.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Projectbackups.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Projectbackups.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/projectbackups",
  method: "GET",
  operationId: "backupServiceListProjectBackups",
};

export const backupServiceCreateProjectBackupSchedule: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Schedules.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Schedules.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Schedules.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Schedules.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Schedules.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Schedules.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Schedules.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/schedules",
  method: "POST",
  operationId: "backupServiceCreateProjectBackupSchedule",
};

export const backupServiceListProjectBackupSchedules: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Schedules.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Schedules.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Schedules.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Schedules.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/schedules",
  method: "GET",
  operationId: "backupServiceListProjectBackupSchedules",
};

export const backupServiceDeleteProjectBackup: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projectbackups_BackupId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projectbackups_BackupId.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Projectbackups_BackupId.Delete.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projectbackups_BackupId.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projectbackups_BackupId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projectbackups/{backupId}",
  method: "DELETE",
  operationId: "backupServiceDeleteProjectBackup",
};

export const backupServiceGetProjectBackup: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projectbackups_BackupId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projectbackups_BackupId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projectbackups_BackupId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projectbackups_BackupId.Get.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projectbackups_BackupId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projectbackups_BackupId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projectbackups/{backupId}",
  method: "GET",
  operationId: "backupServiceGetProjectBackup",
};

export const backupServiceDeleteProjectBackupExport: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projectbackups_BackupId_Export.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projectbackups_BackupId_Export.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Projectbackups_BackupId_Export.Delete.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projectbackups_BackupId_Export.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projectbackups_BackupId_Export.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projectbackups/{backupId}/export",
  method: "DELETE",
  operationId: "backupServiceDeleteProjectBackupExport",
};

export const backupServiceRequestProjectBackupExport: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projectbackups_BackupId_Export.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projectbackups_BackupId_Export.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projectbackups_BackupId_Export.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Projectbackups_BackupId_Export.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projectbackups_BackupId_Export.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projectbackups_BackupId_Export.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projectbackups_BackupId_Export.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projectbackups/{backupId}/export",
  method: "POST",
  operationId: "backupServiceRequestProjectBackupExport",
};

export const backupServiceDeleteProjectBackupSchedule: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId.Delete.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/backupschedules/{scheduleId}",
  method: "DELETE",
  operationId: "backupServiceDeleteProjectBackupSchedule",
};

export const backupServiceGetProjectBackupSchedule: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId.Get.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/backupschedules/{scheduleId}",
  method: "GET",
  operationId: "backupServiceGetProjectBackupSchedule",
};

export const backupServicePatchBackupSchedule: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId.Patch.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId.Patch.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId.Patch.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId.Patch.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/backupschedules/{scheduleId}",
  method: "PATCH",
  operationId: "backupServicePatchBackupSchedule",
};

export const backupServicePutSystemBackupTtl: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId_Ttl.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId_Ttl.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId_Ttl.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId_Ttl.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId_Ttl.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId_Ttl.Put.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Backupschedules_ScheduleId_Ttl.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/backupschedules/{scheduleId}/ttl",
  method: "PUT",
  operationId: "backupServicePutSystemBackupTtl",
};

export const backupServiceSetProjectBackupDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projectbackups_BackupId_Description.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projectbackups_BackupId_Description.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projectbackups_BackupId_Description.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Projectbackups_BackupId_Description.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projectbackups_BackupId_Description.Put.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projectbackups_BackupId_Description.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projectbackups_BackupId_Description.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projectbackups/{backupId}/description",
  method: "PUT",
  operationId: "backupServiceSetProjectBackupDescription",
};

export const contractServiceBaseItemOfContract: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_BaseItem.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_BaseItem.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_BaseItem.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_BaseItem.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_BaseItem.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_BaseItem.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/baseItem",
  method: "GET",
  operationId: "contractServiceBaseItemOfContract",
};

export const contractServiceCancelContractItemTermination: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Delete.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Delete.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/termination",
  method: "DELETE",
  operationId: "contractServiceCancelContractItemTermination",
};

export const contractServiceTerminateContractItem: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/termination",
  method: "POST",
  operationId: "contractServiceTerminateContractItem",
};

export const contractServiceCancelContractTariffChange: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Tariff_Change.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Tariff_Change.Delete.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Tariff_Change.Delete.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Tariff_Change.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Tariff_Change.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Tariff_Change.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/tariff-change",
  method: "DELETE",
  operationId: "contractServiceCancelContractTariffChange",
};

export const contractServiceCancelContractTermination: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Delete.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Delete.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/termination",
  method: "DELETE",
  operationId: "contractServiceCancelContractTermination",
};

export const contractServiceTerminateContract: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/termination",
  method: "POST",
  operationId: "contractServiceTerminateContract",
};

export const contractServiceDetailOfContract: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}",
  method: "GET",
  operationId: "contractServiceDetailOfContract",
};

export const contractServiceDetailOfContractByAggregate: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts",
  method: "GET",
  operationId: "contractServiceDetailOfContractByAggregate",
};

export const contractServiceDetailOfContractDeprecated: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts_ContractId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts_ContractId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts_ContractId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts_ContractId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts_ContractId.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts_ContractId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/contracts/{contractId}",
  method: "GET",
  operationId: "contractServiceDetailOfContractDeprecated",
};

export const contractServiceDetailOfContractItem: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}",
  method: "GET",
  operationId: "contractServiceDetailOfContractItem",
};

export const contractServiceListContracts: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/contracts",
  method: "GET",
  operationId: "contractServiceListContracts",
};

export const contractServiceNextTerminationDateForItem: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Next_Termination_Date.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Next_Termination_Date.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Next_Termination_Date.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Next_Termination_Date.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Next_Termination_Date.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Next_Termination_Date.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/next-termination-date",
  method: "GET",
  operationId: "contractServiceNextTerminationDateForItem",
};

export const conversationServiceCreateConversationV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Conversations.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversations.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversations",
  method: "POST",
  operationId: "conversationServiceCreateConversationV2",
};

export const conversationServiceGetConversationsV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversations.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversations",
  method: "GET",
  operationId: "conversationServiceGetConversationsV2",
};

export const conversationServiceCreateMessageV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}/messages",
  method: "POST",
  operationId: "conversationServiceCreateMessageV2",
};

export const conversationServiceGetMessagesByConversationV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Get.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}/messages",
  method: "GET",
  operationId: "conversationServiceGetMessagesByConversationV2",
};

export const conversationServiceGetCategoriesV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Conversation_Categories.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversation_Categories.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversation_Categories.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversation-categories",
  method: "GET",
  operationId: "conversationServiceGetCategoriesV2",
};

export const conversationServiceGetCategoryV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Conversation_Categories_CategoryId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Conversation_Categories_CategoryId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversation_Categories_CategoryId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversation_Categories_CategoryId.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversation_Categories_CategoryId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversation_Categories_CategoryId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversation-categories/{categoryId}",
  method: "GET",
  operationId: "conversationServiceGetCategoryV2",
};

export const conversationServiceGetConversationV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId.Get.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}",
  method: "GET",
  operationId: "conversationServiceGetConversationV2",
};

export const conversationServiceUpdateConversationV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId.Put.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}",
  method: "PUT",
  operationId: "conversationServiceUpdateConversationV2",
};

export const conversationServiceRequestFileUploadV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Files.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Files.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Files.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Files.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Files.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Files.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}/files",
  method: "POST",
  operationId: "conversationServiceRequestFileUploadV2",
};

export const conversationServiceSetConversationStatusV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Status.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Status.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Status.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Status.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Status.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Status.Put.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Status.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Status.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}/status",
  method: "PUT",
  operationId: "conversationServiceSetConversationStatusV2",
};

export const conversationServiceUpdateMessageV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages_MessageId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages_MessageId.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages_MessageId.Patch.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages_MessageId.Patch.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages_MessageId.Patch.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages_MessageId.Patch.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages_MessageId.Patch.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages_MessageId.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}/messages/{messageId}",
  method: "PATCH",
  operationId: "conversationServiceUpdateMessageV2",
};

export const cronjobServiceCronjobAbortExecution: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions_ExecutionId_Abort.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions_ExecutionId_Abort.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions_ExecutionId_Abort.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions_ExecutionId_Abort.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions_ExecutionId_Abort.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}/executions/{executionId}/abort",
  method: "POST",
  operationId: "cronjobServiceCronjobAbortExecution",
};

export const cronjobServiceCronjobAddAppid: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_Cronjobs_CronjobId_Appid.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_Cronjobs_CronjobId_Appid.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_Cronjobs_CronjobId_Appid.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_Cronjobs_CronjobId_Appid.Put.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_Cronjobs_CronjobId_Appid.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_Cronjobs_CronjobId_Appid.Put.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_Cronjobs_CronjobId_Appid.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/cronjobs/{cronjobId}/appid",
  method: "PUT",
  operationId: "cronjobServiceCronjobAddAppid",
};

export const cronjobServiceCronjobCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Post.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/cronjobs",
  method: "POST",
  operationId: "cronjobServiceCronjobCreate",
};

export const cronjobServiceCronjobList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/cronjobs",
  method: "GET",
  operationId: "cronjobServiceCronjobList",
};

export const cronjobServiceCronjobCreateExecution: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions.Post.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}/executions",
  method: "POST",
  operationId: "cronjobServiceCronjobCreateExecution",
};

export const cronjobServiceCronjobListExecutions: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}/executions",
  method: "GET",
  operationId: "cronjobServiceCronjobListExecutions",
};

export const cronjobServiceCronjobDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Delete.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}",
  method: "DELETE",
  operationId: "cronjobServiceCronjobDelete",
};

export const cronjobServiceCronjobGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}",
  method: "GET",
  operationId: "cronjobServiceCronjobGetSpecific",
};

export const cronjobServiceCronjobPatch: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Patch.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Patch.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Patch.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Patch.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Patch.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}",
  method: "PATCH",
  operationId: "cronjobServiceCronjobPatch",
};

export const cronjobServiceCronjobGetSpecificExecution: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions_ExecutionId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions_ExecutionId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions_ExecutionId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions_ExecutionId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions_ExecutionId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}/executions/{executionId}",
  method: "GET",
  operationId: "cronjobServiceCronjobGetSpecificExecution",
};

export const customerServiceAvatarRemove: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Delete.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/avatar",
  method: "DELETE",
  operationId: "customerServiceAvatarRemove",
};

export const customerServiceAvatarRequestUpload: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/avatar",
  method: "POST",
  operationId: "customerServiceAvatarRequestUpload",
};

export const customerServiceCreateCategory: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customercategories.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customercategories.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customercategories",
  method: "POST",
  operationId: "customerServiceCreateCategory",
};

export const customerServiceListOfCustomerCategories: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customercategories.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customercategories",
  method: "GET",
  operationId: "customerServiceListOfCustomerCategories",
};

export const customerServiceCreateCustomer: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customers.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers",
  method: "POST",
  operationId: "customerServiceCreateCustomer",
};

export const customerServiceListCustomers: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers",
  method: "GET",
  operationId: "customerServiceListCustomers",
};

export const customerServiceCreateNote: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/notes",
  method: "POST",
  operationId: "customerServiceCreateNote",
};

export const customerServiceListOfNotes: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/notes",
  method: "GET",
  operationId: "customerServiceListOfNotes",
};

export const customerServiceCustomerIsLegallyCompetent: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Legally_Competent.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Legally_Competent.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Legally_Competent.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Legally_Competent.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Legally_Competent.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Legally_Competent.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/legally-competent",
  method: "GET",
  operationId: "customerServiceCustomerIsLegallyCompetent",
};

export const customerServiceDeleteCategory: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Delete.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Delete.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customercategories/{categoryId}",
  method: "DELETE",
  operationId: "customerServiceDeleteCategory",
};

export const customerServiceDetailOfCustomerCategory: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customercategories/{categoryId}",
  method: "GET",
  operationId: "customerServiceDetailOfCustomerCategory",
};

export const customerServiceUpdateCategory: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customercategories/{categoryId}",
  method: "PUT",
  operationId: "customerServiceUpdateCategory",
};

export const customerServiceDeleteCustomer: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId.Delete.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId.Delete.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}",
  method: "DELETE",
  operationId: "customerServiceDeleteCustomer",
};

export const customerServiceDetailsOfCustomer: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}",
  method: "GET",
  operationId: "customerServiceDetailsOfCustomer",
};

export const customerServiceUpdateCustomer: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}",
  method: "PUT",
  operationId: "customerServiceUpdateCustomer",
};

export const customerServiceDeleteNote: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Delete.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Delete.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/notes/{noteId}",
  method: "DELETE",
  operationId: "customerServiceDeleteNote",
};

export const customerServiceUpdateNote: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/notes/{noteId}",
  method: "POST",
  operationId: "customerServiceUpdateNote",
};

export const databaseServiceMysqlCharsetList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Charsets_Version.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Charsets_Version.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Charsets_Version.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Charsets_Version.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Charsets_Version.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Charsets_Version.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-charsets/{version}",
  method: "GET",
  operationId: "databaseServiceMysqlCharsetList",
};

export const databaseServiceMysqlCharsetListAll: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Charsets.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Charsets.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Charsets.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Charsets.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Charsets.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-charsets",
  method: "GET",
  operationId: "databaseServiceMysqlCharsetListAll",
};

export const databaseServiceMysqlDatabaseCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/database/mysql-databases",
  method: "POST",
  operationId: "databaseServiceMysqlDatabaseCreate",
};

export const databaseServiceMysqlDatabaseList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/database/mysql-databases",
  method: "GET",
  operationId: "databaseServiceMysqlDatabaseList",
};

export const databaseServiceMysqlDatabaseDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Delete.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Delete.Responses.$503.Content.Application_Json,
      503,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{id}",
  method: "DELETE",
  operationId: "databaseServiceMysqlDatabaseDelete",
};

export const databaseServiceMysqlDatabaseGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{id}",
  method: "GET",
  operationId: "databaseServiceMysqlDatabaseGetSpecific",
};

export const databaseServiceMysqlDatabaseUpdateDefaultCharset: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Default_Charset.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Default_Charset.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Default_Charset.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Default_Charset.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Default_Charset.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Default_Charset.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{id}/default-charset",
  method: "PUT",
  operationId: "databaseServiceMysqlDatabaseUpdateDefaultCharset",
};

export const databaseServiceMysqlDatabaseUpdateDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Description.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Description.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Description.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Description.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Description.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Description.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{id}/description",
  method: "PUT",
  operationId: "databaseServiceMysqlDatabaseUpdateDescription",
};

export const databaseServiceMysqlDatabaseWithUserCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases_With_User.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases_With_User.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases_With_User.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases_With_User.Post.Responses.$202.Content.Application_Json,
      202,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases_With_User.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases_With_User.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases_With_User.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/database/mysql-databases-with-user",
  method: "POST",
  operationId: "databaseServiceMysqlDatabaseWithUserCreate",
};

export const databaseServiceMysqlUserCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{databaseId}/users",
  method: "POST",
  operationId: "databaseServiceMysqlUserCreate",
};

export const databaseServiceMysqlUserList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{databaseId}/users",
  method: "GET",
  operationId: "databaseServiceMysqlUserList",
};

export const databaseServiceMysqlUserDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/users/{userId}",
  method: "DELETE",
  operationId: "databaseServiceMysqlUserDelete",
};

export const databaseServiceMysqlUserGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/users/{userId}",
  method: "GET",
  operationId: "databaseServiceMysqlUserGetSpecific",
};

export const databaseServiceMysqlUserUpdate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/users/{userId}",
  method: "PUT",
  operationId: "databaseServiceMysqlUserUpdate",
};

export const databaseServiceMysqlUserDisable: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Disable.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Disable.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Disable.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Disable.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Disable.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/users/{userId}/disable",
  method: "PUT",
  operationId: "databaseServiceMysqlUserDisable",
};

export const databaseServiceMysqlUserEnable: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Enable.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Enable.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Enable.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Enable.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Enable.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/users/{userId}/enable",
  method: "PUT",
  operationId: "databaseServiceMysqlUserEnable",
};

export const databaseServiceMysqlUserGetPhpMyAdminUrl: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Php_My_Admin.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Php_My_Admin.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Php_My_Admin.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Php_My_Admin.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Php_My_Admin.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Php_My_Admin.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/users/{userId}/php-my-admin",
  method: "GET",
  operationId: "databaseServiceMysqlUserGetPhpMyAdminUrl",
};

export const databaseServiceMysqlUserSetPassword: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Password.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Password.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Password.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Password.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Password.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Password.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/users/{userId}/password",
  method: "PUT",
  operationId: "databaseServiceMysqlUserSetPassword",
};

export const databaseServiceMysqlVersionList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Versions.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Versions.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Versions.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Versions.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Versions.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Versions.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/database/mysql-versions",
  method: "GET",
  operationId: "databaseServiceMysqlVersionList",
};

export const databaseServiceRedisDatabaseCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/database/redis-databases",
  method: "POST",
  operationId: "databaseServiceRedisDatabaseCreate",
};

export const databaseServiceRedisDatabaseList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/database/redis-databases",
  method: "GET",
  operationId: "databaseServiceRedisDatabaseList",
};

export const databaseServiceRedisDatabaseDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Redis_Databases_Id.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Redis_Databases_Id.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id.Delete.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id.Delete.Responses.$503.Content.Application_Json,
      503,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/redis-databases/{id}",
  method: "DELETE",
  operationId: "databaseServiceRedisDatabaseDelete",
};

export const databaseServiceRedisDatabaseGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Redis_Databases_Id.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Redis_Databases_Id.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/redis-databases/{id}",
  method: "GET",
  operationId: "databaseServiceRedisDatabaseGetSpecific",
};

export const databaseServiceRedisDatabaseUpdateDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Redis_Databases_Id_Description.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Redis_Databases_Id_Description.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Redis_Databases_Id_Description.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id_Description.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id_Description.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id_Description.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/redis-databases/{id}/description",
  method: "PUT",
  operationId: "databaseServiceRedisDatabaseUpdateDescription",
};

export const databaseServiceRedisVersionList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Versions.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Versions.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Versions.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Versions.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Versions.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Versions.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/database/redis-versions",
  method: "GET",
  operationId: "databaseServiceRedisVersionList",
};

export const dnsRecordASetCustom: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Custom.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Custom.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Custom.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Custom.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Custom.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/acombined/custom",
  method: "PUT",
  operationId: "dnsRecordASetCustom",
};

export const dnsRecordASetManagedByIngress: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Managed_Ingress.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Managed_Ingress.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Managed_Ingress.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Managed_Ingress.Post.Responses.$204.Content.Application_Json,
      204,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Managed_Ingress.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Managed_Ingress.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/acombined/managed/ingress",
  method: "POST",
  operationId: "dnsRecordASetManagedByIngress",
};

export const dnsRecordCnameSet: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Cname.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Cname.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Cname.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Cname.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Cname.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/cname",
  method: "PUT",
  operationId: "dnsRecordCnameSet",
};

export const dnsRecordMxSetCustom: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Mx_Custom.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Mx_Custom.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Mx_Custom.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Mx_Custom.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Mx_Custom.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/mx/custom",
  method: "PUT",
  operationId: "dnsRecordMxSetCustom",
};

export const dnsRecordMxSetManaged: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Mx_Managed.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Mx_Managed.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Mx_Managed.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Mx_Managed.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Mx_Managed.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/mx/managed",
  method: "POST",
  operationId: "dnsRecordMxSetManaged",
};

export const dnsRecordTxtSet: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Txt.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Txt.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Txt.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Txt.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Txt.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/txt",
  method: "PUT",
  operationId: "dnsRecordTxtSet",
};

export const dnsZoneGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}",
  method: "GET",
  operationId: "dnsZoneGetSpecific",
};

export const dnsZonesForProjectV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Dns_Zones.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Dns_Zones.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Dns_Zones.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Dns_Zones.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Dns_Zones.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/dns/zones",
  method: "GET",
  operationId: "dnsZonesForProjectV2",
};

export const domainServiceAbortDeclareProcessV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/declarations",
  method: "DELETE",
  operationId: "domainServiceAbortDeclareProcessV2",
};

export const domainServiceChangeOwnercOfDomainV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Handles_Ownerc.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Handles_Ownerc.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Handles_Ownerc.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Handles_Ownerc.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Handles_Ownerc.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Handles_Ownerc.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Handles_Ownerc.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/handles/ownerc",
  method: "PUT",
  operationId: "domainServiceChangeOwnercOfDomainV2",
};

export const domainServiceChangeProjectOfDomainV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_ProjectId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_ProjectId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_ProjectId.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_ProjectId.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_ProjectId.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_ProjectId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/projectId",
  method: "PUT",
  operationId: "domainServiceChangeProjectOfDomainV2",
};

export const domainServiceCheckDomainAvailabilityV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Domains.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Domains.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Domains.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains",
  method: "POST",
  operationId: "domainServiceCheckDomainAvailabilityV2",
};

export const domainServiceCreateAuthcodeForDomainV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/actions/create-authcode",
  method: "POST",
  operationId: "domainServiceCreateAuthcodeForDomainV2",
};

export const domainServiceCreateAuthcode2ForDomainV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode2.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode2.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode2.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode2.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode2.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/actions/create-authcode2",
  method: "POST",
  operationId: "domainServiceCreateAuthcode2ForDomainV2",
};

export const domainServiceDeclareNameserversV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Nameservers.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Nameservers.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Nameservers.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Nameservers.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Nameservers.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Nameservers.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/nameservers",
  method: "PUT",
  operationId: "domainServiceDeclareNameserversV2",
};

export const domainServiceDeclareProcessChangeAuthcodeV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Authcode.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Authcode.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Authcode.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Authcode.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Authcode.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Authcode.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Authcode.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/declarations/authcode",
  method: "PUT",
  operationId: "domainServiceDeclareProcessChangeAuthcodeV2",
};

export const domainServiceDeclareProcessChangeHandlesV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Handles.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Handles.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Handles.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Handles.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Handles.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Handles.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Handles.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/declarations/handles",
  method: "PUT",
  operationId: "domainServiceDeclareProcessChangeHandlesV2",
};

export const domainServiceDeleteDomainV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId.Delete.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId.Delete.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId.Delete.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}",
  method: "DELETE",
  operationId: "domainServiceDeleteDomainV2",
};

export const domainServiceGetDomainV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}",
  method: "GET",
  operationId: "domainServiceGetDomainV2",
};

export const domainServiceGetHandleFieldsV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_Handle_Schema_DomainName.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_Handle_Schema_DomainName.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Domains_Handle_Schema_DomainName.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_Handle_Schema_DomainName.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/handle-schema/{domainName}",
  method: "GET",
  operationId: "domainServiceGetHandleFieldsV2",
};

export const domainServiceGetSpecificDomainOwnershipV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domain-ownerships/{domainOwnershipId}",
  method: "GET",
  operationId: "domainServiceGetSpecificDomainOwnershipV2",
};

export const domainServiceVerifyDomainOwnershipV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domain-ownerships/{domainOwnershipId}",
  method: "POST",
  operationId: "domainServiceVerifyDomainOwnershipV2",
};

export const domainServiceGetToplevelDomainV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Toplevel_Domains_Tld.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Toplevel_Domains_Tld.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Toplevel_Domains_Tld.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Toplevel_Domains_Tld.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Toplevel_Domains_Tld.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Toplevel_Domains_Tld.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/toplevel-domains/{tld}",
  method: "GET",
  operationId: "domainServiceGetToplevelDomainV2",
};

export const domainServiceListDomainOwnershipsV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Domain_Ownerships.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Domain_Ownerships.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Domain_Ownerships.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Domain_Ownerships.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Domain_Ownerships.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/domain-ownerships",
  method: "GET",
  operationId: "domainServiceListDomainOwnershipsV2",
};

export const domainServiceListDomainsV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Domains.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Domains.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Domains.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Domains.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Domains.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/domains",
  method: "GET",
  operationId: "domainServiceListDomainsV2",
};

export const domainServiceListToplevelDomainsV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Toplevel_Domains.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Toplevel_Domains.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Toplevel_Domains.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Toplevel_Domains.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/toplevel-domains",
  method: "GET",
  operationId: "domainServiceListToplevelDomainsV2",
};

export const domainServiceResendDomainEmailV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Resend_Email.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Resend_Email.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Resend_Email.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Resend_Email.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Resend_Email.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/actions/resend-email",
  method: "POST",
  operationId: "domainServiceResendDomainEmailV2",
};

export const fileServiceFileCreateLegacy: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Files_Token.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Files_Token.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Files_Token.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Files_Token.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files_Token.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files_Token.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files_Token.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/files/{token}",
  method: "POST",
  operationId: "fileServiceFileCreateLegacy",
};

export const fileServiceFileCreate: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Files.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Files.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/files",
  method: "POST",
  operationId: "fileServiceFileCreate",
};

export const fileServiceFileGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Files_Id.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Files_Id.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Files_Id.Get.Responses.$200.Content.Application_Octet_Stream,
      200,
      "application/octet-stream"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files_Id.Get.Responses.$200.Content.Base64,
      200,
      "base64"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files_Id.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files_Id.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files_Id.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/files/{id}",
  method: "GET",
  operationId: "fileServiceFileGet",
};

export const fileServiceFileGetMeta: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Files_Id_Meta.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Files_Id_Meta.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Files_Id_Meta.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files_Id_Meta.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files_Id_Meta.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files_Id_Meta.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/files/{id}/meta",
  method: "GET",
  operationId: "fileServiceFileGetMeta",
};

export const fileServiceFileGetTokenRules: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_File_Token_Rules_Token.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_File_Token_Rules_Token.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_File_Token_Rules_Token.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_File_Token_Rules_Token.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_File_Token_Rules_Token.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_File_Token_Rules_Token.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/file-token-rules/{token}",
  method: "GET",
  operationId: "fileServiceFileGetTokenRules",
};

export const ingressServiceCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Ingresses.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Ingresses.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/ingresses/",
  method: "POST",
  operationId: "ingressServiceCreate",
};

export const ingressServiceDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Ingresses_IngressId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Ingresses_IngressId.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/ingresses/{ingressId}",
  method: "DELETE",
  operationId: "ingressServiceDelete",
};

export const ingressServiceGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Ingresses_IngressId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Ingresses_IngressId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/ingresses/{ingressId}",
  method: "GET",
  operationId: "ingressServiceGetSpecific",
};

export const ingressServiceList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Ingresses.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/ingresses",
  method: "GET",
  operationId: "ingressServiceList",
};

export const ingressServicePaths: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Ingresses_IngressId_Paths.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Ingresses_IngressId_Paths.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Ingresses_IngressId_Paths.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId_Paths.Put.Responses.$204.Content.Application_Json,
      204,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId_Paths.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId_Paths.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/ingresses/{ingressId}/paths",
  method: "PUT",
  operationId: "ingressServicePaths",
};

export const ingressServiceTls: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Ingresses_IngressId_Tls.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Ingresses_IngressId_Tls.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Ingresses_IngressId_Tls.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId_Tls.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId_Tls.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId_Tls.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/ingresses/{ingressId}/tls",
  method: "PUT",
  operationId: "ingressServiceTls",
};

export const invoiceServiceDetailOfInvoice: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices_InvoiceId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices_InvoiceId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices_InvoiceId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices_InvoiceId.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices_InvoiceId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices_InvoiceId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/invoices/{invoiceId}",
  method: "GET",
  operationId: "invoiceServiceDetailOfInvoice",
};

export const invoiceServiceInvoiceSettings: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/invoicesettings",
  method: "GET",
  operationId: "invoiceServiceInvoiceSettings",
};

export const invoiceServiceUpdateInvoiceSettings: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/invoicesettings",
  method: "PUT",
  operationId: "invoiceServiceUpdateInvoiceSettings",
};

export const invoiceServiceListCustomerInvoices: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/invoices",
  method: "GET",
  operationId: "invoiceServiceListCustomerInvoices",
};

export const mailServiceDeliveryboxCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Deliveryboxes.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Deliveryboxes.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Deliveryboxes.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Deliveryboxes.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/projects/{projectId}/deliveryboxes",
  method: "POST",
  operationId: "mailServiceDeliveryboxCreate",
};

export const mailServiceDeliveryboxList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Deliveryboxes.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Deliveryboxes.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Deliveryboxes.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/projects/{projectId}/deliveryboxes",
  method: "GET",
  operationId: "mailServiceDeliveryboxList",
};

export const mailServiceDeliveryboxDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Deliveryboxes_Id.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Deliveryboxes_Id.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/deliveryboxes/{id}",
  method: "DELETE",
  operationId: "mailServiceDeliveryboxDelete",
};

export const mailServiceDeliveryboxGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Deliveryboxes_Id.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Deliveryboxes_Id.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Deliveryboxes_Id.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/deliveryboxes/{id}",
  method: "GET",
  operationId: "mailServiceDeliveryboxGetSpecific",
};

export const mailServiceDeliveryboxUpdateDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Deliveryboxes_Id_Description.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Deliveryboxes_Id_Description.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Deliveryboxes_Id_Description.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/deliveryboxes/{id}/description",
  method: "PUT",
  operationId: "mailServiceDeliveryboxUpdateDescription",
};

export const mailServiceDeliveryboxUpdatePassword: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Deliveryboxes_Id_Password.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Deliveryboxes_Id_Password.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Deliveryboxes_Id_Password.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/deliveryboxes/{id}/password",
  method: "PUT",
  operationId: "mailServiceDeliveryboxUpdatePassword",
};

export const mailServiceMailaddressCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailaddresses.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailaddresses.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailaddresses.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailaddresses.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailaddresses.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/projects/{projectId}/mailaddresses",
  method: "POST",
  operationId: "mailServiceMailaddressCreate",
};

export const mailServiceMailaddressList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailaddresses.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailaddresses.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailaddresses.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/projects/{projectId}/mailaddresses",
  method: "GET",
  operationId: "mailServiceMailaddressList",
};

export const mailServiceMailaddressDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/mailaddresses/{id}",
  method: "DELETE",
  operationId: "mailServiceMailaddressDelete",
};

export const mailServiceMailaddressGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Mailaddresses_Id.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/mailaddresses/{id}",
  method: "GET",
  operationId: "mailServiceMailaddressGetSpecific",
};

export const mailServiceMailaddressUpdateAddress: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Address.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Address.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Address.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/mailaddresses/{id}/address",
  method: "PUT",
  operationId: "mailServiceMailaddressUpdateAddress",
};

export const mailServiceMailaddressUpdateAutoresponder: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_AutoResponder.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_AutoResponder.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_AutoResponder.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/mailaddresses/{id}/autoResponder",
  method: "PUT",
  operationId: "mailServiceMailaddressUpdateAutoresponder",
};

export const mailServiceMailaddressUpdateCatchall: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_CatchAll.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_CatchAll.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_CatchAll.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mailaddresses_Id_CatchAll.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/mailaddresses/{id}/catchAll",
  method: "PUT",
  operationId: "mailServiceMailaddressUpdateCatchall",
};

export const mailServiceMailaddressUpdateForwardaddresses: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Forwardaddresses.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Forwardaddresses.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Forwardaddresses.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/mailaddresses/{id}/forwardaddresses",
  method: "PUT",
  operationId: "mailServiceMailaddressUpdateForwardaddresses",
};

export const mailServiceMailaddressUpdatePassword: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Password.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Password.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Password.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/mailaddresses/{id}/password",
  method: "PUT",
  operationId: "mailServiceMailaddressUpdatePassword",
};

export const mailServiceMailaddressUpdateQuota: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Quota.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Quota.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Quota.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/mailaddresses/{id}/quota",
  method: "PUT",
  operationId: "mailServiceMailaddressUpdateQuota",
};

export const mailServiceMailaddressUpdateSpamprotection: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Spamprotection.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Spamprotection.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Spamprotection.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/mailaddresses/{id}/spamprotection",
  method: "PUT",
  operationId: "mailServiceMailaddressUpdateSpamprotection",
};

export const mailServiceProjectsettingGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailsettings.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailsettings.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailsettings.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/projects/{projectId}/mailsettings",
  method: "GET",
  operationId: "mailServiceProjectsettingGetSpecific",
};

export const mailServiceProjectsettingUpdateBlacklist: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailsettings_Blacklist.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailsettings_Blacklist.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailsettings_Blacklist.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/projects/{projectId}/mailsettings/blacklist",
  method: "PUT",
  operationId: "mailServiceProjectsettingUpdateBlacklist",
};

export const mailServiceProjectsettingUpdateWhitelist: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailsettings_Whitelist.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailsettings_Whitelist.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailsettings_Whitelist.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/projects/{projectId}/mailsettings/whitelist",
  method: "PUT",
  operationId: "mailServiceProjectsettingUpdateWhitelist",
};

export const membershipServiceAcceptCustomerInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Accept.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Accept.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Accept.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Accept.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Accept.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Accept.Post.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Accept.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/customer/{inviteId}/accept",
  method: "POST",
  operationId: "membershipServiceAcceptCustomerInvite",
};

export const membershipServiceAcceptCustomerInviteWithToken: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_Accept.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_Accept.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_Accept.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_Accept.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_Accept.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_Accept.Post.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_Accept.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/customer/accept/",
  method: "POST",
  operationId: "membershipServiceAcceptCustomerInviteWithToken",
};

export const membershipServiceAcceptProjectInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Accept.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Accept.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Accept.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Accept.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Accept.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Accept.Post.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Accept.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/project/{inviteId}/accept",
  method: "POST",
  operationId: "membershipServiceAcceptProjectInvite",
};

export const membershipServiceAcceptProjectInviteWithToken: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_Accept.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_Accept.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_Accept.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_Accept.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_Accept.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_Accept.Post.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_Accept.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/project/accept/",
  method: "POST",
  operationId: "membershipServiceAcceptProjectInviteWithToken",
};

export const membershipServiceChangeCustomerMembership: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customer_MembershipId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customer_MembershipId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customer_MembershipId.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customer_MembershipId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/customer/{membershipId}",
  method: "PUT",
  operationId: "membershipServiceChangeCustomerMembership",
};

export const membershipServiceDeleteCustomerMembership: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customer_MembershipId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customer_MembershipId.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customer_MembershipId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/customer/{membershipId}",
  method: "DELETE",
  operationId: "membershipServiceDeleteCustomerMembership",
};

export const membershipServiceChangeProjectMembership: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Project_MembershipId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Project_MembershipId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Project_MembershipId.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Project_MembershipId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/project/{membershipId}",
  method: "PUT",
  operationId: "membershipServiceChangeProjectMembership",
};

export const membershipServiceDeleteProjectMembership: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Project_MembershipId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Project_MembershipId.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Project_MembershipId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/project/{membershipId}",
  method: "DELETE",
  operationId: "membershipServiceDeleteProjectMembership",
};

export const membershipServiceCreateCustomerInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer.Post.Responses.$409.Content.Application_Json,
      409,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/customer",
  method: "POST",
  operationId: "membershipServiceCreateCustomerInvite",
};

export const membershipServiceCreateProjectInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project.Post.Responses.$409.Content.Application_Json,
      409,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/project",
  method: "POST",
  operationId: "membershipServiceCreateProjectInvite",
};

export const membershipServiceDeclineCustomerInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Decline.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Decline.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Decline.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/customer/{inviteId}/decline",
  method: "DELETE",
  operationId: "membershipServiceDeclineCustomerInvite",
};

export const membershipServiceDeclineProjectInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Decline.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Decline.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Decline.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/project/{inviteId}/decline",
  method: "DELETE",
  operationId: "membershipServiceDeclineProjectInvite",
};

export const membershipServiceGetCustomerInviteSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customers_Specific_InviteId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customers_Specific_InviteId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_Specific_InviteId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_Specific_InviteId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_Specific_InviteId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/customers/specific/{inviteId}",
  method: "GET",
  operationId: "membershipServiceGetCustomerInviteSpecific",
};

export const membershipServiceGetCustomerInviteSpecificDeprecated: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customers_CustomerId_Specific_InviteId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customers_CustomerId_Specific_InviteId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_CustomerId_Specific_InviteId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_CustomerId_Specific_InviteId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_CustomerId_Specific_InviteId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/customers/{customerId}/specific/{inviteId}",
  method: "GET",
  operationId: "membershipServiceGetCustomerInviteSpecificDeprecated",
};

export const membershipServiceGetCustomerMembershipSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customers_CustomerId_Specific_MembershipId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customers_CustomerId_Specific_MembershipId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customers_CustomerId_Specific_MembershipId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customers_CustomerId_Specific_MembershipId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customers_CustomerId_Specific_MembershipId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/customers/{customerId}/specific/{membershipId}",
  method: "GET",
  operationId: "membershipServiceGetCustomerMembershipSpecific",
};

export const membershipServiceGetOwnMembershipForProjectV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Memberships_Me.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Memberships_Me.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Memberships_Me.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Memberships_Me.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Memberships_Me.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/memberships/me",
  method: "GET",
  operationId: "membershipServiceGetOwnMembershipForProjectV2",
};

export const membershipServiceGetProjectInviteSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Projects_Specific_InviteId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Projects_Specific_InviteId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_Specific_InviteId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_Specific_InviteId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_Specific_InviteId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/projects/specific/{inviteId}",
  method: "GET",
  operationId: "membershipServiceGetProjectInviteSpecific",
};

export const membershipServiceGetProjectInviteSpecificDeprecated: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Projects_ProjectId_Specific_InviteId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Projects_ProjectId_Specific_InviteId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_ProjectId_Specific_InviteId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_ProjectId_Specific_InviteId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_ProjectId_Specific_InviteId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/projects/{projectId}/specific/{inviteId}",
  method: "GET",
  operationId: "membershipServiceGetProjectInviteSpecificDeprecated",
};

export const membershipServiceGetProjectMembershipForProjectAndUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Users_UserId_Membership.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Users_UserId_Membership.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Users_UserId_Membership.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Users_UserId_Membership.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Users_UserId_Membership.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/users/{userId}/membership",
  method: "GET",
  operationId: "membershipServiceGetProjectMembershipForProjectAndUser",
};

export const membershipServiceGetProjectMembershipSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Projects_ProjectId_Specific_MembershipId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Projects_ProjectId_Specific_MembershipId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Projects_ProjectId_Specific_MembershipId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Projects_ProjectId_Specific_MembershipId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Projects_ProjectId_Specific_MembershipId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/projects/{projectId}/specific/{membershipId}",
  method: "GET",
  operationId: "membershipServiceGetProjectMembershipSpecific",
};

export const membershipServiceLeaveCustomer: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customer_MembershipId_Leave.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customer_MembershipId_Leave.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customer_MembershipId_Leave.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/customer/{membershipId}/leave",
  method: "DELETE",
  operationId: "membershipServiceLeaveCustomer",
};

export const membershipServiceLeaveProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Project_MembershipId_Leave.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Project_MembershipId_Leave.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Project_MembershipId_Leave.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/project/{membershipId}/leave",
  method: "DELETE",
  operationId: "membershipServiceLeaveProject",
};

export const membershipServiceListCustomerInvitesForUserOrEmail: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customers.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/customers",
  method: "GET",
  operationId: "membershipServiceListCustomerInvitesForUserOrEmail",
};

export const membershipServiceListCustomerMembershipsForUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customers.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customers.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customers.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customers.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/customers",
  method: "GET",
  operationId: "membershipServiceListCustomerMembershipsForUser",
};

export const membershipServiceListInvitesForCustomer: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customers_CustomerId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customers_CustomerId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_CustomerId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_CustomerId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_CustomerId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/customers/{customerId}",
  method: "GET",
  operationId: "membershipServiceListInvitesForCustomer",
};

export const membershipServiceListInvitesForProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Projects_ProjectId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Projects_ProjectId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_ProjectId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_ProjectId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_ProjectId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/projects/{projectId}",
  method: "GET",
  operationId: "membershipServiceListInvitesForProject",
};

export const membershipServiceListMembershipsForCustomer: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customers_CustomerId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customers_CustomerId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customers_CustomerId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customers_CustomerId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customers_CustomerId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/customers/{customerId}",
  method: "GET",
  operationId: "membershipServiceListMembershipsForCustomer",
};

export const membershipServiceListMembershipsForProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Projects_ProjectId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Projects_ProjectId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Projects_ProjectId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Projects_ProjectId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Projects_ProjectId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/projects/{projectId}",
  method: "GET",
  operationId: "membershipServiceListMembershipsForProject",
};

export const membershipServiceListOwnCustomerInvitesV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customers_Me.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_Me.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_Me.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_Me.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/customers/me",
  method: "GET",
  operationId: "membershipServiceListOwnCustomerInvitesV2",
};

export const membershipServiceListOwnProjectInvitesV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Projects_Me.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_Me.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_Me.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_Me.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/projects/me",
  method: "GET",
  operationId: "membershipServiceListOwnProjectInvitesV2",
};

export const membershipServiceListProjectInvitesForUserOrEmail: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Projects.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/projects/",
  method: "GET",
  operationId: "membershipServiceListProjectInvitesForUserOrEmail",
};

export const membershipServiceListProjectMembershipsForUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Projects.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Projects.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Projects.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Projects.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/projects",
  method: "GET",
  operationId: "membershipServiceListProjectMembershipsForUser",
};

export const membershipServiceResendCustomerInviteMail: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Resend.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Resend.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Resend.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Resend.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/customer/{inviteId}/resend",
  method: "POST",
  operationId: "membershipServiceResendCustomerInviteMail",
};

export const membershipServiceResendProjectInviteMail: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Resend.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Resend.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Resend.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Resend.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/project/{inviteId}/resend",
  method: "POST",
  operationId: "membershipServiceResendProjectInviteMail",
};

export const membershipServiceRevokeCustomerInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_InviteId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_InviteId.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_InviteId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/customer/{inviteId}",
  method: "DELETE",
  operationId: "membershipServiceRevokeCustomerInvite",
};

export const membershipServiceRevokeProjectInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_InviteId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_InviteId.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_InviteId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/project/{inviteId}",
  method: "DELETE",
  operationId: "membershipServiceRevokeProjectInvite",
};

export const messagingServiceCountUnreadNotifications: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Notifications_Unread_Counts.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Notifications_Unread_Counts.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<null, 0, null>
> = {
  path: "/v2/notifications/unread-counts",
  method: "GET",
  operationId: "messagingServiceCountUnreadNotifications",
};

export const messagingServiceListNotifications: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Notifications.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Notifications.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<null, 0, null>
> = {
  path: "/v2/notifications",
  method: "GET",
  operationId: "messagingServiceListNotifications",
};

export const messagingServiceReadAllNotifications: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Notifications_Status.Put.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Notifications_Status.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Notifications_Status.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Notifications_Status.Put.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Notifications_Status.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/notifications/status",
  method: "PUT",
  operationId: "messagingServiceReadAllNotifications",
};

export const messagingServiceReadNotification: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Notifications_MessageId_Status.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Notifications_MessageId_Status.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Notifications_MessageId_Status.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Notifications_MessageId_Status.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Notifications_MessageId_Status.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Notifications_MessageId_Status.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/notifications/{messageId}/status",
  method: "PUT",
  operationId: "messagingServiceReadNotification",
};

export const newsletterGetInfoV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Newsletter_Subscriptions_Email.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Newsletter_Subscriptions_Email.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Newsletter_Subscriptions_Email.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Newsletter_Subscriptions_Email.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/newsletter/subscriptions/{email}",
  method: "GET",
  operationId: "newsletterGetInfoV2",
};

export const newsletterUnsubscribeUserV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Newsletter_Subscriptions_Email.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Newsletter_Subscriptions_Email.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Newsletter_Subscriptions_Email.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/newsletter/subscriptions/{email}",
  method: "DELETE",
  operationId: "newsletterUnsubscribeUserV2",
};

export const newsletterSubscribeUserV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Newsletter_Subscriptions.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Newsletter_Subscriptions.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Newsletter_Subscriptions.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Newsletter_Subscriptions.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Newsletter_Subscriptions.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/newsletter/subscriptions",
  method: "POST",
  operationId: "newsletterSubscribeUserV2",
};

export const orderServiceChangeProjecthostingV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Change_Projecthosting.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Change_Projecthosting.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Change_Projecthosting.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Change_Projecthosting.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Change_Projecthosting.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/actions/change-projecthosting",
  method: "POST",
  operationId: "orderServiceChangeProjecthostingV2",
};

export const orderServiceChangeServerV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Change_Server.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Change_Server.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Change_Server.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Change_Server.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Change_Server.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/actions/change-server",
  method: "POST",
  operationId: "orderServiceChangeServerV2",
};

export const orderServiceGetOrderV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_OrderId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_OrderId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_OrderId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_OrderId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/{orderId}",
  method: "GET",
  operationId: "orderServiceGetOrderV2",
};

export const orderServiceListCustomerOrdersV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Orders.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Orders.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Orders.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Orders.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/orders",
  method: "GET",
  operationId: "orderServiceListCustomerOrdersV2",
};

export const orderServiceOrderDomainV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Order_Domain.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Order_Domain.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Order_Domain.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Order_Domain.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Order_Domain.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/actions/order-domain",
  method: "POST",
  operationId: "orderServiceOrderDomainV2",
};

export const orderServiceOrderProjecthostingV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Order_Projecthosting.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Order_Projecthosting.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Order_Projecthosting.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Order_Projecthosting.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Order_Projecthosting.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/actions/order-projecthosting",
  method: "POST",
  operationId: "orderServiceOrderProjecthostingV2",
};

export const orderServiceOrderServerV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Order_Server.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Order_Server.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Order_Server.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Order_Server.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Order_Server.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/actions/order-server",
  method: "POST",
  operationId: "orderServiceOrderServerV2",
};

export const orderServicePreviewChangeProjecthostingV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Change_Projecthosting.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Change_Projecthosting.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Change_Projecthosting.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Change_Projecthosting.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Change_Projecthosting.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/actions/preview-change-projecthosting",
  method: "POST",
  operationId: "orderServicePreviewChangeProjecthostingV2",
};

export const orderServicePreviewChangeServerV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Change_Server.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Change_Server.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Change_Server.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Change_Server.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Change_Server.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/actions/preview-change-server",
  method: "POST",
  operationId: "orderServicePreviewChangeServerV2",
};

export const orderServicePreviewOrderDomainV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Domain.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Domain.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Domain.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Domain.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Domain.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/actions/preview-order-domain",
  method: "POST",
  operationId: "orderServicePreviewOrderDomainV2",
};

export const orderServicePreviewOrderProjecthostingV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Projecthosting.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Projecthosting.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Projecthosting.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Projecthosting.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Projecthosting.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/actions/preview-order-projecthosting",
  method: "POST",
  operationId: "orderServicePreviewOrderProjecthostingV2",
};

export const orderServicePreviewOrderServerV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Server.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Server.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Server.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Server.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Server.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/actions/preview-order-server",
  method: "POST",
  operationId: "orderServicePreviewOrderServerV2",
};

export const passwordValidationServiceGetPasswordPolicy: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Password_Policies_Path.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Password_Policies_Path.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Password_Policies_Path.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Password_Policies_Path.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/password/policies/{path}",
  method: "GET",
  operationId: "passwordValidationServiceGetPasswordPolicy",
};

export const projectServiceGetFsApiDirectories: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Directories.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Directories.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Directories.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Directories.Get.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Directories.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Directories.Get.Responses.$503.Content.Application_Json,
      503,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Directories.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/filesystem/directories",
  method: "GET",
  operationId: "projectServiceGetFsApiDirectories",
};

export const projectServiceGetFsApiFileContent: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files_Raw.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files_Raw.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files_Raw.Get.Responses.$200.Content.Text_Plain,
      200,
      "text/plain"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files_Raw.Get.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files_Raw.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files_Raw.Get.Responses.$503.Content.Application_Json,
      503,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files_Raw.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/filesystem/files/raw",
  method: "GET",
  operationId: "projectServiceGetFsApiFileContent",
};

export const projectServiceGetFsApiFiles: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files.Get.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files.Get.Responses.$503.Content.Application_Json,
      503,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/filesystem/files",
  method: "GET",
  operationId: "projectServiceGetFsApiFiles",
};

export const projectServiceGetFsApiJwt: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Jwt.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Jwt.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Jwt.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Jwt.Get.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Jwt.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Jwt.Get.Responses.$503.Content.Application_Json,
      503,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/jwt",
  method: "GET",
  operationId: "projectServiceGetFsApiJwt",
};

export const projectServiceGetFsApiUsagesDisk: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Usages_Disk.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Usages_Disk.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Usages_Disk.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Usages_Disk.Get.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Usages_Disk.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Usages_Disk.Get.Responses.$503.Content.Application_Json,
      503,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Usages_Disk.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/filesystem/usages/disk",
  method: "GET",
  operationId: "projectServiceGetFsApiUsagesDisk",
};

export const projectServicePlacementgroupAvatarRemove: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId_Avatar.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId_Avatar.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId_Avatar.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId_Avatar.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/placementgroups/{placementGroupId}/avatar",
  method: "DELETE",
  operationId: "projectServicePlacementgroupAvatarRemove",
};

export const projectServicePlacementgroupAvatarRequestUpload: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId_Avatar.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId_Avatar.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId_Avatar.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId_Avatar.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId_Avatar.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/placementgroups/{placementGroupId}/avatar",
  method: "POST",
  operationId: "projectServicePlacementgroupAvatarRequestUpload",
};

export const projectServicePlacementgroupDetails: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/placementgroups/{placementGroupId}",
  method: "GET",
  operationId: "projectServicePlacementgroupDetails",
};

export const projectServicePlacementgroupList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Placementgroups.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Placementgroups.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Placementgroups.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/placementgroups",
  method: "GET",
  operationId: "projectServicePlacementgroupList",
};

export const projectServicePlacementgroupSubprojectCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId_Projects.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId_Projects.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId_Projects.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId_Projects.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId_Projects.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId_Projects.Post.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId_Projects.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/placementgroups/{placementGroupId}/projects",
  method: "POST",
  operationId: "projectServicePlacementgroupSubprojectCreate",
};

export const projectServicePlacementgroupUpdateDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId_Description.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId_Description.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId_Description.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Placementgroups_PlacementGroupId_Description.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
> = {
  path: "/v2/placementgroups/{placementGroupId}/description",
  method: "PUT",
  operationId: "projectServicePlacementgroupUpdateDescription",
};

export const projectServiceProjectAvatarRemove: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Avatar.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Avatar.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Avatar.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Avatar.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/avatar",
  method: "DELETE",
  operationId: "projectServiceProjectAvatarRemove",
};

export const projectServiceProjectAvatarRequestUpload: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Avatar.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Avatar.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Avatar.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Avatar.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Avatar.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/avatar",
  method: "POST",
  operationId: "projectServiceProjectAvatarRequestUpload",
};

export const projectServiceProjectDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId.Delete.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId.Delete.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId.Delete.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}",
  method: "DELETE",
  operationId: "projectServiceProjectDelete",
};

export const projectServiceProjectGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_Id.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_Id.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_Id.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_Id.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_Id.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{id}",
  method: "GET",
  operationId: "projectServiceProjectGetSpecific",
};

export const projectServiceProjectUpdateDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_Id_Description.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_Id_Description.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_Id_Description.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Projects_Id_Description.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_Id_Description.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_Id_Description.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{id}/description",
  method: "PUT",
  operationId: "projectServiceProjectUpdateDescription",
};

export const projectServiceProjectsGetList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects",
  method: "GET",
  operationId: "projectServiceProjectsGetList",
};

export const redirectusCreateRelocationV2: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Relocation.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Relocation.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Relocation.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Relocation.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/relocation",
  method: "POST",
  operationId: "redirectusCreateRelocationV2",
};

export const signupApiApiTokenCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Api.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Api.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/token/api",
  method: "POST",
  operationId: "signupApiApiTokenCreate",
};

export const signupApiApiTokenList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Api.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/token/api",
  method: "GET",
  operationId: "signupApiApiTokenList",
};

export const signupApiApiTokenDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Delete.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/token/api/{apiTokenId}",
  method: "DELETE",
  operationId: "signupApiApiTokenDelete",
};

export const signupApiApiTokenEdit: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Put.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Put.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/token/api/{apiTokenId}",
  method: "PUT",
  operationId: "signupApiApiTokenEdit",
};

export const signupApiApiTokenGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/token/api/{apiTokenId}",
  method: "GET",
  operationId: "signupApiApiTokenGet",
};

export const signupApiAuthenticate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Authentication.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Authentication.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication.Post.Responses.$202.Content.Application_Json,
      202,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/authentication",
  method: "POST",
  operationId: "signupApiAuthenticate",
};

export const signupApiAuthenticateLegacy: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Authentication_Legacy.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Authentication_Legacy.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication_Legacy.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication_Legacy.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/authentication/legacy",
  method: "POST",
  operationId: "signupApiAuthenticateLegacy",
};

export const signupApiAuthenticateMfa: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Authentication_Mfa.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Authentication_Mfa.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication_Mfa.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication_Mfa.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication_Mfa.Post.Responses.$408.Content.Application_Json,
      408,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication_Mfa.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/authentication/mfa",
  method: "POST",
  operationId: "signupApiAuthenticateMfa",
};

export const signupApiAvatarRemove: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Avatar.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Avatar.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Avatar.Delete.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Avatar.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/avatar",
  method: "DELETE",
  operationId: "signupApiAvatarRemove",
};

export const signupApiAvatarRequestUpload: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Avatar.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Avatar.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Avatar.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Avatar.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Avatar.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/avatar",
  method: "POST",
  operationId: "signupApiAvatarRequestUpload",
};

export const signupApiEmailChange: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Email.Put.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Email.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email.Put.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email.Put.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/email",
  method: "PUT",
  operationId: "signupApiEmailChange",
};

export const signupApiEmailGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Email.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/email",
  method: "GET",
  operationId: "signupApiEmailGet",
};

export const signupApiEmailResend: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Email_Resend.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Email_Resend.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email_Resend.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email_Resend.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/email/resend",
  method: "POST",
  operationId: "signupApiEmailResend",
};

export const signupApiEmailVerify: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Email_Verify.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Email_Verify.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email_Verify.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email_Verify.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email_Verify.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email_Verify.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/email/verify",
  method: "POST",
  operationId: "signupApiEmailVerify",
};

export const signupApiLogout: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Logout.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Logout.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Logout.Put.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/logout",
  method: "PUT",
  operationId: "signupApiLogout",
};

export const signupApiMfaConfirm: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Mfa_Confirm.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Mfa_Confirm.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa_Confirm.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa_Confirm.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa_Confirm.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa_Confirm.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/mfa/confirm",
  method: "POST",
  operationId: "signupApiMfaConfirm",
};

export const signupApiMfaDisable: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Mfa.Delete.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Mfa.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa.Delete.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/mfa",
  method: "DELETE",
  operationId: "signupApiMfaDisable",
};

export const signupApiMfaGetStatus: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Mfa.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/mfa",
  method: "GET",
  operationId: "signupApiMfaGetStatus",
};

export const signupApiMfaInit: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Mfa.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/mfa",
  method: "POST",
  operationId: "signupApiMfaInit",
};

export const signupApiPasswordChange: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Password.Put.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Password.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password.Put.Responses.$202.Content.Application_Json,
      202,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password.Put.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password.Put.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/password",
  method: "PUT",
  operationId: "signupApiPasswordChange",
};

export const signupApiPasswordGetUpdatedAt: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Password.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/password",
  method: "GET",
  operationId: "signupApiPasswordGetUpdatedAt",
};

export const signupApiPasswordResetConfirm: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Password_Reset_Confirm.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Password_Reset_Confirm.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password_Reset_Confirm.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password_Reset_Confirm.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/password/reset/confirm",
  method: "POST",
  operationId: "signupApiPasswordResetConfirm",
};

export const signupApiPasswordResetInit: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Password_Reset.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Password_Reset.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password_Reset.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password_Reset.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/password/reset",
  method: "POST",
  operationId: "signupApiPasswordResetInit",
};

export const signupApiPhoneNumberDelete: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Phone.Delete.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Phone.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone.Delete.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/phone",
  method: "DELETE",
  operationId: "signupApiPhoneNumberDelete",
};

export const signupApiPhoneNumberGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Phone.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/phone",
  method: "GET",
  operationId: "signupApiPhoneNumberGet",
};

export const signupApiPhoneNumberInitProcess: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Phone.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Phone.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/phone",
  method: "POST",
  operationId: "signupApiPhoneNumberInitProcess",
};

export const signupApiPhoneNumberVerify: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Phone_Verify.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Phone_Verify.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone_Verify.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone_Verify.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone_Verify.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone_Verify.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/phone/verify",
  method: "POST",
  operationId: "signupApiPhoneNumberVerify",
};

export const signupApiProfileChange: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Profile.Put.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Profile.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Put.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Put.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/profile",
  method: "PUT",
  operationId: "signupApiProfileChange",
};

export const signupApiProfileDelete: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Profile.Delete.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Profile.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Delete.Responses.$202.Content.Application_Json,
      202,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Delete.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Delete.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/profile",
  method: "DELETE",
  operationId: "signupApiProfileDelete",
};

export const signupApiProfileGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Profile.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/profile",
  method: "GET",
  operationId: "signupApiProfileGet",
};

export const signupApiRecoverycodesReset: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Mfa_Reset_Recoverycodes.Put.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Mfa_Reset_Recoverycodes.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa_Reset_Recoverycodes.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa_Reset_Recoverycodes.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa_Reset_Recoverycodes.Put.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa_Reset_Recoverycodes.Put.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/mfa/reset-recoverycodes",
  method: "PUT",
  operationId: "signupApiRecoverycodesReset",
};

export const signupApiRegister: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Registration.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Registration.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Registration.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Registration.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Registration.Post.Responses.$408.Content.Application_Json,
      408,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Registration.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/registration",
  method: "POST",
  operationId: "signupApiRegister",
};

export const signupApiRegistrationVerify: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Registration_Verification.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Registration_Verification.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Registration_Verification.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Registration_Verification.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Registration_Verification.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/registration/verification",
  method: "POST",
  operationId: "signupApiRegistrationVerify",
};

export const signupApiSessionGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/sessions/{tokenId}",
  method: "GET",
  operationId: "signupApiSessionGet",
};

export const signupApiSessionTerminate: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Delete.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/sessions/{tokenId}",
  method: "DELETE",
  operationId: "signupApiSessionTerminate",
};

export const signupApiSessionsList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Sessions.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/sessions",
  method: "GET",
  operationId: "signupApiSessionsList",
};

export const signupApiSessionsTerminateAll: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Sessions.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions.Delete.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/sessions",
  method: "DELETE",
  operationId: "signupApiSessionsTerminateAll",
};

export const signupApiSshCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Ssh.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Ssh.Post.Parameters.Header>
  >,
  | Response<null, 201, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/ssh",
  method: "POST",
  operationId: "signupApiSshCreate",
};

export const signupApiSshList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Ssh.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/ssh",
  method: "GET",
  operationId: "signupApiSshList",
};

export const signupApiSshDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Delete.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/ssh/{sshKeyId}",
  method: "DELETE",
  operationId: "signupApiSshDelete",
};

export const signupApiSshEdit: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Put.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Put.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/ssh/{sshKeyId}",
  method: "PUT",
  operationId: "signupApiSshEdit",
};

export const signupApiSshGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/ssh/{sshKeyId}",
  method: "GET",
  operationId: "signupApiSshGet",
};

export const signupApiSupportCodeRequest: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Supportcode.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Supportcode.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Supportcode.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/supportcode",
  method: "GET",
  operationId: "signupApiSupportCodeRequest",
};

export const signupApiTokenCheck: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Check.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Check.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Check.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Check.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Check.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/token/check",
  method: "POST",
  operationId: "signupApiTokenCheck",
};

export const sshuserServiceCreateSftpUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Sftp.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Sftp.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Sftp.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Sftp.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Sftp.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Sftp.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/sshuser/sftp",
  method: "POST",
  operationId: "sshuserServiceCreateSftpUser",
};

export const sshuserServiceListSftpUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Sftp.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Sftp.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Sftp.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Sftp.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Sftp.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/sshuser/sftp",
  method: "GET",
  operationId: "sshuserServiceListSftpUser",
};

export const sshuserServiceCreateSshUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Ssh.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Ssh.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Ssh.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Ssh.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Ssh.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Ssh.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/sshuser/ssh",
  method: "POST",
  operationId: "sshuserServiceCreateSshUser",
};

export const sshuserServiceListSshUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Ssh.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Ssh.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Ssh.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Ssh.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Sshuser_Ssh.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/sshuser/ssh",
  method: "GET",
  operationId: "sshuserServiceListSshUser",
};

export const sshuserServiceGetSftpUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sshuser/sftp/{sftpUserId}",
  method: "GET",
  operationId: "sshuserServiceGetSftpUser",
};

export const sshuserServicePatchSftpUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId.Patch.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId.Patch.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sshuser/sftp/{sftpUserId}",
  method: "PATCH",
  operationId: "sshuserServicePatchSftpUser",
};

export const sshuserServiceRemoveSftpUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sshuser/sftp/{sftpUserId}",
  method: "DELETE",
  operationId: "sshuserServiceRemoveSftpUser",
};

export const sshuserServiceGetSshUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sshuser/ssh/{sshUserId}",
  method: "GET",
  operationId: "sshuserServiceGetSshUser",
};

export const sshuserServicePatchSshUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId.Patch.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId.Patch.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sshuser/ssh/{sshUserId}",
  method: "PATCH",
  operationId: "sshuserServicePatchSshUser",
};

export const sshuserServiceRemoveSshUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sshuser/ssh/{sshUserId}",
  method: "DELETE",
  operationId: "sshuserServiceRemoveSshUser",
};

export const sshuserServiceUpdateAccessLevelOfSftpUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Access_Level.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Access_Level.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Access_Level.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Access_Level.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Access_Level.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sshuser/sftp/{sftpUserId}/access-level",
  method: "PUT",
  operationId: "sshuserServiceUpdateAccessLevelOfSftpUser",
};

export const sshuserServiceUpdateActiveOfSftpUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Active.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Active.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Active.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Active.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Active.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sshuser/sftp/{sftpUserId}/active",
  method: "PUT",
  operationId: "sshuserServiceUpdateActiveOfSftpUser",
};

export const sshuserServiceUpdateActiveOfSshUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Active.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Active.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Active.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Active.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Active.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sshuser/ssh/{sshUserId}/active",
  method: "PUT",
  operationId: "sshuserServiceUpdateActiveOfSshUser",
};

export const sshuserServiceUpdateDescriptionOfSftpUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Description.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Description.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Description.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Description.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Description.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sshuser/sftp/{sftpUserId}/description",
  method: "PUT",
  operationId: "sshuserServiceUpdateDescriptionOfSftpUser",
};

export const sshuserServiceUpdateDescriptionOfSshUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Description.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Description.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Description.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Description.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Description.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sshuser/ssh/{sshUserId}/description",
  method: "PUT",
  operationId: "sshuserServiceUpdateDescriptionOfSshUser",
};

export const sshuserServiceUpdateDirectoriesOfSftpUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Directories.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Directories.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Directories.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Directories.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Directories.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sshuser/sftp/{sftpUserId}/directories",
  method: "PUT",
  operationId: "sshuserServiceUpdateDirectoriesOfSftpUser",
};

export const sshuserServiceUpdateExpiryOfSftpUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Expiry.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Expiry.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Expiry.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Expiry.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Expiry.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sshuser/sftp/{sftpUserId}/expiry",
  method: "PUT",
  operationId: "sshuserServiceUpdateExpiryOfSftpUser",
};

export const sshuserServiceUpdateExpiryOfSshUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Expiry.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Expiry.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Expiry.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Expiry.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Expiry.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sshuser/ssh/{sshUserId}/expiry",
  method: "PUT",
  operationId: "sshuserServiceUpdateExpiryOfSshUser",
};

export const sshuserServiceUpdatePasswordOfSftpUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Password.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Password.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Password.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Password.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Password.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sshuser/sftp/{sftpUserId}/password",
  method: "PUT",
  operationId: "sshuserServiceUpdatePasswordOfSftpUser",
};

export const sshuserServiceUpdatePasswordOfSshUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Password.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Password.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Password.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Password.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Password.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sshuser/ssh/{sshUserId}/password",
  method: "PUT",
  operationId: "sshuserServiceUpdatePasswordOfSshUser",
};

export const sshuserServiceUpdatePublicKeysOfSftpUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Public_Keys.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Public_Keys.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Public_Keys.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Public_Keys.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Sftp_SftpUserId_Public_Keys.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sshuser/sftp/{sftpUserId}/public-keys",
  method: "PUT",
  operationId: "sshuserServiceUpdatePublicKeysOfSftpUser",
};

export const sshuserServiceUpdatePublicKeysOfSshUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Public_Keys.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Public_Keys.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Public_Keys.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Public_Keys.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sshuser_Ssh_SshUserId_Public_Keys.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sshuser/ssh/{sshUserId}/public-keys",
  method: "PUT",
  operationId: "sshuserServiceUpdatePublicKeysOfSshUser",
};

export const storageStatisticsServiceStorageStatistics: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Storage.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Storage.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Storage.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Storage.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/storage",
  method: "GET",
  operationId: "storageStatisticsServiceStorageStatistics",
};

export const systemsoftwareGetSystemsoftwareV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Systemsoftwares_SystemSoftwareId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Systemsoftwares_SystemSoftwareId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Systemsoftwares_SystemSoftwareId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Systemsoftwares_SystemSoftwareId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Systemsoftwares_SystemSoftwareId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/systemsoftwares/{systemSoftwareId}",
  method: "GET",
  operationId: "systemsoftwareGetSystemsoftwareV2",
};

export const systemsoftwareGetSystemsoftwaresV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Systemsoftwares.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Systemsoftwares.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Systemsoftwares.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/systemsoftwares",
  method: "GET",
  operationId: "systemsoftwareGetSystemsoftwaresV2",
};

export const systemsoftwareversionGetSystemsoftwareversionV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Systemsoftware_SystemSoftwareId_Versions_SystemSoftwareVersionId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Systemsoftware_SystemSoftwareId_Versions_SystemSoftwareVersionId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Systemsoftware_SystemSoftwareId_Versions_SystemSoftwareVersionId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Systemsoftware_SystemSoftwareId_Versions_SystemSoftwareVersionId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Systemsoftware_SystemSoftwareId_Versions_SystemSoftwareVersionId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/systemsoftware/{systemSoftwareId}/versions/{systemSoftwareVersionId}",
  method: "GET",
  operationId: "systemsoftwareversionGetSystemsoftwareversionV2",
};

export const systemsoftwareversionGetSystemsoftwareversionsV2: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Systemsoftware_SystemSoftwareId_Versions.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Systemsoftware_SystemSoftwareId_Versions.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Systemsoftware_SystemSoftwareId_Versions.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Systemsoftware_SystemSoftwareId_Versions.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/systemsoftware/{systemSoftwareId}/versions",
  method: "GET",
  operationId: "systemsoftwareversionGetSystemsoftwareversionsV2",
};

export const userServiceAvatarRemove: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Avatar.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Avatar.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Avatar.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Avatar.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/{userId}/avatar",
  method: "DELETE",
  operationId: "userServiceAvatarRemove",
};

export const userServiceAvatarRequestUpload: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Avatar.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Avatar.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Avatar.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Avatar.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Avatar.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/{userId}/avatar",
  method: "POST",
  operationId: "userServiceAvatarRequestUpload",
};

export const userServiceFeedbackCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_User_Feedback.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_User_Feedback.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_User_Feedback.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_Feedback.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_Feedback.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_Feedback.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/feedback",
  method: "POST",
  operationId: "userServiceFeedbackCreate",
};

export const userServiceFeedbackList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_User_Feedback.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_User_Feedback.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_Feedback.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/feedback",
  method: "GET",
  operationId: "userServiceFeedbackList",
};

export const userServiceIssueNew: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_User_Issues.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_User_Issues.Post.Parameters.Header>
  >,
  | Response<null, 201, null>
  | Response<
      MittwaldApiV2.Paths.V2_User_Issues.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/issues",
  method: "POST",
  operationId: "userServiceIssueNew",
};

export const userServicePersonalInformationUpdate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_User_UserId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/{userId}",
  method: "PUT",
  operationId: "userServicePersonalInformationUpdate",
};

export const userServiceUserGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId.Get.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId.Get.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/{userId}",
  method: "GET",
  operationId: "userServiceUserGet",
};

export const userServicePersonalizedSettingsGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_User_Settings.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_User_Settings.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_Settings.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/settings",
  method: "GET",
  operationId: "userServicePersonalizedSettingsGet",
};

export const userServicePersonalizedSettingsUpdate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_User_Settings.Put.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_User_Settings.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_User_Settings.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_Settings.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/settings",
  method: "PUT",
  operationId: "userServicePersonalizedSettingsUpdate",
};

export const userServicePhoneNumberAdd: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Phone.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Phone.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Phone.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Phone.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Phone.Post.Responses.$409.Content.Application_Json,
      409,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Phone.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/{userId}/phone",
  method: "POST",
  operationId: "userServicePhoneNumberAdd",
};

export const userServicePhoneNumberRemove: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Phone.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Phone.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Phone.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Phone.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/{userId}/phone",
  method: "DELETE",
  operationId: "userServicePhoneNumberRemove",
};

export const userServicePhoneNumberVerify: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Phone_Verify.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Phone_Verify.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Phone_Verify.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Phone_Verify.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Phone_Verify.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Phone_Verify.Post.Responses.$409.Content.Application_Json,
      409,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Phone_Verify.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/{userId}/phone/verify",
  method: "POST",
  operationId: "userServicePhoneNumberVerify",
};

export const userServiceUserGetOwn: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_User.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_User.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user",
  method: "GET",
  operationId: "userServiceUserGetOwn",
};

export const varnishServiceListValidators: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Varnish_Config_Validate.Get.Parameters.Header>
  >,
  Response<
    MittwaldApiV2.Paths.V2_Varnish_Config_Validate.Get.Responses.$200.Content.Application_Json,
    200,
    "application/json"
  >
> = {
  path: "/v2/varnish/config/validate",
  method: "GET",
  operationId: "varnishServiceListValidators",
};

export const varnishServiceValidate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Varnish_Config_Validate.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Varnish_Config_Validate.Post.Parameters.Header>
  >,
  Response<
    MittwaldApiV2.Paths.V2_Varnish_Config_Validate.Post.Responses.$200.Content.Application_Json,
    200,
    "application/json"
  >
> = {
  path: "/v2/varnish/config/validate",
  method: "POST",
  operationId: "varnishServiceValidate",
};

export const varnishServiceSoftwareClearCache: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_ClearCache.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_ClearCache.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_ClearCache.Post.Parameters.Header>
  >,
  Response<null, 200, null>
> = {
  path: "/v1.5/varnish/{softwareId}/clearCache",
  method: "POST",
  operationId: "varnishServiceSoftwareClearCache",
};

export const varnishServiceSoftwareConfigDeclare: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_Config.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_Config.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_Config.Post.Parameters.Header>
  >,
  Response<
    MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_Config.Post.Responses.$200.Content.Application_Json,
    200,
    "application/json"
  >
> = {
  path: "/v1.5/varnish/{softwareId}/config",
  method: "POST",
  operationId: "varnishServiceSoftwareConfigDeclare",
};

export const varnishServiceSoftwareConfigDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_Config.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_Config.Delete.Parameters.Header>
  >,
  Response<
    MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_Config.Delete.Responses.$200.Content.Application_Json,
    200,
    "application/json"
  >
> = {
  path: "/v1.5/varnish/{softwareId}/config",
  method: "DELETE",
  operationId: "varnishServiceSoftwareConfigDelete",
};

export const varnishServiceSoftwareConfigDeleteRevision: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_Config_Revision_Revision.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_Config_Revision_Revision.Delete.Parameters.Header>
  >,
  Response<null, 200, null>
> = {
  path: "/v1.5/varnish/{softwareId}/config/revision/{revision}",
  method: "DELETE",
  operationId: "varnishServiceSoftwareConfigDeleteRevision",
};

export const varnishServiceSoftwareConfigRevisionGetById: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_Config_Revision_Revision.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_Config_Revision_Revision.Get.Parameters.Header>
  >,
  Response<
    MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_Config_Revision_Revision.Get.Responses.$200.Content.Application_Json,
    200,
    "application/json"
  >
> = {
  path: "/v1.5/varnish/{softwareId}/config/revision/{revision}",
  method: "GET",
  operationId: "varnishServiceSoftwareConfigRevisionGetById",
};

export const varnishServiceSoftwareConfigRollback: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_Softwared_Config.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_Softwared_Config.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_Softwared_Config.Patch.Parameters.Header>
  >,
  Response<
    MittwaldApiV2.Paths.V1_5_Varnish_Softwared_Config.Patch.Responses.$200.Content.Application_Json,
    200,
    "application/json"
  >
> = {
  path: "/v1.5/varnish/{softwared}/config",
  method: "PATCH",
  operationId: "varnishServiceSoftwareConfigRollback",
};

export const varnishServiceSoftwareConfigtemplateCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V1_5_Projects_ProjectId_Varnish_Config_Template.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V1_5_Projects_ProjectId_Varnish_Config_Template.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V1_5_Projects_ProjectId_Varnish_Config_Template.Post.Parameters.Header>
  >,
  Response<
    MittwaldApiV2.Paths.V1_5_Projects_ProjectId_Varnish_Config_Template.Post.Responses.$200.Content.Application_Json,
    200,
    "application/json"
  >
> = {
  path: "/v1.5/projects/{projectId}/varnish/config/template",
  method: "POST",
  operationId: "varnishServiceSoftwareConfigtemplateCreate",
};

export const varnishServiceSoftwareConfigtemplateGetList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V1_5_Projects_ProjectId_Varnish_Config_Template.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V1_5_Projects_ProjectId_Varnish_Config_Template.Get.Parameters.Header>
  >,
  Response<
    MittwaldApiV2.Paths.V1_5_Projects_ProjectId_Varnish_Config_Template.Get.Responses.$200.Content.Application_Json,
    200,
    "application/json"
  >
> = {
  path: "/v1.5/projects/{projectId}/varnish/config/template",
  method: "GET",
  operationId: "varnishServiceSoftwareConfigtemplateGetList",
};

export const varnishServiceSoftwareConfigtemplateDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V1_5_Projects_ProjectId_Varnish_Config_Template_SoftwareConfigTemplateId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V1_5_Projects_ProjectId_Varnish_Config_Template_SoftwareConfigTemplateId.Delete.Parameters.Header>
  >,
  Response<null, 200, null>
> = {
  path: "/v1.5/projects/{projectId}/varnish/config/template/{softwareConfigTemplateId}",
  method: "DELETE",
  operationId: "varnishServiceSoftwareConfigtemplateDelete",
};

export const varnishServiceSoftwareConfigtemplateGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V1_5_Projects_ProjectId_Varnish_Config_Template_SoftwareConfigTemplateId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V1_5_Projects_ProjectId_Varnish_Config_Template_SoftwareConfigTemplateId.Get.Parameters.Header>
  >,
  Response<
    MittwaldApiV2.Paths.V1_5_Projects_ProjectId_Varnish_Config_Template_SoftwareConfigTemplateId.Get.Responses.$200.Content.Application_Json,
    200,
    "application/json"
  >
> = {
  path: "/v1.5/projects/{projectId}/varnish/config/template/{softwareConfigTemplateId}",
  method: "GET",
  operationId: "varnishServiceSoftwareConfigtemplateGetSpecific",
};

export const varnishServiceSoftwareConfigtemplateListGlobals: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareTemplate_SoftwareTemplateId_Config_Templates.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareTemplate_SoftwareTemplateId_Config_Templates.Get.Parameters.Header>
  >,
  Response<
    MittwaldApiV2.Paths.V1_5_Varnish_SoftwareTemplate_SoftwareTemplateId_Config_Templates.Get.Responses.$200.Content.Application_Json,
    200,
    "application/json"
  >
> = {
  path: "/v1.5/varnish/softwareTemplate/{softwareTemplateId}/config-templates",
  method: "GET",
  operationId: "varnishServiceSoftwareConfigtemplateListGlobals",
};

export const varnishServiceSoftwareGetById: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId.Get.Parameters.Header>
  >,
  Response<
    MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId.Get.Responses.$200.Content.Application_Json,
    200,
    "application/json"
  >
> = {
  path: "/v1.5/varnish/{softwareId}",
  method: "GET",
  operationId: "varnishServiceSoftwareGetById",
};

export const varnishServiceSoftwareLogs: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_Logs.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_Logs.Post.Parameters.Header>
  >,
  Response<null, 200, null>
> = {
  path: "/v1.5/varnish/{softwareId}/logs",
  method: "POST",
  operationId: "varnishServiceSoftwareLogs",
};

export const varnishServiceSoftwareSettingsDeclare: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_Settings.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_Settings.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_Settings.Patch.Parameters.Header>
  >,
  Response<
    MittwaldApiV2.Paths.V1_5_Varnish_SoftwareId_Settings.Patch.Responses.$200.Content.Application_Json,
    200,
    "application/json"
  >
> = {
  path: "/v1.5/varnish/{softwareId}/settings",
  method: "PATCH",
  operationId: "varnishServiceSoftwareSettingsDeclare",
};

export const fileServiceFileGetTypeRules: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_File_Type_Rules_Name.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_File_Type_Rules_Name.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_File_Type_Rules_Name.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_File_Type_Rules_Name.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_File_Type_Rules_Name.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_File_Type_Rules_Name.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/file-type-rules/{name}",
  method: "GET",
  operationId: "fileServiceFileGetTypeRules",
};
