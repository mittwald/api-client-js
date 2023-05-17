/* eslint-disable */
/* prettier-ignore */
/* This file is auto-generated with acg (@mittwald/api-code-generator) */
import { Simplify } from "@mittwald/api-client-commons/dist/type-fest";
import { Request } from "@mittwald/api-client-commons/dist/types/Request.js";
import { Response } from "@mittwald/api-client-commons/dist/types/Response.js";
import { OpenAPIOperation } from "@mittwald/api-client-commons/dist/types/OpenAPIOperation.js";

/** execute a runtime concerning action on a specific `AppInstallation` */
export const appExecuteAction: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdActionsAction.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdActionsAction.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdActionsAction.Post.Parameters.Header>
  >
> = {
  path: "/v2/appinstallations/{appInstallationId}/actions/{action}",
  method: "POST",
  operationId: "app-execute-action",
};

/** get a specific `App` */
export const appGetApp: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppsAppId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppsAppId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2AppsAppId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/apps/{appId}",
  method: "GET",
  operationId: "app-get-app",
};

/** get a specific `AppInstallation` */
export const appGetAppinstallation: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/appinstallations/{appInstallationId}",
  method: "GET",
  operationId: "app-get-appinstallation",
};

/** start uninstallation process for a specific `AppInstallation` */
export const appUninstallAppinstallation: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/appinstallations/{appInstallationId}",
  method: "DELETE",
  operationId: "app-uninstall-appinstallation",
};

/** patch desired properties of a specific `AppInstallation` */
export const appPatchAppinstallation: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationId.Patch.Parameters.Header>
  >
> = {
  path: "/v2/appinstallations/{appInstallationId}",
  method: "PATCH",
  operationId: "app-patch-appinstallation",
};

/** get a specific `AppVersion` */
export const appGetAppversion: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersionsAppVersionId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersionsAppVersionId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2AppsAppIdVersionsAppVersionId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/apps/{appId}/versions/{appVersionId}",
  method: "GET",
  operationId: "app-get-appversion",
};

/** get a specific `SystemSoftware` */
export const appGetSystemsoftware: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SystemsoftwaresSystemSoftwareId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SystemsoftwaresSystemSoftwareId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SystemsoftwaresSystemSoftwareId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/systemsoftwares/{systemSoftwareId}",
  method: "GET",
  operationId: "app-get-systemsoftware",
};

/** get a specific `SystemSoftwareVersion` */
export const appGetSystemsoftwareversion: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SystemsoftwareSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SystemsoftwareSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SystemsoftwareSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/systemsoftware/{systemSoftwareId}/versions/{systemSoftwareVersionId}",
  method: "GET",
  operationId: "app-get-systemsoftwareversion",
};

/** create linkage between an `AppInstallation` and a `Database` */
export const appLinkDatabase: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabases.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabases.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabases.Put.Parameters.Header>
  >
> = {
  path: "/v2/appinstallations/{appInstallationId}/databases",
  method: "PUT",
  operationId: "app-link-database",
};

/** get all `AppInstallations` inside a specific `Project` */
export const appListAppinstallations: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppinstallations.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppinstallations.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdAppinstallations.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/appinstallations",
  method: "GET",
  operationId: "app-list-appinstallations",
};

/** request a new `AppInstallation` */
export const appRequestAppinstallation: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppinstallations.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppinstallations.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAppinstallations.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdAppinstallations.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/appinstallations",
  method: "POST",
  operationId: "app-request-appinstallation",
};

/** get all available `Apps` */
export const appListApps: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Apps.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Apps.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2Apps.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/apps",
  method: "GET",
  operationId: "app-list-apps",
};

/** get all `AppVersions` of a specific `App` */
export const appListAppversions: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppsAppIdVersions.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2AppsAppIdVersions.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/apps/{appId}/versions",
  method: "GET",
  operationId: "app-list-appversions",
};

/** get all available `SystemSoftware` */
export const appListSystemsoftwares: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Systemsoftwares.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Systemsoftwares.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2Systemsoftwares.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/systemsoftwares",
  method: "GET",
  operationId: "app-list-systemsoftwares",
};

/** get all available `SystemSoftwareVersions` of a specific `SystemSoftware` */
export const appListSystemsoftwareversions: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SystemsoftwareSystemSoftwareIdVersions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SystemsoftwareSystemSoftwareIdVersions.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SystemsoftwareSystemSoftwareIdVersions.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/systemsoftware/{systemSoftwareId}/versions",
  method: "GET",
  operationId: "app-list-systemsoftwareversions",
};

/** get runtime status of a specific `AppInstallation` */
export const appRetrieveStatus: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdStatus.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdStatus.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdStatus.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/appinstallations/{appInstallationId}/status",
  method: "GET",
  operationId: "app-retrieve-status",
};

/** create linkage between an `AppInstallation` and `DatabaseUsers` */
export const appSetDatabaseUsers: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabasesDatabaseId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabasesDatabaseId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabasesDatabaseId.Put.Parameters.Header>
  >
> = {
  path: "/v2/appinstallations/{appInstallationId}/databases/{databaseId}",
  method: "PUT",
  operationId: "app-set-database-users",
};

/** remove linkage between an `AppInstallation` and a `Database` */
export const appUnlinkDatabase: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabasesDatabaseId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsAppInstallationIdDatabasesDatabaseId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/appinstallations/{appInstallationId}/databases/{databaseId}",
  method: "DELETE",
  operationId: "app-unlink-database",
};

/** trigger `AppInstallation` to retrieve current installation status based on an appJob */
export const appUpdateStatus: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsIdActionsUpdateStatus.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsIdActionsUpdateStatus.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppinstallationsIdActionsUpdateStatus.Post.Parameters.Header>
  >
> = {
  path: "/v2/appinstallations/{id}/actions/update-status",
  method: "POST",
  operationId: "app-update-status",
};

/** Get an Article. */
export const articleServiceGetArticle: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ArticlesArticleId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ArticlesArticleId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ArticlesArticleId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/articles/{articleId}",
  method: "GET",
  operationId: "article-service-get-article",
};

/** List Articles. */
export const articleServiceListArticles: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Articles.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Articles.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2Articles.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/articles",
  method: "GET",
  operationId: "article-service-list-articles",
};

/** Export a ProjectBackup for download. */
export const backupCreateProjectBackupExport: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Post.Parameters.Header>
  >
> = {
  path: "/v2/project-backups/{projectBackupId}/export",
  method: "POST",
  operationId: "backup-create-project-backup-export",
};

/** Delete a ProjectBackupExport. */
export const backupDeleteProjectBackupExport: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Delete.Parameters.Header>
  >
> = {
  path: "/v2/project-backups/{projectBackupId}/export",
  method: "DELETE",
  operationId: "backup-delete-project-backup-export",
};

/** List BackupSchedules belonging to a given Project. */
export const backupListProjectBackupSchedules: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/backup-schedules",
  method: "GET",
  operationId: "backup-list-project-backup-schedules",
};

/** Create a BackupSchedule for a Project. */
export const backupCreateProjectBackupSchedule: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/backup-schedules",
  method: "POST",
  operationId: "backup-create-project-backup-schedule",
};

/** List Backups for a given Project. */
export const backupListProjectBackups: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/backups",
  method: "GET",
  operationId: "backup-list-project-backups",
};

/** Create a Backup of a Project. */
export const backupCreateProjectBackup: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/backups",
  method: "POST",
  operationId: "backup-create-project-backup",
};

/** Get a ProjectBackupSchedule. */
export const backupGetProjectBackupSchedule: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/project-backup-schedules/{projectBackupScheduleId}",
  method: "GET",
  operationId: "backup-get-project-backup-schedule",
};

/** Delete a ProjectBackupSchedule. */
export const backupDeleteProjectBackupSchedule: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/project-backup-schedules/{projectBackupScheduleId}",
  method: "DELETE",
  operationId: "backup-delete-project-backup-schedule",
};

/** Update a ProjectBackupSchedule. */
export const backupUpdateProjectBackupSchedule: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Patch.Parameters.Header>
  >
> = {
  path: "/v2/project-backup-schedules/{projectBackupScheduleId}",
  method: "PATCH",
  operationId: "backup-update-project-backup-schedule",
};

/** Get a ProjectBackup. */
export const backupGetProjectBackup: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/project-backups/{projectBackupId}",
  method: "GET",
  operationId: "backup-get-project-backup",
};

/** Delete a ProjectBackup. */
export const backupDeleteProjectBackup: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/project-backups/{projectBackupId}",
  method: "DELETE",
  operationId: "backup-delete-project-backup",
};

/** Change the description of a ProjectBackup. */
export const backupUpdateProjectBackupDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdDescription.Patch.Parameters.Header>
  >
> = {
  path: "/v2/project-backups/{projectBackupId}/description",
  method: "PATCH",
  operationId: "backup-update-project-backup-description",
};

/** Schedule the Termination of a ContractItem. */
export const contractTerminateContractItem: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/termination",
  method: "POST",
  operationId: "contract-terminate-contract-item",
};

/** Cancel the Termination for the referred ContractItem. */
export const contractCancelContractItemTermination: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Delete.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Delete.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/termination",
  method: "DELETE",
  operationId: "contract-cancel-contract-item-termination",
};

/** Cancel the TariffChange for the referred ContractItem. */
export const contractCancelContractTariffChange: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTariffChange.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTariffChange.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTariffChange.Delete.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTariffChange.Delete.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/tariff-change",
  method: "DELETE",
  operationId: "contract-cancel-contract-tariff-change",
};

/** Schedule the Termination of a Contract. */
export const contractTerminateContract: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/contracts/{contractId}/termination",
  method: "POST",
  operationId: "contract-terminate-contract",
};

/** Cancel the Termination for the referred Contract. */
export const contractCancelContractTermination: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Delete.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Delete.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/contracts/{contractId}/termination",
  method: "DELETE",
  operationId: "contract-cancel-contract-termination",
};

/** Return the BaseItem of the Contract with the given ID. */
export const contractGetBaseItemOfContract: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdBaseItems.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdBaseItems.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ContractsContractIdBaseItems.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/contracts/{contractId}/base-items",
  method: "GET",
  operationId: "contract-get-base-item-of-contract",
};

/** Return the Contract for the given Domain. */
export const contractGetDetailOfContractByDomain: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdContracts.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdContracts.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2DomainsDomainIdContracts.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/domains/{domainId}/contracts",
  method: "GET",
  operationId: "contract-get-detail-of-contract-by-domain",
};

/** Return the Contract for the given Server. */
export const contractGetDetailOfContractByPlacementGroup: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdContracts.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdContracts.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ServersServerIdContracts.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/servers/{serverId}/contracts",
  method: "GET",
  operationId: "contract-get-detail-of-contract-by-placement-group",
};

/** Return the Contract for the given Project. */
export const contractGetDetailOfContractByProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdContracts.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdContracts.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdContracts.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/contracts",
  method: "GET",
  operationId: "contract-get-detail-of-contract-by-project",
};

/** Get the ContractItem with the given ID. */
export const contractGetDetailOfContractItem: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}",
  method: "GET",
  operationId: "contract-get-detail-of-contract-item",
};

/** Returns the Contract with the given ID. */
export const contractGetDetailOfContract: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ContractsContractId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/contracts/{contractId}",
  method: "GET",
  operationId: "contract-get-detail-of-contract",
};

/** Return the next TerminationDate for the ContractItem with the given ID. */
export const contractGetNextTerminationDateForItem: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdNextTerminationDates.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdNextTerminationDates.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdNextTerminationDates.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/next-termination-dates",
  method: "GET",
  operationId: "contract-get-next-termination-date-for-item",
};

/** Return a list of Contracts for the given Customer. */
export const contractListContracts: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdContracts.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdContracts.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomersCustomerIdContracts.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/customers/{customerId}/contracts",
  method: "GET",
  operationId: "contract-list-contracts",
};

/** Get all conversation the authenticated user has created or has access to. */
export const conversationServiceGetConversations: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Conversations.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Conversations.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2Conversations.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/conversations",
  method: "GET",
  operationId: "conversation-service-get-conversations",
};

/** Create a conversation. */
export const conversationServiceCreateConversation: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2Conversations.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2Conversations.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Conversations.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2Conversations.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/conversations",
  method: "POST",
  operationId: "conversation-service-create-conversation",
};

/** Get all message of the conversation. */
export const conversationServiceGetMessagesByConversation: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/conversations/{conversationId}/messages",
  method: "GET",
  operationId: "conversation-service-get-messages-by-conversation",
};

/** Send a new message in the conversation. */
export const conversationServiceCreateMessage: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/conversations/{conversationId}/messages",
  method: "POST",
  operationId: "conversation-service-create-message",
};

/** Get all conversation categories. */
export const conversationServiceGetCategories: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationCategories.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationCategories.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ConversationCategories.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/conversation-categories",
  method: "GET",
  operationId: "conversation-service-get-categories",
};

/** Get a specific conversation category. */
export const conversationServiceGetCategory: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationCategoriesCategoryId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationCategoriesCategoryId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ConversationCategoriesCategoryId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/conversation-categories/{categoryId}",
  method: "GET",
  operationId: "conversation-service-get-category",
};

/** Get a support conversation. */
export const conversationServiceGetConversation: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ConversationsConversationId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/conversations/{conversationId}",
  method: "GET",
  operationId: "conversation-service-get-conversation",
};

/** Update the basic properties of the conversation. */
export const conversationServiceUpdateConversation: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationId.Put.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ConversationsConversationId.Put.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/conversations/{conversationId}",
  method: "PUT",
  operationId: "conversation-service-update-conversation",
};

/** Request a file upload token for the conversation. */
export const conversationServiceRequestFileUpload: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdFiles.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdFiles.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdFiles.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ConversationsConversationIdFiles.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/conversations/{conversationId}/files",
  method: "POST",
  operationId: "conversation-service-request-file-upload",
};

