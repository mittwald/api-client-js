import {
  assertStatus,
  MittwaldAPIV2Client,
  extractTotalCountHeader,
  assertOneOfStatus,
} from "@mittwald/api-client";
import { InvoiceBehaviors } from "./types.js";

export const apiInvoiceBehaviors = (
  client: MittwaldAPIV2Client,
): InvoiceBehaviors => ({
  find: async (invoiceId) => {
    const response = await client.contract.invoiceDetail({
      invoiceId,
    });

    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [404, 429]);
  },

  list: async (request) => {
    const response = await client.contract.invoiceListCustomerInvoices(request);
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },

  requestFileAccessToken: async (invoiceId, customerId) => {
    const response = await client.contract.invoiceGetFileAccessToken({
      invoiceId,
      customerId,
    });
    assertStatus(response, 200);
    return response.data;
  },
});
