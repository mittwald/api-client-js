import {
  MittwaldAPIV2Client,
  assertStatus,
  extractTotalCountHeader,
} from "@mittwald/api-client";
import { InvoiceBehaviors } from "./types.js";

export const apiInvoiceBehaviors = (
  client: MittwaldAPIV2Client,
): InvoiceBehaviors => ({
  find: async (id) => {
    const response = await client.contract.invoiceDetail({
      invoiceId: id,
    });
    if (response.status === 200) {
      return response.data;
    }
    assertStatus(response, 404);
  },

  getFileAccessToken: async (id, customerId) => {
    const response = await client.contract.invoiceGetFileAccessToken({
      invoiceId: id,
      customerId,
    });
    assertStatus(response, 200);
    return response.data;
  },

  list: async (request) => {
    const response = await client.contract.invoiceListCustomerInvoices(request);
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },
});
