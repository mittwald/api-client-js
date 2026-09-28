import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { ContactVerificationBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount } from "../../../base/index.js";
import { ValidationError } from "../../../errors/index.js";

const resolveResendEmailError = (message: string): string => {
  const lowercaseMessage = message?.toLowerCase();

  if (lowercaseMessage.includes("mail send failed")) {
    return "mailSendFailed";
  }
  if (lowercaseMessage.includes("can only be sent once every")) {
    return "resendCooldown";
  }
  if (lowercaseMessage.includes("already verified")) {
    return "alreadyVerified";
  }
  return "default";
};

export const apiContactVerificationBehaviors = (
  client: MittwaldAPIV2Client,
): ContactVerificationBehaviors => ({
  resendVerificationEmail: async (contactVerificationId: string) => {
    const response = await client.domain.resendContactVerificationEmail({
      contactVerificationId,
    });
    if (response.status === 412) {
      const message =
        typeof response.data.message === "string"
          ? response.data.message.toLowerCase()
          : undefined;
      const type = message ? resolveResendEmailError(message) : "default";

      throw new ValidationError({
        path: "contactVerification",
        message: type,
        type,
      });
    }

    validateResponse(response, 204);
  },
  find: async (contactVerificationId: string) => {
    const response = await client.domain.getContactVerification({
      contactVerificationId,
    });

    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, [404]);
  },
  query: async (query = {}) => {
    const response = await client.domain.listContactVerifications({
      queryParameters: query,
    });
    validateResponse(response, 200);
    return { totalCount: resolveTotalCount(response), items: response.data };
  },
});
