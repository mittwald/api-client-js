import type { OrderBehaviors } from "./types.js";

import {
  MittwaldAPIV2Client,
  assertStatus,
  extractTotalCountHeader,
} from "@mittwald/api-client";
import { OrderCreateRequestData, OrderPreviewRequestData } from "../types.js";
import { OrderPreviewData } from "../../OrderPreview/index.js";

export const apiOrderBehaviors = (
  client: MittwaldAPIV2Client,
): OrderBehaviors => ({
  find: async (id) => {
    const response = await client.contract.orderGetOrder({
      orderId: id,
    });

    if (response.status === 200) {
      return response.data;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    assertStatus(response, 404);
  },

  list: async (query) => {
    const response = await client.contract.orderListOrders({
      queryParameters: query,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },

  listByCustomer: async (query) => {
    const response = await client.contract.orderListCustomerOrders({
      queryParameters: query,
      customerId: query.customerId,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },

  create: async (
    requestData: OrderCreateRequestData,
  ): Promise<{ id: string }> => {
    const response = await client.contract.orderCreateOrder({
      data: requestData,
    });
    assertStatus(response, 201);

    return { id: response.data.orderId };
  },

  preview: async (
    requestData: OrderPreviewRequestData,
  ): Promise<OrderPreviewData> => {
    const response = await client.contract.orderPreviewOrder({
      data: requestData,
    });

    assertStatus(response, 200);
    return response.data;
  },
});
