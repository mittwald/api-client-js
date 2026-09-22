import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { SupportCodeBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { withAxiosRequestConfig } from "../../../base";

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
