import type { FileAccessTokenProvider } from "../../file";
import type { User } from "./User";

import { config } from "../../config";

export class UserAvatarAccessTokenProvider implements FileAccessTokenProvider {
  public readonly user: User;

  public constructor(user: User) {
    this.user = user;
  }

  public createUploadToken() {
    return config.behaviors.user.createAvatarUploadToken(this.user.id);
  }
}
