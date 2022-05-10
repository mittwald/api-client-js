import { OperationDescriptor, RequestFunction, RequestType } from "@mittwald/api-client/dist/OperationDescriptor";
import { Resource } from "@mittwald/flow-lib/dist/resources/Resource";
import { apiResourceStore } from "./apiResourceStore";
import { ApiResource } from "./ApiResource";

export const createRefreshCache =
    <T extends OperationDescriptor>(operationDescriptor: T) =>
    <TRequestParams extends RequestType<T>>(requestParams: TRequestParams): void => {
        apiResourceStore.get([operationDescriptor, requestParams])?.reload();
    };

export default createRefreshCache;
