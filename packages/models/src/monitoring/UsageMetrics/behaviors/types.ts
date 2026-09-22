import type {
  MetricsQueryResponseApiData,
  MetricsQueryRequestApiData,
} from "../../lib/metrics";

export interface UsageMetricsBehaviors {
  getData: (
    request: MetricsQueryRequestApiData,
  ) => Promise<MetricsQueryResponseApiData>;
}
