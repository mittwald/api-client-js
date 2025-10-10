import type { ContributorBehaviors } from "./types.js";
import {
  MittwaldAPIV2Client,
  extractTotalCountHeader,
  assertStatus,
} from "@mittwald/api-client";

export const apiContributorBehaviors = (
  client: MittwaldAPIV2Client,
): ContributorBehaviors => ({
  find: async (contributorId) => {
    const response = await client.marketplace.extensionGetContributor({
      contributorId,
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

  listIncomingInvoices: async (contributorId, queryParameters) => {
    const response = await client.marketplace.contributorListIncomingInvoices({
      contributorId,
      queryParameters,
    });

    if (response.status === 200) {
      return {
        items: response.data,
        totalCount: extractTotalCountHeader(response),
      };
    }

    assertStatus(response, 404);
    return {
      items: [],
      totalCount: 0,
    };
  },
});
