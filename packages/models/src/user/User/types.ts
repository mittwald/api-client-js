import { MittwaldAPIV2 } from "@mittwald/api-client";

export type UserData = MittwaldAPIV2.Operations.UserGetUser.ResponseData;

export type UserUpdatePersonalInformationData =
  MittwaldAPIV2.Paths.V2UsersSelfPersonalInformation.Put.Parameters.RequestBody;

export type UserAddPhoneNumberRequestData =
  MittwaldAPIV2.Paths.V2UsersUserIdPhone.Post.Parameters.RequestBody;

export type UserVerifyPhoneNumberRequestData =
  MittwaldAPIV2.Paths.V2UsersUserIdActionsVerifyPhone.Post.Parameters.RequestBody;

export type UserAuthenticateResponseData =
  | MittwaldAPIV2.Paths.V2Authenticate.Post.Responses.$200.Content.ApplicationJson
  | MittwaldAPIV2.Paths.V2Authenticate.Post.Responses.$202.Content.ApplicationJson;

export type UserAuthenticateRequestData =
  MittwaldAPIV2.Paths.V2Authenticate.Post.Parameters.RequestBody;
