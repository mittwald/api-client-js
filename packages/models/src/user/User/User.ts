import { classes } from "polytype";
import type {
  UserAuthenticateRequestData,
  UserConfirmPasswordResetRequestData,
  UserData,
  UserDeleteRequestData,
  UserRegisterRequestData,
  UserResendVerificationEmailRequestData,
  UserUpdatePasswordRequestData,
  UserUpdatePasswordResponseData,
  UserUpdatePersonalInformationRequestData,
  UserVerifyEmailRequestData,
  UserVerifyPhoneNumberRequestData,
  UserVerifyRegistrationRequestData,
} from "./types.js";
import {
  DataModel,
  ReferenceModel,
  AggregateMetaData,
} from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { DomFile, File } from "../../file/File/index.js";
import { FileAccessTokenProvider } from "../../file/FileAccessToken/FileAccessTokenProvider.js";
import { UserAvatarAccessTokenProvider } from "./UserAvatarAccessTokenProvider.js";
import { SessionToken } from "../../auth/index.js";
import { PendingMfaAuthentication } from "../../auth/Mfa/PendingMfaAuthentication.js";

export class User extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData("user", "user");
  public static self = User.ofId("self");
  public readonly fileAccessTokenProvider: FileAccessTokenProvider;

  public constructor(id: string) {
    super(id);
    this.fileAccessTokenProvider = new UserAvatarAccessTokenProvider(this);
  }

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

  public getDetailed = provideReact(
    () => User.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<UserDetailed>>;

  public findDetailed = provideReact(
    () => User.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<UserDetailed | undefined>>;

  public async uploadAvatar(file: DomFile) {
    await File.upload(file, this.fileAccessTokenProvider);
  }

  public getAvatarUploadRules = provideReact(async () => {
    return File.getUploadRules("avatar");
  });

  public getPasswordUpdatedAt = provideReact(
    async (): Promise<{ passwordUpdatedAt: string }> => {
      return await config.behaviors.user.getPasswordUpdatedAt();
    },
  );

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
  ): Promise<SessionToken | PendingMfaAuthentication> {
    const result = await config.behaviors.user.authenticate(data);
    if ("token" in result) {
      return new SessionToken(result);
    }
    return new PendingMfaAuthentication(data);
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
}

class UserCommon extends classes(DataModel<UserData>, User) {
  public readonly fullName: string;
  public readonly mStudioPath: string;
  public readonly avatar?: File;

  public constructor(data: UserData) {
    super([data], [data.userId]);
    this.fullName = `${data.person.firstName} ${data.person.lastName}`;
    this.mStudioPath = "/app/profile/personal-data";
    this.avatar = data.avatarRef ? File.ofId(data.avatarRef) : undefined;
  }
}

export class UserDetailed extends classes(UserCommon, DataModel<UserData>) {
  public constructor(data: UserData) {
    super([data], [data]);
  }
}
