import type { FileDownloadTokenData } from "../../file/FileAccessToken/types";

export function buildFileDownloadTokenData(
  overrides?: Partial<FileDownloadTokenData>,
): FileDownloadTokenData {
  return {
    expiresAt: "2099-01-01T00:00:00.000Z",
    accessToken: "download-token",
    ...overrides,
  };
}
