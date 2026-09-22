import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { MailRateLimitBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { resolveTotalCount } from "../../../base";

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
