import { DateTime } from "luxon";

import type {
  MetricsFrameDataPointObject,
  MetricsQueryResponseApiData,
  MetricsDataPoint,
} from "./types.js";

import MetricsQueryRequest from "./MetricsQueryRequest.js";

export class MetricsQueryResponse {
  public readonly data: MetricsQueryResponseApiData;

  public constructor(data: MetricsQueryResponseApiData) {
    this.data = data;
  }

  public getDataPoints(): MetricsDataPoint[] {
    const dataPoints =
      this.data.results[MetricsQueryRequest.defaultRefId]?.frames[0]?.data
        .values;

    const timeSeries = dataPoints?.[0] ?? [];
    const valueSeries = dataPoints?.[1] ?? [];

    return timeSeries
      .map((time, index) => ({
        date: DateTime.fromMillis(time),
        value: valueSeries[index]!,
      }))
      .filter((value) => value.date.toMillis() <= DateTime.now().toMillis());
  }

  public getFirstValue(): number | undefined {
    return this.getDataPoints()[0]?.value;
  }

  public getMultiFrameDataPoints(
    labelName: string[] | string = "database_type",
  ): MetricsFrameDataPointObject {
    const frames = this.data.results[MetricsQueryRequest.defaultRefId]?.frames;

    return frames?.reduce((prev, curr) => {
      const labels = curr.schema.fields[1].labels;
      const timeVal = curr.data.values[0].filter(
        (t) => t <= DateTime.now().toMillis(),
      );
      const val = curr.data.values[1];

      let finalLabel;

      if (Array.isArray(labelName)) {
        if (labels && Object.keys(labels).length > 0) {
          for (const label of labelName) {
            finalLabel = finalLabel
              ? `${finalLabel}-${labels[label]}`
              : `${labels[label]}`;
          }
        }
      } else {
        finalLabel = labels ? labels[labelName] : undefined;
      }

      return {
        ...prev,
        [finalLabel ? finalLabel : "unlabeled"]: timeVal.map((t, i) => ({
          date: DateTime.fromMillis(t ? t : 0),
          value: val[i] ? val[i] : 0,
        })),
      };
    }, {}) as MetricsFrameDataPointObject;
  }
}

export default MetricsQueryResponse;
