import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type BackupScheduleData =
  MittwaldAPIV2.Operations.BackupGetProjectBackupSchedule.ResponseData;

export type BackupScheduleListItemData =
  MittwaldAPIV2.Operations.BackupListProjectBackupSchedules.ResponseData[number];

export type BackupScheduleListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Get.Parameters.Query;

export type BackupScheduleCreateRequestData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdBackupSchedules.Post.Parameters.RequestBody;

export type BackupScheduleUpdateRequestData =
  MittwaldAPIV2.Paths.V2ProjectBackupSchedulesProjectBackupScheduleId.Patch.Parameters.RequestBody;
