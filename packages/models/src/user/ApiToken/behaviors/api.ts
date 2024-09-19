import {
  assertStatus,
  MittwaldAPIV2Client,
  extractTotalCountHeader,
} from "@mittwald/api-client";
import { ApiTokenBehaviors } from "./types.js";

export const apiApiTokenBehaviors = (
  client: MittwaldAPIV2Client,
): ApiTokenBehaviors => ({
  find: async (id) => {
    const response = await client.user.getApiToken({ apiTokenId: id });
    if (response.status === 200) {
      return response.data;
    }
    assertStatus(response, 404);
  },

  list: async () => {
    const response = await client.user.listApiTokens();
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },

  create: async (data) => {
    const response = await client.user.createApiToken({ data });
    assertStatus(response, 201);
    return { id: response.data.token };
  },

  update: async (id, data) => {
    const response = await client.user.editApiToken({ apiTokenId: id, data });
    assertStatus(response, 204);
  },

  delete: async (id) => {
    const response = await client.user.deleteApiToken({ apiTokenId: id });
    assertStatus(response, 204);
  },
});
