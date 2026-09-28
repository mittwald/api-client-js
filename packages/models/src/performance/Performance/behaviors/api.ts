import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { PerformanceBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount } from "../../../base/index.js";

export const apiPerformanceBehaviors = (
  client: MittwaldAPIV2Client,
): PerformanceBehaviors => ({
  list: async (projectId, query) => {
    const response =
      await client.pageInsights.pageinsightsListPerformanceDataForProject({
        queryParameters: query,
        projectId,
      });

    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  find: async (hostname, path, date) => {
    const response = await client.pageInsights.pageinsightsGetPerformanceData({
      queryParameters: {
        domain: hostname,
        path,
        date,
      },
    });

    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, 403);
  },
});
