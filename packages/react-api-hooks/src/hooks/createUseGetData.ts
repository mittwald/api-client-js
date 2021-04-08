import { Response as ApiClientResponse } from "@mittwald/api-client/dist/http/Client";
import { OperationDescriptor, RequestFunction } from "@mittwald/api-client/dist/OperationDescriptor";
import { useEffect, useMemo, useRef, useState } from "react";
import {
    executionSubscriber,
    OnResultCallback,
    ResolvedFunctionResult as RequestFunctionResult,
} from "@mittwald/awesome-node-utils/funcs/ExecutionSubscriber";
import { useIsOnline } from "./useIsOnline";
import { useSafeState } from "./useSafeState";

interface BaseResult {
    refreshCache: () => void;
    operation?: OperationDescriptor;
    status?: number;
}

export type Response<T> = T extends { status: 200; content: infer TContent; mediaType?: infer TMediaType }
    ? { data: TContent; mediaType?: TMediaType }
    : never;

export type GetDataHookNoDataResult<T extends RequestFunction> = BaseResult & {
    state: "unexpectedError" | "notFound" | "noAccess" | "unauthorized" | "loading" | "timeout" | "clientError" | "serverError";
} & Partial<Response<RequestFunctionResult<T>>>;

export type GetDataHookDataResult<T extends RequestFunction> = BaseResult & {
    state: "ok";
} & Response<RequestFunctionResult<T>>;

export type GetDataHookState = GetDataHookResult<any>["state"] | GetDataHookNoDataResult<any>["state"];

export type GetDataHookResult<T extends RequestFunction> = GetDataHookDataResult<T> | GetDataHookNoDataResult<T>;

export const createRefreshCache = <T extends RequestFunction>(getRequestFn: () => T) => (request: Parameters<T>[0]): void => {
    const funcParams = [request] as Parameters<T>;
    // refreshCache() needs the params-array as rest arg
    executionSubscriber.refreshCache(getRequestFn(), ...funcParams);
};

export interface UseGetDataOptions {
    disableCache?: boolean;
}

export const createUseGetData = <T extends RequestFunction>(operation: OperationDescriptor, getRequestFn: () => T) => (
    request: Parameters<T>[0] | null,
    options?: UseGetDataOptions,
): GetDataHookResult<T> => {
    const { disableCache = false } = options ?? {};

    const requestFn = getRequestFn();

    // The rules of hooks do not allow conditional calling, but you can use `null` as request to short-circuit executing the request
    const [shortCircuitExecution, setShortCircuitExecution] = useState(request === null);

    useEffect(() => {
        setShortCircuitExecution(request === null);
    }, [setShortCircuitExecution, request]);

    const funcParams = [request] as Parameters<T>;

    const cachedResult = disableCache || request === null ? undefined : executionSubscriber.getCachedResult(requestFn, ...funcParams);

    const [result, setResult] = useSafeState<ApiClientResponse | undefined>(cachedResult);

    const isOffline = !useIsOnline();

    const [state, setState] = useSafeState<GetDataHookState>(cachedResult !== undefined ? "ok" : "loading");

    const wasOffline = useRef(isOffline);

    const onResult: OnResultCallback<T> = (result: ApiClientResponse) => {
        const status = result.status;
        const ok = status >= 200 && status < 300;

        setResult(ok ? result : undefined);

        if (status === 401) {
            setState("unauthorized");
        } else if (status === 403) {
            setState("noAccess");
        } else if (status === 404) {
            setState("notFound");
        } else if (status >= 400 && status < 500) {
            setState("clientError");
        } else if (status >= 500 && status < 600) {
            setState("serverError");
        } else if (ok) {
            setState("ok");
        } else {
            setState("unexpectedError");
        }
    };

    const onError = (error?: Error): void => {
        // This happens if the request function throws internally. Regular HTTP errors will show up
        // with the HTTP error status code in the onResult function!
        if (error?.name === "TimeoutError") {
            setState("timeout");
        } else {
            setState("unexpectedError");
        }
        setResult(undefined);
    };

    const onExecuting = (): void => {
        setState("loading");
    };

    const refreshCache = (): void => {
        if (shortCircuitExecution) {
            return;
        }
        setState("loading");
        executionSubscriber.refreshCache(requestFn, ...funcParams);
    };

    useEffect(() => {
        if (disableCache) {
            refreshCache();
        }
    }, [disableCache]);

    useEffect(() => {
        const hasSwitchedToOnline = wasOffline.current && !isOffline;
        if (hasSwitchedToOnline) {
            refreshCache();
        }
        wasOffline.current = isOffline;
    }, [isOffline]);

    useEffect(() => {
        if (shortCircuitExecution) {
            return;
        }

        return executionSubscriber.subscribe<T>(
            requestFn,
            {
                onResult,
                onError,
                onExecuting,
            },
            ...funcParams,
        );
    }, [shortCircuitExecution]);

    return useMemo(
        () => ({
            data: result?.content,
            mediaType: result?.mediaType,
            state,
            refreshCache,
            operation,
            status: result?.status,
        }),
        [state],
    );
};
