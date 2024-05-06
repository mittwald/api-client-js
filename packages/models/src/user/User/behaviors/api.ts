import {
  assertOneOfStatus,
  assertStatus,
  MittwaldAPIV2Client,
} from "@mittwald/api-client";
import { UserBehaviors } from "./types.js";
import {
  UserAuthenticateMfaRequestData,
  UserAuthenticateRequestData,
  UserConfirmPasswordResetRequestData,
  UserDeleteRequestData,
  UserRegisterRequestData,
  UserResendVerificationEmailRequestData,
  UserVerifyRegistrationRequestData,
} from "../types.js";

export const apiUserBehaviors = (
  client: MittwaldAPIV2Client,
): UserBehaviors => ({
  find: async (id) => {
    const response = await client.user.getUser({ userId: id });

    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [403, 404]);
  },

  getPasswordUpdatedAt: async () => {
    const response = await client.user.getPasswordUpdatedAt({});

    assertStatus(response, 200);

    return response.data;
  },

  getMfaStatus: async () => {
    const response = await client.user.getMfaStatus({});

    assertStatus(response, 200);

    return response.data;
  },

  updatePersonalInformation: async (id, data) => {
    const response = await client.user.updatePersonalInformation({
      userId: id,
      data,
    });

    assertStatus(response, 204);
  },

  addPhoneNumber: async (id, phoneNumber) => {
    const response = await client.user.addPhoneNumber({
      userId: id,
      data: { phoneNumber },
    });

    assertStatus(response, 204);
  },

  verifyPhoneNumber: async (id, data) => {
    const response = await client.user.verifyPhoneNumber({ userId: id, data });

    assertStatus(response, 204);
  },

  removePhoneNumber: async (id) => {
    const response = await client.user.removePhoneNumber({ userId: id });

    assertStatus(response, 204);
  },

  updateEmail: async (email) => {
    const response = await client.user.changeEmail({ data: { email } });

    assertStatus(response, 204);
  },

  verifyEmail: async (data) => {
    const response = await client.user.verifyEmail({ data });

    assertStatus(response, 204);
  },

  requestAvatarUpload: async (id) => {
    const response = await client.user.requestAvatarUpload({ userId: id });

    assertStatus(response, 200);

    return response.data;
  },

  removeAvatar: async (id) => {
    const response = await client.user.removeAvatar({ userId: id });

    assertStatus(response, 204);
  },

  updatePassword: async (data) => {
    const response = await client.user.changePassword({ data });

    assertStatus(response, 200);

    return response.data;
  },

  resetPassword: async (email) => {
    const response = await client.user.initPasswordReset({ data: { email } });

    assertStatus(response, 201);
  },

  confirmPasswordReset: async (data: UserConfirmPasswordResetRequestData) => {
    const response = await client.user.confirmPasswordReset({ data });

    assertStatus(response, 204);
  },

  authenticate: async (data: UserAuthenticateRequestData) => {
    const response = await client.user.authenticate({ data });

    assertOneOfStatus(response, [200, 202]);

    return response.data;
  },

  logout: async () => {
    const response = await client.user.logout();

    assertStatus(response, 204);
  },

  register: async (data: UserRegisterRequestData) => {
    const response = await client.user.register({ data });

    assertStatus(response, 201);

    return { id: response.data.userId };
  },

  verifyRegistration: async (data: UserVerifyRegistrationRequestData) => {
    const response = await client.user.verifyRegistration({ data });

    assertStatus(response, 200);
  },

  resendVerificationEmail: async (
    data: UserResendVerificationEmailRequestData,
  ) => {
    const response = await client.user.resendVerificationEmail({ data });

    assertStatus(response, 204);
  },

  delete: async (data: UserDeleteRequestData) => {
    const response = await client.user.deleteUser({ data });

    assertOneOfStatus(response, [200, 202]);
  },

  authenticateMfa: async (data: UserAuthenticateMfaRequestData) => {
    const response = await client.user.authenticateMfa({ data });

    assertStatus(response, 200);

    return response.data;
  },

  confirmMfa: async (multiFactorCode: string) => {
    const response = await client.user.confirmMfa({
      data: { multiFactorCode },
    });

    assertStatus(response, 200);

    return response.data;
  },

  disableMfa: async (multiFactorCode: string) => {
    const response = await client.user.disableMfa({
      data: { multiFactorCode },
    });

    assertStatus(response, 204);
  },

  resetRecoveryCodes: async (multiFactorCode: string) => {
    const response = await client.user.resetRecoverycodes({
      data: { multiFactorCode },
    });

    assertStatus(response, 200);

    return response.data;
  },

  createAccessTokenRetrievalKey: async () => {
    const response = await client.user.createAccessTokenRetrievalKey();

    assertStatus(response, 201);

    return response.data;
  },
});
