import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { SystemSoftwareBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { resolveTotalCount } from "../../../base";

export const apiSystemSoftwareBehaviors = (
  client: MittwaldAPIV2Client,
): SystemSoftwareBehaviors => ({
  list: async (query) => {
    const response = await client.app.listSystemsoftwares({
      queryParameters: query,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  find: async (systemSoftwareId) => {
    const response = await client.app.getSystemsoftware({
      systemSoftwareId,
    });
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, 404);
  },
});
