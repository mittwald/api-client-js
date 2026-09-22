import {
  readFileSync, writeFileSync, existsSync, statSync, globSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";

const files = [
  ...globSync("packages/models/src/**/*.ts"),
  ...globSync("packages/models/src/**/*.tsx"),
  ...globSync("packages/models-react/src/**/*.ts"),
  ...globSync("packages/models-react/src/**/*.tsx"),
];

// "import" is in the alternation for side-effect imports (`import "./init";`),
// which carry a relative specifier but no `from`.
const SPEC = /(\b(?:from|import)\s+")(\.[^"]*)(")/g;

let changed = 0;
for (const file of files) {
  const src = readFileSync(file, "utf8");
  const out = src.replace(SPEC, (match, pre, spec, post) => {
    if (/\.(js|json|css)$/.test(spec)) return match;
    const base = resolve(dirname(file), spec);
    if (existsSync(base + ".ts") || existsSync(base + ".tsx")) {
      return pre + spec + ".js" + post;
    }
    if (existsSync(base) && statSync(base).isDirectory()) {
      if (
        existsSync(join(base, "index.ts")) ||
        existsSync(join(base, "index.tsx"))
      ) {
        return pre + spec + "/index.js" + post;
      }
      throw new Error(`Verzeichnis ohne index: ${spec} in ${file}`);
    }
    throw new Error(`Unauflösbarer Import ${spec} in ${file}`);
  });
  if (out !== src) {
    writeFileSync(file, out);
    changed++;
  }
}
console.log(`${changed} Dateien angepasst`);
