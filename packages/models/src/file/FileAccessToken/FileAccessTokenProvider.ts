import { FileDownloadTokenData, FileUploadTokenData } from "./types.js";

export interface FileAccessTokenProvider {
  createUploadToken?: () => Promise<FileUploadTokenData>;
  getDownloadToken?: (fileId: string) => Promise<FileDownloadTokenData>;
}
