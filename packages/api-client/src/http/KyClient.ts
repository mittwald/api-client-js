import { Options as KyOptions } from "ky";
import ky from "ky-universal";
import debug from "../debug";
import { Headers } from "../OperationDescriptor";
import { Client, RequestFunctionFactory } from "./Client";
import { mapHeaders } from "./headers";
import { setPathParams } from "./path";
import { mapResponse } from "./response";
import { patchedFetchForSafari } from "./safari";

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

    /**
     * Our wonderfull client is generates from a list of query params a comma seperated list and will crash the api gateway.
     * We have to transform the query to URLSearchParams to prevent this issue.
     *
     * This stuff fixes the ky url from this:
     * https://api.dev.mittwald.systems/v2/internal/products/articles/?tags=22d4f,3d00f923
     * To this:
     * https://api.dev.mittwald.systems/v2/internal/products/articles/?tags=22d4f&tags=3d00f923
     * @param query
     */
    public convertQueryToUrlSerachParams(query?: any): URLSearchParams | undefined {
        if (query === undefined || typeof query !== "object") {
            return undefined;
        }
        const params = new URLSearchParams();
        for (const key of Object.keys(query)) {
            if (typeof query[key] === "object") {
                //TODO: Possible bug: When array has one item, gateway may transform it into string. Has to be checked after deploy (test works). Just duplicate the entry? KEKW
                for (const value of query[key]) {
                    params.append(key, value);
                }
            } else {
                params.append(key, query[key]);
            }
        }
        return params;
    }

    public requestFunctionFactory: RequestFunctionFactory = (descriptor) => async (request) => {
        const { path, method } = descriptor;
        const { header, requestBody, path: pathParams, query } = request;

        d("requestBody: %o", requestBody);
        // make a shallow copy
        const options = this.options.requestOptionsHook({ ...this.options });

        try {
            const requestOptions: KyOptions = {
                method,
                headers: {
                    ...options.defaultHeaders,
                    ...mapHeaders(header),
                },
                searchParams: this.convertQueryToUrlSerachParams(query),
            };

            if (requestBody) {
                requestOptions.json = requestBody;
            }
            d("setting path params");
            const resolvedPath = setPathParams(path, pathParams);
            d("starting %o request to %o", method.toUpperCase(), resolvedPath);
            const kyResponse = await this.ky(resolvedPath, requestOptions);
            console.log(kyResponse.url);
            d("mapping response");
            return (await mapResponse(kyResponse, descriptor)) as any;
        } catch (error) {
            if (error instanceof ky.HTTPError) {
                d("request failed with ky HTTPError");
                return (await mapResponse(error.response, descriptor)) as any;
            }
            d("request failed");
            throw error;
        }
    };
}