/** Update the status of a conversation. */
export const conversationServiceSetConversationStatus: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdStatus.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdStatus.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdStatus.Put.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ConversationsConversationIdStatus.Put.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/conversations/{conversationId}/status",
  method: "PUT",
  operationId: "conversation-service-set-conversation-status",
};

/** Update the content of the message */
export const conversationServiceUpdateMessage: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessagesMessageId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessagesMessageId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ConversationsConversationIdMessagesMessageId.Patch.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ConversationsConversationIdMessagesMessageId.Patch.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/conversations/{conversationId}/messages/{messageId}",
  method: "PATCH",
  operationId: "conversation-service-update-message",
};

/** Abort a CronjobExecution. */
export const cronjobAbortExecution: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdActionsAbort.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdActionsAbort.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdActionsAbort.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdActionsAbort.Post.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/cronjobs/{cronjobId}/executions/{executionId}/actions/abort",
  method: "POST",
  operationId: "cronjob-abort-execution",
};

/** List Cronjobs belonging to a Project. */
export const cronjobListCronjobs: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/cronjobs",
  method: "GET",
  operationId: "cronjob-list-cronjobs",
};

/** Create a Cronjob. */
export const cronjobCreateCronjob: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/cronjobs",
  method: "POST",
  operationId: "cronjob-create-cronjob",
};

/** List CronjobExecutions belonging to a Cronjob. */
export const cronjobListExecutions: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/cronjobs/{cronjobId}/executions",
  method: "GET",
  operationId: "cronjob-list-executions",
};

/** Trigger a Cronjob. */
export const cronjobCreateExecution: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutions.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/cronjobs/{cronjobId}/executions",
  method: "POST",
  operationId: "cronjob-create-execution",
};

/** Get a Cronjob. */
export const cronjobGetCronjob: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CronjobsCronjobId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/cronjobs/{cronjobId}",
  method: "GET",
  operationId: "cronjob-get-cronjob",
};

/** Delete a Cronjob. */
export const cronjobDeleteCronjob: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/cronjobs/{cronjobId}",
  method: "DELETE",
  operationId: "cronjob-delete-cronjob",
};

/** Update a Cronjob. */
export const cronjobUpdateCronjob: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobId.Patch.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CronjobsCronjobId.Patch.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/cronjobs/{cronjobId}",
  method: "PATCH",
  operationId: "cronjob-update-cronjob",
};

/** Get a CronjobExecution. */
export const cronjobGetExecution: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/cronjobs/{cronjobId}/executions/{executionId}",
  method: "GET",
  operationId: "cronjob-get-execution",
};

/** Update a Cronjob's app id. */
export const cronjobUpdateCronjobAppId: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdAppId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdAppId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdAppId.Patch.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CronjobsCronjobIdAppId.Patch.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/cronjobs/{cronjobId}/app-id",
  method: "PATCH",
  operationId: "cronjob-update-cronjob-app-id",
};

/** Update a CustomerMembership. */
export const customerChangeCustomerMembership: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2CustomerCustomerIdMembershipsMembershipId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCustomerIdMembershipsMembershipId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCustomerIdMembershipsMembershipId.Put.Parameters.Header>
  >
> = {
  path: "/v2/customer/{customerId}/memberships/{membershipId}",
  method: "PUT",
  operationId: "customer-change-customer-membership",
};

/** Get all customer categories. */
export const customerListOfCustomerCategoriesDeprecated: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Customercategories.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Customercategories.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2Customercategories.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/customercategories",
  method: "GET",
  operationId: "customer-list-of-customer-categories-deprecated",
};

/** Create a new customer category. */
export const customerCreateCategoryDeprecated: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2Customercategories.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2Customercategories.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Customercategories.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2Customercategories.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/customercategories",
  method: "POST",
  operationId: "customer-create-category-deprecated",
};

/** Get all customer categories. */
export const customerListOfCustomerCategories: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategories.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategories.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomerCategories.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/customer-categories",
  method: "GET",
  operationId: "customer-list-of-customer-categories",
};

/** Create a new customer category. */
export const customerCreateCategory: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategories.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategories.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategories.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomerCategories.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/customer-categories",
  method: "POST",
  operationId: "customer-create-category",
};

/** Create a CustomerInvite. */
export const customerCreateCustomerInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomer.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomer.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomer.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2InvitesCustomer.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/invites/customer",
  method: "POST",
  operationId: "customer-create-customer-invite",
};

/** Get all customer profiles the authenticated user has access to. */
export const customerListCustomers: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Customers.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Customers.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2Customers.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/customers",
  method: "GET",
  operationId: "customer-list-customers",
};

/** Create a new customer profile. */
export const customerCreateCustomer: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2Customers.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2Customers.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Customers.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2Customers.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/customers",
  method: "POST",
  operationId: "customer-create-customer",
};

/** Get all notes for the customer profile. */
export const customerListOfNotes: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdNotes.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdNotes.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomersCustomerIdNotes.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/customers/{customerId}/notes",
  method: "GET",
  operationId: "customer-list-of-notes",
};

/** Add a note to the customer profile. */
export const customerCreateNote: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdNotes.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdNotes.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdNotes.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomersCustomerIdNotes.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/customers/{customerId}/notes",
  method: "POST",
  operationId: "customer-create-note",
};

/** Get a customer category. */
export const customerDetailOfCustomerCategoryDeprecated: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomercategoriesCategoryId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomercategoriesCategoryId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomercategoriesCategoryId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/customercategories/{categoryId}",
  method: "GET",
  operationId: "customer-detail-of-customer-category-deprecated",
};

/** Update a customer category. */
export const customerUpdateCategoryDeprecated: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2CustomercategoriesCategoryId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomercategoriesCategoryId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomercategoriesCategoryId.Put.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomercategoriesCategoryId.Put.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/customercategories/{categoryId}",
  method: "PUT",
  operationId: "customer-update-category-deprecated",
};

/** Delete a customer category. */
export const customerDeleteCategoryDeprecated: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomercategoriesCategoryId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomercategoriesCategoryId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/customercategories/{categoryId}",
  method: "DELETE",
  operationId: "customer-delete-category-deprecated",
};

/** Get a customer category. */
export const customerGetCustomerCategory: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/customer-categories/{categoryId}",
  method: "GET",
  operationId: "customer-get-customer-category",
};

/** Update a customer category. */
export const customerUpdateCategory: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Put.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Put.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/customer-categories/{categoryId}",
  method: "PUT",
  operationId: "customer-update-category",
};

/** Delete a customer category. */
export const customerDeleteCategory: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomerCategoriesCategoryId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/customer-categories/{categoryId}",
  method: "DELETE",
  operationId: "customer-delete-category",
};

/** Get a customer profile. */
export const customerGetCustomer: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomersCustomerId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/customers/{customerId}",
  method: "GET",
  operationId: "customer-get-customer",
};

/** Update a customer profile. */
export const customerUpdateCustomer: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Put.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomersCustomerId.Put.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/customers/{customerId}",
  method: "PUT",
  operationId: "customer-update-customer",
};

/** Delete a customer profile. */
export const customerDeleteCustomer: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/customers/{customerId}",
  method: "DELETE",
  operationId: "customer-delete-customer",
};

/** Update a note of the customer profile. */
export const customerUpdateNote: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdNotesNoteId.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdNotesNoteId.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdNotesNoteId.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomersCustomerIdNotesNoteId.Post.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/customers/{customerId}/notes/{noteId}",
  method: "POST",
  operationId: "customer-update-note",
};

/** Delete a note from customer profile. */
export const customerDeleteNote: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdNotesNoteId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdNotesNoteId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/customers/{customerId}/notes/{noteId}",
  method: "DELETE",
  operationId: "customer-delete-note",
};

/** Check if the customer profile has a valid contract partner configured. */
export const customerIsCustomerLegallyCompetent: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLegallyCompetent.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdLegallyCompetent.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomersCustomerIdLegallyCompetent.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/customers/{customerId}/legally-competent",
  method: "GET",
  operationId: "customer-is-customer-legally-competent",
};

/** List all invites for a Customer. */
export const customerListInvitesForCustomer: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomersCustomerId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomersCustomerId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2InvitesCustomersCustomerId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/invites/customers/{customerId}",
  method: "GET",
  operationId: "customer-list-invites-for-customer",
};

/** List all memberships belonging to a Customer. */
export const customerListMembershipsForCustomer: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsCustomersCustomerId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsCustomersCustomerId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2MembershipsCustomersCustomerId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/memberships/customers/{customerId}",
  method: "GET",
  operationId: "customer-list-memberships-for-customer",
};

/** Request a new avatar upload for the customer profile. */
export const customerRequestAvatarUpload: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Post.Parameters.Header>
  >,
  | Response<
      MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Post.Responses.$200.Content.ApplicationJson,
      200,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Post.Responses.$401.Content.ApplicationJson,
      401,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Post.Responses.$500.Content.ApplicationJson,
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
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Delete.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomersCustomerIdAvatar.Delete.Responses.$401.Content.ApplicationJson,
    401,
    "application/json"
  >
> = {
  path: "/v2/customers/{customerId}/avatar",
  method: "DELETE",
  operationId: "customer-remove-avatar",
};

/** List MySQLDatabases belonging to a Project. */
export const databaseListMysqlDatabases: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/mysql-databases",
  method: "GET",
  operationId: "database-list-mysql-databases",
};

/** Create a MySQLDatabase with an optional MySQLUser */
export const databaseCreateMysqlDatabase: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Post.Responses.$202.Content.ApplicationJson,
    202,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/mysql-databases",
  method: "POST",
  operationId: "database-create-mysql-database",
};

/** List MySQLUsers belonging to a database. */
export const databaseListMysqlUsers: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/mysql-databases/{databaseId}/users",
  method: "GET",
  operationId: "database-list-mysql-users",
};

/** Create a MySQLUser. */
export const databaseCreateMysqlUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2MysqlDatabasesDatabaseIdUsers.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/mysql-databases/{databaseId}/users",
  method: "POST",
  operationId: "database-create-mysql-user",
};

/** List RedisDatabases belonging to a project. */
export const databaseListRedisDatabases: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/redis-databases",
  method: "GET",
  operationId: "database-list-redis-databases",
};

/** Create a RedisDatabase. */
export const databaseCreateRedisDatabase: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/redis-databases",
  method: "POST",
  operationId: "database-create-redis-database",
};

/** Get a MySQLDatabase. */
export const databaseGetMysqlDatabase: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2MysqlDatabasesId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/mysql-databases/{id}",
  method: "GET",
  operationId: "database-get-mysql-database",
};

/** Delete a MySQLDatabase. */
export const databaseDeleteMysqlDatabase: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/mysql-databases/{id}",
  method: "DELETE",
  operationId: "database-delete-mysql-database",
};

/** Get a MySQLUser. */
export const databaseGetMysqlUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2MysqlUsersId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/mysql-users/{id}",
  method: "GET",
  operationId: "database-get-mysql-user",
};

/** Update a MySQLUser. */
export const databaseUpdateMysqlUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Put.Parameters.Header>
  >
> = {
  path: "/v2/mysql-users/{id}",
  method: "PUT",
  operationId: "database-update-mysql-user",
};

/** Delete a MySQLUser. */
export const databaseDeleteMysqlUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/mysql-users/{id}",
  method: "DELETE",
  operationId: "database-delete-mysql-user",
};

/** Get a RedisDatabase. */
export const databaseGetRedisDatabase: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2RedisDatabasesId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/redis-databases/{id}",
  method: "GET",
  operationId: "database-get-redis-database",
};

/** Delete a RedisDatabase. */
export const databaseDeleteRedisDatabase: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/redis-databases/{id}",
  method: "DELETE",
  operationId: "database-delete-redis-database",
};

/** Disable a MySQLUser. */
export const databaseDisableMysqlUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdActionsDisable.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdActionsDisable.Post.Parameters.Header>
  >
> = {
  path: "/v2/mysql-users/{id}/actions/disable",
  method: "POST",
  operationId: "database-disable-mysql-user",
};

/** Enable a MySQLUser. */
export const databaseEnableMysqlUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdActionsEnable.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdActionsEnable.Post.Parameters.Header>
  >
> = {
  path: "/v2/mysql-users/{id}/actions/enable",
  method: "POST",
  operationId: "database-enable-mysql-user",
};

/** Get a MySQLUser's PhpMyAdmin-URL. */
export const databaseGetMysqlUserPhpMyAdminUrl: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdPhpMyAdminUrl.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdPhpMyAdminUrl.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2MysqlUsersIdPhpMyAdminUrl.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/mysql-users/{id}/php-my-admin-url",
  method: "GET",
  operationId: "database-get-mysql-user-php-my-admin-url",
};

/** List available MySQL character sets and collations, optionally filtered by a MySQLVersion. */
export const databaseListMysqlCharsets: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlCharsets.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlCharsets.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2MysqlCharsets.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/mysql-charsets",
  method: "GET",
  operationId: "database-list-mysql-charsets",
};

/** List available MySQLVersions. */
export const databaseListMysqlVersions: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlVersions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlVersions.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2MysqlVersions.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/mysql-versions",
  method: "GET",
  operationId: "database-list-mysql-versions",
};

/** List available Redis versions. */
export const databaseListRedisVersions: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2RedisVersions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2RedisVersions.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2RedisVersions.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/redis-versions",
  method: "GET",
  operationId: "database-list-redis-versions",
};

/** Update a MySQLDatabase's default character settings. */
export const deprecatedDatabaseUpdateMysqlDatabaseDefaultCharset: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDefaultCharset.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDefaultCharset.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDefaultCharset.Put.Parameters.Header>
  >
> = {
  path: "/v2/mysql-databases/{id}/default-charset",
  method: "PUT",
  operationId: "deprecated-database-update-mysql-database-default-charset",
};

