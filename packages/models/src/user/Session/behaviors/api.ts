import {
  assertStatus,
  MittwaldAPIV2Client,
  extractTotalCountHeader,
} from "@mittwald/api-client";
import { SessionBehaviors } from "./types.js";

export const apiSessionBehaviors = (
  client: MittwaldAPIV2Client,
): SessionBehaviors => ({
  find: async (id) => {
    const response = await client.user.getSession({
      tokenId: id,
    });
    if (response.status === 200) {
      return response.data;
    }
    assertStatus(response, 404);
  },

  list: async () => {
    const response = await client.user.listSessions();
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },

  getToken: async () => {
    const response = await client.user.checkToken();
    assertStatus(response, 200);
    return response.data;
  },

  close: async (id: string) => {
    const response = await client.user.terminateSession({
      tokenId: id,
    });
    assertStatus(response, 204);
  },

  closeAll: async () => {
    const response = await client.user.terminateAllSessions();
    assertStatus(response, 204);
  },
});
