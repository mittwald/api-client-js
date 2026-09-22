import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { AITokenStatisticsBehaviors } from "./types.js";

import {
  withAxiosRequestConfig,
  validateResponse,
} from "../../../base/index.js";

export const apiAITokenStatisticsBehaviors = (
  client: MittwaldAPIV2Client,
): AITokenStatisticsBehaviors => ({
  getUsage: async (customerId, planId, range, options) => {
    const response = await client.aiHosting.planGetUsageStats(
      {
        queryParameters: {
          startDate: range.startDate,
          endDate: range.endDate,
        },
        customerId,
        planId,
      },
      withAxiosRequestConfig(options),
    );

    validateResponse(response, 200);

    return response.data;
  },

  getBillingPeriods: async (customerId, planId, options) => {
    const response = await client.aiHosting.planGetBillingPeriods(
      { customerId, planId },
      withAxiosRequestConfig(options),
    );

    validateResponse(response, 200);

    return response.data;
  },
});
