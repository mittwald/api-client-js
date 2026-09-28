import type { MittwaldAPIV2Client } from "@mittwald/api-client";
import type { AxiosRequestConfig } from "axios";

import type { InvoiceSettingsBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { withAxiosRequestConfig } from "../../../base/index.js";
import { anyStatus403 } from "../../../base/api/typeFixes.js";

export const apiInvoiceSettingsBehaviors = (
  client: MittwaldAPIV2Client,
): InvoiceSettingsBehaviors => ({
  find: async (customerId, config?: AxiosRequestConfig) => {
    const response = await client.contract.invoiceGetDetailOfInvoiceSettings(
      { customerId },
      withAxiosRequestConfig(config),
    );

    if (response.status === 200) {
      return response.data;
    }

    // API-DRIFT: invoiceGetDetailOfInvoiceSettings omits 403 in its generated response type, so anyStatus403 (403 as any) is passed (resolve: use the literal 403 once the client type declares it)
    validateResponse(response, [404, anyStatus403]);
  },

  update: async (customerId, data, config?: AxiosRequestConfig) => {
    const response = await client.contract.invoiceUpdateInvoiceSettings(
      { customerId, data },
      withAxiosRequestConfig(config),
    );

    validateResponse(response, 200);
  },
});
