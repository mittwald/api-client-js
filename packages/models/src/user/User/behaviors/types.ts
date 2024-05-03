import {
  UserAddPhoneNumberRequestData,
  UserAuthenticateRequestData,
  UserAuthenticateResponseData,
  UserData,
  UserUpdatePersonalInformationData,
  UserVerifyPhoneNumberRequestData,
} from "../types.js";

export interface UserBehaviors {
  find: (id: string) => Promise<UserData | undefined>;

  updatePersonalInformation: (
    id: string,
    data: UserUpdatePersonalInformationData,
  ) => Promise<void>;

  addPhoneNumber: (
    id: string,
    data: UserAddPhoneNumberRequestData,
  ) => Promise<void>;
  removePhoneNumber: (id: string) => Promise<void>;
  verifyPhoneNumber: (
    id: string,
    data: UserVerifyPhoneNumberRequestData,
  ) => Promise<void>;

  requestAvatarUpload: (id: string) => Promise<{ id: string }>;
  removeAvatar: (id: string) => Promise<void>;

  authenticate: (
    data: UserAuthenticateRequestData,
  ) => Promise<UserAuthenticateResponseData>;
}
