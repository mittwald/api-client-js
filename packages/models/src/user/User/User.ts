import { ReferenceModel } from "../../base/ReferenceModel.js";
import {
  type AsyncResourceVariant,
  provideReact,
} from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import { DataModel } from "../../base/DataModel.js";
import { classes } from "polytype";
import {
  UserAddPhoneNumberRequestData,
  UserAuthenticateRequestData,
  UserAuthenticateResponseData,
  UserData,
  UserUpdatePersonalInformationData,
  UserVerifyPhoneNumberRequestData,
} from "./types.js";
import assertObjectFound from "../../base/assertObjectFound.js";

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

  public getDetailed = provideReact(() =>
    User.get(this.id),
  ) as AsyncResourceVariant<UserDetailed, []>;

  public async updatePersonalInformation(
    data: UserUpdatePersonalInformationData,
  ): Promise<void> {
    await config.behaviors.user.updatePersonalInformation(this.id, data);
  }

  public async addPhoneNumber(
    data: UserAddPhoneNumberRequestData,
  ): Promise<void> {
    await config.behaviors.user.addPhoneNumber(this.id, data);
  }

  public async removePhoneNumber(): Promise<void> {
    await config.behaviors.user.removePhoneNumber(this.id);
  }

  public async verifyPhoneNumber(
    data: UserVerifyPhoneNumberRequestData,
  ): Promise<void> {
    await config.behaviors.user.verifyPhoneNumber(this.id, data);
  }

  public async requestAvatarUpload(): Promise<{ id: string }> {
    return await config.behaviors.user.requestAvatarUpload(this.id);
  }

  public async removeAvatar(): Promise<void> {
    await config.behaviors.user.removeAvatar(this.id);
  }

  public static async authenticate(
    data: UserAuthenticateRequestData,
  ): Promise<UserAuthenticateResponseData> {
    return await config.behaviors.user.authenticate(data);
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
