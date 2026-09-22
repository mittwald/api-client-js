import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import { ApiClientError } from "@mittwald/api-client-commons";

import type { SessionBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { resolveTotalCount } from "../../../base";

export const apiSessionBehaviors = (
  client: MittwaldAPIV2Client,
): SessionBehaviors => ({
  getToken: async () => {
    const response = await client.axios.post(
      "/v2/users/self/credentials/token",
      {
        validateResponse: () => true,
      },
    );
    if (response.status !== 200) {
      throw new ApiClientError(
        `Unexpected response status (expected 200, got: ${response.status})`,
      );
    }
    return response.data;
  },

  list: async () => {
    const response = await client.user.listSessions();
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  find: async (tokenId) => {
    const response = await client.user.getSession({ tokenId });
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, 404);
  },

  close: async (tokenId) => {
    const response = await client.user.terminateSession({ tokenId });
    validateResponse(response, 204);
  },

  closeAll: async () => {
    const response = await client.user.terminateAllSessions();
    validateResponse(response, 204);
  },
});