/** Update a MySQLDatabase's default character settings. */
export const databaseUpdateMysqlDatabaseDefaultCharset: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDefaultCharset.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDefaultCharset.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDefaultCharset.Patch.Parameters.Header>
  >
> = {
  path: "/v2/mysql-databases/{id}/default-charset",
  method: "PATCH",
  operationId: "database-update-mysql-database-default-charset",
};

/** Update a MySQLDatabase's description. */
export const deprecatedDatabaseUpdateMysqlDatabaseDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDescription.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDescription.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDescription.Put.Parameters.Header>
  >
> = {
  path: "/v2/mysql-databases/{id}/description",
  method: "PUT",
  operationId: "deprecated-database-update-mysql-database-description",
};

/** Update a MySQLDatabase's description. */
export const databaseUpdateMysqlDatabaseDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesIdDescription.Patch.Parameters.Header>
  >
> = {
  path: "/v2/mysql-databases/{id}/description",
  method: "PATCH",
  operationId: "database-update-mysql-database-description",
};

/** Update a MySQLUser's password. */
export const databaseUpdateMysqlUserPassword: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdPassword.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdPassword.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlUsersIdPassword.Patch.Parameters.Header>
  >
> = {
  path: "/v2/mysql-users/{id}/password",
  method: "PATCH",
  operationId: "database-update-mysql-user-password",
};

/** Update a RedisDatabase's description. */
export const deprecatedDatabaseUpdateRedisDatabaseDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdDescription.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdDescription.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdDescription.Put.Parameters.Header>
  >
> = {
  path: "/v2/redis-databases/{id}/description",
  method: "PUT",
  operationId: "deprecated-database-update-redis-database-description",
};

/** Update a RedisDatabase's description. */
export const databaseUpdateRedisDatabaseDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2RedisDatabasesIdDescription.Patch.Parameters.Header>
  >
> = {
  path: "/v2/redis-databases/{id}/description",
  method: "PATCH",
  operationId: "database-update-redis-database-description",
};

/** get a specific `AppVersion` */
export const deprecatedAppGetAppversion: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppAppIdVersionsAppVersionId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppAppIdVersionsAppVersionId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2AppAppIdVersionsAppVersionId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/app/{appId}/versions/{appVersionId}",
  method: "GET",
  operationId: "deprecated-app-get-appversion",
};

/** get all `AppVersions` of a specific `App` */
export const deprecatedAppListAppversions: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2AppAppIdVersions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2AppAppIdVersions.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2AppAppIdVersions.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/app/{appId}/versions",
  method: "GET",
  operationId: "deprecated-app-list-appversions",
};

/** Schedule the Termination of a ContractItem. */
export const deprecatedContractTerminateContractItem: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTerminations.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTerminations.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTerminations.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTerminations.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/terminations",
  method: "POST",
  operationId: "deprecated-contract-terminate-contract-item",
};

/** Cancel the Termination for the referred ContractItem. */
export const deprecatedContractCancelContractItemTermination: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTerminations.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTerminations.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTerminations.Delete.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTerminations.Delete.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/terminations",
  method: "DELETE",
  operationId: "deprecated-contract-cancel-contract-item-termination",
};

/** Cancel the TariffChange for the referred ContractItem. */
export const deprecatedContractCancelContractTariffChange: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTariffChanges.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTariffChanges.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTariffChanges.Delete.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTariffChanges.Delete.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/tariff-changes",
  method: "DELETE",
  operationId: "deprecated-contract-cancel-contract-tariff-change",
};

/** Schedule the Termination of a Contract. */
export const deprecatedContractTerminateContract: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTerminations.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTerminations.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTerminations.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ContractsContractIdTerminations.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/contracts/{contractId}/terminations",
  method: "POST",
  operationId: "deprecated-contract-terminate-contract",
};

/** Cancel the Termination for the referred Contract. */
export const deprecatedContractCancelContractTermination: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTerminations.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTerminations.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdTerminations.Delete.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ContractsContractIdTerminations.Delete.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/contracts/{contractId}/terminations",
  method: "DELETE",
  operationId: "deprecated-contract-cancel-contract-termination",
};

/** This route is deprecated, please use the new one. */
export const deprecatedContractDetailOfContract: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdContractsContractId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdContractsContractId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldAPIV2.Paths.V2CustomersCustomerIdContractsContractId.Get.Responses.$200.Content.ApplicationJson,
      200,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2CustomersCustomerIdContractsContractId.Get.Responses.$404.Content.ApplicationJson,
      404,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2CustomersCustomerIdContractsContractId.Get.Responses.$500.Content.ApplicationJson,
      500,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/contracts/{contractId}",
  method: "GET",
  operationId: "deprecated-contract-detail-of-contract",
};

/** Return the BaseItem of the Contract with the given ID. */
export const deprecatedContractGetBaseItemOfContract: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdBaseItem.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdBaseItem.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ContractsContractIdBaseItem.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/contracts/{contractId}/base-item",
  method: "GET",
  operationId: "deprecated-contract-get-base-item-of-contract",
};

/** Return the Contract for the given Aggregate. */
export const deprecatedContractGetDetailOfContractByAggregate: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Contracts.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Contracts.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2Contracts.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/contracts",
  method: "GET",
  operationId: "deprecated-contract-get-detail-of-contract-by-aggregate",
};

/** Return the next TerminationDate for the ContractItem with the given ID. */
export const deprecatedContractGetNextTerminationDateForItem: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdNextTerminationDate.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdNextTerminationDate.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdNextTerminationDate.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/next-termination-date",
  method: "GET",
  operationId: "deprecated-contract-get-next-termination-date-for-item",
};

/** Abort a CronjobExecution. */
export const deprecatedCronjobAbortExecution: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdAbort.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdAbort.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdAbort.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CronjobsCronjobIdExecutionsExecutionIdAbort.Post.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/cronjobs/{cronjobId}/executions/{executionId}/abort",
  method: "POST",
  operationId: "deprecated-cronjob-abort-execution",
};

/** Accept a CustomerInvite. */
export const deprecatedCustomerAcceptCustomerInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomerInviteIdAccept.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomerInviteIdAccept.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomerInviteIdAccept.Post.Parameters.Header>
  >
> = {
  path: "/v2/invites/customer/{inviteId}/accept",
  method: "POST",
  operationId: "deprecated-customer-accept-customer-invite",
};

/** Accept a CustomerInvite via a token. */
export const deprecatedCustomerAcceptCustomerInviteWithToken: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomerAccept.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomerAccept.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomerAccept.Post.Parameters.Header>
  >
> = {
  path: "/v2/invites/customer/accept/",
  method: "POST",
  operationId: "deprecated-customer-accept-customer-invite-with-token",
};

/** Update a CustomerMembership. */
export const deprecatedCustomerChangeCustomerMembership: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2MembershipsCustomerMembershipId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsCustomerMembershipId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsCustomerMembershipId.Put.Parameters.Header>
  >
> = {
  path: "/v2/memberships/customer/{membershipId}",
  method: "PUT",
  operationId: "deprecated-customer-change-customer-membership",
};

/** Delete a CustomerMembership. */
export const deprecatedCustomerDeleteCustomerMembership: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsCustomerMembershipId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsCustomerMembershipId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/memberships/customer/{membershipId}",
  method: "DELETE",
  operationId: "deprecated-customer-delete-customer-membership",
};

/** Decline a CustomerInvite. */
export const deprecatedCustomerDeclineCustomerInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomerInviteIdDecline.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomerInviteIdDecline.Delete.Parameters.Header>
  >
> = {
  path: "/v2/invites/customer/{inviteId}/decline",
  method: "DELETE",
  operationId: "deprecated-customer-decline-customer-invite",
};

/** Get a CustomerInvite. */
export const deprecatedCustomerGetCustomerInviteSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomersSpecificInviteId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomersSpecificInviteId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2InvitesCustomersSpecificInviteId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/invites/customers/specific/{inviteId}",
  method: "GET",
  operationId: "deprecated-customer-get-customer-invite-specific",
};

/** Get a CustomerMembership. */
export const deprecatedCustomerGetCustomerMembershipSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsCustomersCustomerIdSpecificMembershipId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsCustomersCustomerIdSpecificMembershipId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2MembershipsCustomersCustomerIdSpecificMembershipId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/memberships/customers/{customerId}/specific/{membershipId}",
  method: "GET",
  operationId: "deprecated-customer-get-customer-membership-specific",
};

/** Leave a Customer. */
export const deprecatedCustomerLeaveCustomer: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsCustomerMembershipIdLeave.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsCustomerMembershipIdLeave.Delete.Parameters.Header>
  >
> = {
  path: "/v2/memberships/customer/{membershipId}/leave",
  method: "DELETE",
  operationId: "deprecated-customer-leave-customer",
};

/** List all CustomerMemberships for the executing user. */
export const deprecatedCustomerListCustomerMembershipsForUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsCustomers.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsCustomers.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2MembershipsCustomers.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/memberships/customers",
  method: "GET",
  operationId: "deprecated-customer-list-customer-memberships-for-user",
};

/** List all CustomerInvites for the executing user. */
export const deprecatedCustomerListOwnCustomerInvites: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomersMe.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomersMe.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2InvitesCustomersMe.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/invites/customers/me",
  method: "GET",
  operationId: "deprecated-customer-list-own-customer-invites",
};

/** Resend the mail for a CustomerInvite. */
export const deprecatedCustomerResendCustomerInviteMail: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomerInviteIdResend.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomerInviteIdResend.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomerInviteIdResend.Post.Parameters.Header>
  >
> = {
  path: "/v2/invites/customer/{inviteId}/resend",
  method: "POST",
  operationId: "deprecated-customer-resend-customer-invite-mail",
};

/** Revoke a CustomerInvite. */
export const deprecatedCustomerRevokeCustomerInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomerInviteId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesCustomerInviteId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/invites/customer/{inviteId}",
  method: "DELETE",
  operationId: "deprecated-customer-revoke-customer-invite",
};

/** List MySQLDatabases belonging to a Project. */
export const deprecatedDatabaseListMysqlDatabases: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseMysqlDatabases.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseMysqlDatabases.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseMysqlDatabases.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/database/mysql-databases",
  method: "GET",
  operationId: "deprecated-database-list-mysql-databases",
};

/** Create a MySQLDatabase. */
export const deprecatedDatabaseCreateMysqlDatabase: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseMysqlDatabases.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseMysqlDatabases.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseMysqlDatabases.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseMysqlDatabases.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/database/mysql-databases",
  method: "POST",
  operationId: "deprecated-database-create-mysql-database",
};

/** Create a MySQLDatabase with User. */
export const deprecatedDatabaseCreateMysqlDatabaseWithUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseMysqlDatabasesWithUser.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseMysqlDatabasesWithUser.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseMysqlDatabasesWithUser.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseMysqlDatabasesWithUser.Post.Responses.$202.Content.ApplicationJson,
    202,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/database/mysql-databases-with-user",
  method: "POST",
  operationId: "deprecated-database-create-mysql-database-with-user",
};

/** List RedisDatabases belonging to a project. */
export const deprecatedDatabaseListRedisDatabases: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseRedisDatabases.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseRedisDatabases.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseRedisDatabases.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/database/redis-databases",
  method: "GET",
  operationId: "deprecated-database-list-redis-databases",
};

/** Create a RedisDatabase. */
export const deprecatedDatabaseCreateRedisDatabase: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseRedisDatabases.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseRedisDatabases.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseRedisDatabases.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseRedisDatabases.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/database/redis-databases",
  method: "POST",
  operationId: "deprecated-database-create-redis-database",
};

/** Get a MySQLUser. */
export const deprecatedDatabaseGetMysqlUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/mysql-databases/users/{userId}",
  method: "GET",
  operationId: "deprecated-database-get-mysql-user",
};

/** Update a MySQLUser. */
export const deprecatedDatabaseUpdateMysqlUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserId.Put.Parameters.Header>
  >
> = {
  path: "/v2/mysql-databases/users/{userId}",
  method: "PUT",
  operationId: "deprecated-database-update-mysql-user",
};

/** Delete a MySQLUser. */
export const deprecatedDatabaseDeleteMysqlUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/mysql-databases/users/{userId}",
  method: "DELETE",
  operationId: "deprecated-database-delete-mysql-user",
};

/** Disable a MySQLUser. */
export const deprecatedDatabaseDisableMysqlUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserIdDisable.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserIdDisable.Put.Parameters.Header>
  >
> = {
  path: "/v2/mysql-databases/users/{userId}/disable",
  method: "PUT",
  operationId: "deprecated-database-disable-mysql-user",
};

/** Enable a MySQLUser. */
export const deprecatedDatabaseEnableMysqlUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserIdEnable.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserIdEnable.Put.Parameters.Header>
  >
> = {
  path: "/v2/mysql-databases/users/{userId}/enable",
  method: "PUT",
  operationId: "deprecated-database-enable-mysql-user",
};

/** Get a MySQLUser's PhpMyAdmin-URL. */
export const deprecatedDatabaseGetMysqlUserPhpMyAdminUrl: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserIdPhpMyAdmin.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserIdPhpMyAdmin.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserIdPhpMyAdmin.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/mysql-databases/users/{userId}/php-my-admin",
  method: "GET",
  operationId: "deprecated-database-get-mysql-user-php-my-admin-url",
};

/** List available MySQL character sets and collations for a MySQLVersion. */
export const deprecatedDatabaseListMysqlCharsets: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlCharsetsVersion.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlCharsetsVersion.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2MysqlCharsetsVersion.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/mysql-charsets/{version}",
  method: "GET",
  operationId: "deprecated-database-list-mysql-charsets",
};

/** List available MySQLVersions for a Project. */
export const deprecatedDatabaseListMysqlVersions: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseMysqlVersions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseMysqlVersions.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseMysqlVersions.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/database/mysql-versions",
  method: "GET",
  operationId: "deprecated-database-list-mysql-versions",
};

