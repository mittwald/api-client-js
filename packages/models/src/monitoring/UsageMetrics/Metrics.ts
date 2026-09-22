import type { DateValue } from "@internationalized/date";

import { MetricsQueryRequest } from "../lib/metrics";

export interface MetricsRequestOptions {
  from?: DateValue;
  to?: DateValue;
}

export class Metrics {
  public static getRequest(
    expression: string,
    options?: MetricsRequestOptions,
  ): MetricsQueryRequest {
    const from = options?.from?.toDate("Europe/Berlin").toISOString();
    const to = options?.to?.toDate("Europe/Berlin").toISOString();

    return new MetricsQueryRequest({
      queries: [
        {
          datasource: { uid: "MetricsAuthPrometheus", type: "prometheus" },
          refId: MetricsQueryRequest.defaultRefId,
          maxDataPoints: 1000,
          expr: expression,
        },
      ],
      from,
      to,
    });
  }
}
