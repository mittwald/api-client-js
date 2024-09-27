import { MittwaldAPIV2 } from "@mittwald/api-client";

export type UserData = MittwaldAPIV2.Operations.UserGetUser.ResponseData;

export type UserUpdatePersonalInformationRequestData =
  MittwaldAPIV2.Paths.V2UsersSelfPersonalInformation.Put.Parameters.RequestBody;

export type UserVerifyPhoneNumberRequestData =
  MittwaldAPIV2.Paths.V2UsersUserIdActionsVerifyPhone.Post.Parameters.RequestBody;

export type UserRequestAvatarUploadResponseData =
  MittwaldAPIV2.Paths.V2UsersUserIdAvatar.Post.Parameters.RequestBody;

export type UserVerifyEmailRequestData =
  MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsVerifyEmail.Post.Parameters.RequestBody;

export type UserUpdatePasswordRequestData =
  MittwaldAPIV2.Paths.V2UsersSelfCredentialsPassword.Put.Parameters.RequestBody;

export type UserUpdatePasswordResponseData =
  MittwaldAPIV2.Paths.V2UsersSelfCredentialsPassword.Put.Responses.$200.Content.ApplicationJson;

export type UserConfirmPasswordResetRequestData =
  MittwaldAPIV2.Paths.V2UsersSelfCredentialsPasswordConfirmReset.Post.Parameters.RequestBody;

export type UserAuthenticateRequestData =
  MittwaldAPIV2.Paths.V2Authenticate.Post.Parameters.RequestBody & {
    multiFactorCode?: string;
  };

export type UserAuthenticateResponseData =
  | MittwaldAPIV2.Paths.V2Authenticate.Post.Responses.$200.Content.ApplicationJson
  | MittwaldAPIV2.Paths.V2Authenticate.Post.Responses.$202.Content.ApplicationJson;

export type UserRegisterRequestData =
  MittwaldAPIV2.Paths.V2Register.Post.Parameters.RequestBody;

export type UserVerifyRegistrationRequestData =
  MittwaldAPIV2.Paths.V2VerifyRegistration.Post.Parameters.RequestBody;

export type UserResendVerificationEmailRequestData =
  MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsResendEmail.Post.Parameters.RequestBody;

export type UserDeleteRequestData =
  MittwaldAPIV2.Paths.V2UsersSelf.Delete.Parameters.RequestBody;
