import { DataModel } from "@mittwald/api-models";
import { DateTime } from "luxon";
import { FileDownloadTokenData } from "./types.js";

export class FileDownloadToken extends DataModel<FileDownloadTokenData> {
  public readonly token: string;
  public readonly expiresAt: DateTime;

  public constructor(data: FileDownloadTokenData) {
    super(data);
    this.token = data.accessToken;
    this.expiresAt = DateTime.fromISO(data.expiresAt);
  }

  public checkIsExpired() {
    return this.expiresAt > DateTime.now();
  }
}
