import { OperationDescriptor, RequestFunction, RequestType } from "@mittwald/api-client/dist/OperationDescriptor";
import { Resource } from "@mittwald/flow-lib/dist/resources/Resource";
import { apiResourceStore } from "./apiResourceStore";
import { ApiResource } from "./ApiResource";

const nullResource = new Resource(() => Promise.resolve(null));

export type NullableApiResource<TDescriptor extends OperationDescriptor, TRequest> = TRequest extends null
    ? ApiResource<TDescriptor> | Resource<null>
    : ApiResource<TDescriptor>;

export const createGetApiResource = <T extends OperationDescriptor>(operationDescriptor: T, requestFn: RequestFunction<T>) => <
    TRequestParams extends RequestType<T> | null
>(
    requestParams: TRequestParams,
): NullableApiResource<T, TRequestParams> => {
    if (requestParams === null) {
        return nullResource as NullableApiResource<T, TRequestParams>;
    }

    return apiResourceStore.getOrSet(
        [operationDescriptor, requestParams],
        new ApiResource<T>(operationDescriptor, requestFn, requestParams as RequestType<T>) as NullableApiResource<T, TRequestParams>,
    );
};

export default createGetApiResource;
