import {
  assertStatus,
  MittwaldAPIV2Client,
  assertOneOfStatus,
} from "@mittwald/api-client";
import { DeliveryBoxBehaviors } from "./types.js";

export const apiDeliveryBoxBehaviors = (
  client: MittwaldAPIV2Client,
): DeliveryBoxBehaviors => ({
  find: async (deliveryBoxId: string) => {
    const response = await client.mail.getDeliveryBox({ deliveryBoxId });
    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [404]);
  },
  query: async (projectId: string) => {
    const response = await client.mail.listDeliveryBoxes({
      projectId,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: response.data.length,
    };
  },
});
