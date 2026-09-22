import type { VerifyRegistrationModelData, RegisterRequestData } from "./types";

import { DataModel } from "../../base";
import { config } from "../../config";

interface Data extends RegisterRequestData {
  userId: string;
}

export class Registration extends DataModel<Data> {
  public static async start(data: RegisterRequestData) {
    const response = await config.behaviors.registration.start(data);
    return new Registration({
      ...data,
      userId: response.id,
    });
  }

  public async resendVerificationEmail() {
    const { userId, email } = this.data;
    return await config.behaviors.registration.resendVerificationEmail({
      userId,
      email,
    });
  }

  public async verify(data: VerifyRegistrationModelData) {
    const { userId, email } = this.data;
    const { token } = data;
    await config.behaviors.registration.verify({
      userId,
      email,
      token,
    });
  }
}
