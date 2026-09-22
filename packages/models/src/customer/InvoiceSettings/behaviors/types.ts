import type { AxiosRequestConfig } from "axios";

import type {
  InvoiceSettingsUpdateRequestData,
  InvoiceSettingsData,
} from "../types";

export interface InvoiceSettingsBehaviors {
  update: (
    customerId: string,
    data: InvoiceSettingsUpdateRequestData,
    options?: AxiosRequestConfig,
  ) => Promise<void>;

  find: (
    customerId: string,
    options?: AxiosRequestConfig,
  ) => Promise<InvoiceSettingsData | undefined>;
}
