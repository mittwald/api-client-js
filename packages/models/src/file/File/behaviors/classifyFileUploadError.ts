type FileUploadErrorRule = {
  test: (message: string) => boolean;
  code: string;
};

const includesAny = (message: string, fragments: string[]): boolean =>
  fragments.some((fragment) => message.includes(fragment));

const rules: FileUploadErrorRule[] = [
  {
    test: (message) => message.includes("infected with malware"),
    code: "malwareInfected",
  },
  {
    test: (message) =>
      message.includes("does not match to the file extension"),
    code: "fileTypeMismatch",
  },
  {
    test: (message) => message.includes("is not allowed, allowed"),
    code: "mimeTypeNotAllowed",
  },
  {
    test: (message) => message.includes("contains unsafe content"),
    code: "unsafeContent",
  },
  {
    test: (message) => message.includes("file name length"),
    code: "fileNameTooLong",
  },
  {
    test: (message) =>
      message.includes("exceeds the limit of") && message.includes("bytes"),
    code: "fileTooLarge",
  },
  {
    test: (message) =>
      includesAny(message, ["file extension is required", "has no extension"]),
    code: "fileExtensionMissing",
  },
  {
    test: (message) => message.includes("zip archive is empty"),
    code: "zipEmpty",
  },
  {
    test: (message) => message.includes("password protected"),
    code: "zipPasswordProtected",
  },
  {
    test: (message) => includesAny(message, ["image height", "image width"]),
    code: "imageDimensions",
  },
  {
    test: (message) => message.includes("is corrupt"),
    code: "fileCorrupt",
  },
  {
    test: (message) =>
      message.includes("token") &&
      includesAny(message, [
        "invalid",
        "expired",
        "already used",
        "does not exist",
      ]),
    code: "uploadTokenInvalid",
  },
  {
    test: (message) =>
      includesAny(message, [
        "too many requests",
        "upload attempts exceeded",
      ]),
    code: "tooManyRequests",
  },
];

export const classifyFileUploadError = (
  message: string,
): string | undefined => {
  const lowercasedMessage = message.toLowerCase();

  return rules.find((rule) => rule.test(lowercasedMessage))?.code;
};

export const getMaxUploadSizeInMB = (message: string): string | undefined => {
  const match = message.match(/exceeds the limit of (\d+) bytes/i);

  if (!match) {
    return undefined;
  }

  const sizeInMB = Number(match[1]) / 1_000_000;

  return sizeInMB % 1 === 0 ? sizeInMB.toFixed(0) : sizeInMB.toFixed(1);
};
