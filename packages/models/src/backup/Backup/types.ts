import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { Project } from "../../project";

export type BackupData =
  MittwaldAPIV2.Operations.BackupGetProjectBackup.ResponseData;

export type BackupListItemData =
  MittwaldAPIV2.Operations.BackupListProjectBackups.ResponseData[number];

export type BackupListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Get.Parameters.Query;

export type BackupListQueryModelData = {
  project: Project | string;
} & BackupListQueryData;

export type BackupCreateRequestData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdBackups.Post.Parameters.RequestBody;

export type BackupCreateExportRequestData =
  MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdExport.Post.Parameters.RequestBody;

export type BackupExportData =
  MittwaldAPIV2.Components.Schemas.BackupProjectBackupExport;

export type BackupCreatePathRestoreRequestData =
  MittwaldAPIV2.Paths.V2ProjectBackupsProjectBackupIdRestore.Post.Parameters.RequestBody;

export type BackupTocData =
  MittwaldAPIV2.Operations.BackupGetProjectBackupDirectories.ResponseData;

export type BackupDbData =
  MittwaldAPIV2.Operations.BackupGetProjectBackupDatabaseDumps.ResponseData;
