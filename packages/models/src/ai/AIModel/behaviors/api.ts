import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { AIModelBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount } from "../../../base/index.js";

export const apiAIModelBehaviors = (
  client: MittwaldAPIV2Client,
): AIModelBehaviors => ({
  list: async () => {
    const response = await client.aiHosting.getModels();

    validateResponse(response, 200);

    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },
});
