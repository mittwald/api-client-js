import {
  assertStatus,
  assertOneOfStatus,
  MittwaldAPIV2Client,
  extractTotalCountHeader,
} from "@mittwald/api-client";
import { ServerBehaviors } from "./types.js";
import { OrderCreateRequestData, OrderCreateResponseData } from "../types.js";

export const apiServerBehaviors = (
  client: MittwaldAPIV2Client,
): ServerBehaviors => ({
  createOrder: async (
    serverProperties: OrderCreateRequestData,
  ): Promise<OrderCreateResponseData> => {
    const response = await client.contract.orderCreateOrder({
      data: {
        orderData: serverProperties,
        orderType: "server",
      },
    });
    assertStatus(response, 201);
    return response.data;
  },

  find: async (id) => {
    const response = await client.project.getServer({
      serverId: id,
    });

    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [403, 404]);
  },

  list: async (query) => {
    const response = await client.project.listServers({
      queryParameters: query,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },
});
