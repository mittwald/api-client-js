import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import { AppBehaviors } from "./types.js";

export const apiAppBehaviors = (client: MittwaldAPIV2Client): AppBehaviors => ({
  find: async (id) => {
    const response = await client.app.getApp({ appId: id });

    if (response.status === 200) {
      return response.data;
    }

    assertStatus(response, 404);
  },

  list: async () => {
    const response = await client.app.listApps();

    assertStatus(response, 200);

    return response.data;
  },
});
