import type {
  BackupScheduleCreateRequestData,
  BackupScheduleUpdateRequestData,
  BackupScheduleListQueryData,
  BackupScheduleListItemData,
  BackupScheduleData,
} from "../types";

export interface BackupScheduleBehaviors {
  list: (
    projectId: string,
    query?: BackupScheduleListQueryData,
  ) => Promise<{ items: BackupScheduleListItemData[]; totalCount: number }>;

  create: (
    projectId: string,
    data: BackupScheduleCreateRequestData,
  ) => Promise<BackupScheduleData>;

  update: (
    projectBackupScheduleId: string,
    data: BackupScheduleUpdateRequestData,
  ) => Promise<void>;

  find: (
    projectBackupScheduleId: string,
  ) => Promise<BackupScheduleData | undefined>;

  delete: (projectBackupScheduleId: string) => Promise<void>;
}
