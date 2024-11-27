import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { AppVersionBehaviors } from "./types.js";

export const apiAppVersionBehaviors = (
  client: MittwaldAPIV2Client,
): AppVersionBehaviors => ({
  find: async (id, appId) => {
    const response = await client.app.getAppversion({
      appVersionId: id,
      appId,
    });
    if (response.status === 200) {
      return response.data;
    }
    assertStatus(response, 404);
  },

  list: async (appId, query) => {
    const response = await client.app.listAppversions({
      appId,
      queryParameters: query,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: response.data.length,
    };
  },
});
