import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type UserData = MittwaldAPIV2.Operations.UserGetUser.ResponseData;

export type UserUpdatePersonalInformationRequestData =
  MittwaldAPIV2.Paths.V2UsersSelfPersonalInformation.Put.Parameters.RequestBody["person"];

export type UserVerifyPhoneNumberRequestData =
  MittwaldAPIV2.Paths.V2UsersUserIdActionsVerifyPhone.Post.Parameters.RequestBody;

export type UserVerifyEmailRequestData =
  MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsVerifyEmail.Post.Parameters.RequestBody;

export type UserUpdatePasswordRequestData =
  MittwaldAPIV2.Paths.V2UsersSelfCredentialsPassword.Put.Parameters.RequestBody;

export type UserUpdatePasswordResult =
  | MittwaldAPIV2.Operations.UserChangePassword.ResponseData
  | "mfaRequired";

export type UserConfirmPasswordResetRequestData =
  MittwaldAPIV2.Paths.V2UsersSelfCredentialsPasswordConfirmReset.Post.Parameters.RequestBody;

export type UserDeleteRequestData =
  MittwaldAPIV2.Paths.V2UsersSelf.Delete.Parameters.RequestBody;

export type RefreshSessionData =
  MittwaldAPIV2.Operations.UserRefreshSession.ResponseData;

export type FeedbackPollStatus =
  MittwaldAPIV2.Paths.V2PollSettingsUserId.Post.Parameters.RequestBody["status"];
