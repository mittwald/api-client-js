import { DataModel } from "../../base/index.js";
import { SessionData } from "./types.js";
import { DateTime } from "luxon";

export class Session extends DataModel<SessionData> {
  public readonly expirationDate: DateTime;
  public readonly token: string;
  public readonly refreshToken: string;

  public constructor(data: SessionData) {
    super(data);
    this.expirationDate = DateTime.fromISO(data.expires);
    this.token = data.token;
    this.refreshToken = data.refreshToken;
  }

  public isExpired() {
    return this.expirationDate > DateTime.now();
  }
}
