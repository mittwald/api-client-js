import { DateTime } from "luxon";

import type { FileDownloadTokenData } from "./types.js";

import { DataModel } from "../../base/index.js";

export class FileDownloadToken extends DataModel<FileDownloadTokenData> {
  public readonly expiresAt: DateTime;
  public readonly token: string;

  public constructor(data: FileDownloadTokenData) {
    super(data);
    this.token = data.accessToken;
    this.expiresAt = DateTime.fromISO(data.expiresAt);
  }

  public checkIsExpired() {
    return this.expiresAt > DateTime.now();
  }
}
