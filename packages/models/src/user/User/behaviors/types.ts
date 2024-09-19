import {
  UserAuthenticateMfaRequestData,
  UserAuthenticateMfaResponseData,
  UserAuthenticateRequestData,
  UserAuthenticateResponseData,
  UserConfirmPasswordResetRequestData,
  UserData,
  UserDeleteRequestData,
  UserMfaStatusData,
  UserRegisterRequestData,
  UserRequestAvatarUploadResponseData,
  UserResendVerificationEmailRequestData,
  UserUpdatePasswordRequestData,
  UserUpdatePasswordResponseData,
  UserUpdatePersonalInformationRequestData,
  UserVerifyEmailRequestData,
  UserVerifyPhoneNumberRequestData,
  UserVerifyRegistrationRequestData,
} from "../types.js";

export interface UserBehaviors {
  find: (id: string) => Promise<UserData | undefined>;

  getPasswordUpdatedAt: () => Promise<{ passwordUpdatedAt: string }>;

  getMfaStatus: () => Promise<UserMfaStatusData>;

  updatePersonalInformation: (
    id: string,
    data: UserUpdatePersonalInformationRequestData,
  ) => Promise<void>;

  addPhoneNumber: (id: string, phoneNumber: string) => Promise<void>;
  verifyPhoneNumber: (
    id: string,
    data: UserVerifyPhoneNumberRequestData,
  ) => Promise<void>;
  removePhoneNumber: (id: string) => Promise<void>;

  updateEmail: (email: string) => Promise<void>;
  verifyEmail: (data: UserVerifyEmailRequestData) => Promise<void>;

  requestAvatarUpload: (
    id: string,
  ) => Promise<UserRequestAvatarUploadResponseData>;
  removeAvatar: (id: string) => Promise<void>;

  updatePassword: (
    data: UserUpdatePasswordRequestData,
  ) => Promise<UserUpdatePasswordResponseData>;

  resetPassword: (email: string) => Promise<void>;
  confirmPasswordReset: (
    data: UserConfirmPasswordResetRequestData,
  ) => Promise<void>;

  authenticate: (
    data: UserAuthenticateRequestData,
  ) => Promise<UserAuthenticateResponseData>;
  logout: () => Promise<void>;

  register: (data: UserRegisterRequestData) => Promise<{ id: string }>;
  verifyRegistration: (
    data: UserVerifyRegistrationRequestData,
  ) => Promise<void>;
  resendVerificationEmail: (
    data: UserResendVerificationEmailRequestData,
  ) => Promise<void>;

  delete: (data: UserDeleteRequestData) => Promise<void>;

  authenticateMfa: (
    data: UserAuthenticateMfaRequestData,
  ) => Promise<UserAuthenticateMfaResponseData>;
  confirmMfa: (
    multiFactorCode: string,
  ) => Promise<{ recoveryCodesList: string[] }>;
  disableMfa: (multiFactorCode: string) => Promise<void>;
  resetRecoveryCodes: (
    multiFactorCode: string,
  ) => Promise<{ recoveryCodesList: string[] }>;
}
