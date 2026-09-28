import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { MailRateLimitBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount } from "../../../base/index.js";

export const apiMailRateLimitBehaviors = (
  client: MittwaldAPIV2Client,
): MailRateLimitBehaviors => ({
  query: async () => {
    const response = await client.mail.listMailRateLimits({});
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },
  find: async (rateLimitId) => {
    const response = await client.mail.getMailRateLimit({
      mailRateLimitId: rateLimitId,
    });
    if (response.status === 200) {
      return response.data;
    }
  },
});
