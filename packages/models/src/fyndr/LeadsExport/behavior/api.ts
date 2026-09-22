import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { LeadsExportBehavior } from "./types.js";

import { withAxiosRequestConfig, resolveTotalCount } from "../../../base/index.js";
import { validateResponse } from "../../../base/api/validateResponse.js";

export const apiLeadsExportBehavior = (
  client: MittwaldAPIV2Client,
): LeadsExportBehavior => ({
  create: async (customerId, data) => {
    const response = await client.leadFyndr.leadfyndrCreateLeadsExport({
      headers: {
        accept: "application/json",
      },
      customerId,
      data,
    });

    validateResponse(response, [200, 404]);

    if (response.status === 200) {
      if (typeof response.data === "string") {
        throw new Error("LeadsExportBehavior dont expect a string value");
      }

      return {
        base64FileContent: response.data.contentBase64,
        exportId: response.data.exportId,
      };
    } else if (response.status === 404) {
      const errorMessage = response.data.message as string | undefined;

      return {
        errorType: "NoLeadsToExport",
        errorMessage,
      };
    }
  },
  list: async (customerId, query, requestConfig) => {
    const response = await client.leadFyndr.leadfyndrGetLeadsExportHistory(
      {
        queryParameters: query,
        customerId,
      },
      withAxiosRequestConfig(requestConfig),
    );

    validateResponse(response, 200);

    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },
});
