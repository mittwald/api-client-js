import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { SpotlightFeedbackData } from "../types.js";
import type { SpotlightBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { withAxiosRequestConfig } from "../../../base/index.js";

export const apiSpotlightBehaviors = (
  client: MittwaldAPIV2Client,
): SpotlightBehaviors => ({
  submitFeedback: async (spotlightId, data) => {
    // API-DRIFT: the feedback body declares `owner` as required and the client
    // does not send it, so the omission has to be cast away here (resolve: drop
    // `owner` from the request schema)
    const response = await client.user.spotlightFeedback({
      data: data as SpotlightFeedbackData & { owner: string },
      spotlightId,
    });

    validateResponse(response, 204);
  },

  getSelfState: async (spotlightId, requestConfig) => {
    const response = await client.user.getSpotlightInfo(
      { spotlightId },
      withAxiosRequestConfig(requestConfig),
    );

    validateResponse(response, 200);

    return response.data;
  },

  reportInteraction: async (spotlightId, data) => {
    const response = await client.user.spotlightUsage({ spotlightId, data });

    validateResponse(response, 204);
  },
});
