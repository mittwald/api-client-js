import { classes } from "polytype";
import type { UserData } from "./types.js";
import { DataModel, ReferenceModel } from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { AggregateMetaData } from "../../base/AggregateMetaData.js";

export class User extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData("user", "user");

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
}

class UserCommon extends classes(DataModel<UserData>, User) {
  public constructor(data: UserData) {
    super([data], [data.userId]);
  }
}

export class UserDetailed extends classes(UserCommon, DataModel<UserData>) {
  public constructor(data: UserData) {
    super([data], [data]);
  }
}
