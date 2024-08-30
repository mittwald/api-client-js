import {
  assertStatus,
  MittwaldAPIV2Client,
  extractTotalCountHeader,
} from "@mittwald/api-client";
import { assertOneOfStatus } from "@mittwald/api-client";
import { CustomerBehaviors } from "./types.js";

export const apiCustomerBehaviors = (
  client: MittwaldAPIV2Client,
): CustomerBehaviors => ({
  find: async (id) => {
    const response = await client.customer.getCustomer({
      customerId: id,
    });

    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [404]);
  },

  list: async (query) => {
    const response = await client.customer.listCustomers({
      queryParameters: query,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },

  update: async (id, data) => {
    const response = await client.customer.update({
      customerId: id,
      data,
    });
    assertStatus(response, 200);
  },
});
