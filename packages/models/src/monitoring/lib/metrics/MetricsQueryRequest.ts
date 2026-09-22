import type { MetricsQueryRequestApiData } from "./types";

import { MetricsQueryResponse } from "./MetricsQueryResponse";
import { config } from "../../../config";

export class MetricsQueryRequest {
  public static defaultRefId = "Result";

  private readonly requestData: MetricsQueryRequestApiData;

  public constructor(requestData: MetricsQueryRequestApiData) {
    this.requestData = requestData;
  }

  public async getData(): Promise<MetricsQueryResponse> {
    const data = await config.behaviors.usageMetrics.getData(this.requestData);
    return new MetricsQueryResponse(data);
  }
}

export default MetricsQueryRequest;
