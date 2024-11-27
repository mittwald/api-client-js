import { MittwaldAPIV2Client } from "@mittwald/api-client";
import { AppVersionBehaviors } from "./types.js";
import { assertStatus } from "@mittwald/api-client";

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
});
