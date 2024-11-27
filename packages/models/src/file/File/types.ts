import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type FileDownloadResponseData =
  MittwaldAPIV2.Operations.FileGetFile.ResponseData;

export type FileUploadResponseData =
  MittwaldAPIV2.Paths.V2Files.Post.Responses.$201.Content.ApplicationJson;

export type FileMetaData =
  MittwaldAPIV2.Operations.FileGetFileMeta.ResponseData;

export const DomFile = File;
export type DomFile = File;

export type FileUploadType =
  MittwaldAPIV2.Paths.V2FileUploadTypesFileUploadTypeRules.Get.Parameters.Path["fileUploadType"];

export type FileUploadRules =
  MittwaldAPIV2.Operations.FileGetFileUploadTypeRules.ResponseData;
