import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { RegistrationBehaviors } from "./types.js";

import { validateResponse } from "../../../base/index.js";

export const apiRegistrationBehaviors = (
  client: MittwaldAPIV2Client,
): RegistrationBehaviors => ({
  verify: async (data) => {
    const response = await client.user.verifyRegistration({ data });

    validateResponse(response, 200, {
      validationError: {
        typeMappings: {
          "*": (e) =>
            e.message === "Wrong verification token"
              ? "wrongVerificationToken"
              : undefined,
        },
      },
    });
  },

  start: async (data) => {
    const response = await client.user.register({ data });

    validateResponse(response, 201);

    return { id: response.data.userId };
  },

  resendVerificationEmail: async (data) => {
    const response = await client.user.resendVerificationEmail({ data });

    validateResponse(response, 204);
  },
});
