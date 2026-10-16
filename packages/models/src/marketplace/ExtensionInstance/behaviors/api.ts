import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { ExtensionInstanceBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import {
  withAxiosRequestConfig,
  resolveTotalCount,
  anyStatus403,
} from "../../../base/index.js";

export const apiExtensionInstanceBehaviors = (
  client: MittwaldAPIV2Client,
): ExtensionInstanceBehaviors => ({
  findContract: async (extensionInstanceId, requestConfig) => {
    const response =
      await client.marketplace.extensionGetExtensionInstanceContract(
        {
          extensionInstanceId,
        },
        withAxiosRequestConfig(requestConfig),
      );

    if (response.status === 200) {
      return response.data;
    }

    // API-DRIFT: extensionGetExtensionInstanceContract omits 403 in its generated response type, so anyStatus403 (403 as any) is passed (resolve: use the literal 403 once the client type declares it)
    validateResponse(response, [anyStatus403, 404]);
  },

  findOpenCustomerOrders: async (customerId) => {
    const response =
      await client.marketplace.extensionGetCustomerExtensionInstanceOrders({
        customerId,
      });

    if (response.status === 200) {
      return response.data;
    }
    // API-DRIFT: extensionGetCustomerExtensionInstanceOrders omits 403 in its generated response type, so anyStatus403 (403 as any) is passed (resolve: use the literal 403 once the client type declares it)
    validateResponse(response, [404, anyStatus403]);
  },

  list: async (query, options) => {
    const response = await client.marketplace.extensionListExtensionInstances(
      {
        queryParameters: query,
      },
      withAxiosRequestConfig(options),
    );
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  scheduleVariantSwitch: async (extensionInstanceId, variantKey) => {
    const response =
      await client.marketplace.extensionScheduleExtensionVariantChange({
        data: { targetVariantKey: variantKey },
        extensionInstanceId,
      });
    validateResponse(response, 201);
  },

  findOpenProjectOrders: async (projectId) => {
    const response =
      await client.marketplace.extensionGetProjectExtensionInstanceOrders({
        projectId,
      });

    if (response.status === 200) {
      return response.data;
    }

    validateResponse(response, [404]);
  },

  terminate: async (extensionInstanceId, instantTermination) => {
    const response =
      await client.marketplace.extensionScheduleExtensionTermination({
        data: { instantTermination },
        extensionInstanceId,
      });

    validateResponse(response, 201);
  },

  find: async (extensionInstanceId) => {
    const response = await client.marketplace.extensionGetExtensionInstance({
      extensionInstanceId,
    });
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, [403, 404]);
  },

  updateContract: async (extensionInstanceId, variantKey) => {
    const response =
      await client.marketplace.extensionUpdateExtensionInstanceContract({
        data: { variantKey },
        extensionInstanceId,
      });
    validateResponse(response, 200);
  },

  generateSessionToken: async (extensionInstanceId, sessionId) => {
    const response = await client.marketplace.extensionGenerateSessionToken({
      extensionInstanceId,
      sessionId,
    });

    validateResponse(response, 200);

    return response.data;
  },

  createRetrievalKey: async (extensionInstanceId) => {
    const response = await client.marketplace.extensionCreateRetrievalKey({
      extensionInstanceId,
    });
    validateResponse(response, 200);

    return response.data;
  },

  cancelVariantSwitch: async (extensionInstanceId) => {
    const response =
      await client.marketplace.extensionCancelExtensionVariantChange({
        extensionInstanceId,
      });
    validateResponse(response, 200);
  },

  cancelTermination: async (extensionInstanceId) => {
    const response =
      await client.marketplace.extensionCancelExtensionTermination({
        extensionInstanceId,
      });

    validateResponse(response, 200);
  },

  consentToScopes: async (extensionInstanceId, data) => {
    const response = await client.marketplace.extensionConsentToExtensionScopes(
      { extensionInstanceId, data },
    );
    validateResponse(response, 204);
  },

  disable: async (extensionInstanceId) => {
    const response = await client.marketplace.extensionDisableExtensionInstance(
      { extensionInstanceId },
    );
    validateResponse(response, 204);
  },

  enable: async (extensionInstanceId) => {
    const response = await client.marketplace.extensionEnableExtensionInstance({
      extensionInstanceId,
    });
    validateResponse(response, 204);
  },

  delete: async (extensionInstanceId) => {
    const response = await client.marketplace.extensionDeleteExtensionInstance({
      extensionInstanceId,
    });
    validateResponse(response, 204);
  },

  create: async (data) => {
    const response = await client.marketplace.extensionCreateExtensionInstance({
      data,
    });
    validateResponse(response, 201);
    return response.data;
  },
});
