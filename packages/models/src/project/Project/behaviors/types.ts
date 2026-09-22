import type { AxiosRequestConfig } from "axios";

import type { FileUploadTokenData } from "../../../file";
import type { QueryResponseData } from "../../../base";
import type {
  FileSystemDirectoriesData,
  ProjectListQueryData,
  ProjectListItemData,
  ProjectData,
} from "../types";

export interface ProjectBehaviors {
  findFileSystemDirectories: (
    projectId: string,
    directory?: string,
    requestConfig?: AxiosRequestConfig,
  ) => Promise<FileSystemDirectoriesData | undefined>;

  updateStorageNotificationThreshold: (
    projectId: string,
    thresholdInBytes?: number,
  ) => Promise<void>;

  find: (
    projectId: string,
    options?: AxiosRequestConfig,
  ) => Promise<ProjectData | undefined>;

  list: (
    query?: ProjectListQueryData,
  ) => Promise<QueryResponseData<ProjectListItemData>>;

  updateDescription: (projectId: string, description: string) => Promise<void>;

  createAvatarUploadToken: (projectId: string) => Promise<FileUploadTokenData>;

  create: (serverId: string, description: string) => Promise<{ id: string }>;

  removeAvatar: (projectId: string) => Promise<void>;

  delete: (projectId: string) => Promise<void>;
}
