const uuidRegex = RegExp(
  "^[0-9a-fA-F]{8}(-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$",
);

export const isUuid = (testString: string): boolean =>
  uuidRegex.test(testString);
