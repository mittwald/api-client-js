import { DataModel } from "../../base/index.js";
import { MfaStatusData, RecoverMfaRequestData } from "./types.js";
import { provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import { RecoveryCodes } from "../RecoveryCodes/index.js";

export class Mfa {
  public static getStatus = provideReact(
    async (): Promise<MfaStatus | undefined> => {
      const data = await config.behaviors.mfa.getStatus();
      return new MfaStatus(data);
    },
  );

  public static async confirm(multiFactorCode: string): Promise<RecoveryCodes> {
    const response = await config.behaviors.mfa.confirm(multiFactorCode);
    return new RecoveryCodes({
      codes: response.recoveryCodesList,
    });
  }

  public static async disable(multiFactorCode: string): Promise<void> {
    await config.behaviors.mfa.disable(multiFactorCode);
  }

  public static async recover(data: RecoverMfaRequestData): Promise<void> {
    await config.behaviors.mfa.recover(data);
  }

  public static async resetRecoveryCodes(
    multiFactorCode: string,
  ): Promise<RecoveryCodes> {
    const response =
      await config.behaviors.mfa.resetRecoveryCodes(multiFactorCode);

    return new RecoveryCodes({
      codes: response.recoveryCodesList,
    });
  }
}

export class MfaStatus extends DataModel<MfaStatusData> {
  public readonly isInitialized;
  public readonly isConfirmed;

  public constructor(data: MfaStatusData) {
    super(data);
    this.isConfirmed = data.confirmed;
    this.isInitialized = data.initialized;
  }
}