/** List available Redis versions for a project. */
export const deprecatedDatabaseListRedisVersions: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseRedisVersions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseRedisVersions.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdDatabaseRedisVersions.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/database/redis-versions",
  method: "GET",
  operationId: "deprecated-database-list-redis-versions",
};

/** Update a MySQLUser's password. */
export const deprecatedDatabaseSetMysqlUserPassword: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserIdPassword.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserIdPassword.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserIdPassword.Put.Parameters.Header>
  >
> = {
  path: "/v2/mysql-databases/users/{userId}/password",
  method: "PUT",
  operationId: "deprecated-database-set-mysql-user-password",
};

/** Update a MySQLUser's password. */
export const deprecatedDatabaseUpdateMysqlUserPassword: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserIdPassword.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserIdPassword.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MysqlDatabasesUsersUserIdPassword.Patch.Parameters.Header>
  >
> = {
  path: "/v2/mysql-databases/users/{userId}/password",
  method: "PATCH",
  operationId: "deprecated-database-update-mysql-user-password",
};

/** Get InvoiceSettings of a Customer. */
export const deprecatedInvoiceInvoiceSettings: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesettings.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesettings.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesettings.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/customers/{customerId}/invoicesettings",
  method: "GET",
  operationId: "deprecated-invoice-invoice-settings",
};

/** Update InvoiceSettings of a Customer. */
export const deprecatedInvoiceUpdateInvoiceSettings: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesettings.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesettings.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesettings.Put.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesettings.Put.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/customers/{customerId}/invoicesettings",
  method: "PUT",
  operationId: "deprecated-invoice-update-invoice-settings",
};

/** Request a PlacementGroup avatar upload. */
export const deprecatedPlacementGroupPlacementgroupAvatarRequestUpload: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2PlacementgroupsPlacementGroupIdAvatar.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2PlacementgroupsPlacementGroupIdAvatar.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2PlacementgroupsPlacementGroupIdAvatar.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2PlacementgroupsPlacementGroupIdAvatar.Post.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/placementgroups/{placementGroupId}/avatar",
  method: "POST",
  operationId:
    "deprecated-placement-group-placementgroup-avatar-request-upload",
};

/** Delete a PlacementGroup's avatar. */
export const deprecatedPlacementGroupPlacementgroupAvatarRemove: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2PlacementgroupsPlacementGroupIdAvatar.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2PlacementgroupsPlacementGroupIdAvatar.Delete.Parameters.Header>
  >
> = {
  path: "/v2/placementgroups/{placementGroupId}/avatar",
  method: "DELETE",
  operationId: "deprecated-placement-group-placementgroup-avatar-remove",
};

/** Get a PlacementGroup. */
export const deprecatedPlacementGroupPlacementgroupDetails: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2PlacementgroupsPlacementGroupId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2PlacementgroupsPlacementGroupId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2PlacementgroupsPlacementGroupId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/placementgroups/{placementGroupId}",
  method: "GET",
  operationId: "deprecated-placement-group-placementgroup-details",
};

/** List PlacementGroups for an Organization or User. */
export const deprecatedPlacementGroupPlacementgroupList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Placementgroups.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Placementgroups.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2Placementgroups.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/placementgroups",
  method: "GET",
  operationId: "deprecated-placement-group-placementgroup-list",
};

/** Update a PlacementGroup's description. */
export const deprecatedPlacementGroupPlacementgroupUpdateDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2PlacementgroupsPlacementGroupIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2PlacementgroupsPlacementGroupIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2PlacementgroupsPlacementGroupIdDescription.Patch.Parameters.Header>
  >
> = {
  path: "/v2/placementgroups/{placementGroupId}/description",
  method: "PATCH",
  operationId: "deprecated-placement-group-placementgroup-update-description",
};

/** Accept a ProjectInvite. */
export const deprecatedProjectAcceptProjectInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2InvitesProjectInviteIdAccept.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesProjectInviteIdAccept.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesProjectInviteIdAccept.Post.Parameters.Header>
  >
> = {
  path: "/v2/invites/project/{inviteId}/accept",
  method: "POST",
  operationId: "deprecated-project-accept-project-invite",
};

/** Accept a ProjectInvite via a token. */
export const deprecatedProjectAcceptProjectInviteWithToken: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2InvitesProjectAccept.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesProjectAccept.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesProjectAccept.Post.Parameters.Header>
  >
> = {
  path: "/v2/invites/project/accept/",
  method: "POST",
  operationId: "deprecated-project-accept-project-invite-with-token",
};

/** Update a ProjectMembership. */
export const deprecatedProjectChangeProjectMembership: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2MembershipsProjectMembershipId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsProjectMembershipId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsProjectMembershipId.Put.Parameters.Header>
  >
> = {
  path: "/v2/memberships/project/{membershipId}",
  method: "PUT",
  operationId: "deprecated-project-change-project-membership",
};

/** Delete a ProjectMembership. */
export const deprecatedProjectDeleteProjectMembership: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsProjectMembershipId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsProjectMembershipId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/memberships/project/{membershipId}",
  method: "DELETE",
  operationId: "deprecated-project-delete-project-membership",
};

/** Create a Project belonging to a PlacementGroup. */
export const deprecatedProjectCreateSubproject: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2PlacementgroupsPlacementGroupIdProjects.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2PlacementgroupsPlacementGroupIdProjects.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2PlacementgroupsPlacementGroupIdProjects.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2PlacementgroupsPlacementGroupIdProjects.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/placementgroups/{placementGroupId}/projects",
  method: "POST",
  operationId: "deprecated-project-create-subproject",
};

/** Decline a ProjectInvite. */
export const deprecatedProjectDeclineProjectInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesProjectInviteIdDecline.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesProjectInviteIdDecline.Delete.Parameters.Header>
  >
> = {
  path: "/v2/invites/project/{inviteId}/decline",
  method: "DELETE",
  operationId: "deprecated-project-decline-project-invite",
};

/** Get a ProjectInvite. */
export const deprecatedProjectGetProjectInviteSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesProjectsSpecificInviteId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesProjectsSpecificInviteId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2InvitesProjectsSpecificInviteId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/invites/projects/specific/{inviteId}",
  method: "GET",
  operationId: "deprecated-project-get-project-invite-specific",
};

/** Get a ProjectMembership */
export const deprecatedProjectGetProjectMembershipSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsProjectsProjectIdSpecificMembershipId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsProjectsProjectIdSpecificMembershipId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2MembershipsProjectsProjectIdSpecificMembershipId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/memberships/projects/{projectId}/specific/{membershipId}",
  method: "GET",
  operationId: "deprecated-project-get-project-membership-specific",
};

/** Leave a Project. */
export const deprecatedProjectLeaveProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsProjectMembershipIdLeave.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsProjectMembershipIdLeave.Delete.Parameters.Header>
  >
> = {
  path: "/v2/memberships/project/{membershipId}/leave",
  method: "DELETE",
  operationId: "deprecated-project-leave-project",
};

/** List all ProjectInvites for the executing user. */
export const deprecatedProjectListOwnProjectInvites: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesProjectsMe.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesProjectsMe.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2InvitesProjectsMe.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/invites/projects/me",
  method: "GET",
  operationId: "deprecated-project-list-own-project-invites",
};

/** List ProjectMemberships belonging to the executing user. */
export const deprecatedProjectListProjectMembershipsForUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsProjects.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsProjects.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2MembershipsProjects.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/memberships/projects",
  method: "GET",
  operationId: "deprecated-project-list-project-memberships-for-user",
};

/** Resend the mail for a ProjectInvite. */
export const deprecatedProjectResendProjectInviteMail: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2InvitesProjectInviteIdResend.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesProjectInviteIdResend.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesProjectInviteIdResend.Post.Parameters.Header>
  >
> = {
  path: "/v2/invites/project/{inviteId}/resend",
  method: "POST",
  operationId: "deprecated-project-resend-project-invite-mail",
};

/** Revoke a ProjectInvite. */
export const deprecatedProjectRevokeProjectInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesProjectInviteId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesProjectInviteId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/invites/project/{inviteId}",
  method: "DELETE",
  operationId: "deprecated-project-revoke-project-invite",
};

/** Update a Project's description. */
export const deprecatedProjectUpdateDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsIdDescription.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsIdDescription.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsIdDescription.Put.Parameters.Header>
  >
> = {
  path: "/v2/projects/{id}/description",
  method: "PUT",
  operationId: "deprecated-project-update-description",
};

/** Update a Project's description. */
export const projectUpdateProjectDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsIdDescription.Patch.Parameters.Header>
  >
> = {
  path: "/v2/projects/{id}/description",
  method: "PATCH",
  operationId: "project-update-project-description",
};

/** Update a Cronjob's app id. */
export const deprecatedcronjobServiceCronjobAddAppid: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsCronjobsCronjobIdAppid.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsCronjobsCronjobIdAppid.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsCronjobsCronjobIdAppid.Put.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsCronjobsCronjobIdAppid.Put.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/projects/cronjobs/{cronjobId}/appid",
  method: "PUT",
  operationId: "deprecatedcronjob-service-cronjob-add-appid",
};

/** updates a-records for a specific zone */
export const dnsRecordAsetCustom: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedCustom.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedCustom.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedCustom.Put.Parameters.Header>
  >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/acombined/custom",
  method: "PUT",
  operationId: "dns-record-a-set-custom",
};

/** set a-records managed by ingress for a specific zone */
export const dnsRecordAsetManagedByIngress: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedManagedIngress.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedManagedIngress.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedManagedIngress.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetAcombinedManagedIngress.Post.Responses.$204.Content.ApplicationJson,
    204,
    "application/json"
  >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/acombined/managed/ingress",
  method: "POST",
  operationId: "dns-record-a-set-managed-by-ingress",
};

/** updates cname-record for a specific zone */
export const dnsRecordCnameSet: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetCname.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetCname.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetCname.Put.Parameters.Header>
  >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/cname",
  method: "PUT",
  operationId: "dns-record-cname-set",
};

/** updates mx-records for a specific zone */
export const dnsRecordMxSetCustom: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetMxCustom.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetMxCustom.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetMxCustom.Put.Parameters.Header>
  >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/mx/custom",
  method: "PUT",
  operationId: "dns-record-mx-set-custom",
};

/** sets mx-records to managed for a specific zone */
export const dnsRecordMxSetManaged: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetMxManaged.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetMxManaged.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetMxManaged.Post.Parameters.Header>
  >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/mx/managed",
  method: "POST",
  operationId: "dns-record-mx-set-managed",
};

/** updates txt-records for a specific zone */
export const dnsRecordTxtSet: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetTxt.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetTxt.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneIdRecordsetTxt.Put.Parameters.Header>
  >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/txt",
  method: "PUT",
  operationId: "dns-record-txt-set",
};

/** gets a specific zone */
export const dnsZoneGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DnsZonesZoneId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2DnsZonesZoneId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/dns/zones/{zoneId}",
  method: "GET",
  operationId: "dns-zone-get-specific",
};

/** gets all dns zones by project id */
export const dnsZonesForProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDnsZones.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDnsZones.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdDnsZones.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/dns/zones",
  method: "GET",
  operationId: "dns-zones-for-project",
};

/** Abort a declare process. */
export const domainServiceAbortDeclareProcess: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarations.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarations.Delete.Parameters.Header>
  >
> = {
  path: "/v2/domains/{domainId}/declarations",
  method: "DELETE",
  operationId: "domain-service-abort-declare-process",
};

/** Change the ownerC of a domain. */
export const domainServiceChangeOwnercOfDomain: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdHandlesOwnerc.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdHandlesOwnerc.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdHandlesOwnerc.Put.Parameters.Header>
  >
> = {
  path: "/v2/domains/{domainId}/handles/ownerc",
  method: "PUT",
  operationId: "domain-service-change-ownerc-of-domain",
};

/** Change the Project relation of a Domain. */
export const domainServiceChangeProjectOfDomain: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdProjectId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdProjectId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdProjectId.Put.Parameters.Header>
  >
> = {
  path: "/v2/domains/{domainId}/projectId",
  method: "PUT",
  operationId: "domain-service-change-project-of-domain",
};

/** Check if a Domain is available to register. */
export const domainServiceCheckDomainAvailability: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2Domains.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2Domains.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Domains.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2Domains.Post.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/domains",
  method: "POST",
  operationId: "domain-service-check-domain-availability",
};

/** Create an AuthCode for a Domains transfer out process. */
export const domainServiceCreateAuthcodeForDomain: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/domains/{domainId}/actions/create-authcode",
  method: "POST",
  operationId: "domain-service-create-authcode-for-domain",
};

/** Create an AuthCode2. */
export const domainServiceCreateAuthcode2ForDomain: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode2.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode2.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsCreateAuthcode2.Post.Parameters.Header>
  >
> = {
  path: "/v2/domains/{domainId}/actions/create-authcode2",
  method: "POST",
  operationId: "domain-service-create-authcode2-for-domain",
};

/** Change all nameservers of a Domain. */
export const domainServiceDeclareNameservers: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdNameservers.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdNameservers.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdNameservers.Put.Parameters.Header>
  >
> = {
  path: "/v2/domains/{domainId}/nameservers",
  method: "PUT",
  operationId: "domain-service-declare-nameservers",
};

/** Update an AuthCode. */
export const domainServiceDeclareProcessChangeAuthcode: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsAuthcode.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsAuthcode.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsAuthcode.Put.Parameters.Header>
  >
> = {
  path: "/v2/domains/{domainId}/declarations/authcode",
  method: "PUT",
  operationId: "domain-service-declare-process-change-authcode",
};

/** Update a Domain's OwnerC handle. */
export const domainServiceDeclareProcessChangeHandles: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsHandles.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsHandles.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdDeclarationsHandles.Put.Parameters.Header>
  >
