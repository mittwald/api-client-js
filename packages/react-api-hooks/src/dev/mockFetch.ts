import fetchMock from "fetch-mock";
import { button } from "@storybook/addon-knobs";
import shortid from "shortid";
import { executionSubscriber } from "@mittwald/awesome-node-utils/funcs/ExecutionSubscriber";

export const mockFetch = (response: any, id: string = shortid(), status = 200): string => {
    button("Clear API cache", () => {
        executionSubscriber.clearCache();
    });

    const buildResponse = (url: string): Promise<any> => {
        const requestID = shortid();
        console.info(`[${requestID}] GET ${url}`);
        return new Promise((res) =>
            window.setTimeout(() => {
                console.info(`[${requestID}] Response`, response);
                res({
                    body: response,
                    status,
                });
            }, 1000),
        );
    };
    fetchMock.mock(new RegExp(id), buildResponse);
    return id;
};
