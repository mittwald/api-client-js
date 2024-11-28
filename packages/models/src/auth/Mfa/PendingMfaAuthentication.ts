import { config } from "../../config/config.js";
import { SessionToken } from "../SessionToken/index.js";
import { UserAuthenticateRequestData } from "../../user/index.js";

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

    return new SessionToken(sessionData);
  }

  public get isAlreadyConfirmed() {
    return !this.authenticationRequestData;
  }
}