> = {
  path: "/v2/domains/{domainId}/declarations/handles",
  method: "PUT",
  operationId: "domain-service-declare-process-change-handles",
};

/** Get a Domain. */
export const domainServiceGetDomain: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2DomainsDomainId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/domains/{domainId}",
  method: "GET",
  operationId: "domain-service-get-domain",
};

/** Delete a Domain. */
export const domainServiceDeleteDomain: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/domains/{domainId}",
  method: "DELETE",
  operationId: "domain-service-delete-domain",
};

/** Get a HandleSchema. */
export const domainServiceGetHandleFields: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsHandleSchemaDomainName.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsHandleSchemaDomainName.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2DomainsHandleSchemaDomainName.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/domains/handle-schema/{domainName}",
  method: "GET",
  operationId: "domain-service-get-handle-fields",
};

/** Get a domain ownership. */
export const domainServiceGetSpecificDomainOwnership: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/domain-ownerships/{domainOwnershipId}",
  method: "GET",
  operationId: "domain-service-get-specific-domain-ownership",
};

/** Verify a domain ownership. */
export const domainServiceVerifyDomainOwnership: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainOwnershipsDomainOwnershipId.Post.Parameters.Header>
  >
> = {
  path: "/v2/domain-ownerships/{domainOwnershipId}",
  method: "POST",
  operationId: "domain-service-verify-domain-ownership",
};

/** Get a toplevel domain. */
export const domainServiceGetToplevelDomain: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ToplevelDomainsTld.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ToplevelDomainsTld.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ToplevelDomainsTld.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/toplevel-domains/{tld}",
  method: "GET",
  operationId: "domain-service-get-toplevel-domain",
};

/** List all domain ownerships of a project. */
export const domainServiceListDomainOwnerships: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDomainOwnerships.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDomainOwnerships.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdDomainOwnerships.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/domain-ownerships",
  method: "GET",
  operationId: "domain-service-list-domain-ownerships",
};

/** List Domains belonging to a Project. */
export const domainServiceListDomains: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDomains.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDomains.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdDomains.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/domains",
  method: "GET",
  operationId: "domain-service-list-domains",
};

/** List all supported toplevel domains. */
export const domainServiceListToplevelDomains: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ToplevelDomains.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ToplevelDomains.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ToplevelDomains.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/toplevel-domains",
  method: "GET",
  operationId: "domain-service-list-toplevel-domains",
};

/** Resend a domain email. */
export const domainServiceResendDomainEmail: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsResendEmail.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsResendEmail.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DomainsDomainIdActionsResendEmail.Post.Parameters.Header>
  >
> = {
  path: "/v2/domains/{domainId}/actions/resend-email",
  method: "POST",
  operationId: "domain-service-resend-domain-email",
};

/** Create a File. */
export const fileCreateFile: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2Files.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2Files.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Files.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2Files.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/files",
  method: "POST",
  operationId: "file-create-file",
};

/** Get a File's meta. */
export const fileGetFileMeta: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2FilesIdMeta.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2FilesIdMeta.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2FilesIdMeta.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/files/{id}/meta",
  method: "GET",
  operationId: "file-get-file-meta",
};

/** Get a Token's upload rules. */
export const fileGetFileTokenRules: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2FileTokenRulesToken.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2FileTokenRulesToken.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2FileTokenRulesToken.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/file-token-rules/{token}",
  method: "GET",
  operationId: "file-get-file-token-rules",
};

/** Get a Type's upload rules. */
export const fileGetFileTypeRules: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2FileTypeRulesName.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2FileTypeRulesName.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2FileTypeRulesName.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/file-type-rules/{name}",
  method: "GET",
  operationId: "file-get-file-type-rules",
};

/** Get a File. */
export const fileGetFile: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2FilesId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2FilesId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldAPIV2.Paths.V2FilesId.Get.Responses.$200.Content.ApplicationOctetStream,
      200,
      "application/octet-stream"
    >
  | Response<
      MittwaldAPIV2.Paths.V2FilesId.Get.Responses.$200.Content.Base64,
      200,
      "base64"
    >
> = {
  path: "/v2/files/{id}",
  method: "GET",
  operationId: "file-get-file",
};

/** Create an Ingress. */
export const ingressServiceCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2Ingresses.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2Ingresses.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Ingresses.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2Ingresses.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/ingresses/",
  method: "POST",
  operationId: "ingress-service-create",
};

/** Get an Ingress. */
export const ingressServiceGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2IngressesIngressId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/ingresses/{ingressId}",
  method: "GET",
  operationId: "ingress-service-get-specific",
};

/** Delete an Ingress. */
export const ingressServiceDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/ingresses/{ingressId}",
  method: "DELETE",
  operationId: "ingress-service-delete",
};

/** List Ingresses belonging to a project. */
export const ingressServiceList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Ingresses.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Ingresses.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2Ingresses.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/ingresses",
  method: "GET",
  operationId: "ingress-service-list",
};

/** Update an Ingresses paths. */
export const ingressServicePaths: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdPaths.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdPaths.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdPaths.Put.Parameters.Header>
  >
> = {
  path: "/v2/ingresses/{ingressId}/paths",
  method: "PUT",
  operationId: "ingress-service-paths",
};

/** Update an Ingresses tls settings. */
export const ingressServiceTls: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Put.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2IngressesIngressIdTls.Put.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/ingresses/{ingressId}/tls",
  method: "PUT",
  operationId: "ingress-service-tls",
};

/** Get details of an Invoice. */
export const invoiceDetailOfInvoice: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesInvoiceId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesInvoiceId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoicesInvoiceId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/customers/{customerId}/invoices/{invoiceId}",
  method: "GET",
  operationId: "invoice-detail-of-invoice",
};

/** Get InvoiceSettings of a Customer. */
export const invoiceGetDetailOfInvoiceSettings: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/customers/{customerId}/invoice-settings",
  method: "GET",
  operationId: "invoice-get-detail-of-invoice-settings",
};

/** Update InvoiceSettings of a Customer. */
export const invoiceUpdateInvoiceSettings: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Put.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Put.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/customers/{customerId}/invoice-settings",
  method: "PUT",
  operationId: "invoice-update-invoice-settings",
};

/** List Invoices of a Customer. */
export const invoiceListCustomerInvoices: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoices.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoices.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoices.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/customers/{customerId}/invoices",
  method: "GET",
  operationId: "invoice-list-customer-invoices",
};

/** Get all deliveryboxes by project ID */
export const mailServiceDeliveryboxList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/deliveryboxes",
  method: "GET",
  operationId: "mail-service-deliverybox-list",
};

/** Create a new deliverybox */
export const mailServiceDeliveryboxCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryboxes.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/deliveryboxes",
  method: "POST",
  operationId: "mail-service-deliverybox-create",
};

/** Get a specific deliverybox */
export const mailServiceDeliveryboxGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2DeliveryboxesId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/deliveryboxes/{id}",
  method: "GET",
  operationId: "mail-service-deliverybox-get-specific",
};

/** Delete a specific deliverybox */
export const mailServiceDeliveryboxDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/deliveryboxes/{id}",
  method: "DELETE",
  operationId: "mail-service-deliverybox-delete",
};

/** Update the description of an deliverybox */
export const mailServiceDeliveryboxUpdateDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdDescription.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdDescription.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdDescription.Put.Parameters.Header>
  >
> = {
  path: "/v2/deliveryboxes/{id}/description",
  method: "PUT",
  operationId: "mail-service-deliverybox-update-description",
};

/** Update the password for a specific deliverybox */
export const mailServiceDeliveryboxUpdatePassword: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdPassword.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdPassword.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2DeliveryboxesIdPassword.Put.Parameters.Header>
  >
> = {
  path: "/v2/deliveryboxes/{id}/password",
  method: "PUT",
  operationId: "mail-service-deliverybox-update-password",
};

/** Get all mail addresses for a project ID */
export const mailServiceMailaddressList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/mailaddresses",
  method: "GET",
  operationId: "mail-service-mailaddress-list",
};

/** Create a new mail address */
export const mailServiceMailaddressCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdMailaddresses.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/mailaddresses",
  method: "POST",
  operationId: "mail-service-mailaddress-create",
};

/** Get a specific mail address */
export const mailServiceMailaddressGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2MailaddressesId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/mailaddresses/{id}",
  method: "GET",
  operationId: "mail-service-mailaddress-get-specific",
};

/** Delete a specific mail address */
export const mailServiceMailaddressDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/mailaddresses/{id}",
  method: "DELETE",
  operationId: "mail-service-mailaddress-delete",
};

/** Update mail-address */
export const mailServiceMailaddressUpdateAddress: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAddress.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAddress.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAddress.Put.Parameters.Header>
  >
> = {
  path: "/v2/mailaddresses/{id}/address",
  method: "PUT",
  operationId: "mail-service-mailaddress-update-address",
};

/** Update the auto responder of a mail address */
export const mailServiceMailaddressUpdateAutoresponder: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAutoResponder.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAutoResponder.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdAutoResponder.Put.Parameters.Header>
  >
> = {
  path: "/v2/mailaddresses/{id}/autoResponder",
  method: "PUT",
  operationId: "mail-service-mailaddress-update-autoresponder",
};

/** Enable or disable the catchAll flag for a specific mail address */
export const mailServiceMailaddressUpdateCatchall: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdCatchAll.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdCatchAll.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdCatchAll.Put.Parameters.Header>
  >
> = {
  path: "/v2/mailaddresses/{id}/catchAll",
  method: "PUT",
  operationId: "mail-service-mailaddress-update-catchall",
};

/** Update the addresses an email is forwarded to */
export const mailServiceMailaddressUpdateForwardaddresses: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdForwardaddresses.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdForwardaddresses.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdForwardaddresses.Put.Parameters.Header>
  >
> = {
  path: "/v2/mailaddresses/{id}/forwardaddresses",
  method: "PUT",
  operationId: "mail-service-mailaddress-update-forwardaddresses",
};

/** Update the password for a specific mail address */
export const mailServiceMailaddressUpdatePassword: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdPassword.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdPassword.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdPassword.Put.Parameters.Header>
  >
> = {
  path: "/v2/mailaddresses/{id}/password",
  method: "PUT",
  operationId: "mail-service-mailaddress-update-password",
};

/** Update the quota of a mailbox */
export const mailServiceMailaddressUpdateQuota: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdQuota.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdQuota.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdQuota.Put.Parameters.Header>
  >
> = {
  path: "/v2/mailaddresses/{id}/quota",
  method: "PUT",
  operationId: "mail-service-mailaddress-update-quota",
};

/** Update the spamprotection of a mailbox */
export const mailServiceMailaddressUpdateSpamprotection: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdSpamprotection.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdSpamprotection.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MailaddressesIdSpamprotection.Put.Parameters.Header>
  >
> = {
  path: "/v2/mailaddresses/{id}/spamprotection",
  method: "PUT",
  operationId: "mail-service-mailaddress-update-spamprotection",
};

/** Get settings for a given project ID */
export const mailServiceProjectsettingGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettings.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettings.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettings.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/mailsettings",
  method: "GET",
  operationId: "mail-service-projectsetting-get-specific",
};

/** Update blacklist for a given project ID */
export const mailServiceProjectsettingUpdateBlacklist: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsBlacklist.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsBlacklist.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsBlacklist.Put.Parameters.Header>
  >
> = {
  path: "/v2/projects/{projectId}/mailsettings/blacklist",
  method: "PUT",
  operationId: "mail-service-projectsetting-update-blacklist",
};

/** Update whitelist for a given project ID */
export const mailServiceProjectsettingUpdateWhitelist: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsWhitelist.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsWhitelist.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMailsettingsWhitelist.Put.Parameters.Header>
  >
> = {
  path: "/v2/projects/{projectId}/mailsettings/whitelist",
  method: "PUT",
  operationId: "mail-service-projectsetting-update-whitelist",
};

/** Accept an invite. */
export const membershipAcceptInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2InvitesInviteIdActionsAccept.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesInviteIdActionsAccept.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesInviteIdActionsAccept.Post.Parameters.Header>
  >
> = {
  path: "/v2/invites/{inviteId}/actions/accept",
  method: "POST",
  operationId: "membership-accept-invite",
};

/** Decline an invite. */
export const membershipDeclineInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2InvitesInviteIdActionsDecline.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesInviteIdActionsDecline.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesInviteIdActionsDecline.Post.Parameters.Header>
  >
> = {
  path: "/v2/invites/{inviteId}/actions/decline",
  method: "POST",
  operationId: "membership-decline-invite",
};

/** Get a membership */
export const membershipGetMembership: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsMembershipId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsMembershipId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2MembershipsMembershipId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/memberships/{membershipId}",
  method: "GET",
  operationId: "membership-get-membership",
};

/** Delete a membership. */
export const membershipDeleteMembership: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsMembershipId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsMembershipId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/memberships/{membershipId}",
  method: "DELETE",
  operationId: "membership-delete-membership",
};

/** Get an invite. */
export const membershipGetInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesInviteIdentifier.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesInviteIdentifier.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2InvitesInviteIdentifier.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/invites/{inviteIdentifier}",
  method: "GET",
  operationId: "membership-get-invite",
};

/** Leave a membership. */
export const membershipLeaveMembership: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2MembershipsMembershipIdActionsLeave.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsMembershipIdActionsLeave.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsMembershipIdActionsLeave.Post.Parameters.Header>
  >
> = {
  path: "/v2/memberships/{membershipId}/actions/leave",
  method: "POST",
  operationId: "membership-leave-membership",
};

/** List invites for the user. */
export const membershipListInvites: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Invites.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Invites.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2Invites.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/invites",
  method: "GET",
  operationId: "membership-list-invites",
};

/** List all memberships for the user. */
export const membershipListMemberships: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Memberships.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Memberships.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2Memberships.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/memberships",
  method: "GET",
  operationId: "membership-list-memberships",
};

