import { extractNamespace } from "./extractNamespace";
import { OpenAPIV3 } from "openapi-types";
import { namespaceToTypeScript } from "./writeInterfaces";
import swagger from "swagger-parser";
import yaml from "js-yaml";
import { readFileSync, writeFileSync } from "fs";

const createTypedAPI = async (fileContent: OpenAPIV3.Document, gerneratedAPIRootName: string = "API"): Promise<string> => {
    // we have to deep clone the document in order to suppress dereference all
    // refs within the document - validate will alter the original document
    try {
        await swagger.validate(JSON.parse(JSON.stringify(fileContent)));
    } catch (err) {
        throw Error(`Invalid OpenAPIDocument provided. Validation fails [${err.toString()}]`);
    }
    return namespaceToTypeScript(extractNamespace(gerneratedAPIRootName, fileContent));
};

export const createTypedApiFromOpenAPIFile = async (
    filePath: string,
    savePath?: string,
    generatedAPIRootName?: string,
): Promise<string> => {
    const fileContent = readFileSync(filePath, "utf8");
    const spec = yaml.safeLoad(fileContent);
    const generatedAPITypescript = await createTypedAPI(spec, generatedAPIRootName);

    if (savePath) {
        writeFileSync(savePath, generatedAPITypescript, {
            encoding: "utf8",
        });
    }

    return generatedAPITypescript;
};
