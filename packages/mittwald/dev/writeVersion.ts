import { readPackage } from "read-pkg";
import * as fs from "node:fs";
import * as path from "node:path";

const { version } = await readPackage();

const distFolder = path.join(import.meta.dirname, "../dist");

fs.writeFileSync(
  path.join(distFolder, "esm/version.js"),
  `export const MittwaldAPIClientVersion = '${version}';`,
  {
    encoding: "utf-8",
  },
);

fs.writeFileSync(
  path.join(distFolder, "types/version.d.ts"),
  `export declare const MittwaldAPIClientVersion = '${version}';`,
  {
    encoding: "utf-8",
  },
);
