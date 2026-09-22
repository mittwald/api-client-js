import type { QueryResponseData } from "../../../base";
import type {
  BackupCreatePathRestoreRequestData,
  BackupCreateExportRequestData,
  BackupCreateRequestData,
  BackupListQueryData,
  BackupListItemData,
  BackupTocData,
  BackupDbData,
  BackupData,
} from "../types";

export interface BackupBehaviors {
  createRestoreRequest: (
    projectBackupId: string,
    data: BackupCreatePathRestoreRequestData,
  ) => Promise<void>;

  list: (
    projectId: string,
    query?: BackupListQueryData,
  ) => Promise<QueryResponseData<BackupListItemData>>;

  createExport: (
    projectBackupId: string,
    data: BackupCreateExportRequestData,
  ) => Promise<void>;

  findToc: (
    projectBackupId: string,
    directory: string,
  ) => Promise<BackupTocData | undefined>;

  create: (
    projectId: string,
    data: BackupCreateRequestData,
  ) => Promise<{ id: string }>;

  updateDescription: (
    projectBackupId: string,
    description?: string,
  ) => Promise<void>;

  updateExpiryDate: (
    projectBackupId: string,
    expiryDate?: string,
  ) => Promise<void>;

  findDatabaseBackups: (
    projectBackupId: string,
  ) => Promise<BackupDbData | undefined>;

  find: (projectBackupId: string) => Promise<BackupData | undefined>;

  delete: (projectBackupId: string) => Promise<void>;
}
