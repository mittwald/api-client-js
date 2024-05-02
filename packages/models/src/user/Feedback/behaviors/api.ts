import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import { FeedbackBehaviors } from "./types.js";
import { FeedbackCreateData } from "../types.js";

export const apiFeedbackBehaviors = (
  client: MittwaldAPIV2Client,
): FeedbackBehaviors => ({
  list: async (userId, query) => {
    const response = await client.user.listFeedback({
      userId,
      queryParameters: query,
    });

    assertStatus(response, 200);

    return response.data;
  },

  create: async (data: FeedbackCreateData) => {
    const response = await client.user.createFeedback({ data });

    assertStatus(response, 201);
  },
});
