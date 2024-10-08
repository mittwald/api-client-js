import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import { IngressBehaviors } from "./types.js";
import { assertOneOfStatus } from "@mittwald/api-client";

export const apiIngressBehaviors = (
  client: MittwaldAPIV2Client,
): IngressBehaviors => ({
  find: async (id) => {
    const response = await client.domain.ingressGetIngress({
      ingressId: id,
    });

    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [404]);
  },

  list: async (query = {}) => {
    const response = await client.domain.ingressListIngresses({
      queryParameters: query,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: response.data.length,
      /** @todo: use this code when pagination is supported by API */
      // totalCount: extractTotalCountHeader(response),
    };
  },
});
