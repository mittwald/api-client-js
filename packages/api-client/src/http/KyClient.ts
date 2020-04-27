import { Headers } from "../OperationDescriptor";
import { Client, RequestFunctionFactory } from "./Client";
import ky from "ky-universal";
import { Options as KyOptions } from "ky";
import debug from "../debug";
import { setPathParams } from "./path";
import { mapResponse } from "./response";
import { mapHeaders } from "./headers";

const d = debug.extend("KyHTTPClient");

export type Ky = typeof ky;

export interface Options extends KyOptions {
    defaultHeaders?: Headers;
}

export class KyClient implements Client {
    public readonly ky: Ky;
    private defaultHeaders: Headers = {};

    public constructor(defaultOptions: Options = {}) {
        const { defaultHeaders, ...kyOnlyOptions } = defaultOptions;
        this.defaultHeaders = defaultHeaders || {};
        this.ky = ky.create(kyOnlyOptions);
    }

    public setDefaultHeaders(headers: Headers): void {
        this.defaultHeaders = headers;
    }

    public requestFunctionFactory: RequestFunctionFactory = (descriptor) => async (request) => {
        const { path, method } = descriptor;
        const { header, requestBody, path: pathParams, query } = request;

        try {
            const requestOptions: KyOptions = {
                method,
                headers: {
                    ...this.defaultHeaders,
                    ...mapHeaders(header),
                },
                searchParams: query,
            };

            if (requestBody) {
                requestOptions.json = requestBody;
            }

            d("setting path params");
            const resolvedPath = setPathParams(path, pathParams);
            d("starting %o request to %o", method.toUpperCase(), resolvedPath);
            const kyResponse = await this.ky(resolvedPath, requestOptions);
            d("mapping response");
            return (await mapResponse(kyResponse)) as any;
        } catch (error) {
            if (error instanceof ky.HTTPError) {
                return (await mapResponse(error.response)) as any;
            }
            throw error;
        }
    };
}
