import { MittwaldAPIV2 } from "@mittwald/api-client";

export type MfaStatusData =
  MittwaldAPIV2.Operations.UserGetMfaStatus.ResponseData;

export type RecoverMfaRequestData = Omit<
  MittwaldAPIV2.Paths.V2AuthenticateMfa.Post.Parameters.RequestBody,
  "multiFactorCode"
> & {
  recoveryCode: string;
};

export type ResetMfaRecoveryResponseData =
  MittwaldAPIV2.Operations.UserResetRecoverycodes.ResponseData;

export type ConfirmMfaResponseData =
  MittwaldAPIV2.Operations.UserConfirmMfa.ResponseData;

export type AuthenticateMfaRequestData =
  MittwaldAPIV2.Paths.V2AuthenticateMfa.Post.Parameters.RequestBody;
