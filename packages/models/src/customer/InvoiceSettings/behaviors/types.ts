import { InvoiceSettingsData } from "../types.js";

export interface InvoiceSettingsBehaviors {
  find: (customerId: string) => Promise<InvoiceSettingsData | undefined>;
}
