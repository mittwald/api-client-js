export interface Schema {
    [prop: string]: any;
    $ref?: string;
}

export interface OperationParameter {
    path: Schema;
    query: Schema;
    header: Schema;
}

export interface OperationParameters {
    [name: string]: OperationParameter;
}

export interface OperationResponse {
    content: Schema;
    headers: Schema;
}

export interface OperationResponses {
    [code: string]: OperationResponse;
}

export interface Operation {
    operationId: string;
    parameters: OperationParameters;
    responses: OperationResponses;
}

export interface IntermediateFormat {
    paths: {
        [name: string]: {
            [operation: string]: {};
        };
    };
}
