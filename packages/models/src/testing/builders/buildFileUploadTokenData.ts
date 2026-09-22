import type { FileUploadTokenData } from "../../file/FileAccessToken/types.js";

export function buildFileUploadTokenData(
  overrides?: Partial<FileUploadTokenData>,
): FileUploadTokenData {
  return {
    rules: {
      mimeTypes: ["text/plain"],
    },
    token: "upload-token",
    ...overrides,
  };
}
