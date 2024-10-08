import {
  assertStatus,
  MittwaldAPIV2Client,
  extractTotalCountHeader,
  assertOneOfStatus,
} from "@mittwald/api-client";
import { DomainBehaviors } from "./types.js";

export const apiDomainBehaviors = (
  client: MittwaldAPIV2Client,
): DomainBehaviors => ({
  find: async (id) => {
    const response = await client.domain.getDomain({
      domainId: id,
    });
    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [404]);
  },
  query: async (query = {}) => {
    const response = await client.domain.listDomains({
      queryParameters: query,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },
});
