import React, { ReactElement } from "react";
import { mockRequestFactory } from "@mittwald/api-client/dist/http/mockRequestFactory";
import { createUseGetData } from "../hooks/createUseGetData";
import { KyClient } from "@mittwald/api-client/dist/http/KyClient";
import { OperationDescriptor } from "@mittwald/api-client/dist/OperationDescriptor";

const client = new KyClient({
    ky: {
        prefixUrl: "http://localhost",
    },
});

const postOperationDescriptor: OperationDescriptor<
    {
        requestBody: {
            foo: string;
        };
    },
    {
        status: 200;
        content: {
            foo: string;
        };
    }
> = {
    path: "test",
    method: "post",
    operationId: "postTest",
};

const startRequest = client.requestFunctionFactory(postOperationDescriptor);

const mockPostRequest = mockRequestFactory(postOperationDescriptor);

mockPostRequest(
    {
        requestBody: {
            foo: "bar",
        },
    },
    (req) => {
        return {
            content: req.requestBody,
            status: 200,
            operation: postOperationDescriptor,
        };
    },
);

const usePostRequest = createUseGetData(postOperationDescriptor, () => startRequest);

export const Default = (): ReactElement => {
    const postRequest = usePostRequest({
        requestBody: {
            foo: "bar",
        },
    });

    return (
        <dl>
            <dt>State</dt>
            <dd>{postRequest.state}</dd>
            <dt>Data</dt>
            <dd>{JSON.stringify(postRequest.data)}</dd>
        </dl>
    );
};

export default {
    title: "useGetData",
};
