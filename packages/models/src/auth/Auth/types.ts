import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type AuthenticateData =
  | MittwaldAPIV2.Paths.V2Authenticate.Post.Responses.$200.Content.ApplicationJson
  | "mfaRequired";

export type AuthenticateRequestData =
  MittwaldAPIV2.Paths.V2Authenticate.Post.Parameters.RequestBody & {
    multiFactorCode?: string;
    cookieOnly?: boolean;
  };

export type RegisterRequestData =
  MittwaldAPIV2.Paths.V2Register.Post.Parameters.RequestBody;

export type VerifyRegistrationRequestData =
  MittwaldAPIV2.Paths.V2VerifyRegistration.Post.Parameters.RequestBody;

export type ResendVerificationEmailRequestData =
  MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsResendEmail.Post.Parameters.RequestBody;
