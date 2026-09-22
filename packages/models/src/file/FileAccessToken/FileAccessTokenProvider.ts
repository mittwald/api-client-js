import type { AxiosRequestConfig } from "axios";

import type { FileDownloadTokenData, FileUploadTokenData } from "./types";

export interface FileAccessTokenProvider {
  getDownloadToken?: (
    fileId: string,
    requestConfig?: AxiosRequestConfig,
  ) => Promise<FileDownloadTokenData>;
  createAssetUploadToken?: (
    assetType: "image" | "video",
  ) => Promise<FileUploadTokenData>;
  createUploadToken?: () => Promise<FileUploadTokenData>;
}
