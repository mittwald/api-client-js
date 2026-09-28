import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { ProjectAIModelBehaviors } from "./types.js";

import { resolveTotalCount, validateResponse } from "../../../base/index.js";

export const apiProjectAIModelBehaviors = (
  client: MittwaldAPIV2Client,
): ProjectAIModelBehaviors => ({
  list: async (projectId: string) => {
    const response = await client.aiHosting.projectGetDetailedModels({
      projectId,
    });
    if (response.status !== 200) {
      validateResponse(response, 404);
      return { totalCount: 0, items: [] };
    }

    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },
});
