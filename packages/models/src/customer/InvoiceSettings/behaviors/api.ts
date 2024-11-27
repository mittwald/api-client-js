import { MittwaldAPIV2Client } from "@mittwald/api-client";
import { InvoiceSettingsBehaviors } from "./types.js";
import { assertStatus } from "@mittwald/api-client";

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
});
