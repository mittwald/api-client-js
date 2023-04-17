import { getStatusLog } from "./statusLog.js";
import got from "got";
import { readFileSync } from "fs";
import yaml from "js-yaml";
import { FileFormat } from "./Spec.js";
import * as dotProp from "dot-prop";
import { OpenAPIV3 } from "openapi-types";

export async function loadSpec(
  extendedPath: string,
  format?: FileFormat,
): Promise<OpenAPIV3.Document> {
  const log = getStatusLog();
  const [path, selector] = extendedPath.split("|");

  const downloadFile = path.startsWith("http");

  log?.start(`loading OpenAPI spec from ${path}`);
  const content = downloadFile
    ? await got(path).text()
    : readFileSync(path, "utf8");
  log?.succeed(`OpenAPI spec loaded from ${path}`);

  let openAPI: object = {};

  const isYaml =
    format === "yaml" || path.endsWith("yaml") || path.endsWith("yml");
  const iJson = downloadFile || format === "json" || path.endsWith("json");

  if (isYaml) {
    log?.start("parsing YAML");
    const loadedYaml = yaml.load(content);
    if (loadedYaml === null || typeof loadedYaml !== "object") {
      throw new Error(
        `Expected loaded YAML to be of type object, but got ${typeof loadedYaml}!`,
      );
    }
    log?.succeed("YAML parsed");
    openAPI = loadedYaml;
  } else if (iJson) {
    if (downloadFile) {
      log?.info("file was downloaded ~> using JSON as default format");
    }
    log?.start("parsing JSON");
    openAPI = JSON.parse(content);
    log?.succeed("JSON parsed");
  }

  if (selector) {
    log?.info(`Using selector ${selector}`);
    const selectedOpenAPI = dotProp.getProperty(openAPI, selector);
    if (!selectedOpenAPI) {
      throw new Error(`"${selector}" has no content`);
    }
    return selectedOpenAPI as OpenAPIV3.Document;
  }

  return openAPI as OpenAPIV3.Document;
}
