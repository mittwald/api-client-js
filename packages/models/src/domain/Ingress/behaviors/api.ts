import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import { assertOneOfStatus } from "@mittwald/api-client-commons";
import { IngressBehaviors } from "./types.js";

export const apiIngressBehaviors = (
  client: MittwaldAPIV2Client,
): IngressBehaviors => ({
  find: async (id) => {
    const response = await client.domain.ingressGetSpecific({
      ingressId: id,
    });

    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [403]);
  },

  list: async (query = {}) => {
    const { projectId } = query;

    if (projectId) {
      const response = await client.domain.ingressListForProject({
        projectId,
      });
      assertStatus(response, 200);
      return response.data;
    } else {
      const response = await client.domain.ingressListAccessible();
      assertStatus(response, 200);
      return response.data;
    }
  },
});
