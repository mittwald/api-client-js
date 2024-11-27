import {
  FileMetaData,
  FileUploadResponseData,
  FileUploadRules,
  FileUploadType,
} from "../types.js";

export interface FileBehaviors {
  buildUrl(refId: string, token?: string): string;

  download(id: string, token?: string): Promise<ArrayBuffer>;

  upload(file: File, token: string): Promise<FileUploadResponseData>;

  findMetaData(id: string, token?: string): Promise<FileMetaData | undefined>;

  getUploadRules(type: FileUploadType): Promise<FileUploadRules>;
}
