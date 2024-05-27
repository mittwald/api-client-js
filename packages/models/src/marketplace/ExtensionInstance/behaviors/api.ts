import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import { ExtensionInstanceBehaviors } from "./types.js";

export const apiExtensionInstanceBehaviors = (
  client: MittwaldAPIV2Client,
): ExtensionInstanceBehaviors => ({
  find: async (id) => {
    const response = await client.marketplace.extensionGetExtensionInstance({
      extensionInstanceId: id,
    });

    if (response.status === 200) {
      return response.data;
    }

    assertStatus(response, 404);
  },
});
