import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { UnlockedLeadBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { resolveTotalCount } from "../../../base";

export const apiUnlockedLeadBehaviors = (
  client: MittwaldAPIV2Client,
): UnlockedLeadBehaviors => ({
  list: async (customerId, query) => {
    const response = await client.leadFyndr.leadfyndrListUnlockedLeads({
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
    const response = await client.leadFyndr.leadfyndrGetUnlockedLead({
      customerId,
      leadId,
    });

    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, [403, 404, 429]);
  },
  removeReservation: async (customerId, leadId) => {
    const response =
      await client.leadFyndr.leadfyndrRemoveUnlockedLeadReservation({
        customerId,
        leadId,
      });
    validateResponse(response, 200);
  },
  reserve: async (customerId, leadId) => {
    const response = await client.leadFyndr.leadfyndrReserveUnlockedLead({
      customerId,
      leadId,
    });
    validateResponse(response, 200);
  },
});
