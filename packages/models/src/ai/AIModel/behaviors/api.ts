import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { AIModelBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { resolveTotalCount } from "../../../base";

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
