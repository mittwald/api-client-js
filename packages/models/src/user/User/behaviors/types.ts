import {
  UserAuthenticateRequestData,
  UserAuthenticateResponseData,
  UserConfirmPasswordResetRequestData,
  UserData,
  UserDeleteRequestData,
  UserRegisterRequestData,
  UserResendVerificationEmailRequestData,
  UserUpdatePasswordRequestData,
  UserUpdatePasswordResponseData,
  UserUpdatePersonalInformationRequestData,
  UserVerifyEmailRequestData,
  UserVerifyPhoneNumberRequestData,
  UserVerifyRegistrationRequestData,
} from "../types.js";
import { FileUploadTokenData } from "../../../file/index.js";

export interface UserBehaviors {
  find: (id: string) => Promise<UserData | undefined>;

  createAvatarUploadToken: (userId: string) => Promise<FileUploadTokenData>;
  removeAvatar: (id: string) => Promise<void>;

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

  getPasswordUpdatedAt: () => Promise<{ passwordUpdatedAt: string }>;
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
}
