import { Response as ApiClientResponse } from "@mittwald/api-client/dist/http/Client";
import { OperationDescriptor, RequestFunction } from "@mittwald/api-client/dist/OperationDescriptor";
import { useEffect, useMemo, useRef, useState } from "react";
import { useIsOnline } from "./useIsOnline";
import { useSafeState } from "./useSafeState";
import { executionSubscriber, OnResultCallback, ResolvedFunctionResult } from "../lib/ExecutionSubscriber";
import { setPathParams } from "@mittwald/api-client/dist/http/path";
import { ReactApiHooksContext } from "./ReactApiHooksContext";

interface BaseResult {
    refreshCache: () => void;
    operation?: OperationDescriptor;
    status?: number;
    url?: string;
}

export type Response<T> = T extends { status: 200; content: infer TContent; mediaType?: infer TMediaType }
    ? { data: TContent; mediaType?: TMediaType }
    : never;

export type GetDataHookNoDataResult<T extends RequestFunction> = BaseResult & {
    state:
        | "unexpectedError"
        | "notFound"
        | "noAccess"
        | "unauthorized"
        | "loading"
        | "timeout"
        | "clientError"
        | "serverError"
        | "networkError";
} & Partial<Response<ResolvedFunctionResult<T>>>;

export type GetDataHookDataResult<T extends RequestFunction> = BaseResult & {
    state: "ok";
} & Response<ResolvedFunctionResult<T>>;

export type GetDataHookState = GetDataHookResult<any>["state"] | GetDataHookNoDataResult<any>["state"];

export type GetDataHookResult<T extends RequestFunction> = GetDataHookDataResult<T> | GetDataHookNoDataResult<T>;

export const createRefreshCache = <T extends RequestFunction>(getRequestFn: () => T) => (request: Parameters<T>[0]): void => {
    const funcParams = [request] as Parameters<T>;
    // refreshCache() needs the params-array as rest arg
    executionSubscriber.refreshCache(getRequestFn(), ...funcParams);
};

export interface UseGetDataOptions {
    disableCache?: boolean;
    /**
     * Maximum cache age in ms
     */
    cacheMaxAge?: number;
}

const getStateFromResult = (result: ApiClientResponse): GetDataHookState => {
    const status = result.status;

    if (status === 401) {
        return "unauthorized";
    }
    if (status === 403) {
        return "noAccess";
    }
    if (status === 404) {
        return "notFound";
    }
    if (status >= 400 && status < 500) {
        return "clientError";
    }
    if (status >= 500 && status < 600) {
        return "serverError";
    }
    if (status >= 200 && status < 300) {
        return "ok";
    }
    return "unexpectedError";
};

export const createUseGetData = <T extends RequestFunction>(operation: OperationDescriptor, getRequestFn: () => T) => (
    requestParams: Parameters<T>[0] | null,
    options?: UseGetDataOptions,
): GetDataHookResult<T> => {
    const { disableCache = false, cacheMaxAge } = options ?? {};

    const requestFn = getRequestFn();
    const requestParamsHash = JSON.stringify(requestParams);

    // The rules of hooks do not allow conditional calling, but you can use `null` as request to short-circuit executing the request
    const [shortCircuitExecution, setShortCircuitExecution] = useState(requestParams === null);

    useEffect(() => {
        setShortCircuitExecution(requestParams === null);
    }, [setShortCircuitExecution, requestParams]);

    const funcParams = [requestParams] as Parameters<T>;

    const cachedResult = disableCache || requestParams === null ? undefined : executionSubscriber.getCachedResult(requestFn, ...funcParams);

    const [result, setResult] = useSafeState<ApiClientResponse | undefined>(cachedResult);
    const latestResultTime = useRef<number>();

    const [state, setState] = useSafeState<GetDataHookState>(cachedResult ? getStateFromResult(cachedResult) : "loading");

    const prevRequestParamsHash = useRef(requestParamsHash);
    const requestParamsChanged = prevRequestParamsHash.current !== requestParamsHash;

    useEffect(() => {
        prevRequestParamsHash.current = requestParamsHash;
        setResult(undefined);
        setState("loading");
    }, [requestParamsChanged]);

    const onResult: OnResultCallback<T> = (result: ApiClientResponse) => {
        latestResultTime.current = new Date().getTime();
        setResult(result);
        setState(getStateFromResult(result));
    };

    const onError = (error: Error): void => {
        // This happens if the request function throws internally. Regular HTTP errors will show up
        // with the HTTP error status code in the onResult function!
        if (error.name === "TimeoutError") {
            setState("timeout");
        } else if (error.name === "NetworkError") {
            setState("networkError");
        } else {
            ReactApiHooksContext.instance.handleUnexpectedError(error, operation);
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

    // auto-refresh after cache expiration
    const [autoRefreshRequestTime, setAutoRefreshRequestTime] = useState(new Date().getTime());

    useEffect(() => {
        if (!cacheMaxAge || latestResultTime.current === undefined) {
            return;
        }
        const waitFor = cacheMaxAge - (new Date().getTime() - latestResultTime.current);

        const updateRefreshRequestTime = (): void => {
            setAutoRefreshRequestTime(new Date().getTime());
        };

        if (waitFor > 0) {
            const reloadTimeout = setTimeout(updateRefreshRequestTime, waitFor);

            return () => {
                clearTimeout(reloadTimeout);
            };
        } else {
            updateRefreshRequestTime();
        }
    }, [cacheMaxAge, latestResultTime.current]);

    useEffect(() => {
        if (disableCache) {
            refreshCache();
        }
    }, [disableCache]);

    // auto-refresh when going online
    const isOffline = !useIsOnline();
    const wasOffline = useRef(isOffline);

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

        return executionSubscriber.subscribeWithOptions<T>(
            requestFn,
            {
                onResult,
                onError,
                onExecuting,
            },
            funcParams,
            { maxAge: cacheMaxAge, cacheTags: ["/" + setPathParams(operation.path, requestParams?.path)] },
        );
    }, [shortCircuitExecution, autoRefreshRequestTime, requestParamsHash]);

    return useMemo(
        () => ({
            data: result?.content,
            mediaType: result?.mediaType,
            state,
            refreshCache,
            operation,
            status: result?.status,
            url: result?.url,
        }),
        [state],
    );
};
