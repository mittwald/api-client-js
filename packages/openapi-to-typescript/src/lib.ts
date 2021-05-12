import path from "path";

export const getSubFileName = (filename: string, suffix: string): string =>
    path.join(path.dirname(filename), path.basename(filename, ".ts") + suffix);
