import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { CustomerAIPlanBehavior } from "./types";

import {
  withAxiosRequestConfig,
  resolveTotalCount,
  validateResponse,
} from "../../../base";

export const apiCustomerAIPlanBehaviors = (
  client: MittwaldAPIV2Client,
): CustomerAIPlanBehavior => ({
  list: async (customerId, _query, options) => {
    const response = await client.aiHosting.customerGetPlans(
      { customerId },
      withAxiosRequestConfig(options),
    );

    if (response.status !== 200) {
      validateResponse(response, 404);
      return { totalCount: 0, items: [] };
    }

    const { plans } = response.data;
    return {
      totalCount: resolveTotalCount(response, plans.length),
      items: plans,
    };
  },

  find: async (customerId, planId, topUsageCount, options) => {
    const response = await client.aiHosting.customerGetPlan(
      { queryParameters: { topUsageCount }, customerId, planId },
      withAxiosRequestConfig(options),
    );

    if (response.status === 200) {
      return response.data;
    }

    validateResponse(response, 404);
  },

  findContract: async (customerId, planId, options) => {
    const response = await client.contract.getDetailOfContractByAiHosting(
      { aiHostingId: planId, customerId },
      withAxiosRequestConfig(options),
    );

    if (response.status === 200) {
      return response.data;
    }

    validateResponse(response, 404);
  },

  updateName: async (customerId, planId, name) => {
    const response = await client.aiHosting.customerUpdatePlan({
      data: { description: name },
      customerId,
      planId,
    });

    if (response.status === 204) {
      return;
    }

    validateResponse(response, 404);
  },

  acceptModelTerms: async (customerId) => {
    const response = await client.aiHosting.customerAcceptModelTerms({
      customerId,
    });

    if (response.status === 204) {
      return;
    }

    validateResponse(response, 404);
  },

  declareProfile: async (customerId) => {
    const response = await client.aiHosting.customerDeclareProfile({
      customerId,
    });

    if (response.status === 204) {
      return;
    }

    validateResponse(response, 404);
  },
});
