import {
  InvoiceSettingsData,
  InvoiceSettingsUpdateRequestData,
} from "../types.js";

export interface InvoiceSettingsBehaviors {
  find: (customerId: string) => Promise<InvoiceSettingsData | undefined>;

  update: (
    customerId: string,
    data: InvoiceSettingsUpdateRequestData,
  ) => Promise<void>;
}
