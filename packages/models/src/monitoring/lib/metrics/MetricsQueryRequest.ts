import type { MetricsQueryRequestApiData } from "./types.js";

import { MetricsQueryResponse } from "./MetricsQueryResponse.js";
import { config } from "../../../config/index.js";

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
