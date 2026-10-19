import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import { DateTime } from "luxon";

import type { OrderBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { anyStatus404 } from "../../../base/api/typeFixes.js";
import { resolveTotalCount } from "../../../base/index.js";

export const apiOrderBehaviors = (
  client: MittwaldAPIV2Client,
): OrderBehaviors => ({
  list: async (query = {}) => {
    const { customerId, projectId, ...restQuery } = query;

    const response = customerId
      ? await client.contract.orderListCustomerOrders({
          queryParameters: restQuery,
          customerId,
        })
      : projectId
        ? await client.contract.orderListProjectOrders({
            queryParameters: restQuery,
            projectId,
          })
        : await client.contract.orderListOrders({
            queryParameters: restQuery,
          });

    validateResponse(response, 200);

    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  find: async (orderId) => {
    const response = await client.contract.orderGetOrder({ orderId });

    if (response.status === 200) {
      return response.data;
    }

    // API-DRIFT: orderGetOrder omits 404 in its generated response type, so anyStatus404 (404 as any) is passed (resolve: use the literal 404 once the client type declares it)
    validateResponse(response, anyStatus404);
  },

  preview: async (data) => {
    const response = await client.contract.orderPreviewOrder({
      data,
    });

    validateResponse(response, 200);
    return {
      ...response.data,
      freeTrialUntil: DateTime.now().plus({ days: 10 }).endOf("day").toISO(),
    };
  },
  previewTariffChange: async (tariffChangePreviewData) => {
    const response = await client.contract.orderPreviewTariffChange({
      data: tariffChangePreviewData,
    });
    validateResponse(response, 200);
    return response.data;
  },

  create: async (data) => {
    const response = await client.contract.orderCreateOrder({
      data,
    });
    validateResponse(response, 201);

    return { id: response.data.orderId };
  },

  createTariffChange: async (data) => {
    const response = await client.contract.orderCreateTariffChange({
      data,
    });
    validateResponse(response, 201);
  },
});
