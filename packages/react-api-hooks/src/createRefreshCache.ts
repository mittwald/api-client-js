import { OperationDescriptor, RequestFunction, RequestType } from "@mittwald/api-client/dist/OperationDescriptor";
import { apiResourceStore } from "./apiResourceStore";

export const createRefreshCache = <T extends OperationDescriptor>(operationDescriptor: T) => <TRequestParams extends RequestType<T>>(
    requestParams: TRequestParams,
): void => {
    apiResourceStore.get([operationDescriptor, requestParams])?.reload();
};

export default createRefreshCache;
