import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { AppBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount } from "../../../base/index.js";

export const apiAppBehaviors = (client: MittwaldAPIV2Client): AppBehaviors => ({
  list: async (query) => {
    const response = await client.app.listApps({ queryParameters: query });

    validateResponse(response, 200);

    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  find: async (appId) => {
    const response = await client.app.getApp({ appId });
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, 404);
  },
});
