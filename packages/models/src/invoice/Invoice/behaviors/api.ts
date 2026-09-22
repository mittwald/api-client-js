import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { InvoiceBehaviors } from "./types";

import { withAxiosRequestConfig,resolveTotalCount } from "../../../base";
import { validateResponse } from "../../../base/api/validateResponse";

export const apiInvoiceBehaviors = (
  client: MittwaldAPIV2Client,
): InvoiceBehaviors => ({
  getFileAccessToken: async (invoiceId, customerId, requestConfig) => {
    const response = await client.contract.invoiceGetFileAccessToken(
      {
        customerId,
        invoiceId,
      },
      withAxiosRequestConfig(requestConfig),
    );
    validateResponse(response, 200);
    return response.data;
  },

  list: async (customerId, query) => {
    const response = await client.contract.invoiceListCustomerInvoices({
      queryParameters: query,
      customerId,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  find: async (invoiceId) => {
    const response = await client.contract.invoiceDetail({
      invoiceId,
    });
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, 404);
  },
});
