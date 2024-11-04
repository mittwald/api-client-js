import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import { TldBehaviors } from "./types.js";

export const apiTldBehaviors = (client: MittwaldAPIV2Client): TldBehaviors => ({
  query: async () => {
    const response = await client.domain.listTlds();
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: response.data.length,
    };
  },
});
