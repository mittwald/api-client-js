import type { FileAccessTokenProvider } from "../../file/index.js";
import type { User } from "./User.js";

import { config } from "../../config/index.js";

export class UserAvatarAccessTokenProvider implements FileAccessTokenProvider {
  public readonly user: User;

  public constructor(user: User) {
    this.user = user;
  }

  public createUploadToken() {
    return config.behaviors.user.createAvatarUploadToken(this.user.id);
  }
}
