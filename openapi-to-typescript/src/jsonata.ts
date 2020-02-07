import { readFileSync } from "fs";
import { join } from "path";
import jsonata from "jsonata";

const transformSpec = readFileSync(join(__dirname, "transforms/openapi.jsonata"), "utf8");
export const expression = jsonata(transformSpec);
