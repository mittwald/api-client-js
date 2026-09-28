import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { LeadBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount } from "../../../base/index.js";

export const apiLeadBehaviors = (
  client: MittwaldAPIV2Client,
): LeadBehaviors => ({
  list: async (customerId, query) => {
    const response = await client.leadFyndr.leadfyndrListLeads({
      queryParameters: query,
      customerId,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response, response.data.leads.length),
      items: response.data.leads,
    };
  },
  find: async (customerId, leadId) => {
    const response = await client.leadFyndr.leadfyndrGetLead({
      customerId,
      leadId,
    });

    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, [403, 404, 429]);
  },
  unlock: async (customerId, leadId) => {
    const response = await client.leadFyndr.leadfyndrUnlockLead({
      customerId,
      leadId,
    });
    validateResponse(response, 200);
  },
});
