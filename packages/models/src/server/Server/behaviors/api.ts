import {
  assertStatus,
  assertOneOfStatus,
  MittwaldAPIV2Client,
} from "@mittwald/api-client";
import { ServerBehaviors } from "./types.js";

export const apiServerBehaviors = (
  client: MittwaldAPIV2Client,
): ServerBehaviors => ({
  find: async (id) => {
    const response = await client.project.getServer({
      serverId: id,
    });

    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [403, 404]);
  },

  list: async (query) => {
    const response = await client.project.listServers({
      queryParameters: query,
    });
    assertStatus(response, 200);
    return response.data;
  },
});
