import {
  assertStatus,
  MittwaldAPIV2Client,
  assertOneOfStatus,
  extractTotalCountHeader,
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
  query: async (projectId: string, query = {}) => {
    const response = await client.mail.listDeliveryBoxes({
      projectId,
      queryParameters: query,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },
  create: async (projectId: string, description: string, password: string) => {
    const response = await client.mail.createDeliverybox({
      projectId,
      data: {
        password,
        description,
      },
    });
    assertStatus(response, 201);
    return response.data;
  },
  delete: async (deliveryBoxId: string) => {
    const response = await client.mail.deleteDeliveryBox({ deliveryBoxId });
    assertStatus(response, 204);
  },
  updateDescription: async (deliveryBoxId: string, description: string) => {
    const response = await client.mail.updateDeliveryBoxDescription({
      deliveryBoxId,
      data: {
        description,
      },
    });
    assertStatus(response, 204);
  },
  updatePassword: async (deliveryBoxId: string, password: string) => {
    const response = await client.mail.updateDeliveryBoxPassword({
      deliveryBoxId,
      data: {
        password,
      },
    });
    assertStatus(response, 204);
  },
});
