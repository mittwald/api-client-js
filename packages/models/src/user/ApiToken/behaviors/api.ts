import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { ApiTokenBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { resolveTotalCount } from "../../../base";

export const apiApiTokenBehaviors = (
  client: MittwaldAPIV2Client,
): ApiTokenBehaviors => ({
  list: async () => {
    const response = await client.user.listApiTokens();
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  find: async (apiTokenId) => {
    const response = await client.user.getApiToken({ apiTokenId });
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, 404);
  },

  create: async (data) => {
    const response = await client.user.createApiToken({ data });
    validateResponse(response, 201);
    return response.data.token;
  },

  update: async (apiTokenId, data) => {
    const response = await client.user.editApiToken({ apiTokenId, data });
    validateResponse(response, 204);
  },

  delete: async (apiTokenId) => {
    const response = await client.user.deleteApiToken({ apiTokenId });
    validateResponse(response, 204);
  },
});
