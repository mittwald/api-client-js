import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { AppVersionBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount } from "../../../base/index.js";

export const apiAppVersionBehaviors = (
  client: MittwaldAPIV2Client,
): AppVersionBehaviors => ({
  listUpdateCandidates: async (appId, baseAppVersionId) => {
    const response = await client.app.listUpdateCandidatesForAppversion({
      queryParameters: { onlyRecommended: true },
      baseAppVersionId,
      appId,
    });
    validateResponse(response, 200);
    return response.data;
  },

  list: async (appId, query) => {
    const response = await client.app.listAppversions({
      queryParameters: query,
      appId,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  find: async (appVersionId, appId) => {
    const response = await client.app.getAppversion({
      appVersionId,
      appId,
    });
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, 404);
  },
});
