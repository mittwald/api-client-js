import {
  MittwaldAPIV2Client,
  assertStatus,
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

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    assertStatus(response, 404);
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
