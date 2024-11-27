import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
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
});
