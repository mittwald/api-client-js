import {
  assertStatus,
  MittwaldAPIV2Client,
  assertOneOfStatus,
} from "@mittwald/api-client";
import { DnsZoneBehaviors } from "./types.js";
export const apiDnsZoneBehaviors = (
  client: MittwaldAPIV2Client,
): DnsZoneBehaviors => ({
  find: async (id) => {
    const response = await client.domain.dnsGetDnsZone({
      dnsZoneId: id,
    });

    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [400]);
  },
  query: async (projectId) => {
    const response = await client.domain.dnsListDnsZones({
      projectId,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: response.data.length,
    };
  },
});
