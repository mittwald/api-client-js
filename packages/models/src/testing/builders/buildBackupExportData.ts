import type { BackupExportData } from "../../backup/Backup/types.js";

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
