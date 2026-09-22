import { DateTime } from "luxon";

import type { BackupExportData } from "./types";

import { DataModel } from "../../base";

export class BackupExport extends DataModel<BackupExportData> {
  public readonly downloadUrl?: string;
  public readonly expiresAt?: DateTime;
  public readonly format?: string;
  public readonly isCompleted: boolean;
  public readonly isPending: boolean;

  public constructor(data: BackupExportData) {
    super(data);
    this.isCompleted = data.phase === "Completed";
    this.isPending = !this.isCompleted;
    this.expiresAt = data.expiresAt
      ? DateTime.fromISO(data.expiresAt)
      : undefined;
    this.downloadUrl = data.downloadURL;
    this.format = data.format;
  }
}
