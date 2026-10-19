import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { SystemSoftwareVersionBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount } from "../../../base/index.js";

export const apiSystemSoftwareVersionBehaviors = (
  client: MittwaldAPIV2Client,
): SystemSoftwareVersionBehaviors => ({
  list: async (systemSoftwareId, query) => {
    const response = await client.app.listSystemsoftwareversions({
      queryParameters: query,
      systemSoftwareId,
    });

    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  find: async (systemSoftwareVersionId, systemSoftwareId) => {
    const response = await client.app.getSystemsoftwareversion({
      systemSoftwareVersionId,
      systemSoftwareId,
    });

    if (response.status === 200) {
      return response.data;
    }

    validateResponse(response, 404);
  },
});