/** Resend the mail for an invite. */
export const membershipResendInviteMail: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2InvitesInviteIdActionsResend.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesInviteIdActionsResend.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesInviteIdActionsResend.Post.Parameters.Header>
  >
> = {
  path: "/v2/invites/{inviteId}/actions/resend",
  method: "POST",
  operationId: "membership-resend-invite-mail",
};

/** Revoke an invite. */
export const membershipRevokeInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesInviteId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesInviteId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/invites/{inviteId}",
  method: "DELETE",
  operationId: "membership-revoke-invite",
};

/** getting the subscription status of the subscription */
export const newsletterGetInfo: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptionsEmail.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptionsEmail.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2NewsletterSubscriptionsEmail.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/newsletter/subscriptions/{email}",
  method: "GET",
  operationId: "newsletter-get-info",
};

/** unsubscribe a user from the mStudio newsletter */
export const newsletterUnsubscribeUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptionsEmail.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptionsEmail.Delete.Parameters.Header>
  >
> = {
  path: "/v2/newsletter/subscriptions/{email}",
  method: "DELETE",
  operationId: "newsletter-unsubscribe-user",
};

/** subscribe a user to the mStudio newsletter */
export const newsletterSubscribeUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptions.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptions.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2NewsletterSubscriptions.Post.Parameters.Header>
  >,
  | Response<
      MittwaldAPIV2.Paths.V2NewsletterSubscriptions.Post.Responses.$200.Content.ApplicationJson,
      200,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2NewsletterSubscriptions.Post.Responses.$400.Content.ApplicationJson,
      400,
      "application/json"
    >
> = {
  path: "/v2/newsletter/subscriptions",
  method: "POST",
  operationId: "newsletter-subscribe-user",
};

/** Get the counts for unread notifications of the user. */
export const notificationsCountUnreadNotifications: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsUnreadCounts.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsUnreadCounts.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2NotificationsUnreadCounts.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/notifications/unread-counts",
  method: "GET",
  operationId: "notifications-count-unread-notifications",
};

/** List all unread notifications */
export const notificationsListNotifications: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Notifications.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Notifications.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2Notifications.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/notifications",
  method: "GET",
  operationId: "notifications-list-notifications",
};

/** Mark all notifications as read. */
export const notificationsReadAllNotifications: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2NotificationsStatus.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsStatus.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsStatus.Put.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2NotificationsStatus.Put.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/notifications/status",
  method: "PUT",
  operationId: "notifications-read-all-notifications",
};

/** Mark notification as read. */
export const notificationsReadNotification: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2NotificationsMessageIdStatus.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsMessageIdStatus.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2NotificationsMessageIdStatus.Put.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2NotificationsMessageIdStatus.Put.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/notifications/{messageId}/status",
  method: "PUT",
  operationId: "notifications-read-notification",
};

/** Prospace tariff change order */
export const orderChangeProjecthosting: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsChangeProjecthosting.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsChangeProjecthosting.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsChangeProjecthosting.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2OrdersActionsChangeProjecthosting.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/orders/actions/change-projecthosting",
  method: "POST",
  operationId: "order-change-projecthosting",
};

/** SpaceServer order */
export const orderChangeServer: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsChangeServer.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsChangeServer.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsChangeServer.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2OrdersActionsChangeServer.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/orders/actions/change-server",
  method: "POST",
  operationId: "order-change-server",
};

/** Single order for customer */
export const orderGetOrder: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersOrderId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersOrderId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2OrdersOrderId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/orders/{orderId}",
  method: "GET",
  operationId: "order-get-order",
};

/** Get list of order of a customer */
export const orderListCustomerOrders: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdOrders.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2CustomersCustomerIdOrders.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2CustomersCustomerIdOrders.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/customers/{customerId}/orders",
  method: "GET",
  operationId: "order-list-customer-orders",
};

/** Get list of orders of a project. */
export const orderListProjectOrders: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdOrders.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdOrders.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdOrders.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/orders",
  method: "GET",
  operationId: "order-list-project-orders",
};

/** Order a domain. */
export const orderOrderDomain: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsOrderDomain.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsOrderDomain.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsOrderDomain.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2OrdersActionsOrderDomain.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/orders/actions/order-domain",
  method: "POST",
  operationId: "order-order-domain",
};

/** Prospace order */
export const orderOrderProjecthosting: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsOrderProjecthosting.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsOrderProjecthosting.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsOrderProjecthosting.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2OrdersActionsOrderProjecthosting.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/orders/actions/order-projecthosting",
  method: "POST",
  operationId: "order-order-projecthosting",
};

/** SpaceServer order */
export const orderOrderServer: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsOrderServer.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsOrderServer.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsOrderServer.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2OrdersActionsOrderServer.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/orders/actions/order-server",
  method: "POST",
  operationId: "order-order-server",
};

/** Preview Prospace tariff change */
export const orderPreviewChangeProjecthosting: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsPreviewChangeProjecthosting.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsPreviewChangeProjecthosting.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsPreviewChangeProjecthosting.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2OrdersActionsPreviewChangeProjecthosting.Post.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/orders/actions/preview-change-projecthosting",
  method: "POST",
  operationId: "order-preview-change-projecthosting",
};

/** Preview SpaceServer tariff change */
export const orderPreviewChangeServer: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsPreviewChangeServer.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsPreviewChangeServer.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsPreviewChangeServer.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2OrdersActionsPreviewChangeServer.Post.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/orders/actions/preview-change-server",
  method: "POST",
  operationId: "order-preview-change-server",
};

/** Preview domain order. */
export const orderPreviewOrderDomain: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsPreviewOrderDomain.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsPreviewOrderDomain.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsPreviewOrderDomain.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2OrdersActionsPreviewOrderDomain.Post.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/orders/actions/preview-order-domain",
  method: "POST",
  operationId: "order-preview-order-domain",
};

/** Preview Prospace order */
export const orderPreviewOrderProjecthosting: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsPreviewOrderProjecthosting.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsPreviewOrderProjecthosting.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsPreviewOrderProjecthosting.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2OrdersActionsPreviewOrderProjecthosting.Post.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/orders/actions/preview-order-projecthosting",
  method: "POST",
  operationId: "order-preview-order-projecthosting",
};

/** Preview SpaceServer order */
export const orderPreviewOrderServer: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsPreviewOrderServer.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsPreviewOrderServer.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2OrdersActionsPreviewOrderServer.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2OrdersActionsPreviewOrderServer.Post.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/orders/actions/preview-order-server",
  method: "POST",
  operationId: "order-preview-order-server",
};

/** Get a password policy. */
export const passwordValidationServiceGetPasswordPolicy: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2PasswordPoliciesPath.Get.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2PasswordPoliciesPath.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2PasswordPoliciesPath.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2PasswordPoliciesPath.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/password/policies/{path}",
  method: "GET",
  operationId: "password-validation-service-get-password-policy",
};

/** Update a ProjectMembership. */
export const projectChangeProjectMembership: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectProjectIdMembershipsMembershipId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectProjectIdMembershipsMembershipId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectProjectIdMembershipsMembershipId.Put.Parameters.Header>
  >
> = {
  path: "/v2/project/{projectId}/memberships/{membershipId}",
  method: "PUT",
  operationId: "project-change-project-membership",
};

/** Create a ProjectInvite. */
export const projectCreateProjectInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2InvitesProject.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesProject.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesProject.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2InvitesProject.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/invites/project",
  method: "POST",
  operationId: "project-create-project-invite",
};

/** Create a Project belonging to a Server. */
export const projectCreateProject: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdProjects.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdProjects.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdProjects.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ServersServerIdProjects.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/servers/{serverId}/projects",
  method: "POST",
  operationId: "project-create-project",
};

/** Request a Project avatar upload. */
export const projectRequestProjectAvatarUpload: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Post.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/avatar",
  method: "POST",
  operationId: "project-request-project-avatar-upload",
};

/** Delete a Project's avatar. */
export const projectDeleteProjectAvatar: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdAvatar.Delete.Parameters.Header>
  >
> = {
  path: "/v2/projects/{projectId}/avatar",
  method: "DELETE",
  operationId: "project-delete-project-avatar",
};

/** Delete a Project. */
export const projectDeleteProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectId.Delete.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectId.Delete.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}",
  method: "DELETE",
  operationId: "project-delete-project",
};

/** Request a Server avatar upload. */
export const projectRequestServerAvatarUpload: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Post.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/servers/{serverId}/avatar",
  method: "POST",
  operationId: "project-request-server-avatar-upload",
};

/** Delete a Server's avatar. */
export const projectDeleteServerAvatar: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdAvatar.Delete.Parameters.Header>
  >
> = {
  path: "/v2/servers/{serverId}/avatar",
  method: "DELETE",
  operationId: "project-delete-server-avatar",
};

/** List the directories of a Project. */
export const projectFileSystemGetDirectories: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDirectories.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDirectories.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemDirectories.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/filesystem/directories",
  method: "GET",
  operationId: "project-file-system-get-directories",
};

/** Get a Project directory filesystem usage. */
export const projectFileSystemGetDiskUsage: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemUsagesDisk.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemUsagesDisk.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemUsagesDisk.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/filesystem/usages/disk",
  method: "GET",
  operationId: "project-file-system-get-disk-usage",
};

/** Get a Project file's content. */
export const projectFileSystemGetFileContent: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFilesRaw.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFilesRaw.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFilesRaw.Get.Responses.$200.Content.TextPlain,
    200,
    "text/plain"
  >
> = {
  path: "/v2/projects/{projectId}/filesystem/files/raw",
  method: "GET",
  operationId: "project-file-system-get-file-content",
};

/** Get a Project's file/filesystem authorization token. */
export const projectFileSystemGetJwt: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdJwt.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdJwt.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdJwt.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/jwt",
  method: "GET",
  operationId: "project-file-system-get-jwt",
};

/** Get a Project file's information. */
export const projectFileSystemListFiles: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFiles.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFiles.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdFilesystemFiles.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/filesystem/files",
  method: "GET",
  operationId: "project-file-system-list-files",
};

/** Get the executing user's membership in a Project. */
export const projectGetOwnMembershipForProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMembershipsMe.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdMembershipsMe.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdMembershipsMe.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/memberships/me",
  method: "GET",
  operationId: "project-get-own-membership-for-project",
};

/** Get a Project. */
export const projectGetProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{id}",
  method: "GET",
  operationId: "project-get-project",
};

/** Get a Server. */
export const projectGetServer: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ServersServerId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/servers/{serverId}",
  method: "GET",
  operationId: "project-get-server",
};

/** List all invites belonging to a Project. */
export const projectListInvitesForProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesProjectsProjectId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2InvitesProjectsProjectId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2InvitesProjectsProjectId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/invites/projects/{projectId}",
  method: "GET",
  operationId: "project-list-invites-for-project",
};

/** List all memberships for a Project. */
export const projectListMembershipsForProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsProjectsProjectId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2MembershipsProjectsProjectId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2MembershipsProjectsProjectId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/memberships/projects/{projectId}",
  method: "GET",
  operationId: "project-list-memberships-for-project",
};

/** List Project's for an Organization or Server. */
export const projectListProjects: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Projects.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Projects.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2Projects.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects",
  method: "GET",
  operationId: "project-list-projects",
};

/** List Servers for an Organization or User. */
export const projectListServers: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2Servers.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Servers.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2Servers.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/servers",
  method: "GET",
  operationId: "project-list-servers",
};

/** Update a Servers's description. */
export const projectUpdateServerDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ServersServerIdDescription.Patch.Parameters.Header>
  >
> = {
  path: "/v2/servers/{serverId}/description",
  method: "PATCH",
  operationId: "project-update-server-description",
};

/** Relocate an external Project to mittwald. */
export const redirectusCreateRelocation: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2Relocation.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2Relocation.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2Relocation.Post.Parameters.Header>
  >
> = {
  path: "/v2/relocation",
  method: "POST",
  operationId: "redirectus-create-relocation",
};

/** List all ApiTokens of the user */
export const signupApiApiTokenList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupTokenApi.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupTokenApi.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupTokenApi.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/signup/token/api",
  method: "GET",
  operationId: "signup-api-api-token-list",
};

/** Store a new ApiToken */
export const signupApiApiTokenCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupTokenApi.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupTokenApi.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupTokenApi.Post.Parameters.Header>
  >,
  | Response<
      MittwaldAPIV2.Paths.V2SignupTokenApi.Post.Responses.$201.Content.ApplicationJson,
      201,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2SignupTokenApi.Post.Responses.$400.Content.ApplicationJson,
      400,
      "application/json"
    >
> = {
  path: "/v2/signup/token/api",
  method: "POST",
  operationId: "signup-api-api-token-create",
};

/** Get a specific ApiToken */
export const signupApiApiTokenGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupTokenApiApiTokenId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupTokenApiApiTokenId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupTokenApiApiTokenId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/signup/token/api/{apiTokenId}",
  method: "GET",
  operationId: "signup-api-api-token-get",
};

/** Update an existing `ApiToken` */
export const signupApiApiTokenEdit: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupTokenApiApiTokenId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupTokenApiApiTokenId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupTokenApiApiTokenId.Put.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupTokenApiApiTokenId.Put.Responses.$400.Content.ApplicationJson,
    400,
    "application/json"
  >
> = {
  path: "/v2/signup/token/api/{apiTokenId}",
  method: "PUT",
  operationId: "signup-api-api-token-edit",
};

/** Deletes an ApiToken */
export const signupApiApiTokenDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupTokenApiApiTokenId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupTokenApiApiTokenId.Delete.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupTokenApiApiTokenId.Delete.Responses.$400.Content.ApplicationJson,
    400,
    "application/json"
  >
> = {
  path: "/v2/signup/token/api/{apiTokenId}",
  method: "DELETE",
  operationId: "signup-api-api-token-delete",
};

