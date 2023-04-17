import { readFileSync } from "fs";
import { join } from "path";
import jsonata from "jsonata";
import * as url from "url";
const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const openAPITransformDefinition = readFileSync(
  join(dirname, "../../resources/transforms/openapi.jsonata"),
  "utf8",
);
export const transformOpenAPIExpression = jsonata(openAPITransformDefinition);
