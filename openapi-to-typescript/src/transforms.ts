import { readFileSync } from "fs";
import { join } from "path";
import jsonata from "jsonata";

const openAPITransformDefinition = readFileSync(join(__dirname, "../resources/transforms/openapi.jsonata"), "utf8");
export const transformOpenAPIExpression = jsonata(openAPITransformDefinition);
