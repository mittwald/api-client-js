export const asyncStringMap = async <T>(
  items: T[],
  contentGenerator: (item: T) => string | Promise<string>,
  separator = "\r\n",
) => {
  const content: string[] = [];

  for (const item of items) {
    content.push(await contentGenerator(item));
  }

  return content.join(separator);
};
