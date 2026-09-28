import type { AxiosRequestConfig } from "axios";

import type { SessionTokenData } from "../../SessionToken/types.js";
import type {
  ResetMfaRecoveryResponseData,
  AuthenticateMfaRequestData,
  ConfirmMfaResponseData,
  InitMfaResponseData,
  MfaStatusData,
} from "../types.js";

export interface MfaBehaviors {
  resetRecoveryCodes: (
    multiFactorCode: string,
  ) => Promise<ResetMfaRecoveryResponseData>;

  authenticateMfa: (
    data: AuthenticateMfaRequestData,
  ) => Promise<SessionTokenData>;

  init: (requestConfig?: AxiosRequestConfig) => Promise<InitMfaResponseData>;

  confirm: (multiFactorCode: string) => Promise<ConfirmMfaResponseData>;

  disable: (multiFactorCode: string) => Promise<void>;

  getStatus: () => Promise<MfaStatusData>;
}