/** Authenticate yourself to get an access token. */
export const signupApiAuthenticate: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupAuthentication.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupAuthentication.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupAuthentication.Post.Parameters.Header>
  >,
  | Response<
      MittwaldAPIV2.Paths.V2SignupAuthentication.Post.Responses.$200.Content.ApplicationJson,
      200,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2SignupAuthentication.Post.Responses.$202.Content.ApplicationJson,
      202,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2SignupAuthentication.Post.Responses.$400.Content.ApplicationJson,
      400,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2SignupAuthentication.Post.Responses.$401.Content.ApplicationJson,
      401,
      "application/json"
    >
> = {
  path: "/v2/signup/authentication",
  method: "POST",
  operationId: "signup-api-authenticate",
};

/** Authenticate yourself against your legacy account to migrate it with the '/registration'-Route */
export const signupApiAuthenticateLegacy: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupAuthenticationLegacy.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupAuthenticationLegacy.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupAuthenticationLegacy.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupAuthenticationLegacy.Post.Responses.$400.Content.ApplicationJson,
    400,
    "application/json"
  >
> = {
  path: "/v2/signup/authentication/legacy",
  method: "POST",
  operationId: "signup-api-authenticate-legacy",
};

/** Validate your second factor. */
export const signupApiAuthenticateMfa: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupAuthenticationMfa.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupAuthenticationMfa.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupAuthenticationMfa.Post.Parameters.Header>
  >,
  | Response<
      MittwaldAPIV2.Paths.V2SignupAuthenticationMfa.Post.Responses.$200.Content.ApplicationJson,
      200,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2SignupAuthenticationMfa.Post.Responses.$400.Content.ApplicationJson,
      400,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2SignupAuthenticationMfa.Post.Responses.$408.Content.ApplicationJson,
      408,
      "application/json"
    >
> = {
  path: "/v2/signup/authentication/mfa",
  method: "POST",
  operationId: "signup-api-authenticate-mfa",
};

/** Request a new avatar upload */
export const signupApiAvatarRequestUpload: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupAvatar.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupAvatar.Post.Parameters.Header>
  >,
  | Response<
      MittwaldAPIV2.Paths.V2SignupAvatar.Post.Responses.$200.Content.ApplicationJson,
      200,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2SignupAvatar.Post.Responses.$400.Content.ApplicationJson,
      400,
      "application/json"
    >
> = {
  path: "/v2/signup/avatar",
  method: "POST",
  operationId: "signup-api-avatar-request-upload",
};

/** Remove avatar */
export const signupApiAvatarRemove: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupAvatar.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupAvatar.Delete.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupAvatar.Delete.Responses.$400.Content.ApplicationJson,
    400,
    "application/json"
  >
> = {
  path: "/v2/signup/avatar",
  method: "DELETE",
  operationId: "signup-api-avatar-remove",
};

/** Get your primary verified email address */
export const signupApiEmailGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupEmail.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupEmail.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupEmail.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/signup/email",
  method: "GET",
  operationId: "signup-api-email-get",
};

/** Change your email */
export const signupApiEmailChange: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupEmail.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupEmail.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupEmail.Put.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupEmail.Put.Responses.$400.Content.ApplicationJson,
    400,
    "application/json"
  >
> = {
  path: "/v2/signup/email",
  method: "PUT",
  operationId: "signup-api-email-change",
};

/** Resend the email address verification email */
export const signupApiEmailResend: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupEmailResend.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupEmailResend.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupEmailResend.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupEmailResend.Post.Responses.$400.Content.ApplicationJson,
    400,
    "application/json"
  >
> = {
  path: "/v2/signup/email/resend",
  method: "POST",
  operationId: "signup-api-email-resend",
};

/** Verify an added email address */
export const signupApiEmailVerify: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupEmailVerify.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupEmailVerify.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupEmailVerify.Post.Parameters.Header>
  >,
  | Response<
      MittwaldAPIV2.Paths.V2SignupEmailVerify.Post.Responses.$400.Content.ApplicationJson,
      400,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2SignupEmailVerify.Post.Responses.$404.Content.ApplicationJson,
      404,
      "application/json"
    >
> = {
  path: "/v2/signup/email/verify",
  method: "POST",
  operationId: "signup-api-email-verify",
};

/** Terminate session and invalidate access token */
export const signupApiLogout: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupLogout.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupLogout.Put.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupLogout.Put.Responses.$400.Content.ApplicationJson,
    400,
    "application/json"
  >
> = {
  path: "/v2/signup/logout",
  method: "PUT",
  operationId: "signup-api-logout",
};

/** Confirm Multi Factor Authentication */
export const signupApiMfaConfirm: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupMfaConfirm.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupMfaConfirm.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupMfaConfirm.Post.Parameters.Header>
  >,
  | Response<
      MittwaldAPIV2.Paths.V2SignupMfaConfirm.Post.Responses.$200.Content.ApplicationJson,
      200,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2SignupMfaConfirm.Post.Responses.$400.Content.ApplicationJson,
      400,
      "application/json"
    >
> = {
  path: "/v2/signup/mfa/confirm",
  method: "POST",
  operationId: "signup-api-mfa-confirm",
};

/** Get your current multi factor auth status */
export const signupApiMfaGetStatus: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupMfa.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupMfa.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupMfa.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/signup/mfa",
  method: "GET",
  operationId: "signup-api-mfa-get-status",
};

/** Initialize Multi Factor Authentication. If successfull, it needs to be confirmed, before usage of mfa. */
export const signupApiMfaInit: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupMfa.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupMfa.Post.Parameters.Header>
  >,
  | Response<
      MittwaldAPIV2.Paths.V2SignupMfa.Post.Responses.$200.Content.ApplicationJson,
      200,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2SignupMfa.Post.Responses.$400.Content.ApplicationJson,
      400,
      "application/json"
    >
> = {
  path: "/v2/signup/mfa",
  method: "POST",
  operationId: "signup-api-mfa-init",
};

/** Disable Multi Factor Authentication. */
export const signupApiMfaDisable: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupMfa.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupMfa.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupMfa.Delete.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupMfa.Delete.Responses.$400.Content.ApplicationJson,
    400,
    "application/json"
  >
> = {
  path: "/v2/signup/mfa",
  method: "DELETE",
  operationId: "signup-api-mfa-disable",
};

/** Get timestamp of your latest password change */
export const signupApiPasswordGetUpdatedAt: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupPassword.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupPassword.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupPassword.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/signup/password",
  method: "GET",
  operationId: "signup-api-password-get-updated-at",
};

/** Change your password */
export const signupApiPasswordChange: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupPassword.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupPassword.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupPassword.Put.Parameters.Header>
  >,
  | Response<
      MittwaldAPIV2.Paths.V2SignupPassword.Put.Responses.$200.Content.ApplicationJson,
      200,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2SignupPassword.Put.Responses.$400.Content.ApplicationJson,
      400,
      "application/json"
    >
> = {
  path: "/v2/signup/password",
  method: "PUT",
  operationId: "signup-api-password-change",
};

/** Confirm password reset */
export const signupApiPasswordResetConfirm: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupPasswordResetConfirm.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupPasswordResetConfirm.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupPasswordResetConfirm.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupPasswordResetConfirm.Post.Responses.$400.Content.ApplicationJson,
    400,
    "application/json"
  >
> = {
  path: "/v2/signup/password/reset/confirm",
  method: "POST",
  operationId: "signup-api-password-reset-confirm",
};

/** Initialize password reset process */
export const signupApiPasswordResetInit: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupPasswordReset.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupPasswordReset.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupPasswordReset.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupPasswordReset.Post.Responses.$400.Content.ApplicationJson,
    400,
    "application/json"
  >
> = {
  path: "/v2/signup/password/reset",
  method: "POST",
  operationId: "signup-api-password-reset-init",
};

/** Get current phone number */
export const signupApiPhoneNumberGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupPhone.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupPhone.Get.Parameters.Header>
  >,
  | Response<
      MittwaldAPIV2.Paths.V2SignupPhone.Get.Responses.$200.Content.ApplicationJson,
      200,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2SignupPhone.Get.Responses.$400.Content.ApplicationJson,
      400,
      "application/json"
    >
> = {
  path: "/v2/signup/phone",
  method: "GET",
  operationId: "signup-api-phone-number-get",
};

/** Initialize phone number process */
export const signupApiPhoneNumberInitProcess: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupPhone.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupPhone.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupPhone.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupPhone.Post.Responses.$400.Content.ApplicationJson,
    400,
    "application/json"
  >
> = {
  path: "/v2/signup/phone",
  method: "POST",
  operationId: "signup-api-phone-number-init-process",
};

/** Deletes phone number */
export const signupApiPhoneNumberDelete: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupPhone.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupPhone.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupPhone.Delete.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupPhone.Delete.Responses.$400.Content.ApplicationJson,
    400,
    "application/json"
  >
> = {
  path: "/v2/signup/phone",
  method: "DELETE",
  operationId: "signup-api-phone-number-delete",
};

/** Initialize phone number process */
export const signupApiPhoneNumberVerify: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupPhoneVerify.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupPhoneVerify.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupPhoneVerify.Post.Parameters.Header>
  >,
  | Response<
      MittwaldAPIV2.Paths.V2SignupPhoneVerify.Post.Responses.$400.Content.ApplicationJson,
      400,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2SignupPhoneVerify.Post.Responses.$404.Content.ApplicationJson,
      404,
      "application/json"
    >
> = {
  path: "/v2/signup/phone/verify",
  method: "POST",
  operationId: "signup-api-phone-number-verify",
};

/** Get your profile information */
export const signupApiProfileGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupProfile.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupProfile.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupProfile.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/signup/profile",
  method: "GET",
  operationId: "signup-api-profile-get",
};

/** Change your profile information */
export const signupApiProfileChange: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupProfile.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupProfile.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupProfile.Put.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupProfile.Put.Responses.$400.Content.ApplicationJson,
    400,
    "application/json"
  >
> = {
  path: "/v2/signup/profile",
  method: "PUT",
  operationId: "signup-api-profile-change",
};

/** Delete your profile and all your personal data */
export const signupApiProfileDelete: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupProfile.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupProfile.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupProfile.Delete.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupProfile.Delete.Responses.$400.Content.ApplicationJson,
    400,
    "application/json"
  >
> = {
  path: "/v2/signup/profile",
  method: "DELETE",
  operationId: "signup-api-profile-delete",
};

/** Reset Recovery-Codes for MFA */
export const signupApiRecoverycodesReset: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupMfaResetRecoverycodes.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupMfaResetRecoverycodes.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupMfaResetRecoverycodes.Put.Parameters.Header>
  >,
  | Response<
      MittwaldAPIV2.Paths.V2SignupMfaResetRecoverycodes.Put.Responses.$200.Content.ApplicationJson,
      200,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2SignupMfaResetRecoverycodes.Put.Responses.$400.Content.ApplicationJson,
      400,
      "application/json"
    >
> = {
  path: "/v2/signup/mfa/reset-recoverycodes",
  method: "PUT",
  operationId: "signup-api-recoverycodes-reset",
};

/** Register with email and password.
 */
export const signupApiRegister: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupRegistration.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupRegistration.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupRegistration.Post.Parameters.Header>
  >,
  | Response<
      MittwaldAPIV2.Paths.V2SignupRegistration.Post.Responses.$201.Content.ApplicationJson,
      201,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2SignupRegistration.Post.Responses.$400.Content.ApplicationJson,
      400,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2SignupRegistration.Post.Responses.$408.Content.ApplicationJson,
      408,
      "application/json"
    >
> = {
  path: "/v2/signup/registration",
  method: "POST",
  operationId: "signup-api-register",
};

/** Verify your registration */
export const signupApiRegistrationVerify: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupRegistrationVerification.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupRegistrationVerification.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupRegistrationVerification.Post.Parameters.Header>
  >,
  | Response<
      MittwaldAPIV2.Paths.V2SignupRegistrationVerification.Post.Responses.$400.Content.ApplicationJson,
      400,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2SignupRegistrationVerification.Post.Responses.$404.Content.ApplicationJson,
      404,
      "application/json"
    >
> = {
  path: "/v2/signup/registration/verification",
  method: "POST",
  operationId: "signup-api-registration-verify",
};

/** Get a specific session of an authorized user */
export const signupApiSessionGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupSessionsTokenId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupSessionsTokenId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldAPIV2.Paths.V2SignupSessionsTokenId.Get.Responses.$200.Content.ApplicationJson,
      200,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2SignupSessionsTokenId.Get.Responses.$404.Content.ApplicationJson,
      404,
      "application/json"
    >
> = {
  path: "/v2/signup/sessions/{tokenId}",
  method: "GET",
  operationId: "signup-api-session-get",
};

/** Terminate a specific session of an authorized user */
export const signupApiSessionTerminate: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupSessionsTokenId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupSessionsTokenId.Delete.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupSessionsTokenId.Delete.Responses.$404.Content.ApplicationJson,
    404,
    "application/json"
  >
> = {
  path: "/v2/signup/sessions/{tokenId}",
  method: "DELETE",
  operationId: "signup-api-session-terminate",
};

/** List all active sessions of authorized user */
export const signupApiSessionsList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupSessions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupSessions.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupSessions.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/signup/sessions",
  method: "GET",
  operationId: "signup-api-sessions-list",
};

/** Terminate all session of an authorized user, except his current session */
export const signupApiSessionsTerminateAll: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupSessions.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupSessions.Delete.Parameters.Header>
  >
> = {
  path: "/v2/signup/sessions",
  method: "DELETE",
  operationId: "signup-api-sessions-terminate-all",
};

/** Get your stored ssh keys */
export const signupApiSshList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupSsh.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupSsh.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupSsh.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/signup/ssh",
  method: "GET",
  operationId: "signup-api-ssh-list",
};

