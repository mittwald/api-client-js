import {
  AuthenticateMfaRequestData,
  ConfirmMfaResponseData,
  MfaStatusData,
  RecoverMfaRequestData,
  ResetMfaRecoveryResponseData,
} from "../types.js";
import { SessionData } from "../../Session/types.js";

export interface MfaBehaviors {
  getStatus: () => Promise<MfaStatusData>;

  recover: (data: RecoverMfaRequestData) => Promise<SessionData>;

  resetRecoveryCodes: (
    multiFactorCode: string,
  ) => Promise<ResetMfaRecoveryResponseData>;

  confirm: (multiFactorCode: string) => Promise<ConfirmMfaResponseData>;

  disable: (multiFactorCode: string) => Promise<void>;

  authenticateMfa: (data: AuthenticateMfaRequestData) => Promise<SessionData>;
}
