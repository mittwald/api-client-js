import jetpack from "fs-jetpack";

export const writeChangesAsync = async (
  filename: string,
  content: string,
): Promise<void> => {
  const existing = await jetpack.readAsync(filename);
  if (existing === content) {
    return;
  }

  await jetpack.writeAsync(filename, content);
};
