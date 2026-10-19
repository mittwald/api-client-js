import type { BackupScheduleData } from "../../backup/BackupSchedule/types.js";

export function buildBackupScheduleData(
  overrides: Partial<BackupScheduleData> = {},
): BackupScheduleData {
  return {
    id: "backup-schedule-id",
    projectId: "project-id",
    isSystemBackup: false,
    schedule: "0 2 * * *",
    ...overrides,
  };
}
