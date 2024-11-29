import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type FileUploadTokenData = {
  token: string;
  rules: Omit<
    MittwaldAPIV2.Components.Schemas.FileFileUploadRules,
    "extensions" | "maxSizeInBytes" | "maxSizeInKb" | "fileTypes"
  >;
};

export type FileDownloadTokenData = {
  accessToken: string;
  expiresAt: string;
};
