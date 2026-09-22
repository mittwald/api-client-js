import type { FileUploadRules } from "../../file/File/types";

export function buildFileUploadRulesData(
  overrides?: Partial<FileUploadRules>,
): FileUploadRules {
  return {
    fileTypes: [{ mimeType: "text/plain", extensions: ["txt"] }],
    mimeTypes: ["text/plain"],
    maxSizeInBytes: 1_024,
    extensions: ["txt"],
    maxNameLength: 255,
    maxSizeInKB: 1,
    maxSizeInKb: 1,
    ...overrides,
  };
}
