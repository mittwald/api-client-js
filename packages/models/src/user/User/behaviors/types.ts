import type { AxiosRequestConfig } from "axios";

import type { FileUploadTokenData } from "../../../file/index.js";
import type {
  UserUpdatePersonalInformationRequestData,
  UserConfirmPasswordResetRequestData,
  UserVerifyPhoneNumberRequestData,
  UserUpdatePasswordRequestData,
  UserVerifyEmailRequestData,
  UserUpdatePasswordResult,
  UserDeleteRequestData,
  FeedbackPollStatus,
  RefreshSessionData,
  UserData,
} from "../types.js";

export interface UserBehaviors {
  updatePersonalInformation: (
    userId: string,
    data: UserUpdatePersonalInformationRequestData,
  ) => Promise<void>;

  checkShowFeedbackPoll: (
    userId: string,
    requestConfig?: AxiosRequestConfig,
  ) => Promise<boolean>;
  verifyPhoneNumber: (
    userId: string,
    data: UserVerifyPhoneNumberRequestData,
  ) => Promise<void>;

  updateFeedbackPollStatus: (
    userId: string,
    status: FeedbackPollStatus,
  ) => Promise<void>;

  updatePassword: (
    data: UserUpdatePasswordRequestData,
  ) => Promise<UserUpdatePasswordResult>;
  find: (
    userId: string,
    options?: AxiosRequestConfig,
  ) => Promise<UserData | undefined>;
  confirmPasswordReset: (
    data: UserConfirmPasswordResetRequestData,
  ) => Promise<void>;

  createAvatarUploadToken: (userId: string) => Promise<FileUploadTokenData>;
  addPhoneNumber: (userId: string, phoneNumber: string) => Promise<void>;

  refreshSession: (refreshToken: string) => Promise<RefreshSessionData>;
  getPasswordUpdatedAt: () => Promise<{ passwordUpdatedAt: string }>;
  verifyEmail: (data: UserVerifyEmailRequestData) => Promise<void>;
  delete: (data: UserDeleteRequestData) => Promise<void>;

  removePhoneNumber: (userId: string) => Promise<void>;

  removeAvatar: (userId: string) => Promise<void>;

  resetPassword: (email: string) => Promise<void>;
  updateEmail: (email: string) => Promise<void>;
}