/** Store a new SSH key */
export const signupApiSshCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupSsh.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupSsh.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupSsh.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupSsh.Post.Responses.$400.Content.ApplicationJson,
    400,
    "application/json"
  >
> = {
  path: "/v2/signup/ssh",
  method: "POST",
  operationId: "signup-api-ssh-create",
};

/** Get your stored ssh keys */
export const signupApiSshGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupSshSshKeyId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupSshSshKeyId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldAPIV2.Paths.V2SignupSshSshKeyId.Get.Responses.$200.Content.ApplicationJson,
      200,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2SignupSshSshKeyId.Get.Responses.$404.Content.ApplicationJson,
      404,
      "application/json"
    >
> = {
  path: "/v2/signup/ssh/{sshKeyId}",
  method: "GET",
  operationId: "signup-api-ssh-get",
};

/** Edit an existing SSH key */
export const signupApiSshEdit: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SignupSshSshKeyId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SignupSshSshKeyId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupSshSshKeyId.Put.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupSshSshKeyId.Put.Responses.$400.Content.ApplicationJson,
    400,
    "application/json"
  >
> = {
  path: "/v2/signup/ssh/{sshKeyId}",
  method: "PUT",
  operationId: "signup-api-ssh-edit",
};

/** Remove an existing SSH Key */
export const signupApiSshDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupSshSshKeyId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupSshSshKeyId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/signup/ssh/{sshKeyId}",
  method: "DELETE",
  operationId: "signup-api-ssh-delete",
};

/** request a support code */
export const signupApiSupportCodeRequest: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupSupportcode.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupSupportcode.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SignupSupportcode.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/signup/supportcode",
  method: "GET",
  operationId: "signup-api-support-code-request",
};

/** Check, if the current access token is valid */
export const signupApiTokenCheck: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SignupTokenCheck.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SignupTokenCheck.Post.Parameters.Header>
  >,
  | Response<
      MittwaldAPIV2.Paths.V2SignupTokenCheck.Post.Responses.$200.Content.ApplicationJson,
      200,
      "application/json"
    >
  | Response<
      MittwaldAPIV2.Paths.V2SignupTokenCheck.Post.Responses.$400.Content.ApplicationJson,
      400,
      "application/json"
    >
> = {
  path: "/v2/signup/token/check",
  method: "POST",
  operationId: "signup-api-token-check",
};

/** Get all SFTPUsers for a Project. */
export const sshuserServiceListSftpUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshuserSftp.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshuserSftp.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdSshuserSftp.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/sshuser/sftp",
  method: "GET",
  operationId: "sshuser-service-list-sftp-user",
};

/** Create an SFTPUser for a Project. */
export const sshuserServiceCreateSftpUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshuserSftp.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshuserSftp.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshuserSftp.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdSshuserSftp.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/sshuser/sftp",
  method: "POST",
  operationId: "sshuser-service-create-sftp-user",
};

/** Get all SSHUsers for a Project. */
export const sshuserServiceListSshUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshuserSsh.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshuserSsh.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdSshuserSsh.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/sshuser/ssh",
  method: "GET",
  operationId: "sshuser-service-list-ssh-user",
};

/** Create an SSHUser for a Project. */
export const sshuserServiceCreateSshUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshuserSsh.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshuserSsh.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2ProjectsProjectIdSshuserSsh.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2ProjectsProjectIdSshuserSsh.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/projects/{projectId}/sshuser/ssh",
  method: "POST",
  operationId: "sshuser-service-create-ssh-user",
};

/** Get an SFTPUser. */
export const sshuserServiceGetSftpUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SshuserSftpSftpUserId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/sshuser/sftp/{sftpUserId}",
  method: "GET",
  operationId: "sshuser-service-get-sftp-user",
};

/** Delete an SFTPUser. */
export const sshuserServiceRemoveSftpUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/sshuser/sftp/{sftpUserId}",
  method: "DELETE",
  operationId: "sshuser-service-remove-sftp-user",
};

/** Update an SFTPUser. */
export const sshuserServicePatchSftpUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserId.Patch.Parameters.Header>
  >
> = {
  path: "/v2/sshuser/sftp/{sftpUserId}",
  method: "PATCH",
  operationId: "sshuser-service-patch-sftp-user",
};

/** Get an SSHUser. */
export const sshuserServiceGetSshUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2SshuserSshSshUserId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/sshuser/ssh/{sshUserId}",
  method: "GET",
  operationId: "sshuser-service-get-ssh-user",
};

/** Delete an SSHUser. */
export const sshuserServiceRemoveSshUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserId.Delete.Parameters.Header>
  >
> = {
  path: "/v2/sshuser/ssh/{sshUserId}",
  method: "DELETE",
  operationId: "sshuser-service-remove-ssh-user",
};

/** Update an SSHUser. */
export const sshuserServicePatchSshUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserId.Patch.Parameters.Header>
  >
> = {
  path: "/v2/sshuser/ssh/{sshUserId}",
  method: "PATCH",
  operationId: "sshuser-service-patch-ssh-user",
};

/** Update access-level of an SFTPUser */
export const sshuserServiceUpdateAccessLevelOfSftpUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdAccessLevel.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdAccessLevel.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdAccessLevel.Put.Parameters.Header>
  >
> = {
  path: "/v2/sshuser/sftp/{sftpUserId}/access-level",
  method: "PUT",
  operationId: "sshuser-service-update-access-level-of-sftp-user",
};

/** Activate or deactivate an SFTPUser. */
export const sshuserServiceUpdateActiveOfSftpUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdActive.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdActive.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdActive.Put.Parameters.Header>
  >
> = {
  path: "/v2/sshuser/sftp/{sftpUserId}/active",
  method: "PUT",
  operationId: "sshuser-service-update-active-of-sftp-user",
};

/** Activate or deactivate an SSHUser. */
export const sshuserServiceUpdateActiveOfSshUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserIdActive.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserIdActive.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserIdActive.Put.Parameters.Header>
  >
> = {
  path: "/v2/sshuser/ssh/{sshUserId}/active",
  method: "PUT",
  operationId: "sshuser-service-update-active-of-ssh-user",
};

/** Update the description of an SFTPUser. */
export const sshuserServiceUpdateDescriptionOfSftpUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdDescription.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdDescription.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdDescription.Put.Parameters.Header>
  >
> = {
  path: "/v2/sshuser/sftp/{sftpUserId}/description",
  method: "PUT",
  operationId: "sshuser-service-update-description-of-sftp-user",
};

/** Update the description of an SSHUser. */
export const sshuserServiceUpdateDescriptionOfSshUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserIdDescription.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserIdDescription.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserIdDescription.Put.Parameters.Header>
  >
> = {
  path: "/v2/sshuser/ssh/{sshUserId}/description",
  method: "PUT",
  operationId: "sshuser-service-update-description-of-ssh-user",
};

/** Update the directories of an SFTPUser. */
export const sshuserServiceUpdateDirectoriesOfSftpUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdDirectories.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdDirectories.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdDirectories.Put.Parameters.Header>
  >
> = {
  path: "/v2/sshuser/sftp/{sftpUserId}/directories",
  method: "PUT",
  operationId: "sshuser-service-update-directories-of-sftp-user",
};

/** Update expire-date of an SFTPUser. */
export const sshuserServiceUpdateExpiryOfSftpUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdExpiry.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdExpiry.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdExpiry.Put.Parameters.Header>
  >
> = {
  path: "/v2/sshuser/sftp/{sftpUserId}/expiry",
  method: "PUT",
  operationId: "sshuser-service-update-expiry-of-sftp-user",
};

/** Update the expire-date of an SSHUser. */
export const sshuserServiceUpdateExpiryOfSshUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserIdExpiry.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserIdExpiry.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserIdExpiry.Put.Parameters.Header>
  >
> = {
  path: "/v2/sshuser/ssh/{sshUserId}/expiry",
  method: "PUT",
  operationId: "sshuser-service-update-expiry-of-ssh-user",
};

/** Update the password of an SFTPUser. */
export const sshuserServiceUpdatePasswordOfSftpUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdPassword.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdPassword.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdPassword.Put.Parameters.Header>
  >
> = {
  path: "/v2/sshuser/sftp/{sftpUserId}/password",
  method: "PUT",
  operationId: "sshuser-service-update-password-of-sftp-user",
};

/** Update the password of an SSHUser. */
export const sshuserServiceUpdatePasswordOfSshUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserIdPassword.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserIdPassword.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserIdPassword.Put.Parameters.Header>
  >
> = {
  path: "/v2/sshuser/ssh/{sshUserId}/password",
  method: "PUT",
  operationId: "sshuser-service-update-password-of-ssh-user",
};

/** Update public-keys of an SFTPUser. */
export const sshuserServiceUpdatePublicKeysOfSftpUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdPublicKeys.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdPublicKeys.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSftpSftpUserIdPublicKeys.Put.Parameters.Header>
  >
> = {
  path: "/v2/sshuser/sftp/{sftpUserId}/public-keys",
  method: "PUT",
  operationId: "sshuser-service-update-public-keys-of-sftp-user",
};

/** Update the public-keys of an SSHUser. */
export const sshuserServiceUpdatePublicKeysOfSshUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserIdPublicKeys.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserIdPublicKeys.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2SshuserSshSshUserIdPublicKeys.Put.Parameters.Header>
  >
> = {
  path: "/v2/sshuser/ssh/{sshUserId}/public-keys",
  method: "PUT",
  operationId: "sshuser-service-update-public-keys-of-ssh-user",
};

/** Request a new avatar upload */
export const userServiceAvatarRequestUpload: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UserUserIdAvatar.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UserUserIdAvatar.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2UserUserIdAvatar.Post.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/user/{userId}/avatar",
  method: "POST",
  operationId: "user-service-avatar-request-upload",
};

/** Remove avatar */
export const userServiceAvatarRemove: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UserUserIdAvatar.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UserUserIdAvatar.Delete.Parameters.Header>
  >
> = {
  path: "/v2/user/{userId}/avatar",
  method: "DELETE",
  operationId: "user-service-avatar-remove",
};

/** Returns your given feedback. */
export const userServiceFeedbackList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UserFeedback.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UserFeedback.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2UserFeedback.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/user/feedback",
  method: "GET",
  operationId: "user-service-feedback-list",
};

/**  */
export const userServiceFeedbackCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2UserFeedback.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UserFeedback.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UserFeedback.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2UserFeedback.Post.Responses.$201.Content.ApplicationJson,
    201,
    "application/json"
  >
> = {
  path: "/v2/user/feedback",
  method: "POST",
  operationId: "user-service-feedback-create",
};

/** create a new issue */
export const userServiceIssueNew: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2UserIssues.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UserIssues.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UserIssues.Post.Parameters.Header>
  >
> = {
  path: "/v2/user/issues",
  method: "POST",
  operationId: "user-service-issue-new",
};

/** Get profile information for the specified user */
export const userServiceUserGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UserUserId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UserUserId.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2UserUserId.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/user/{userId}",
  method: "GET",
  operationId: "user-service-user-get",
};

/** Change your personal information */
export const userServicePersonalInformationUpdate: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2UserUserId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UserUserId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UserUserId.Put.Parameters.Header>
  >
> = {
  path: "/v2/user/{userId}",
  method: "PUT",
  operationId: "user-service-personal-information-update",
};

/** Get personalized settings for the specified user */
export const userServicePersonalizedSettingsGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UserSettings.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UserSettings.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2UserSettings.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/user/settings",
  method: "GET",
  operationId: "user-service-personalized-settings-get",
};

/** update personalized settings */
export const userServicePersonalizedSettingsUpdate: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2UserSettings.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UserSettings.Put.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UserSettings.Put.Parameters.Header>
  >
> = {
  path: "/v2/user/settings",
  method: "PUT",
  operationId: "user-service-personalized-settings-update",
};

/** Add phone number and init verification process */
export const userServicePhoneNumberAdd: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2UserUserIdPhone.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UserUserIdPhone.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UserUserIdPhone.Post.Parameters.Header>
  >
> = {
  path: "/v2/user/{userId}/phone",
  method: "POST",
  operationId: "user-service-phone-number-add",
};

/** Deletes phone number */
export const userServicePhoneNumberRemove: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2UserUserIdPhone.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UserUserIdPhone.Delete.Parameters.Header>
  >
> = {
  path: "/v2/user/{userId}/phone",
  method: "DELETE",
  operationId: "user-service-phone-number-remove",
};

/** Verify phone number */
export const userServicePhoneNumberVerify: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2UserUserIdPhoneVerify.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2UserUserIdPhoneVerify.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2UserUserIdPhoneVerify.Post.Parameters.Header>
  >
> = {
  path: "/v2/user/{userId}/phone/verify",
  method: "POST",
  operationId: "user-service-phone-number-verify",
};

/** Get profile information for the specified user */
export const userServiceUserGetOwn: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2User.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2User.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2User.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/user",
  method: "GET",
  operationId: "user-service-user-get-own",
};

/** List all available validators. */
export const varnishServiceListValidators: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldAPIV2.Paths.V2VarnishConfigValidate.Get.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2VarnishConfigValidate.Get.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2VarnishConfigValidate.Get.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/varnish/config/validate",
  method: "GET",
  operationId: "varnish-service-list-validators",
};

/** validate a set of config files with a named validator against a specific version */
export const varnishServiceValidate: OpenAPIOperation<
  Request<
    Simplify<MittwaldAPIV2.Paths.V2VarnishConfigValidate.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV2.Paths.V2VarnishConfigValidate.Post.Parameters.Path>,
    Simplify<MittwaldAPIV2.Paths.V2VarnishConfigValidate.Post.Parameters.Header>
  >,
  Response<
    MittwaldAPIV2.Paths.V2VarnishConfigValidate.Post.Responses.$200.Content.ApplicationJson,
    200,
    "application/json"
  >
> = {
  path: "/v2/varnish/config/validate",
  method: "POST",
  operationId: "varnish-service-validate",
};
