import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { RegistryBehaviors } from "./types";

import { resolveTotalCount,validateResponse } from "../../../base";

export const apiRegistryBehaviors = (
  client: MittwaldAPIV2Client,
): RegistryBehaviors => ({
  create: async (projectId, data) => {
    const response = await client.container.createRegistry({ projectId, data });

    validateResponse(response, 201, {
      validationError: {
        pathMappings: {
          "*.credentials": ["username", "password"],
        },
      },
    });

    return response.data;
  },

  list: async (projectId, queryParameters) => {
    const response = await client.container.listRegistries({
      queryParameters,
      projectId,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  find: async (registryId) => {
    const response = await client.container.getRegistry({ registryId });
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, 403);
  },

  update: async (registryId, data) => {
    const response = await client.container.updateRegistry({
      registryId,
      data,
    });

    validateResponse(response, 204);
  },

  delete: async (registryId) => {
    const response = await client.container.deleteRegistry({
      registryId,
    });
    validateResponse(response, 204);
  },
});
