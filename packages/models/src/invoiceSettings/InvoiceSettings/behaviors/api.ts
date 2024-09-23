import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import { InvoiceSettingsData } from "../types.js";
import { InvoiceSettingsBehaviors } from "./types.js";

export const apiInvoiceSettingsBehaviors = (
  client: MittwaldAPIV2Client,
): InvoiceSettingsBehaviors => ({
  find: async (id: string): Promise<InvoiceSettingsData | undefined> => {
    const response = await client.contract.invoiceGetDetailOfInvoiceSettings({
      customerId: id,
    });

    if (response.status === 200) {
      return response.data;
    }
    assertStatus(response, 429);
  },

  update: async (id, data) => {
    const response = await client.contract.invoiceUpdateInvoiceSettings({
      customerId: id,
      data,
    });
    assertStatus(response, 429);
  },
});
