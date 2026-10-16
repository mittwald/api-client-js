import type { MittwaldAPIV2Client } from "@mittwald/api-client";
import type { AxiosRequestConfig } from "axios";

import type { CustomerCreateRequestData } from "../types.js";
import type { CustomerBehaviors } from "./types.js";

import {
  withAxiosRequestConfig,
  resolveTotalCount,
} from "../../../base/index.js";
import { validateResponse } from "../../../base/api/validateResponse.js";
import { anyStatus403 } from "../../../base/api/typeFixes.js";

export const apiCustomerBehaviors = (
  client: MittwaldAPIV2Client,
): CustomerBehaviors => ({
  findMarketplacePaymentMethod: async (customerId) => {
    const response = await client.marketplace.customerGetPaymentMethod({
      customerId,
    });

    if (response.status === 200) {
      return response.data;
    }

    // API-DRIFT: customerGetPaymentMethod omits 403 in its generated response type, so anyStatus403 (403 as any) is compared (resolve: use the literal 403 once the client type declares it)
    if (response.status === anyStatus403) {
      return "noAccess";
    }

    validateResponse(response, 404);
  },

  create: async (data: CustomerCreateRequestData) => {
    const response = await client.customer.createCustomer({
      data,
    });

    validateResponse(response, 201, {
      validationError: {
        pathMappings: {
          "owner.phoneNumbers": "owner.phoneNumber",
          "address.zip": "owner.address.zip",
        },
      },
    });
    return { id: response.data.customerId };
  },

  update: async (customerId, data) => {
    const response = await client.customer.updateCustomer({
      data: { ...data, customerId },
      customerId,
    });

    validateResponse(response, 200, {
      validationError: {
        pathMappings: {
          "owner.phoneNumbers": "owner.phoneNumber",
          "address.zip": "owner.address.zip",
        },
      },
    });
  },

  getBillingPortalLink: async (customerId) => {
    const response =
      await client.marketplace.contributorGetCustomerBillingPortalLink({
        customerId,
      });

    if (response.status === 404) {
      return undefined;
    }

    validateResponse(response, 200);

    return response.data.url;
  },

  find: async (customerId, options?: AxiosRequestConfig) => {
    const response = await client.customer.getCustomer(
      { customerId },
      withAxiosRequestConfig(options),
    );

    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, [403, 404, 401]);
  },

  updateMarketplacePaymentMethod: async (customerId, customReturnUrl) => {
    const response = await client.marketplace.customerUpdatePaymentMethod({
      data: { customReturnUrl },
      customerId,
    });

    validateResponse(response, 200);

    return response.data.url;
  },

  createAvatarUploadToken: async (customerId) => {
    const response = await client.customer.requestAvatarUpload({
      customerId,
    });
    validateResponse(response, 200);
    return {
      token: response.data.refId,
      rules: response.data.rules,
    };
  },

  expressInterestToContribute: async (customerId, data) => {
    const response =
      await client.marketplace.contributorExpressInterestToContribute({
        customerId,
        data,
      });

    validateResponse(response, 201);

    return response.data;
  },

  list: async (query) => {
    const response = await client.customer.listCustomers({
      queryParameters: query,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  createRecommendationSuggestion: async (customerId, suggestion) => {
    const response = await client.customer.createRecommendationSuggestion({
      data: { suggestion },
      customerId,
    });

    validateResponse(response, 201);
  },

  delete: async (customerId) => {
    const response = await client.customer.deleteCustomer({
      customerId,
    });
    validateResponse(response, 200);
  },

  removeAvatar: async (customerId) => {
    const response = await client.customer.removeAvatar({ customerId });

    validateResponse(response, 204);
  },
});
