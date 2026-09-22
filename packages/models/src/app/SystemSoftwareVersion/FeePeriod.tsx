import { DateTime } from "luxon";

import type { FeePeriodData } from "./types";

import { Money } from "../../common";

export class FeePeriod {
  public readonly feeValidFrom?: DateTime;
  public readonly feeValidUntil?: DateTime;
  public readonly monthlyPrice: Money;

  public constructor(data: FeePeriodData) {
    this.feeValidFrom = data.feeValidFrom
      ? DateTime.fromISO(data.feeValidFrom)
      : undefined;
    this.feeValidUntil = data.feeValidUntil
      ? DateTime.fromISO(data.feeValidUntil)
      : undefined;
    this.monthlyPrice = Money({ amount: data.monthlyPrice, currency: "EUR" });
  }
}
