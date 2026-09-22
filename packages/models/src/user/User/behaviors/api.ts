import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { UserBehaviors } from "./types.js";

import { ValidationError } from "../../../errors/index.js";
import {
  withAxiosRequestConfig,
  validateResponse,
  anyStatus400,
  anyStatus404,
  anyStatus409,
} from "../../../base/index.js";

export const apiUserBehaviors = (
  client: MittwaldAPIV2Client,
): UserBehaviors => ({
  delete: async (data) => {
    const response = await client.user.deleteUser({ data });

    if (
      // API-DRIFT: deleteUser omits 409 in its generated response type, so anyStatus409 (409 as any) is compared (resolve: use the literal 409 once the client type declares it)
      response.status === anyStatus409 ||
      (typeof response.data === "object" &&
        "originalStatus" in response.data &&
        response.data.originalStatus === 409)
    ) {
      throw new ValidationError({ type: "isLastOwner", path: "root" });
    }

    // API-DRIFT: deleteUser omits 404 in its generated response type, so anyStatus404 (404 as any) is passed (resolve: use the literal 404 once the client type declares it)
    validateResponse(response, [200, 202, anyStatus404]);
  },

  find: async (userId, options) => {
    const response = await client.user.getUser(
      {
        userId,
      },
      withAxiosRequestConfig(options),
    );
    if (response.status === 200) {
      return response.data;
    }
    // API-DRIFT: getUser omits 400 in its generated response type, so anyStatus400 (400 as any) is passed (resolve: use the literal 400 once the client type declares it)
    validateResponse(response, [anyStatus400, 403, 404]);
  },

  updatePersonalInformation: async (userId, data) => {
    const response = await client.user.updatePersonalInformation({
      data: { person: data },
      userId,
    });

    validateResponse(response, 204, {
      validationError: {
        pathMappings: {
          "person.first_name": "firstName",
          "person.last_name": "lastName",
        },
      },
    });
  },

  updateEmail: async (email) => {
    const response = await client.user.changeEmail({ data: { email } });

    validateResponse(response, 204, {
      validationError: {
        typeMappings: {
          "*": (e) =>
            e.message?.includes("already in use") ? "alreadyInUse" : "custom",
        },
      },
    });
  },

  verifyPhoneNumber: async (userId, data) => {
    const response = await client.user.verifyPhoneNumber({ userId, data });

    validateResponse(response, 204, {
      validationError: {
        pathMappings: {
          verification_token: "code",
        },
      },
    });
  },

  checkShowFeedbackPoll: async (userId, requestConfig) => {
    const response = await client.user.getPollStatus(
      { userId },
      withAxiosRequestConfig(requestConfig),
    );

    validateResponse(response, 200);

    return response.data.shouldShow;
  },

  createAvatarUploadToken: async (userId) => {
    const response = await client.user.requestAvatarUpload({ userId });
    validateResponse(response, 200);
    return {
      token: response.data.refId,
      rules: response.data.rules,
    };
  },

  updatePassword: async (data) => {
    const response = await client.user.changePassword({ data });

    validateResponse(response, [200, 202]);

    if (response.status === 202) {
      return "mfaRequired";
    }

    return response.data;
  },

  updateFeedbackPollStatus: async (userId, status) => {
    const response = await client.user.postPollStatus({
      data: { status, userId },
      userId,
    });

    validateResponse(response, 200);
  },

  refreshSession: async (refreshToken) => {
    const response = await client.user.refreshSession({
      data: { refreshToken },
    });
    validateResponse(response, 200);

    return response.data;
  },

  addPhoneNumber: async (userId, phoneNumber) => {
    const response = await client.user.addPhoneNumber({
      data: { phoneNumber },
      userId,
    });

    validateResponse(response, 204);
  },

  getPasswordUpdatedAt: async () => {
    const response = await client.user.getPasswordUpdatedAt({});

    validateResponse(response, 200);

    return response.data;
  },

  resetPassword: async (email) => {
    const response = await client.user.initPasswordReset({ data: { email } });

    validateResponse(response, 201);
  },

  confirmPasswordReset: async (data) => {
    const response = await client.user.confirmPasswordReset({ data });

    validateResponse(response, 204);
  },

  removePhoneNumber: async (userId) => {
    const response = await client.user.removePhoneNumber({ userId });

    validateResponse(response, 204);
  },

  removeAvatar: async (userId) => {
    const response = await client.user.removeAvatar({ userId });

    validateResponse(response, 204);
  },

  verifyEmail: async (data) => {
    const response = await client.user.verifyEmail({ data });
    validateResponse(response, 204);
  },
});
