import { DateTime } from "luxon";

import type { AutoresponderData } from "./types.js";

import { DataModel } from "../../base/index.js";

export class Autoresponder extends DataModel<AutoresponderData> {
  public readonly expiresAt?: DateTime;
  public readonly isActive: boolean;
  public readonly isPlanned: boolean;
  public readonly message?: string;
  public readonly startsAt?: DateTime;

  public constructor(data: AutoresponderData) {
    super(data);
    if (data.startsAt) {
      this.startsAt = DateTime.fromISO(data.startsAt);
    }
    if (data.expiresAt) {
      this.expiresAt = DateTime.fromISO(data.expiresAt);
    }
    this.message = data.message;
    const now = DateTime.now();
    this.isPlanned = !!this.startsAt && this.startsAt > now;
    this.isActive = data.active && (!this.expiresAt || this.expiresAt > now);
  }
}
