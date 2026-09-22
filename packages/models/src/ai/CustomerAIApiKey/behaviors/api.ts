import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { CustomerAIApiKeyBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { resolveTotalCount } from "../../../base";
import { ValidationError } from "../../../errors";

export const apiCustomerAIApiKeyBehaviors = (
  client: MittwaldAPIV2Client,
): CustomerAIApiKeyBehaviors => ({
  find: async (customerId, apiKeyId) => {
    const response = await client.aiHosting.customerGetKey({
      keyId: apiKeyId,
      customerId,
    });

    if (response.status === 200) {
      return response.data;
    }

    const validationError = ValidationError.fromResponse(response);
    // invalid uuid in URL
    if (
      validationError &&
      validationError.errors.some(
        (e) => e.path === "licenceId" || e.path === "licenseId",
      )
    ) {
      return;
    }

    validateResponse(response, 404);
  },
  list: async (customerId, query) => {
    const response = await client.aiHosting.customerGetKeys({
      queryParameters: query,
      customerId,
    });

    validateResponse(response, 200);

    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },
  create: async (customerId, data) => {
    const response = await client.aiHosting.customerCreateKey({
      customerId,
      data,
    });

    validateResponse(response, 201);

    return { id: response.data.keyId };
  },
  update: async (customerId, apiKeyId, data) => {
    const response = await client.aiHosting.customerUpdateKey({
      keyId: apiKeyId,
      customerId,
      data,
    });

    validateResponse(response, 200);
  },
  delete: async (customerId, apiKeyId) => {
    const response = await client.aiHosting.customerDeleteKey({
      keyId: apiKeyId,
      customerId,
    });

    validateResponse(response, 204);
  },
});
