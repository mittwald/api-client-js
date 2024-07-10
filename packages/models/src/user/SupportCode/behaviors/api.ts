import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import { SupportCodeBehaviors } from "./types.js";

export const apiSupportCodeBehaviors = (
  client: MittwaldAPIV2Client,
): SupportCodeBehaviors => ({
  get: async () => {
    const response = await client.user.supportCodeRequest();

    assertStatus(response, 200);

    return response.data;
  },
});
