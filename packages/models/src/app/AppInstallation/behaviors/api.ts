import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import { assertOneOfStatus } from "@mittwald/api-client-commons";
import { AppInstallationBehaviors } from "./types.js";

export const apiAppInstallationBehaviors = (
  client: MittwaldAPIV2Client,
): AppInstallationBehaviors => ({
  find: async (id) => {
    const response = await client.appInstallation.getAppInstallation({
      appInstallationId: id,
    });

    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [403]);
  },

  list: async (query) => {
    const response = await client.appInstallation.listAppInstallations({
      queryParameters: query,
    });
    assertStatus(response, 200);
    return response.data;
  },
});
