import { Client, RequestFunctionFactory } from "./Client";
import ky from "ky-universal";
import { Options } from "ky";
import debug from "../debug";
import { setPathParams } from "./path";
import { mapResponse } from "./response";

const d = debug.extend("KyHTTPClient");

export type Ky = typeof ky;

export class KyClient implements Client {
    public readonly ky: Ky;

    public constructor(defaultOptions: Options = {}) {
        this.ky = ky.create(defaultOptions);
    }

    public requestFunctionFactory: RequestFunctionFactory = (descriptor) => async (request) => {
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
