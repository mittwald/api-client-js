import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { CronjobExecutionBehaviors } from "./types.js";

import {
  withAxiosRequestConfig,
  resolveTotalCount,
} from "../../../base/index.js";
import { validateResponse } from "../../../base/api/validateResponse.js";

export const apiCronjobExecutionBehaviors = (
  client: MittwaldAPIV2Client,
): CronjobExecutionBehaviors => ({
  getExecutionAnalysis: async (
    executionId,
    cronjobId,
    language,
    requestConfig,
  ) => {
    const response = await client.cronjob.getExecutionAnalysis(
      {
        headers: language ? { "Accept-Language": language } : undefined,
        executionId,
        cronjobId,
      },
      withAxiosRequestConfig(requestConfig),
    );

    validateResponse(response, 200);

    return response.data;
  },

  list: async (cronjobId, query) => {
    const response = await client.cronjob.listExecutions({
      queryParameters: query,
      cronjobId,
    });

    validateResponse(response, 200);

    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  findLog: async (projectId, logPath) => {
    const response = await client.projectFileSystem.getFileContent({
      queryParameters: { file: logPath },
      projectId,
    });

    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, 404);
  },

  find: async (executionId, cronjobId) => {
    const response = await client.cronjob.getExecution({
      executionId,
      cronjobId,
    });

    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, 404);
  },
});
