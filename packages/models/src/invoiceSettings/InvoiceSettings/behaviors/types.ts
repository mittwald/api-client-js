import {
  InvoiceSettingsData,
  InvoiceSettingsUpdateRequestData,
} from "../types.js";

export interface InvoiceSettingsBehaviors {
  find: (id: string) => Promise<InvoiceSettingsData | undefined>;
  update: (
    customerId: string,
    data: InvoiceSettingsUpdateRequestData,
  ) => Promise<void>;
}
