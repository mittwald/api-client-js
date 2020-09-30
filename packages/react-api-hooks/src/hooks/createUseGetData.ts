import { RequestFunction } from "@mittwald/api-client/dist/OperationDescriptor";
import { useEffect, useRef, useState } from "react";
import { executionSubscriber, OnResultCallback, ResolvedFunctionResult } from "@mittwald/awesome-node-utils/funcs/ExecutionSubscriber";
import { useIsOnline } from "./useIsOnline";

interface BaseResult {
    refreshCache: () => void;
}

export interface GetDataHookNoDataResult<T extends RequestFunction> extends BaseResult {
    state: "error" | "notFound" | "noAccess" | "unauthorized" | "loading" | "timeout";
    data?: ResponseContent<ResolvedFunctionResult<T>>;
}

export type ResponseContent<T> = T extends { status: 200; content: infer TContent } ? TContent : never;

export interface GetDataHookDataResult<T extends RequestFunction> extends BaseResult {
    state: "ok";
    data: ResponseContent<ResolvedFunctionResult<T>>;
}

export type GetDataHookState = GetDataHookResult<any>["state"] | GetDataHookNoDataResult<any>["state"];

export type GetDataHookResult<T extends RequestFunction> = GetDataHookDataResult<T> | GetDataHookNoDataResult<T>;

export const createRefreshCache = <T extends RequestFunction>(getRequestFn: () => T) => (request: Parameters<T>[0]): void => {
    executionSubscriber.refreshCache(getRequestFn(), ...request);
};

export interface UseGetDataOptions {
    disableCache?: boolean;
}

export const createUseGetData = <T extends RequestFunction>(getRequestFn: () => T) => (
    request: Parameters<T>[0],
    options?: UseGetDataOptions,
): GetDataHookResult<T> => {
    const { disableCache = false } = options ?? {};

    const requestFn = getRequestFn();

    const funcParams = [request] as Parameters<T>;

    const cachedResult = disableCache ? undefined : executionSubscriber.getCachedResult(requestFn, ...funcParams);

    const [result, setResult] = useState<ResolvedFunctionResult<T> | undefined>(cachedResult);

    const isOffline = !useIsOnline();

    const [state, setState] = useState<GetDataHookState>(cachedResult !== undefined ? "ok" : "loading");

    const wasOffline = useRef(isOffline);

    const onResult: OnResultCallback<T> = (result) => {
        const status = result.status;
        const ok = status >= 200 && status < 300;

        setResult(ok ? result : undefined);

        if (status === 401) {
            setState("unauthorized");
        } else if (status === 403) {
            setState("noAccess");
        } else if (status === 404) {
            setState("notFound");
        } else if (ok) {
            setState("ok");
        } else {
            setState("error");
        }
    };

    const onError = (error?: Error): void => {
        // This happens if the request function throws internally. Regular HTTP errors will show up
        // with the HTTP error status code in the onResult function!
        if (error?.name === "TimeoutError") {
            setState("timeout");
        } else {
            setState("error");
        }
        setResult(undefined);
    };

    const onExecuting = (): void => {
        setState("loading");
    };

    const refreshCache = (): void => {
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

    useEffect(
        () =>
            executionSubscriber.subscribe<T>(
                requestFn,
                {
                    onResult,
                    onError,
                    onExecuting,
                },
                ...funcParams,
            ),
        [],
    );

    return {
        data: result?.content,
        state,
        refreshCache,
    };
};
