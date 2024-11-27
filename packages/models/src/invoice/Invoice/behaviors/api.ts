import { MittwaldAPIV2Client } from "@mittwald/api-client";
import { InvoiceBehaviors } from "./types.js";
import { assertStatus } from "@mittwald/api-client";

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
