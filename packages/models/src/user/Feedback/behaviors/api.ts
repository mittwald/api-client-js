import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { FeedbackBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";

export const apiFeedbackBehaviors = (
  client: MittwaldAPIV2Client,
): FeedbackBehaviors => ({
  list: async (userId, query) => {
    const response = await client.user.listFeedback({
      queryParameters: query,
      userId,
    });

    validateResponse(response, 200);

    return response.data;
  },

  create: async (data) => {
    const response = await client.user.createFeedback({ data });

    validateResponse(response, 201);
  },
});
