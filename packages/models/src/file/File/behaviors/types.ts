import type { AxiosRequestConfig } from "axios";

import type {
  FileUploadResponseData,
  FileUploadRules,
  FileUploadType,
  FileMetaData,
} from "../types";

export interface FileBehaviors {
  findMetaData(
    fileId: string,
    token?: string,
    requestConfig?: AxiosRequestConfig,
  ): Promise<FileMetaData | undefined>;

  upload(
    file: File,
    token: string,
    onProgress?: (percent: number) => void,
  ): Promise<FileUploadResponseData>;

  buildUrl(refId: string, name?: string, token?: string): string;

  download(fileId: string, token?: string): Promise<ArrayBuffer>;

  getUploadRules(type: FileUploadType): Promise<FileUploadRules>;
}
