import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { SupportCodeBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { withAxiosRequestConfig } from "../../../base/index.js";

export const apiSupportCodeBehaviors = (
  client: MittwaldAPIV2Client,
): SupportCodeBehaviors => ({
  get: async (requestConfig) => {
    const response = await client.user.supportCodeRequest(
      {},
      withAxiosRequestConfig(requestConfig),
    );

    validateResponse(response, 200);

    return response.data;
  },
});
