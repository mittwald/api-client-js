import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { OrderPreviewBehaviors } from "./types.js";
import { OrderPreviewRequestData, OrderPreviewResponseData } from "../types.js";

export const apiOrderPreviewBehaviors = (
  client: MittwaldAPIV2Client,
): OrderPreviewBehaviors => ({
  previewOrder: async (
    orderData: OrderPreviewRequestData,
  ): Promise<OrderPreviewResponseData> => {
    const response = await client.contract.orderPreviewOrder({
      data: orderData,
    });

    assertStatus(response, 200);
    return response.data;
  },
});
