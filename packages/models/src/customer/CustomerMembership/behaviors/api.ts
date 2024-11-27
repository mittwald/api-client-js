import {
  MittwaldAPIV2Client,
  assertStatus,
  extractTotalCountHeader,
} from "@mittwald/api-client";
import { CustomerMembershipBehaviors } from "./types.js";
import { CustomerMembershipListQueryData } from "../types.js";

export const apiCustomerMembershipBehaviors = (
  client: MittwaldAPIV2Client,
): CustomerMembershipBehaviors => ({
  find: async (id) => {
    const response = await client.customer.getCustomerMembership({
      customerMembershipId: id,
    });
    if (response.status === 200) {
      return response.data;
    }
    assertStatus(response, 404);
  },

  list: async (customerId, query?: CustomerMembershipListQueryData) => {
    const response = await client.customer.listMembershipsForCustomer({
      customerId,
      queryParameters: query,
    });

    assertStatus(response, 200);

    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },
});
