export const asyncStringJoin = async <T>(
  items: T[],
  contentGenerator: (item: T) => string | Promise<string>,
  separator = "\r\n",
) => {
  const mappedItems = await Promise.all(items.map(contentGenerator));
  return mappedItems.join(separator);
};
