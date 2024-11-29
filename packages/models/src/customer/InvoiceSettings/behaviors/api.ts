import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { InvoiceSettingsBehaviors } from "./types.js";

export const apiInvoiceSettingsBehaviors = (
  client: MittwaldAPIV2Client,
): InvoiceSettingsBehaviors => ({
  find: async (customerId) => {
    const response = await client.contract.invoiceGetDetailOfInvoiceSettings({
      customerId,
    });

    if (response.status === 200) {
      return response.data;
    }

    assertStatus(response, 404);
  },

  update: async (id, data) => {
    const response = await client.contract.invoiceUpdateInvoiceSettings({
      customerId: id,
      data,
    });
    assertStatus(response, 200);
  },
});
