import { type MittwaldAPIV2Client } from "@mittwald/api-client";

import type { PerformanceTtfbAnalysisBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { anyStatus404 } from "../../../base/api/typeFixes.js";
import { withAxiosRequestConfig } from "../../../base/index.js";

export const apiPerformanceTtfbAnalysisBehaviors = (
  client: MittwaldAPIV2Client,
): PerformanceTtfbAnalysisBehaviors => ({
  find: async (projectId, ttfbAnalysisId, requestConfig) => {
    const response = await client.pageInsights.pageinsightsGetStraceData(
      {
        straceId: ttfbAnalysisId,
        projectId,
      },
      withAxiosRequestConfig(requestConfig),
    );

    if (response.status === 200) {
      if ("errorMessage" in response.data.result) {
        throw new Error(response.data.result.errorMessage);
      }
      return response.data;
    }

    // API-DRIFT: pageinsightsGetStraceData omits 404 in its generated response type, so anyStatus404 (404 as any) is passed (resolve: use the literal 404 once the client type declares it)
    validateResponse(response, [403, anyStatus404]);
  },

  trigger: async (projectId, url) => {
    const response = await client.pageInsights.pageinsightsScheduleStrace({
      data: {
        url: url,
      },
      projectId: projectId,
    });

    validateResponse(response, 202);
    return response.data;
  },
});
