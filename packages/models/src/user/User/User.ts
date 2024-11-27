import { classes } from "polytype";
import type { UserData } from "./types.js";
import {
  DataModel,
  ReferenceModel,
  AggregateMetaData,
} from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { DomFile, File } from "../../file/File/index.js";
import { FileAccessTokenProvider } from "../../file/FileAccessToken/FileAccessTokenProvider.js";
import { UserAvatarAccessTokenProvider } from "./UserAvatarAccessTokenProvider.js";

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
  ) as AsyncResourceVariant<UserDetailed, []>;

  public findDetailed = provideReact(
    () => User.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<UserDetailed | undefined, []>;

  public async uploadAvatar(file: DomFile) {
    await File.upload(file, this.fileAccessTokenProvider);
  }

  public getAvatarUploadRules = provideReact(async () => {
    return File.getUploadRules("avatar");
  });
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
