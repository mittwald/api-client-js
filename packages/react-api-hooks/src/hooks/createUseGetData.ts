import { RequestFunction } from "@mittwald/api-client/dist/OperationDescriptor";
import { createElement, ReactElement, useEffect, useState } from "react";
import { executionSubscriber, OnResultCallback, ResolvedFunctionResult } from "@mittwald/awesome-node-utils/funcs/ExecutionSubscriber";
import Null from "@mittwald/frontend-lib/dist/components/Null";

export interface GetDataHookNoDataResult {
    hasLoaded: false;
    view: ReactElement;
}

export type ResponseContent<T> = T extends { status: 200; content: infer TContent } ? TContent : never;

export interface GetDataHookDataResult<T extends RequestFunction> {
    hasLoaded: true;
    data: ResponseContent<ResolvedFunctionResult<T>>;
}

export type GetDataHookResult<T extends RequestFunction> = GetDataHookDataResult<T> | GetDataHookNoDataResult;

export interface AlternateViews {
    pristine?: ReactElement;
    loading?: ReactElement;
    error?: ReactElement;
    noAccess?: ReactElement;
    notFound?: ReactElement;
}

const nullView = createElement(Null);

export const createUseGetData = <T extends RequestFunction>(requestFn: T) => (
    request: Parameters<T>[0],
    alternateViews: AlternateViews = {},
): GetDataHookResult<T> => {
    const [result, setResult] = useState<ResolvedFunctionResult<T> | undefined>();
    const [execError, setExecError] = useState<Error | undefined>();
    const [isExecuting, setIsExecuting] = useState(true);
    const [isPristine, setIsPristine] = useState(true);

    const onResult: OnResultCallback<T> = (result) => {
        setExecError(undefined);
        setResult(result);
        setIsExecuting(false);
        setIsPristine(false);
    };

    const onError = (error: Error): void => {
        // This happens if the request function throws internally. HTTP errors will show up
        // with the HTTP error status code in the onResult function!
        setExecError(error);
        setResult(undefined);
        setIsExecuting(false);
        setIsPristine(false);
    };

    const onExecuting = (): void => {
        setIsExecuting(true);
    };

    const funcParams = [request] as Parameters<T>;

    useEffect(() => {
        // Prevents error loops!
        if (execError) {
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
    });

    if (isExecuting) {
        if (isPristine && alternateViews.pristine) {
            return {
                view: alternateViews.pristine,
                hasLoaded: false,
            };
        }

        if (alternateViews.loading) {
            return {
                view: alternateViews.loading,
                hasLoaded: false,
            };
        }
    }

    if (result) {
        if (result.status === 401 || result.status === 403) {
            return {
                view: alternateViews.noAccess || nullView,
                hasLoaded: false,
            };
        }

        if (result.status === 404) {
            return {
                view: alternateViews.notFound || nullView,
                hasLoaded: false,
            };
        }

        if (result.status < 200 || result.status >= 300) {
            return {
                view: alternateViews.error || nullView,
                hasLoaded: false,
            };
        }

        return {
            data: result.content,
            hasLoaded: true,
        };
    }

    return {
        view: alternateViews.error || nullView,
        hasLoaded: false,
    };
};
