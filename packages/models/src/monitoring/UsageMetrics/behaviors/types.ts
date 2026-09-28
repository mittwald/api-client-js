import type {
  MetricsQueryResponseApiData,
  MetricsQueryRequestApiData,
} from "../../lib/metrics/index.js";

export interface UsageMetricsBehaviors {
  getData: (
    request: MetricsQueryRequestApiData,
  ) => Promise<MetricsQueryResponseApiData>;
}
