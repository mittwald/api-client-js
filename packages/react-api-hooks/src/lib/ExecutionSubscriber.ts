import AsyncLock from "async-lock";
import objectHash from "object-hash";
import LRUCache from "lru-cache";
import { FunctionType, Resolved } from "./types";
import { acquireLock } from "./lock";
import { assertInMap } from "./assertInMap";

const voidFunction = (): void => {};

export enum CacheTags {
    ALL = "@all",
}

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

export interface ExecutionOptions {
    maxAge?: number;
    cacheTags?: string[];
}

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

export class ExecutionSubscriber {
    private readonly cacheTags = new Map<string, Array<[FunctionType, Parameters<any>]>>();
    private readonly resultCache = new Map<FunctionType, LRUCache<string, any>>();
    private readonly subscriptions = new Map<FunctionType, Map<string, Set<ExecutionEvents>>>();
    private readonly locks = new Map<FunctionType, AsyncLock>();
    private readonly options: ExecutionSubscriberOptions;

    public constructor(options: ExecutionSubscriberOptions = {}) {
        this.options = options;
    }

    public subscribe<TFunc extends FunctionType>(
        func: TFunc,
        events: InitExecutionEvents<TFunc>,
        ...params: Parameters<TFunc>
    ): Unsubscribe {
        return this.subscribeInternal(func, events, params);
    }

    public subscribeWithOptions<TFunc extends FunctionType>(
        func: TFunc,
        events: InitExecutionEvents<TFunc>,
        params: Parameters<TFunc>,
        executionOptions?: ExecutionOptions,
    ): Unsubscribe {
        return this.subscribeInternal(func, events, params, executionOptions);
    }

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

    public refreshCacheByTag(tag: string): void {
        const cacheEntriesOfTags = this.cacheTags.get(tag);
        if (!cacheEntriesOfTags) {
            return;
        }

        cacheEntriesOfTags.forEach(([func, params]) => {
            this.refreshCache(func, ...params);
        });

        this.cacheTags.delete(tag);

        return;
    }

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
        this.cacheTags.clear();
    }

    /**
     * Refreshs the complete result cache
     */
    public refreshAllCache(): void {
        this.refreshCacheByTag(CacheTags.ALL);
    }

    private subscribeInternal<TFunc extends FunctionType>(
        func: TFunc,
        events: InitExecutionEvents<TFunc>,
        params: Parameters<TFunc>,
        options?: ExecutionOptions,
    ): Unsubscribe {
        const executionEvents = {
            ...defaultEvents,
            ...events,
        } as ExecutionEvents<TFunc>;

        const [paramsHash, cache] = this.getCache(func, params);
        const tags = options?.cacheTags ?? [];
        [...tags, CacheTags.ALL].forEach((t) => {
            const cacheEntriesOfTag = this.cacheTags.get(t) ?? [];
            cacheEntriesOfTag.push([func, params]);
            this.cacheTags.set(t, cacheEntriesOfTag);
        });

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
                    await this.executeAndNotify(func, params, options);
                }
            } finally {
                releaseLock();
            }
        };

        muteErrors(runLocked);

        return unsubscribe;
    }

    private async executeAndNotify<TFunc extends FunctionType>(
        func: TFunc,
        params: Parameters<TFunc>,
        options: ExecutionOptions = {},
    ): Promise<void> {
        const [paramsHash, cache] = this.getCache(func, params);

        // only execute the function, if there are subscribers
        if (!this.hasSubscriptions(func, paramsHash)) {
            return;
        }

        const onSuccess = (result: ResolvedFunctionResult<TFunc>): void => {
            cache.set(paramsHash, result, options.maxAge);
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
