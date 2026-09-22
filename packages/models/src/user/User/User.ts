import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type { FileAccessTokenProvider, DomFile } from "../../file";
import type { Salutation } from "../../customer";
import type { Project } from "../../project";
import type {
  UserUpdatePersonalInformationRequestData,
  UserConfirmPasswordResetRequestData,
  UserVerifyPhoneNumberRequestData,
  UserUpdatePasswordRequestData,
  UserVerifyEmailRequestData,
  UserDeleteRequestData,
  FeedbackPollStatus,
  UserData,
} from "./types";

import { UserAvatarAccessTokenProvider } from "./UserAvatarAccessTokenProvider";
import assertObjectFound from "../../base/lib/assertObjectFound";
import { ReferenceModel, WithData } from "../../base";
import { AggregateMetaData } from "../../common";
import { File } from "../../file/File/internal";
import { config } from "../../config";

@GhostMakerModel({
  name: "User",
})
export class User extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData("user", "user");
  public static self = User.ofId("self");
  public readonly fileAccessTokenProvider: FileAccessTokenProvider;

  public constructor(id: string) {
    super(id);
    this.fileAccessTokenProvider = new UserAvatarAccessTokenProvider(this);
  }

  public static async confirmPasswordReset(
    data: UserConfirmPasswordResetRequestData,
  ) {
    await config.behaviors.user.confirmPasswordReset(data);
  }

  public static async find(id: string, options?: AxiosRequestConfig) {
    const data = await config.behaviors.user.find(id, options);

    if (data) {
      return new UserDetailed(data);
    }
  }

  public static findAggregate(userId?: string) {
    return userId ? { id: userId, ...User.aggregateMetaData } : undefined;
  }

  public static async get(id: string, options?: AxiosRequestConfig) {
    const user = await this.find(id, options);
    assertObjectFound(user, User, id);
    return user;
  }

  public static ofId(id: string) {
    return new User(id);
  }

  public static async resetPassword(email: string) {
    await config.behaviors.user.resetPassword(email);
  }

  public async addPhoneNumber(phoneNumber: string) {
    await config.behaviors.user.addPhoneNumber(this.id, phoneNumber);
  }

  public async delete(data: UserDeleteRequestData) {
    await config.behaviors.user.delete(data);
  }

  public async findCommon(
    options?: AxiosRequestConfig,
  ): Promise<UserCommon | undefined> {
    return this instanceof UserCommon ? this : this.findDetailed(options);
  }

  public async findDetailed(
    options?: AxiosRequestConfig,
  ): Promise<UserDetailed | undefined> {
    return User.find(this.id, options);
  }

  public async getAvatarUploadRules() {
    return File.getUploadRules("avatar");
  }

  public getCommon(
    options?: AxiosRequestConfig,
  ): Promise<UserCommon> | UserCommon {
    return this instanceof UserCommon ? this : this.getDetailed(options);
  }

  public async getDetailed(
    options?: AxiosRequestConfig,
  ): Promise<UserDetailed> {
    return User.get(this.id, options);
  }

  public async getPasswordUpdatedAt() {
    return await config.behaviors.user.getPasswordUpdatedAt();
  }

  public async removeAvatar() {
    await config.behaviors.user.removeAvatar(this.id);
  }

  public async removePhoneNumber() {
    await config.behaviors.user.removePhoneNumber(this.id);
  }

  public async requestAvatarUpload(): Promise<string> {
    const response = await config.behaviors.user.createAvatarUploadToken(
      this.id,
    );

    return response.token;
  }

  public async updateEmail(email: string) {
    return await config.behaviors.user.updateEmail(email);
  }

  public async updatePassword(data: UserUpdatePasswordRequestData) {
    return await config.behaviors.user.updatePassword(data);
  }

  public async updatePersonalInformation(
    data: UserUpdatePersonalInformationRequestData,
  ) {
    await config.behaviors.user.updatePersonalInformation(this.id, data);
  }

  public async uploadAvatar(file: DomFile) {
    await File.upload(file, this.fileAccessTokenProvider);
  }

  public async verifyEmail(data: UserVerifyEmailRequestData) {
    await config.behaviors.user.verifyEmail(data);
  }

  public async verifyPhoneNumber(data: UserVerifyPhoneNumberRequestData) {
    return await config.behaviors.user.verifyPhoneNumber(this.id, data);
  }
}

export class UserCommon extends WithData<UserData>()(User) {
  public readonly avatar?: File;
  public override readonly data: UserData;
  public readonly email?: string;
  public readonly firstName: string;
  public readonly fullName: string;
  public readonly isEmployee: boolean;
  public readonly isNew: boolean;
  public readonly lastName: string;
  public readonly phoneNumber?: string;
  public readonly registeredAt: DateTime;
  public readonly title?: Salutation;

  public constructor(data: UserData) {
    super(data.userId);
    this.data = data;
    this.firstName = data.person.firstName;
    this.lastName = data.person.lastName;
    this.fullName = `${data.person.firstName} ${data.person.lastName}`;
    this.avatar = data.avatarRef ? File.ofId(data.avatarRef) : undefined;
    this.email = data.email;
    this.title = data.person.title;
    this.phoneNumber = data.phoneNumber;
    this.isEmployee = data.isEmployee ?? config.isEmployee?.(this) ?? false;

    const threeMonthsAgo = DateTime.now().minus({ months: 3 });
    // API-DRIFT: registeredAt falls back to DateTime.now() because /user/self omits the field, which wrongly makes accounts look isNew (resolve: drop the fallback once the API returns registeredAt)
    this.registeredAt = data.registeredAt
      ? DateTime.fromISO(data.registeredAt)
      : DateTime.now();
    this.isNew = this.registeredAt > threeMonthsAgo;
  }

  public async checkShowFeedbackPoll(requestConfig?: AxiosRequestConfig) {
    return await config.behaviors.user.checkShowFeedbackPoll(
      this.id,
      requestConfig,
    );
  }

  public async findRole(project: Project) {
    return this.data.projectMemberships?.[project.id]?.role;
  }

  public async resendEmailVerification(email: string) {
    await config.behaviors.registration.resendVerificationEmail({
      userId: this.id,
      email,
    });
  }

  public async updateFeedbackPollStatus(status: FeedbackPollStatus) {
    await config.behaviors.user.updateFeedbackPollStatus(this.id, status);
  }
}

export class UserDetailed extends UserCommon {
  public constructor(data: UserData) {
    super(data);
  }
}
