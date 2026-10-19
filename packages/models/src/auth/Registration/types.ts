import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type RegisterRequestData =
  MittwaldAPIV2.Paths.V2Register.Post.Parameters.RequestBody;

export type VerifyRegistrationRequestData =
  MittwaldAPIV2.Paths.V2VerifyRegistration.Post.Parameters.RequestBody;

export interface VerifyRegistrationModelData {
  token: string;
}

export type ResendVerificationEmailRequestData =
  MittwaldAPIV2.Paths.V2UsersSelfCredentialsEmailActionsResendEmail.Post.Parameters.RequestBody;
