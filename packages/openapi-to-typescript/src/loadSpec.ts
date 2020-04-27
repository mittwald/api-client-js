import { getStatusLog } from "./statusLog";
import got from "got";
import { readFileSync } from "fs";
import yaml from "js-yaml";
import { FileFormat } from "./Spec";
import dotProp from "dot-prop";

export async function loadSpec(extendedPath: string, format?: FileFormat): Promise<object> {
    const log = getStatusLog();
    const [path, selector] = extendedPath.split("|");

    const downloadFile = path.startsWith("http");

    log?.start(`loading OpenAPI spec from ${path}`);
    const content = downloadFile ? await got(path).text() : readFileSync(path, "utf8");
    log?.succeed(`OpenAPI spec loaded from ${path}`);

    let openAPI: object = {};

    if (format === "yaml" || path.endsWith("yaml") || path.endsWith("yml")) {
        log?.start("parsing YAML");
        openAPI = yaml.safeLoad(content);
        log?.succeed("YAML parsed");
    } else if (downloadFile || format === "json" || path.endsWith("json")) {
        if (downloadFile) {
            log?.info("file was downloaded ~> using JSON as default format");
        }
        log?.start("parsing JSON");
        openAPI = JSON.parse(content);
        log?.succeed("JSON parsed");
    }

    if (selector) {
        const selectedOpenAPI = dotProp.get(openAPI, selector);
        if (!selectedOpenAPI) {
            throw new Error(`"${selector}" has no content`);
        }
        return selectedOpenAPI as object;
    }

    return openAPI;
}
