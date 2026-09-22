import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { CustomerMembershipBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import {
  withAxiosRequestConfig,
  resolveTotalCount,
  anyStatus403,
} from "../../../base";

export const apiCustomerMembershipBehaviors = (
  client: MittwaldAPIV2Client,
): CustomerMembershipBehaviors => ({
  findOwn: async (customerId, userId) => {
    const response = await client.customer.listMembershipsForCustomer({
      customerId,
    });
    if (response.status === 200) {
      return response.data.find((m) => m.userId === userId);
    }
    // API-DRIFT: listMembershipsForCustomer omits 403 in its generated response type, so anyStatus403 (403 as any) is passed (resolve: use the literal 403 once the client type declares it)
    validateResponse(response, [anyStatus403, 404]);
  },

  find: async (customerMembershipId, options) => {
    const response = await client.customer.getCustomerMembership(
      {
        customerMembershipId,
      },
      withAxiosRequestConfig(options),
    );
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, 404);
  },

  list: async (customerId, query) => {
    const response = await client.customer.listMembershipsForCustomer({
      queryParameters: query,
      customerId,
    });

    validateResponse(response, 200);

    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  update: async (customerMembershipId, data) => {
    const response = await client.customer.updateCustomerMembership({
      customerMembershipId,
      data,
    });
    validateResponse(response, 204);
  },

  remove: async (customerMembershipId) => {
    const response = await client.customer.deleteCustomerMembership({
      customerMembershipId,
    });
    validateResponse(response, 204);
  },
});
