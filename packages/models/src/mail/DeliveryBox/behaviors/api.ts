import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { DeliveryBoxBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount } from "../../../base/index.js";

export const apiDeliveryBoxBehaviors = (
  client: MittwaldAPIV2Client,
): DeliveryBoxBehaviors => ({
  query: async (projectId, query = {}) => {
    const response = await client.mail.listDeliveryBoxes({
      queryParameters: query,
      projectId,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },
  create: async (projectId, description, password) => {
    const response = await client.mail.createDeliverybox({
      data: {
        description,
        password,
      },
      projectId,
    });
    validateResponse(response, 201);
    return response.data;
  },
  updateDescription: async (deliveryBoxId, description) => {
    const response = await client.mail.updateDeliveryBoxDescription({
      data: {
        description,
      },
      deliveryBoxId,
    });
    validateResponse(response, 204);
  },
  updatePassword: async (deliveryBoxId, password) => {
    const response = await client.mail.updateDeliveryBoxPassword({
      data: {
        password,
      },
      deliveryBoxId,
    });
    validateResponse(response, 204);
  },
  find: async (deliveryBoxId) => {
    const response = await client.mail.getDeliveryBox({ deliveryBoxId });
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, [403, 404]);
  },
  delete: async (deliveryBoxId) => {
    const response = await client.mail.deleteDeliveryBox({ deliveryBoxId });
    validateResponse(response, 204);
  },
});
