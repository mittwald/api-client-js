import {
  assertStatus,
  MittwaldAPIV2Client,
  extractTotalCountHeader,
} from "@mittwald/api-client";
import { ExtensionBehaviors } from "./types.js";
import { ExtensionListQueryData } from "../types.js";

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
  },

  list: async (query: ExtensionListQueryData) => {
    const response = await client.marketplace.extensionListExtensions({
      queryParameters: query,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },
});
