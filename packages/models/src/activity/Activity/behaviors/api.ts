import type { MittwaldAPIV2Client } from "@mittwald/api-client";
import type { AxiosRequestConfig } from "axios";

import type { ActivityBehaviors } from "./types.js";

import {
  withAxiosRequestConfig,
  resolveTotalCount,
  validateResponse,
} from "../../../base/index.js";

export const apiActivityBehaviors = (
  client: MittwaldAPIV2Client,
): ActivityBehaviors => ({
  list: async (projectId, query) => {
    const response = await client.project.listProjectActivities(
      {
        queryParameters: query,
        projectId,
      },
      withAxiosRequestConfig({
        retryCache: {
          cache: false,
        },
      } as AxiosRequestConfig),
    );

    validateResponse(response, 200);

    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },
});
