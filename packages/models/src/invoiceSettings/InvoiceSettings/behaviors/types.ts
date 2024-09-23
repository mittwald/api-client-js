import { InvoiceSettingsData } from "../types.js";

export interface InvoiceSettingsBehaviors {
  find: (id: string) => Promise<InvoiceSettingsData | undefined>;
  update: (
    customerId: string,
    data: Partial<InvoiceSettingsData>,
  ) => Promise<InvoiceSettingsData>;
}
