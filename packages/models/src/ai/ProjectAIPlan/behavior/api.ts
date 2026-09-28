import type { MittwaldAPIV2Client } from "@mittwald/api-client";
import type { AxiosRequestConfig } from "axios";

import type { ProjectAIPlanBehavior } from "./types.js";

import { withAxiosRequestConfig } from "../../../base/api/withModelRequestOptions.js";
import { resolveTotalCount } from "../../../base/api/resolveTotalCount.js";
import { validateResponse } from "../../../base/api/validateResponse.js";

export const apiProjectAIPlanBehaviors = (
  client: MittwaldAPIV2Client,
): ProjectAIPlanBehavior => ({
  list: async (projectId, _query, options) => {
    const response = await client.aiHosting.projectGetPlans(
      { projectId },
      withAxiosRequestConfig(options),
    );

    if (response.status !== 200) {
      validateResponse(response, 404);
      return { totalCount: 0, items: [] };
    }

    const { plans } = response.data;
    return {
      totalCount: resolveTotalCount(response, plans.length),
      items: plans,
    };
  },

  find: async (projectId, planId, options?: AxiosRequestConfig) => {
    const response = await client.aiHosting.projectGetPlan(
      { projectId, planId },
      withAxiosRequestConfig(options),
    );

    if (response.status === 200) {
      return response.data;
    }

    validateResponse(response, 404);
  },
});
