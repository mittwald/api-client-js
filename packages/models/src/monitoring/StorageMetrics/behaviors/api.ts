import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { StorageMetricsBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";

export const apiStorageMetricsBehaviors = (
  client: MittwaldAPIV2Client,
): StorageMetricsBehaviors => ({
  findByProject: async (projectId) => {
    const response = await client.project.storagespaceGetProjectStatistics({
      projectId,
    });

    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, [403]);
  },

  findByServer: async (serverId) => {
    const response = await client.project.storagespaceGetServerStatistics({
      serverId,
    });

    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, [403]);
  },
});
