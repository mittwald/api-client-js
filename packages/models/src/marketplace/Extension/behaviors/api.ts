import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import { ExtensionBehaviors } from "./types.js";
import { ExtensionListQuery } from "../types.js";

export const apiExtensionBehaviors = (
  client: MittwaldAPIV2Client,
): ExtensionBehaviors => ({
  find: async (id) => {
    const response = await client.marketplace.extensionGetExtension({
      extensionId: id,
    });

    if (response.status === 200) {
      return response.data;
    }

    // Todo: aktivieren wenn 404 Route in Specs verfügbar ist
    // assertStatus(response, 404);
  },

  list: async (query: ExtensionListQuery) => {
    const response = await client.marketplace.extensionListExtensions({
      queryParameters: query,
    });

    assertStatus(response, 200);

    return response.data;
  },
});
