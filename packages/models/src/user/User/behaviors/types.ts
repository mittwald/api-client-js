import { UserData } from "../types.js";
import { FileUploadTokenData } from "../../../file/FileAccessToken/types.js";

export interface UserBehaviors {
  find: (id: string) => Promise<UserData | undefined>;

  createAvatarUploadToken: (userId: string) => Promise<FileUploadTokenData>;
}
