import { JSONSchema } from "json-schema-typed";

export interface OperationParameters {
    path?: JSONSchema;
    query?: JSONSchema;
    header?: JSONSchema;
    requestBody?: JSONSchema;
}

export interface OperationResponse {
    content: JSONSchema;
    headers: JSONSchema;
}

export interface OperationResponses {
    [code: string]: OperationResponse;
}

export interface Operation {
    operationId: string;
    parameters: OperationParameters;
    responses: OperationResponses;
}

export interface Operations {
    [operation: string]: Operation;
}

export interface Paths {
    [name: string]: Operations;
}

export interface Schemas {
    [name: string]: JSONSchema;
}

export interface Parameters {
    [name: string]: JSONSchema;
}

export interface IntermediateFormat {
    paths: Paths;
    components: {
        schemas: Schemas;
        parameters: Parameters;
    };
}
