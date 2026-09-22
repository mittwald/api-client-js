import type { DurationLikeObject, DateTimeUnit } from "luxon";
import type { DateValue } from "@internationalized/date";

import { DateTime } from "luxon";

import type { MonitoringInterval } from "./types.js";

export class MetricsTimeRange {
  public readonly from?: DateValue;
  public readonly interval: MonitoringInterval;
  public readonly to?: DateValue;

  public constructor(
    interval: MonitoringInterval,
    from?: DateValue,
    to?: DateValue,
  ) {
    this.interval = interval;
    this.from = from;
    this.to = to;
  }

  public getRangeMillis(): [number, number] {
    const from = this.from?.toDate("Europe/Berlin").toISOString();
    const fromDate = from ? DateTime.fromISO(from) : undefined;

    const to = this.to?.toDate("Europe/Berlin").toISOString();
    const toDate = to ? DateTime.fromISO(to) : undefined;

    return [fromDate ? fromDate.toMillis() : 0, toDate ? toDate.toMillis() : 0];
  }

  public getSlices(): DateTime[] {
    const tickDuration: Record<
      MonitoringInterval,
      keyof DurationLikeObject & DateTimeUnit
    > = {
      multipleDays: "day",
      oneHour: "minute",
      oneDay: "hour",
    };

    const slices: DateTime[] = [];

    const from = this.from?.toDate("Europe/Berlin").toISOString();
    const fromDate = from ? DateTime.fromISO(from) : undefined;

    const to = this.to?.toDate("Europe/Berlin").toISOString();
    const toDate = to ? DateTime.fromISO(to) : undefined;
    let currentDate = fromDate;

    if (!currentDate || !toDate) {
      return slices;
    }

    while (currentDate < toDate) {
      slices.push(currentDate);
      currentDate = currentDate.plus({
        [tickDuration[this.interval]]: this.interval === "oneHour" ? 5 : 1,
      });
    }

    return slices;
  }
}

export default MetricsTimeRange;
