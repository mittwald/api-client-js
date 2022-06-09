import * as Client from "./Client";
import debug from "../debug";
import got, { Got, Method, RequestError as GotRequestError, Response, Options } from "got";
import { Headers, OperationDescriptor } from "../OperationDescriptor";
import { setPathParams } from "./path";
import { convertQueryToUrlSearchParams } from "./request";
import { URLSearchParams } from "url";
import RequestError from "../RequestError";

const d = debug.extend("GotHTTPClient");

export class GotClient implements Client.Client {
    private instance: Got = got;

    public constructor(options?: Options) {
        if (options) {
            this.instance = this.instance.extend({
                ...options,
            });
        }
    }

    public setDefaultHeaders(headers: Headers): void {
        this.instance = this.instance.extend({
            headers: headers,
        });
    }

    public requestFunctionFactory: Client.AnyRequestFunctionFactory = (descriptor) => async (request) => {
        const { path, method } = descriptor;

        d("setting path params");

        const resolvedPath = setPathParams(path, request?.path);

        try {
            d("starting %o request to %o", method.toUpperCase(), resolvedPath);
            const response = await this.instance(resolvedPath, {
                method: method as Method,
                json: request?.requestBody,
                searchParams: convertQueryToUrlSearchParams(request?.query) as URLSearchParams,
                headers: request?.header,
            });

            d("mapping response");
            return this.mapResponse(response, descriptor);
        } catch (err) {
            d("request failed with got RequestError");
            if (err instanceof GotRequestError && err.response) {
                return this.mapResponse(err.response, descriptor);
            }
            d("request failed");
            throw new RequestError(resolvedPath, descriptor.method, err);
        }
    };

    private readonly mapResponse = (response: Response<any>, operation: OperationDescriptor): Client.Response => {
        const rawMediaType = response.headers["content-type"];
        // when header includes meta data like "base64; charset=UTF-8"
        const mediaType = rawMediaType ? rawMediaType.split(";")[0] : undefined;

        return {
            status: response.statusCode,
            url: response.url,
            mediaType,
            content: mediaType === "application/json" && typeof response.body === "string" ? JSON.parse(response.body) : response.body,
            headers: response.headers,
            operation,
        };
    };
}
