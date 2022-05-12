import { setPathParams } from "@mittwald/api-client/dist/http/path";
import { OperationDescriptor, RequestFunction, RequestType } from "@mittwald/api-client/dist/OperationDescriptor";
import { Resource } from "@mittwald/flow-lib/dist/resources/Resource";
import { TaggedResource } from "@mittwald/flow-lib/dist/resources/types";
import Tags from "@mittwald/flow-lib/dist/resources/Tags";

export type ApiResourceData<T> = T extends OperationDescriptor<any, infer TRes>
    ? Extract<TRes, { status: 200 }> extends { content: infer TContent }
        ? TContent
        : never
    : never;

export class ApiResource<T extends OperationDescriptor> extends Resource<ApiResourceData<T>> implements TaggedResource {
    public readonly tags: Tags;

    public constructor(operationDescriptor: T, requestFn: RequestFunction<T>, requestParams: RequestType<T>) {
        super(() => this.executeRequest(requestFn, requestParams));
        this.tags = this.buildTags(operationDescriptor, requestParams);
    }

    private buildTags(operationDescriptor: T, request: RequestType<T>): Tags {
        const path = setPathParams(operationDescriptor.path, request?.path);
        return new Tags([path, operationDescriptor.operationId]);
    }

    protected getDebugPrefix(): string {
        return this.tags.toString();
    }

    private async executeRequest(requestFn: RequestFunction<T>, requestParams: RequestType<T>): Promise<ApiResourceData<T> | undefined> {
        const response = await requestFn(requestParams);

        if (response?.status === 200) {
            return response.content;
        }

        return undefined;
    }
}

export default ApiResource;
