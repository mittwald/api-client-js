import { expect, test } from "vitest";

import {
  classifyFileUploadError,
  getMaxUploadSizeInMB,
} from "./classifyFileUploadError";

test.each([
  [
    "malwareInfected",
    "Your file is infected with malware, reason: Eicar-Test-Signature.",
  ],
  [
    "fileTypeMismatch",
    "Your zip archive's file 'corrupt.jpeg' is corrupt, the file type text/rtf with the extension .rtf does not match to the file extension .jpeg.",
  ],
  [
    "mimeTypeNotAllowed",
    "File type application/x-msdownload is not allowed, allowed are image/png, image/jpeg.",
  ],
  ["unsafeContent", "Your file 'document.pdf' contains unsafe content."],
  [
    "fileNameTooLong",
    "Your file name length of 300 characters exceeds the limit of 255 characters.",
  ],
  [
    "fileTooLarge",
    "Your file size 10485761 bytes exceeds the limit of 10485760 bytes.",
  ],
  ["fileExtensionMissing", "Your zip archive's file 'README' has no extension."],
  ["zipEmpty", "Your zip archive is empty."],
  ["zipPasswordProtected", "Your zip archive cannot be password protected."],
  [
    "imageDimensions",
    "Your image height is too small, expected 200px, given 100px.",
  ],
  ["fileCorrupt", "Your file is corrupt."],
  ["uploadTokenInvalid", "Your token has expired, please request a new one."],
  ["tooManyRequests", "Too many requests, see rate limit headers."],
])("classifies %s", (code, message) => {
  expect(classifyFileUploadError(message)).toBe(code);
});

test("classifies corrupt-by-type messages before plain corrupt messages", () => {
  expect(
    classifyFileUploadError(
      "Your file avatar.jpg is corrupt, the file type text/plain with the extension .txt does not match to the file extension .jpg.",
    ),
  ).toBe("fileTypeMismatch");

  expect(classifyFileUploadError("Your file is corrupt.")).toBe("fileCorrupt");
});

test("returns undefined for unrelated messages", () => {
  expect(classifyFileUploadError("Something unexpected happened.")).toBe(
    undefined,
  );
});

test("extracts the maximum upload size in MB from the limit message", () => {
  expect(
    getMaxUploadSizeInMB(
      "Your file size 16000000 bytes exceeds the limit of 10000000 bytes.",
    ),
  ).toBe("10");
  expect(
    getMaxUploadSizeInMB(
      "Your file size 16000000 bytes exceeds the limit of 10500000 bytes.",
    ),
  ).toBe("10.5");
  expect(getMaxUploadSizeInMB("Something unexpected happened.")).toBe(
    undefined,
  );
});
