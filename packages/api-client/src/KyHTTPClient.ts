import { HTTPClient, RequestFunctionFactory } from "./HTTPClient";
import * as Descriptor from "./OperationDescriptor";
import ky from "ky-universal";
import { Options } from "ky";
import { objectEntries } from "@mittwald/awesome-node-utils/object/entries";
import debug from "./debug";

const d = debug.extend("KyHTTPClient");

export type Ky = typeof ky;

const mapHeaders = (headers: Headers): Descriptor.Headers => {
    const result: Descriptor.Headers = {};
    headers.forEach((val, key) => {
        result[key] = val;
    });
    d("mapped response headers %o", result);
    return result;
};

const mapResponse = async (response: Response): Promise<Descriptor.Response> => {
    d("mapping response");
    return {
        status: response.status,
        content: response.bodyUsed ? await response.json() : undefined,
        header: mapHeaders(response.headers),
    };
};

const setPathParams = (path: string, params: object): string => {
    let finalPath = path;
    objectEntries(params || {}).forEach(([key, value]) => {
        finalPath = finalPath.replace(`{${key}`, encodeURIComponent(value));
    });
    d("path with params is %o", finalPath);
    return finalPath.startsWith("/") ? finalPath.substring(1) : finalPath;
};

export class KyHTTPClient implements HTTPClient {
    public readonly ky: Ky;

    public constructor(defaultOptions: Options = {}) {
        this.ky = ky.create(defaultOptions);
    }

    public requestFunctionFactory: RequestFunctionFactory = (descriptor) => async (request: Descriptor.Request) => {
        const { path, method } = descriptor;
        const { header, requestBody, path: pathParams, query } = request;

        try {
            const requestOptions: Options = {
                method,
                headers: header,
                searchParams: query,
            };

            if (requestBody) {
                requestOptions.json = requestBody;
            }

            const resolvedPath = setPathParams(path, pathParams);
            d("starting %o request to %o", method.toUpperCase(), resolvedPath);
            const kyResponse = await this.ky(resolvedPath, requestOptions);

            return (await mapResponse(kyResponse)) as any;
        } catch (error) {
            if (error instanceof ky.HTTPError) {
                return (await mapResponse(error.response)) as any;
            }
            throw error;
        }
    };
}
