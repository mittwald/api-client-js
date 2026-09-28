import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { VolumeBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount } from "../../../base/index.js";

export const apiVolumeBehaviors = (
  client: MittwaldAPIV2Client,
): VolumeBehaviors => ({
  list: async (projectId, queryParameters) => {
    const response = await client.container.listVolumes({
      queryParameters,
      projectId,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  create: async (stackId, name) => {
    const response = await client.container.updateStack({
      data: { volumes: { [name]: { name } } },
      stackId,
    });

    validateResponse(response, 200);
    return response.data;
  },

  find: async (volumeId, stackId) => {
    const response = await client.container.getVolume({ volumeId, stackId });
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, 404);
  },

  delete: async (volumeId, stackId) => {
    const response = await client.container.deleteVolume({
      volumeId,
      stackId,
    });
    validateResponse(response, 204);
  },
});
