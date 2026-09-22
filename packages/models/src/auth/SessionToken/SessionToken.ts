import { DateTime } from "luxon";

import type { SessionTokenData } from "./types";

import { DataModel } from "../../base";

export class SessionToken extends DataModel<SessionTokenData> {
  public readonly expirationDate: DateTime;
  public readonly refreshToken: string;
  public readonly token: string;

  public constructor(data: SessionTokenData) {
    super(data);
    this.expirationDate = DateTime.fromISO(data.expires);
    this.token = data.token;
    this.refreshToken = data.refreshToken;
  }

  public isExpired() {
    return this.expirationDate < DateTime.now();
  }
}
