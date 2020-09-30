import AsyncLock from "async-lock";
import objectHash from "object-hash";
import LRUCache from "lru-cache";
import { FunctionType, Resolved } from "./types";
import { acquireLock } from "./lock";
import { assertInMap } from "./assertInMap";

const voidFunction = (): void => {};

export type ResolvedFunctionResult<T extends FunctionType = FunctionType> = Resolved<ReturnType<T>>;
export type OnResultCallback<T extends FunctionType = FunctionType> = (result: ResolvedFunctionResult<T>) => any;
export type OnExecutingCallback = () => any;
export type OnErrorCallback = (error: Error) => any;

export interface ExecutionEvents<T extends FunctionType = FunctionType> {
    onResult: OnResultCallback<T>;
    onExecuting: OnExecutingCallback;
    onError: OnErrorCallback;
}

export type InitExecutionEvents<T extends FunctionType = FunctionType> = Partial<ExecutionEvents<T>>;

const defaultEvents: ExecutionEvents = {
    onResult: voidFunction,
    onError: voidFunction,
    onExecuting: voidFunction,
};

type Unsubscribe = () => void;

const muteErrors = (runnable: () => any): void => {
    try {
        const result = runnable();
        if (result instanceof Promise) {
            result.catch(() => {
                // muted
            });
        }
    } catch (_) {
        // muted
    }
};

export interface ExecutionSubscriberOptions {
    cache?: LRUCache.Options<string, any>;
    executionLock?: {
        timeout?: number;
        maxPending?: number;
        domainReentrant?: boolean;
    };
}

/**
 * The ExecutionSubscriber mainly caches the results of function calls. Subscribers will be notified with the events of the function
 * execution, which are: `onResult(result)`, `onError(error)`, `onExecuting()` (only for async functions). If a component subscribes to an
 * already executed function (with the same parameters), it will be notified immediately with the cached result.
 *
 * If the cached result of a function call becomes stale, the `clearCache(func)` method can be used. If there are running subscriptions at
 * this point, the function will executed again, and all subscribers will be notified with the mentioned execution events.
 */
export class ExecutionSubscriber {
    private readonly resultCache = new Map<FunctionType, LRUCache<string, any>>();
    private readonly subscriptions = new Map<FunctionType, Map<string, Set<ExecutionEvents>>>();
    private readonly locks = new Map<FunctionType, AsyncLock>();
    private readonly options: ExecutionSubscriberOptions;

    public constructor(options: ExecutionSubscriberOptions = {}) {
        this.options = options;
    }

    /**
     * Starts a function subscription. Executes the function, if there is no cached result. Event subscriptions can be setup with the
     * `events` parameter. To unsubscribe, use the returned function.
     *
     * @param func - The function to be executed
     * @param events - Event callbacks for `onResult(result)`, `onError(error)`, `onExecuting()` (only for async functions)
     * @param params - The parameters the `func` should be executed with
     * @returns The unsubscribe function
     */
    public subscribe<TFunc extends FunctionType>(
        func: TFunc,
        events: InitExecutionEvents<TFunc>,
        ...params: Parameters<TFunc>
    ): Unsubscribe {
        const executionEvents = {
            ...defaultEvents,
            ...events,
        } as ExecutionEvents<TFunc>;

        const [paramsHash, cache] = this.getCache(func, params);

        const subscriptions = this.getSubscriptions(func, paramsHash);
        subscriptions.add(executionEvents);

        const unsubscribe = (): void => {
            subscriptions.delete(executionEvents);
        };

        // looking for cached entries and executing the func (which probably generates entries in the cache) must
        // be executed locked to avoid race conditions
        const lock = this.getLock(func);

        const runLocked = async (): Promise<void> => {
            const releaseLock = await acquireLock(paramsHash, lock);

            try {
                const cachedResult = cache.get(paramsHash);

                if (cachedResult) {
                    muteErrors(() => executionEvents.onResult(cachedResult));
                } else {
                    await this.executeAndNotify(func, params);
                }
            } finally {
                releaseLock();
            }
        };

        muteErrors(runLocked);

        return unsubscribe;
    }

