export const replaceUrlTemplateValues = (
  url: string,
  values: Record<string, string> = {},
) => {
  return Object.entries(values)
    .sort((l, r) => r[0].length - l[0].length)
    .reduce(
      (replacedUrl, [key, value]) => replacedUrl.replace(`:${key}`, value),
      url,
    );
};
