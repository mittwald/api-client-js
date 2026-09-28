import type { FileMetaData } from "../../file/File/types.js";

export function buildFileMetaData(
  overrides?: Partial<FileMetaData>,
): FileMetaData {
  return {
    friendlyURL: "test-file",
    friendlyUrl: "test-file",
    shortId: "file-short-id",
    mimeType: "text/plain",
    type: "text/plain",
    name: "test.txt",
    sizeInBytes: 4,
    id: "file-id",
    ...overrides,
  };
}
