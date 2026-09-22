import type { BackupData } from "../../backup/Backup/types.js";

export function buildBackupData(
  overrides: Partial<BackupData> = {},
): BackupData {
  return {
    requestedAt: "2024-01-01T00:00:00.000Z",
    projectId: "project-id",
    status: "Completed",
    deletable: false,
    id: "backup-id",
    ...overrides,
  };
}
