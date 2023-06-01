import { Options as KyOptions } from "ky";
import ky from "ky-universal";
import debug from "../debug";
import { Headers } from "../OperationDescriptor";
import { AnyRequestFunctionFactory, Client } from "./Client";
import { mapHeaders } from "./headers";
import { setPathParams } from "./path";
import { mapResponse } from "./response";
import { patchedFetchForSafari } from "./safari";
import { convertQueryToUrlSearchParams } from "./request";
import RequestError from "../RequestError";

const d = debug.extend("KyHTTPClient");

export type Ky = typeof ky;

const defaultOptions: Required<Options> = {
    defaultHeaders: {},
    requestOptionsHook: (opts) => opts,
    ky: {
        fetch: patchedFetchForSafari,
    },
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
        this.options = {
            ...defaultOptions,
            ...options,
        };
        this.ky = ky.create({
            ...defaultOptions.ky,
            ...(options.ky ?? {}),
        });
    }

    public setDefaultHeaders(headers: Headers): void {
        this.options.defaultHeaders = headers;
    }

    public requestFunctionFactory: AnyRequestFunctionFactory = (descriptor) => async (request, requestOptions) => {
        const { path, method } = descriptor;
        const { header, requestBody, path: pathParams, query } = request ?? {};

        // make a shallow copy
        const options = this.options.requestOptionsHook({ ...this.options });

        const resolvedPath = setPathParams(path, pathParams);

        try {
            const kyRequestOptions: KyOptions = {
                method,
                headers: {
                    ...options.defaultHeaders,
                    ...mapHeaders(header),
                },
                searchParams: convertQueryToUrlSearchParams(query),
            };

            if (requestOptions?.timeout !== undefined) {
                kyRequestOptions.timeout = requestOptions.timeout;
            }

            if (requestBody) {
                kyRequestOptions.json = requestBody;
            }
            d("%s: starting %o request", resolvedPath, method.toUpperCase());
            const kyResponse = await this.ky(resolvedPath, kyRequestOptions);
            d("%s: request done. mapping response", resolvedPath);
            return (await mapResponse(kyResponse, descriptor)) as any;
        } catch (error) {
            if (error instanceof ky.HTTPError) {
                d("request failed with ky HTTPError");
                return (await mapResponse(error.response, descriptor)) as any;
            }
            d("request failed");
            throw new RequestError(resolvedPath, descriptor.method, error);
        }
    };
}
