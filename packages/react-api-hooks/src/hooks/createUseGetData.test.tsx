import React, { FC } from "react";
import { createUseGetData } from "./createUseGetData";
import { RequestFunction } from "@mittwald/api-client/dist/OperationDescriptor";
import { render, RenderResult, waitFor } from "@testing-library/react";
import { executionSubscriber } from "@mittwald/awesome-node-utils/funcs/ExecutionSubscriber";
import { sleep } from "@mittwald/awesome-node-utils/promises/timeout";

window.MutationObserver = require("mutation-observer");

const getErrorElement = jest.fn().mockReturnValue(<>error</>);
const getLoadingElement = jest.fn().mockReturnValue(<>loading</>);
const getPristineElement = jest.fn().mockReturnValue(<>pristine</>);

const getResponseContent = jest.fn().mockReturnValue("data");
const getResponseStatus = jest.fn().mockReturnValue(200);

const requestFn = jest.fn<ReturnType<RequestFunction>, Parameters<RequestFunction>>().mockImplementation(async () => {
    await sleep(50);
    return { content: getResponseContent(), status: getResponseStatus() };
});

const useGetData = createUseGetData(requestFn);

const request = { request: "anything" };

const TestComponent: FC = () => {
    const response = useGetData(request, {
        error: getErrorElement(),
        loading: getLoadingElement(),
        pristine: getPristineElement(),
        noAccess: <>noAccess</>,
        notFound: <>notFound</>,
    });

    if (!response.hasLoaded) {
        return response.view;
    }

    return <>{response.data}</>;
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

test("renders 'pristine => data' if pristine view is given", async () => {
    renderView();
    await expectViews("pristine", "data");
});

test("renders 'loading => data' if only loading view is given", async () => {
    getPristineElement.mockReturnValueOnce(undefined);
    renderView();
    await expectViews("loading", "data");
});

test("renders 'pristine => data => loading => newData' if pristine view is given and cache is cleared", async () => {
    renderView();
    await expectViews("pristine", "data");

    // return new data next time and refresh cache
    getResponseContent.mockReturnValueOnce("newData");
    executionSubscriber.refreshCache(requestFn, request);

    await expectViews("data", "loading", "newData");
});

test("renders 'pristine => data => newData' if no loading view is given and cache is cleared", async () => {
    renderView();
    await expectViews("pristine", "data");

    // return new data next time and refresh cache
    getLoadingElement.mockReturnValueOnce(undefined);
    getResponseContent.mockReturnValueOnce("newData");
    executionSubscriber.refreshCache(requestFn, request);

    await expectViews("data", "newData");
});

test("renders 'pristine => error' if status 500 returned", async () => {
    getResponseStatus.mockReturnValueOnce(500);
    renderView();
    await expectViews("pristine", "error");
});

test("renders 'pristine => error' if requestFunc throws internally", async () => {
    requestFn.mockImplementationOnce(() => {
        throw new Error("wuaaa");
    });

    renderView();
    await expectViews("pristine", "error");
});

test("renders 'pristine => notFound' if status 404 returned", async () => {
    getResponseStatus.mockReturnValueOnce(404);
    renderView();
    await expectViews("pristine", "notFound");
});

test("renders 'pristine => notAccess' if status 401 returned", async () => {
    getResponseStatus.mockReturnValueOnce(401);
    renderView();
    await expectViews("pristine", "noAccess");
});
