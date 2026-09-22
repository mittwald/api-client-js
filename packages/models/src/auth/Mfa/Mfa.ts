import type { AxiosRequestConfig } from "axios";

import type { AuthenticateMfaRequestData, MfaStatusData } from "./types.js";

import { RecoveryCodes } from "../RecoveryCodes/index.js";
import { DataModel } from "../../base/index.js";
import { config } from "../../config/index.js";
import { MfaInit } from "./MfaInit.js";

export class Mfa {
  public static async authenticate(data: AuthenticateMfaRequestData) {
    return await config.behaviors.mfa.authenticateMfa(data);
  }

  public static async confirm(multiFactorCode: string) {
    const response = await config.behaviors.mfa.confirm(multiFactorCode);

    return new RecoveryCodes({
      codes: response.recoveryCodesList,
    });
  }

  public static async disable(multiFactorCode: string) {
    return await config.behaviors.mfa.disable(multiFactorCode);
  }

  public static async getStatus() {
    const data = await config.behaviors.mfa.getStatus();
    return new MfaStatus(data);
  }

  public static async init(requestConfig?: AxiosRequestConfig) {
    const data = await config.behaviors.mfa.init(requestConfig);
    return new MfaInit(data);
  }

  public static async resetRecoveryCodes(multiFactorCode: string) {
    const response =
      await config.behaviors.mfa.resetRecoveryCodes(multiFactorCode);

    return new RecoveryCodes({
      codes: response.recoveryCodesList,
    });
  }
}

export class MfaStatus extends DataModel<MfaStatusData> {
  public readonly active: boolean;

  public constructor(data: MfaStatusData) {
    super(data);
    this.active = data.confirmed;
  }
}
