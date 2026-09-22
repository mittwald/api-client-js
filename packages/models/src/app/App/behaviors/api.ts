import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { AppBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { resolveTotalCount } from "../../../base";

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
