import { MittwaldAPIV2Client } from "@mittwald/api-client";
import { AppInstallationBehaviors } from "./types.js";
import { assertStatus } from "@mittwald/api-client";

export const apiAppInstallationBehaviors = (
  client: MittwaldAPIV2Client,
): AppInstallationBehaviors => ({
  find: async (id) => {
    const response = await client.app.getAppinstallation({
      appInstallationId: id,
    });
    if (response.status === 200) {
      return response.data;
    }
    assertStatus(response, 404);
  },
});
