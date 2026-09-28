import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { CronjobBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { anyStatus403 } from "../../../base/api/typeFixes.js";
import { resolveTotalCount } from "../../../base/index.js";

export const apiCronjobBehaviors = (
  client: MittwaldAPIV2Client,
): CronjobBehaviors => ({
  find: async (cronjobId) => {
    const response = await client.cronjob.getCronjob({ cronjobId });

    if (response.status === 200) {
      return response.data;
    }
    // API-DRIFT: getCronjob omits 403 in its generated response type, so anyStatus403 (403 as any) is passed (resolve: use the literal 403 once the client type declares it)
    validateResponse(response, [404, anyStatus403]);
  },

  list: async (projectId, query) => {
    const response = await client.cronjob.listCronjobs({
      queryParameters: query,
      projectId,
    });

    validateResponse(response, 200);

    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  create: async (projectId, data) => {
    const response = await client.cronjob.createCronjob({
      projectId,
      data,
    });

    validateResponse(response, 201);

    return response.data;
  },

  update: async (cronjobId, data) => {
    const response = await client.cronjob.updateCronjob({
      cronjobId,
      data,
    });

    validateResponse(response, 204);
  },

  getTimeZones: async () => {
    const response = await client.misc.ellaneousListTimeZones();

    validateResponse(response, 200);

    return response.data;
  },

  trigger: async (cronjobId) => {
    const response = await client.cronjob.createExecution({ cronjobId });

    validateResponse(response, 201);
  },

  delete: async (cronjobId) => {
    const response = await client.cronjob.deleteCronjob({ cronjobId });

    validateResponse(response, 204);
  },
});
