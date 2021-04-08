import { Options as KyOptions } from "ky";
import ky from "ky-universal";
import debug from "../debug";
import { Headers } from "../OperationDescriptor";
import { Client, RequestFunctionFactory } from "./Client";
import { mapHeaders } from "./headers";
import { setPathParams } from "./path";
import { mapResponse } from "./response";

const d = debug.extend("KyHTTPClient");

export type Ky = typeof ky;

const defaultOptions: Required<Options> = {
    defaultHeaders: {},
    requestOptionsHook: (opts) => opts,
    ky: {},
};

export type RequestOptionsHook = (options: Options) => Options;

export interface Options {
    ky?: KyOptions;
    defaultHeaders?: Headers;
    requestOptionsHook?: RequestOptionsHook;
}

export class KyClient implements Client {
    public readonly ky: Ky;
    private readonly options: Required<Options>;

    public constructor(options: Options = {}) {
        this.options = { ...defaultOptions, ...options };
        this.ky = ky.create(this.options.ky);
    }

    public setDefaultHeaders(headers: Headers): void {
        this.options.defaultHeaders = headers;
    }

    public requestFunctionFactory: RequestFunctionFactory = (descriptor) => async (request) => {
        const { path, method } = descriptor;
        const { header, requestBody, path: pathParams, query } = request;

        d("requestBody: %o", requestBody);

        // make a shallow copy
        const options = this.options.requestOptionsHook({ ...this.options, ky: { ...this.options.ky } });

        try {
            const requestOptions: KyOptions = {
                ...options.ky,
                method,
                headers: {
                    ...options.defaultHeaders,
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
            return (await mapResponse(kyResponse, descriptor)) as any;
        } catch (error) {
            if (error instanceof ky.HTTPError) {
                return (await mapResponse(error.response, descriptor)) as any;
            }
            throw error;
        }
    };
}
