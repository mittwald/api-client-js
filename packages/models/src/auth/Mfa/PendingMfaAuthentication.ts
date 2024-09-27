import { UserAuthenticateRequestData } from "../../user/index.js";
import { config } from "../../config/config.js";
import { Session } from "../Session/index.js";

export class PendingMfaAuthentication {
  private authenticationRequestData: UserAuthenticateRequestData | undefined;

  public constructor(authenticationRequestData: UserAuthenticateRequestData) {
    this.authenticationRequestData = authenticationRequestData;
  }

  public async provideMultiFactorCode(multiFactorCode: string) {
    const sessionData = await config.behaviors.mfa.authenticateMfa({
      ...this.authenticationRequestData,
      multiFactorCode,
    });

    this.authenticationRequestData = undefined;

    return new Session(sessionData);
  }

  public get isAlreadyConfirmed() {
    return !this.authenticationRequestData;
  }
}
