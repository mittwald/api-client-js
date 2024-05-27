import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import { ExtensionBehaviors } from "./types.js";
import { ExtensionListQuery } from "../types.js";

export const apiExtensionBehaviors = (
  client: MittwaldAPIV2Client,
): ExtensionBehaviors => ({
  get: async (id) => {
    const response = await client.marketplace.extensionGetExtension({
      extensionId: id,
    });

    assertStatus(response, 200);

    return response.data;
  },

  list: async (query: ExtensionListQuery) => {
    const response = await client.marketplace.extensionListExtensions({
      queryParameters: query,
    });

    assertStatus(response, 200);

    return response.data;
  },
});
