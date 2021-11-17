import React, { FC, useEffect } from "react";
import { createUseGetData } from "./createUseGetData";
import { RequestFunction } from "@mittwald/api-client/dist/OperationDescriptor";
import { render, RenderResult, waitFor } from "@testing-library/react";
import { sleep } from "../lib/timeout";
import { executionSubscriber } from "../lib/ExecutionSubscriber";
import refreshCache, { refreshCacheByUrl } from "../lib/refreshCache";

window.MutationObserver = require("mutation-observer");

const getResponseContent = jest.fn().mockReturnValue("data");
const getResponseStatus = jest.fn().mockReturnValue(200);

const requestFn = jest.fn<ReturnType<RequestFunction>, Parameters<RequestFunction>>().mockImplementation(async () => {
    await sleep(50);
    return { content: getResponseContent(), status: getResponseStatus() };
});

const useGetData = createUseGetData({ operationId: "test", path: "/test", method: "get" }, () => requestFn);

const request = { request: "anything" };

let hookCalls = 0;

interface TestComponentProps {
    cacheMaxAge?: number;
}

const TestComponent: FC<TestComponentProps> = (props) => {
    const response = useGetData(request, { cacheMaxAge: props.cacheMaxAge });
    useEffect(() => {
        hookCalls++;
    }, [response]);

    return <>{response.state}</>;
};

let renderResult: RenderResult;

const renderView = (props: TestComponentProps = {}): void => {
    renderResult = render(<TestComponent {...props} />);
};

// checks if the component will render the given strings in the given order
const expectViews = async (...views: string[]): Promise<void> => {
    const seenViews: string[] = [];

    for (const view of views) {
        await waitFor(
            () => {
                const html = renderResult.container.innerHTML;
                if (html !== seenViews[seenViews.length - 1]) {
                    seenViews.push(renderResult.container.innerHTML);
                }
                expect(renderResult.getByText(view)).toBeDefined();
            },
            {
                container: renderResult.container,
            },
        );
    }

    expect(seenViews).toEqual(views);
};

beforeEach(() => {
    executionSubscriber.clearCache();
    hookCalls = 0;
});

test("regular loading state: 'loading => ok'", async () => {
    renderView();
    await expectViews("loading", "ok");
});

test("reload after cache refresh: 'loading => ok' => 'loading => ok'", async () => {
    renderView();
    await expectViews("loading", "ok");
    executionSubscriber.refreshCache(requestFn, request);
    await expectViews("ok", "loading", "ok");
});

test("reload after cache refresh with tag: 'loading => ok' => 'loading => ok'", async () => {
    renderView();
    await expectViews("loading", "ok");
    refreshCacheByUrl("/test");
    await expectViews("ok", "loading", "ok");
});

test("reload after subsequent cache refreshes", async () => {
    renderView();
    await expectViews("loading", "ok");
    refreshCacheByUrl("/test");
    await expectViews("ok", "loading", "ok");
    refreshCacheByUrl("/test");
    await expectViews("ok", "loading", "ok");
});

test("reload after cache refresh with ALL-tag: 'loading => ok' => 'loading => ok'", async () => {
    renderView();
    await expectViews("loading", "ok");
    refreshCache();
    await expectViews("ok", "loading", "ok");
});

test("reload after cache expires: 'loading => ok' => 'loading => ok'", async () => {
    renderView({ cacheMaxAge: 100 });
    await expectViews("loading", "ok");
    await expectViews("ok", "loading", "ok");
});

test("status 500", async () => {
    getResponseStatus.mockReturnValueOnce(500);
    renderView();
    await expectViews("loading", "serverError");
});

test("status 404", async () => {
    getResponseStatus.mockReturnValueOnce(404);
    renderView();
    await expectViews("loading", "notFound");
});

test("status 401", async () => {
    getResponseStatus.mockReturnValueOnce(401);
    renderView();
    await expectViews("loading", "unauthorized");
});

test("status 403", async () => {
    getResponseStatus.mockReturnValueOnce(403);
    renderView();
    await expectViews("loading", "noAccess");
});

test("requestFunc throws internally", async () => {
    requestFn.mockImplementationOnce(() => {
        throw new Error("wuaaa");
    });

    renderView();
    await expectViews("loading", "unexpectedError");
});

test("hooks with response as dependency are not re-called, when response is cached", async () => {
    getResponseStatus.mockReturnValueOnce(200);
    renderView();

    await waitFor(
        () => {
            expect(renderResult.getByText("ok")).toBeDefined();
        },
        {
            container: renderResult.container,
        },
    );

    const hooksCalledFirstRender = hookCalls;
    renderResult.rerender(<TestComponent />);
    expect(hookCalls).toBe(hooksCalledFirstRender);
});