    /**
     * Removes a function result from the cache. If there are any subscribers, listening for the functions execution, the function
     * will be executed again.
     *
     * @param func - The function from which the result cache should be removed
     * @param params - The parameters of the function call
     */
    public refreshCache<TFunc extends FunctionType>(func: TFunc, ...params: Parameters<TFunc>): void {
        const lock = this.getLock(func);
        const [paramsHash, cache] = this.getCache(func, params);
        cache.del(paramsHash);

        const runLocked = async (): Promise<void> => {
            const releaseLock = await acquireLock(paramsHash, lock);
            try {
                await this.executeAndNotify(func, params);
            } finally {
                releaseLock();
            }
        };

        muteErrors(runLocked);
    }

    /**
     * Returns the cached value
     *
     * @param func - The function from which the result cache should be retrieved
     * @param params - The parameters of the function call
     * @returns The cached result
     */
    public getCachedResult<TFunc extends FunctionType>(
        func: TFunc,
        ...params: Parameters<TFunc>
    ): ResolvedFunctionResult<TFunc> | undefined {
        const [paramsHash, cache] = this.getCache(func, params);
        return cache.get(paramsHash);
    }

    /**
     * Clears the complete result cache. Does not trigger re-execution!
     */
    public clearCache(): void {
        this.resultCache.clear();
    }

    private async executeAndNotify<TFunc extends FunctionType>(func: TFunc, params: Parameters<TFunc>): Promise<void> {
        const [paramsHash, cache] = this.getCache(func, params);

        // only execute the function, if there are subscribers
        if (!this.hasSubscriptions(func, paramsHash)) {
            return;
        }

        const onSuccess = (result: ResolvedFunctionResult<TFunc>): void => {
            cache.set(paramsHash, result);
            this.notifyResult(func, paramsHash, result);
        };

        const onError = (error: Error): void => {
            this.notifyError(func, paramsHash, error);
        };

        try {
            this.notifyExecuting(func, paramsHash);
            const result = func.apply(func, params);

            if (result instanceof Promise) {
                onSuccess(await result);
            } else {
                onSuccess(result);
            }
        } catch (error) {
            onError(error);
        }
    }

    private hasSubscriptions(func: FunctionType, paramsHash: string): boolean {
        return (this.subscriptions.get(func)?.get(paramsHash)?.size ?? 0) > 0;
    }

    private notifyResult(func: FunctionType, paramsHash: string, result: any): void {
        const matchedSubscriptions = this.subscriptions.get(func)?.get(paramsHash) ?? [];
        for (const events of matchedSubscriptions) {
            muteErrors(() => events.onResult(result));
        }
    }

    private notifyExecuting(func: FunctionType, paramsHash: string): void {
        const matchedSubscriptions = this.subscriptions.get(func)?.get(paramsHash) ?? [];
        for (const events of matchedSubscriptions) {
            muteErrors(() => events.onExecuting());
        }
    }

    private notifyError(func: FunctionType, paramsHash: string, error: Error): void {
        const matchedSubscriptions = this.subscriptions.get(func)?.get(paramsHash) ?? [];
        for (const events of matchedSubscriptions) {
            muteErrors(() => events.onError(error));
        }
    }

    private getCache(func: FunctionType, params: any[]): [string, LRUCache<string, any>] {
        const paramsHash = objectHash(params);
        return [paramsHash, assertInMap(this.resultCache, func, new LRUCache<string, any>(this.options.cache))];
    }

    private getLock(func: FunctionType): AsyncLock {
        return assertInMap(this.locks, func, new AsyncLock(this.options.executionLock));
    }

    private getSubscriptions(func: FunctionType, paramsHash: string): Set<ExecutionEvents> {
        const funcSubscriptions = assertInMap(this.subscriptions, func, new Map<string, Set<ExecutionEvents>>());
        return assertInMap(funcSubscriptions, paramsHash, new Set<ExecutionEvents>());
    }
}

export const executionSubscriber = new ExecutionSubscriber();
