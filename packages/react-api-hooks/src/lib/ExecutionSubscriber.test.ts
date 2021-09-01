import { ExecutionEvents, ExecutionSubscriber, OnErrorCallback, OnExecutingCallback, OnResultCallback } from "./ExecutionSubscriber";
import Mock = jest.Mock;
import { sleep } from "./timeout";
import { mockFunc } from "./mockFunc";

const wait = (): Promise<void> => sleep(10);

describe("ExecutionSubscriber", (): void => {
    type SyncTestFunc = (foo: string, bar: number) => string;
    type AsyncTestFunc = (foo: string, bar: number) => Promise<string>;
    type TestFunc = SyncTestFunc | AsyncTestFunc;
    type MockFunc = Mock<ReturnType<TestFunc>, Parameters<TestFunc>>;

    const testFunc = jest.fn<ReturnType<SyncTestFunc>, Parameters<SyncTestFunc>>();
    const asyncTestFunc = jest.fn<ReturnType<AsyncTestFunc>, Parameters<AsyncTestFunc>>();

    let executionSubscriber: ExecutionSubscriber;

    describe.each<[string, MockFunc]>([
        ["sync", testFunc],
        ["async", asyncTestFunc],
    ])("for %s functions", (funcType, func) => {
        beforeEach(() => {
            jest.resetAllMocks();
            testFunc.mockImplementation((foo: string, bar: number): string => {
                return `${foo}: ${bar}`;
            });

            asyncTestFunc.mockImplementation(
                async (foo: string, bar: number): Promise<string> => {
                    await sleep(1);
                    return `${foo}: ${bar}`;
                },
            );

            executionSubscriber = new ExecutionSubscriber();
        });

        const callSubscribe = async (
            onResult: OnResultCallback = mockFunc<OnResultCallback<MockFunc>>(),
            onExecuting: OnExecutingCallback = mockFunc<OnExecutingCallback>(),
            onError: OnErrorCallback = mockFunc<OnErrorCallback>(),
            foo = "Foo",
        ): Promise<ExecutionEvents<MockFunc> & { unsubscribe: Function }> => {
            const unsubscribe = executionSubscriber.subscribe(
                func,
                {
                    onResult,
                    onExecuting,
                    onError,
                },
                foo,
                42,
            );

            await wait();

            return {
                onExecuting,
                onError,
                onResult,
                unsubscribe,
            };
        };

        test("calls function with correct parameters", async () => {
            await callSubscribe();
            expect(func).toBeCalledWith("Foo", 42);
        });

        test("does not execute function again, if function was executed before, with same parameters", async () => {
            const { onExecuting, onResult } = await callSubscribe();
            await callSubscribe(onResult, onExecuting);
            expect(func).toBeCalledTimes(1);
        });

        test("executes function again with correct parameters, if function was executed before, but with different parameters", async () => {
            await callSubscribe();
            await callSubscribe(undefined, undefined, undefined, "Bar");
            expect(func).toHaveBeenNthCalledWith(1, "Foo", 42);
            expect(func).toHaveBeenNthCalledWith(2, "Bar", 42);
        });

        test("calls onResult event with result", async () => {
            const { onResult } = await callSubscribe();
            expect(onResult).toBeCalledWith("Foo: 42");
        });

        test("calls onExecuting event when executing", async () => {
            const { onExecuting } = await callSubscribe();
            expect(onExecuting).toBeCalledTimes(1);
        });

        test("executes function once 'parallel' executing", async () => {
            const onExecuting = jest.fn();
            await Promise.all([callSubscribe(undefined, onExecuting), callSubscribe(undefined, onExecuting)]);
            expect(func).toBeCalledTimes(1);
        });

        test("calls onExecuting event twice on 'parallel' executing", async () => {
            const onExecuting = jest.fn();
            await Promise.all([callSubscribe(undefined, onExecuting), callSubscribe(undefined, onExecuting)]);
            expect(onExecuting).toBeCalledTimes(2);
        });

        test("calls onResult event (at least) twice on 'parallel' executing", async () => {
            const onResult = jest.fn();
            await Promise.all([callSubscribe(onResult), callSubscribe(onResult)]);
            // 1) subscribed event callback of 1. callSubscribe
            // 2) subscribed event callback of 2. callSubscribe
            // 3) directly invoked during 2. callSubscribe, due to cache hit
            expect(onResult).toBeCalledTimes(3);
        });

        test("calls onError, if function fails", async () => {
            func.mockImplementation(() => {
                throw new Error("Wuaaa");
            });

            const { onError } = await callSubscribe();
            expect(onError).toBeCalledWith(expect.any(Error));
        });

        test("executes function and calls onResult callback again, if cached value is removed", async () => {
            const { onResult } = await callSubscribe();
            executionSubscriber.refreshCache(func, "Foo", 42);
            await wait();
            expect(onResult).toBeCalledTimes(2);
            expect(func).toBeCalledTimes(2);
        });

        test("removeFromCache() does not trigger re-execution, if there are no subscriptions", async () => {
            const { onResult, unsubscribe } = await callSubscribe();
            unsubscribe();
            executionSubscriber.refreshCache(func, "Foo", 42);
            await wait();
            expect(onResult).toBeCalledTimes(1);
            expect(func).toBeCalledTimes(1);
        });

        test("getCachedResult() does does return a cached value", async () => {
            await callSubscribe();
            await wait();
            expect(executionSubscriber.getCachedResult(func, "Foo", 42)).toMatch("42");
        });

        test("getCachedResult() does does return empty value if cache is refreshed", async () => {
            await callSubscribe();
            await wait();
            executionSubscriber.refreshCache(func, "Foo", 42);
            expect(executionSubscriber.getCachedResult(func, "Foo", 42)).toBeUndefined();
        });

        test("calls onResult event not, if cached value is removed, but has unsubscribed", async () => {
            const { onResult, unsubscribe } = await callSubscribe();
            unsubscribe();
            executionSubscriber.refreshCache(func, "Foo", 42);
            await wait();
            expect(onResult).toBeCalledTimes(1);
        });

        test("does swallow errors in onResult function", async () => {
            const onResult = jest.fn();
            await callSubscribe(onResult);
            expect(onResult).toBeCalledTimes(1);
        });

        test("does swallow errors in async onResult function", async () => {
            const onResult = jest.fn();
            onResult.mockImplementation(async () => {
                await sleep(1);
                throw new Error("Wuaaa");
            });
            await callSubscribe(onResult);
            expect(onResult).toBeCalledTimes(1);
        });
    });
});
