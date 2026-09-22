import type { BackupExportData } from "../../backup/Backup/types";

export function buildBackupExportData(
  overrides: Partial<BackupExportData> = {},
): BackupExportData {
  return {
    withPassword: false,
    phase: "Completed",
    format: "tar.gz",
    ...overrides,
  };
}
