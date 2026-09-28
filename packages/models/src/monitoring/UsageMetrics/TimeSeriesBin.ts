import type { DateTimeFormatOptions } from "luxon";
import type { Bin } from "d3-array";

import invariant from "tiny-invariant";
import { DateTime } from "luxon";
import * as d3 from "d3-array";

import type { MetricsDataPoint } from "../lib/metrics/index.js";
import type MetricsTimeRange from "./MetricsTimeRange.js";
import type { MonitoringInterval } from "./types.js";

export class TimeSeriesBin {
  public readonly data: Bin<MetricsDataPoint, number>;
  public readonly timeRange: MetricsTimeRange;

  public get max(): number | undefined {
    const max = d3.max(
      this.data.map((d) => TimeSeriesBin.getPercentage(d.value)),
    );
    return max ? Math.round(max * 10) / 10 : 0;
  }

  public get mean(): number {
    const mean = d3.mean(
      this.data.map((d) => TimeSeriesBin.getPercentage(d.value)),
    );
    return mean ? Math.round(mean * 10) / 10 : 0;
  }

  public get timeMillis() {
    const timeMillis = this.data.x0 ?? this.data.x1;
    invariant(timeMillis, "Invalid x0/x1");

    return timeMillis;
  }

  public constructor(
    data: Bin<MetricsDataPoint, number>,
    timeRange: MetricsTimeRange,
  ) {
    this.data = data;
    this.timeRange = timeRange;
  }

  public static getTimeLabel(
    millis: number,
    interval: MonitoringInterval,
    short?: boolean,
  ): string {
    const time = DateTime.fromMillis(millis);

    const rangeTypeFormat: Record<MonitoringInterval, DateTimeFormatOptions> = {
      oneHour: {
        month: short ? undefined : "numeric",
        day: short ? undefined : "numeric",
        minute: "numeric",
        hour: "numeric",
      },
      oneDay: {
        month: short ? undefined : "numeric",
        day: short ? undefined : "numeric",
        minute: "numeric",
        hour: "numeric",
      },
      multipleDays: {
        weekday: short ? "short" : "long",
        month: "numeric",
        day: "numeric",
      },
    };

    return time.toLocaleString(rangeTypeFormat[interval]);
  }

  private static getPercentage(value: number): number {
    return Number((value * 100).toFixed(1));
  }
}
