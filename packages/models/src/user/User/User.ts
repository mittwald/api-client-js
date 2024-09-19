import {
  type AsyncResourceVariant,
  provideReact,
} from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import {
  UserAuthenticateMfaRequestData,
  UserAuthenticateMfaResponseData,
  UserAuthenticateRequestData,
  UserAuthenticateResponseData,
  UserConfirmPasswordResetRequestData,
  UserCreateAccessTokenRetrievalKeyResponseData,
  UserData,
  UserDeleteRequestData,
  UserMfaStatusData,
  UserRegisterRequestData,
  UserRequestAvatarUploadResponseData,
  UserResendVerificationEmailRequestData,
  UserUpdatePasswordRequestData,
  UserUpdatePasswordResponseData,
  UserUpdatePersonalInformationRequestData,
  UserVerifyEmailRequestData,
  UserVerifyPhoneNumberRequestData,
  UserVerifyRegistrationRequestData,
} from "./types.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { DataModel, ReferenceModel } from "../../base/index.js";

export class User extends ReferenceModel {
  public static ofId(id: string): User {
    return new User(id);
  }

  public static find = provideReact(
    async (id: string): Promise<UserDetailed | undefined> => {
      const data = await config.behaviors.user.find(id);
      if (data !== undefined) {
        return new UserDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<UserDetailed> => {
      const user = await this.find(id);
      assertObjectFound(user, this, id);
      return user;
    },
  );

  public static getOwn = provideReact(async (): Promise<UserDetailed> => {
    return await this.get("self");
  });

  public getDetailed = provideReact(
    () => User.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<UserDetailed, []>;

  public findDetailed = provideReact(
    () => User.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<UserDetailed | undefined, []>;

  public getPasswordUpdatedAt = provideReact(
    async (): Promise<{ passwordUpdatedAt: string }> => {
      return await config.behaviors.user.getPasswordUpdatedAt();
    },
  );

  public getMfaStatus = provideReact(async (): Promise<UserMfaStatusData> => {
    return await config.behaviors.user.getMfaStatus();
  });

  public async updatePersonalInformation(
    data: UserUpdatePersonalInformationRequestData,
  ): Promise<void> {
    await config.behaviors.user.updatePersonalInformation(this.id, data);
  }

  public async addPhoneNumber(phoneNumber: string): Promise<void> {
    await config.behaviors.user.addPhoneNumber(this.id, phoneNumber);
  }

  public async verifyPhoneNumber(
    data: UserVerifyPhoneNumberRequestData,
  ): Promise<void> {
    await config.behaviors.user.verifyPhoneNumber(this.id, data);
  }

  public async removePhoneNumber(): Promise<void> {
    await config.behaviors.user.removePhoneNumber(this.id);
  }

  public async updateEmail(email: string): Promise<void> {
    await config.behaviors.user.updateEmail(email);
  }

  public async verifyEmail(data: UserVerifyEmailRequestData): Promise<void> {
    await config.behaviors.user.verifyEmail(data);
  }

  public async requestAvatarUpload(): Promise<UserRequestAvatarUploadResponseData> {
    return await config.behaviors.user.requestAvatarUpload(this.id);
  }

  public async removeAvatar(): Promise<void> {
    await config.behaviors.user.removeAvatar(this.id);
  }

  public async updatePassword(
    data: UserUpdatePasswordRequestData,
  ): Promise<UserUpdatePasswordResponseData> {
    return await config.behaviors.user.updatePassword(data);
  }

  public async resetPassword(email: string): Promise<void> {
    await config.behaviors.user.resetPassword(email);
  }

  public async confirmPasswordReset(
    data: UserConfirmPasswordResetRequestData,
  ): Promise<void> {
    await config.behaviors.user.confirmPasswordReset(data);
  }

  public static async authenticate(
    data: UserAuthenticateRequestData,
  ): Promise<UserAuthenticateResponseData> {
    return await config.behaviors.user.authenticate(data);
  }

  public static async register(
    data: UserRegisterRequestData,
  ): Promise<{ id: string }> {
    return await config.behaviors.user.register(data);
  }

  public static async verifyRegistration(
    data: UserVerifyRegistrationRequestData,
  ): Promise<void> {
    return await config.behaviors.user.verifyRegistration(data);
  }

  public static async resendVerificationEmail(
    data: UserResendVerificationEmailRequestData,
  ): Promise<void> {
    return await config.behaviors.user.resendVerificationEmail(data);
  }

  public static async delete(data: UserDeleteRequestData): Promise<void> {
    await config.behaviors.user.delete(data);
  }

  public async authenticateMfa(
    data: UserAuthenticateMfaRequestData,
  ): Promise<UserAuthenticateMfaResponseData> {
    return await config.behaviors.user.authenticateMfa(data);
  }

  public async confirmMfa(
    multiFactorCode: string,
  ): Promise<{ recoveryCodesList: string[] }> {
    return await config.behaviors.user.confirmMfa(multiFactorCode);
  }

  public async disableMfa(multiFactorCode: string): Promise<void> {
    await config.behaviors.user.disableMfa(multiFactorCode);
  }

  public async resetRecoveryCodes(
    multiFactorCode: string,
  ): Promise<{ recoveryCodesList: string[] }> {
    return await config.behaviors.user.resetRecoveryCodes(multiFactorCode);
  }

  public async createAccessTokenRetrievalKey(): Promise<UserCreateAccessTokenRetrievalKeyResponseData> {
    return await config.behaviors.user.createAccessTokenRetrievalKey();
  }
}

class UserCommon extends classes(DataModel<UserData>, User) {
  public readonly fullName: string;

  public constructor(data: UserData) {
    super([data], [data.userId]);
    this.fullName = `${data.person.firstName} ${data.person.lastName}`;
  }
}

export class UserDetailed extends classes(UserCommon, DataModel<UserData>) {
  public constructor(data: UserData) {
    super([data], [data]);
  }
}
