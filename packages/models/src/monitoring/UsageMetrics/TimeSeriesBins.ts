import * as d3 from "d3-array";

import type { MetricsDataPoint } from "../lib/metrics/index.js";
import type MetricsTimeRange from "./MetricsTimeRange.js";

import { TimeSeriesBin } from "./TimeSeriesBin.js";

/** Groups time series values into "time bins" */
export class TimeSeriesBins {
  public readonly bins: TimeSeriesBin[];
  public readonly label?: string;
  public readonly timeRange: MetricsTimeRange;

  public constructor(
    dataPoints: MetricsDataPoint[],
    range: MetricsTimeRange,
    label?: string,
  ) {
    this.timeRange = range;
    this.label = label;
    this.bins = d3
      .bin<MetricsDataPoint, number>()
      .domain(range.getRangeMillis())
      .value((d) => d.date.toMillis())
      .thresholds(range.getSlices().map((s) => s.toMillis()))(dataPoints)
      .map((b) => new TimeSeriesBin(b, range));
  }
}

export default TimeSeriesBins;
