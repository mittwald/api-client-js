import {
  AuthenticateMfaRequestData,
  ConfirmMfaResponseData,
  MfaStatusData,
  RecoverMfaRequestData,
  ResetMfaRecoveryResponseData,
} from "../types.js";
import { SessionTokenData } from "../../SessionToken/types.js";

export interface MfaBehaviors {
  getStatus: () => Promise<MfaStatusData>;

  recover: (data: RecoverMfaRequestData) => Promise<SessionTokenData>;

  resetRecoveryCodes: (
    multiFactorCode: string,
  ) => Promise<ResetMfaRecoveryResponseData>;

  confirm: (multiFactorCode: string) => Promise<ConfirmMfaResponseData>;

  disable: (multiFactorCode: string) => Promise<void>;

  authenticateMfa: (
    data: AuthenticateMfaRequestData,
  ) => Promise<SessionTokenData>;
}
