import { User } from "./User.js";
import {
  FileUploadTokenData,
  FileAccessTokenProvider,
} from "../../file/index.js";
import { config } from "../../config/config.js";

export class UserAvatarAccessTokenProvider implements FileAccessTokenProvider {
  public readonly user: User;

  public constructor(user: User) {
    this.user = user;
  }

  public createUploadToken(): Promise<FileUploadTokenData> {
    return config.behaviors.user.createAvatarUploadToken(this.user.id);
  }
}
