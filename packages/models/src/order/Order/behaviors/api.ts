import {
  MittwaldAPIV2Client,
  assertStatus,
  extractTotalCountHeader,
} from "@mittwald/api-client";
import { OrderBehaviors } from "./types.js";
import { OrderListQueryData } from "../types.js";

export const apiOrderBehaviors = (
  client: MittwaldAPIV2Client,
): OrderBehaviors => ({
  find: async (orderId: string) => {
    const response = await client.contract.orderGetOrder({ orderId: orderId });
    if (response.status === 200) {
      return response.data;
    }
  },

  list: async (query: OrderListQueryData) => {
    const response = await client.contract.orderListOrders({
      queryParameters: query,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },

  listByCustomer: async (customerId: string, query?: OrderListQueryData) => {
    const response = await client.contract.orderListCustomerOrders({
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
