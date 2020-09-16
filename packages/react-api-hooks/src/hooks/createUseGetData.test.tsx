import React, { FC } from "react";
import { createUseGetData } from "./createUseGetData";
import { RequestFunction } from "@mittwald/api-client/dist/OperationDescriptor";
import { render, RenderResult, waitFor } from "@testing-library/react";
import { executionSubscriber } from "@mittwald/awesome-node-utils/funcs/ExecutionSubscriber";
import { sleep } from "@mittwald/awesome-node-utils/promises/timeout";

window.MutationObserver = require("mutation-observer");

const getResponseContent = jest.fn().mockReturnValue("data");
const getResponseStatus = jest.fn().mockReturnValue(200);

const requestFn = jest.fn<ReturnType<RequestFunction>, Parameters<RequestFunction>>().mockImplementation(async () => {
    await sleep(50);
    return { content: getResponseContent(), status: getResponseStatus() };
});

const useGetData = createUseGetData(requestFn);

const request = { request: "anything" };

const TestComponent: FC = () => {
    const response = useGetData(request);

    return <>{response.state}</>;
};

let renderResult: RenderResult;

const renderView = (): void => {
    renderResult = render(<TestComponent />);
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

test("status 500", async () => {
    getResponseStatus.mockReturnValueOnce(500);
    renderView();
    await expectViews("loading", "error");
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
    await expectViews("loading", "error");
});
