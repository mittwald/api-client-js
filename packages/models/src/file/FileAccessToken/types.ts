import type { MittwaldAPIV2 } from "@mittwald/api-client";

export interface FileUploadTokenData {
  rules: Omit<
    MittwaldAPIV2.Components.Schemas.FileFileUploadRules,
    | "maxSizeInBytes"
    | "maxNameLength"
    | "maxSizeInKb"
    | "maxSizeInKB"
    | "extensions"
    | "fileTypes"
  >;
  token: string;
}

export interface FileDownloadTokenData {
  accessToken: string;
  expiresAt: string;
}
