import { readFileSync } from "fs";
import yaml from "js-yaml";
import { objectEntries } from "@mittwald/awesome-node-utils/object/entries";
import { OpenAPIV2, OpenAPIV3 } from "openapi-types";
import { pascalCase } from "@mittwald/awesome-node-utils/text/formatter";
import Schema = OpenAPIV2.Schema;
import OperationObject = OpenAPIV3.OperationObject;
import { transformNamespaceName } from "./transform";
import { convertParametersToJSONSchema } from "openapi-jsonschema-parameters";
import { replaceSchemaReferencesWithPlaceholder } from "./makeResolveReference";
import { schemaToTypeTS } from "@mittwald/awesome-node-utils/mapping/schemaToTs";
import RequestBodyObject = OpenAPIV3.RequestBodyObject;
// const getUserDescriptor: OperationDescriptor<{ firstname: string; status: 200 } | { status: 404 }, ElwisAPI.Components.Parameters.User, never> = {
//     path: "users/{userID}/details"
// };

export const createTypedDescriptors = (filePath: string) => {
    const fileContent = readFileSync(filePath, "utf8");
    const spec: OpenAPIV3.Document = yaml.safeLoad(fileContent);

    for (const [path, pathDefinition] of objectEntries(spec.paths)) {
        const currentPath = [transformNamespaceName(String(path))];
        console.log(path);

        for (const [method, methodDefiniton] of objectEntries(pathDefinition)) {
            currentPath.push(transformNamespaceName(method));

            const methodOperation: OperationObject = methodDefiniton as OperationObject;
            const methodOperationId = methodOperation.operationId;

            if (!methodOperationId) {
                throw Error(`OperationId is missing in Path "${path}" for method "${method}"`);
            }

            // FUNCTION NAME
            const descriptorFunctionName = method.toLowerCase().concat(pascalCase(methodOperationId));

            // REQUEST BODY
            let descriptorRequestBody: string | { [key: string]: string } = "never";
            if (methodOperation.requestBody) {
                const { replacedTypes, restoreResolvedReferences } = replaceSchemaReferencesWithPlaceholder(
                    "API",
                    methodOperation.requestBody,
                );

                const requestBodyHolder: { [key: string]: string } = {};
                const requestBodyObject = (replacedTypes as RequestBodyObject).content;
                for (const [requestBodyType, requestBodyMedia] of objectEntries(requestBodyObject)) {
                    if (!requestBodyMedia.schema) {
                        throw Error(`request body media type has no schema prop`);
                    }

                    requestBodyHolder[requestBodyType] = restoreResolvedReferences(JSON.stringify(schemaToTypeTS(requestBodyMedia.schema)));
                }

                descriptorRequestBody = requestBodyHolder;
            }

            // REQUEST PARAMS
            const descriptorPathParams = "never";
            if (methodOperation.parameters) {
                const { replacedTypes, restoreResolvedReferences } = replaceSchemaReferencesWithPlaceholder(
                    "API",
                    methodOperation.parameters,
                );

                const params = convertParametersToJSONSchema(replacedTypes as any);
                if (params.path) {
                    console.log(JSON.stringify(params.path), schemaToTypeTS(params.path));
                }

                // const { replacedTypes, restoreResolvedReferences } = replaceSchemaReferencesWithPlaceholder("API", params.path?.$schema);
            }

            // console.log(descriptorRequestBody);
            // console.log(convertParametersToJSONSchema(methodOperation.parameters!));

            // console.log(path, method, currentPath);
            currentPath.pop();
        }
    }
};
