import type { AxiosRequestConfig } from "axios";

import type { FileUploadTokenData } from "../../../file";
import type { QueryResponseData } from "../../../base";
import type {
  ServerListQueryData,
  ServerListItemData,
  ServerData,
} from "../types";

export interface ServerBehaviors {
  updateStorageNotificationThreshold: (
    projectId: string,
    thresholdInBytes?: number,
  ) => Promise<void>;

  find: (
    serverId: string,
    options?: AxiosRequestConfig,
  ) => Promise<ServerData | undefined>;

  list: (
    query?: ServerListQueryData,
  ) => Promise<QueryResponseData<ServerListItemData>>;

  updateDescription: (serverId: string, description: string) => Promise<void>;

  createAvatarUploadToken: (serverId: string) => Promise<FileUploadTokenData>;

  removeAvatar: (serverId: string) => Promise<void>;
}
