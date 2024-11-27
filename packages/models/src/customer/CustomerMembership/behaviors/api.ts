import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { CustomerMembershipBehaviors } from "./types.js";

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
});
