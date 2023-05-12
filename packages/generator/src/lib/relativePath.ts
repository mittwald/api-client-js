import url from "url";
import * as path from "path";

export const relativePath = (meta: ImportMeta, ...paths: string[]): string =>
  path.join(url.fileURLToPath(new URL(".", meta.url)), ...paths);
