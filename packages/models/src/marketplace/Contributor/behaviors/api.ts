import { ContributorBehaviors } from "./types.js";
import {
  assertStatus,
  MittwaldAPIV2Client,
  extractTotalCountHeader,
} from "@mittwald/api-client";

export const apiContributorBehaviors = (
  client: MittwaldAPIV2Client,
): ContributorBehaviors => ({
  find: async (id) => {
    const response = await client.marketplace.extensionGetContributor({
      contributorId: id,
    });

    if (response.status === 200) {
      return response.data;
    }
    assertStatus(response, 404);
  },

  list: async (query) => {
    const response = await client.marketplace.extensionListContributors({
      queryParameters: query,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },
});
