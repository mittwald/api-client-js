import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import { InvoiceBehaviors } from "./types.js";

export const apiInvoiceBehaviors = (
  client: MittwaldAPIV2Client,
): InvoiceBehaviors => ({
  find: async (invoiceId) => {
    const response = await client.invoice.invoiceDetail({
      invoiceId,
    });

    if (response.status === 200) {
      return response.data;
    }
    assertStatus(response, 403);
  },

  list: async (customerId: string, query) => {
    const response = await client.invoice.invoiceListCustomerInvoices({
      customerId,
      queryParameters: query,
    });
    assertStatus(response, 200);
    return response.data;
  },

  requestFileAccessToken: async (invoiceId, customerId) => {
    const response = await client.invoice.requestFileAccessToken({
      invoiceId,
      customerId,
    });
    assertStatus(response, 200);
    return response.data;
  },
});
