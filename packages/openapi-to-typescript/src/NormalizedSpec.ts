type JSONSchema = any;

export type ResponseMediaType = "application/json" | "base64";

export interface OperationParameters {
    path?: JSONSchema;
    query?: JSONSchema;
    header?: JSONSchema;
    requestBody?: JSONSchema;
}

export interface OperationResponse {
    content: JSONSchema;
    headers: JSONSchema;
    mediaType: ResponseMediaType;
}

export interface OperationResponseTypes {
    [type: string]: OperationResponse;
}

export interface OperationResponses {
    [code: string]: OperationResponseTypes;
}

export interface Operation {
    operationId?: string;
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

export interface NormalizedSpec {
    paths: Paths;
    components?: {
        schemas?: Schemas;
        parameters?: Schemas;
        responses?: Schemas;
        requestBodies?: Schemas;
    };
    definitions?: Schemas;
}
