import {
  HttpHeaders,
  OpenAPIOperation,
  PathParameters,
  RequestObject,
  ResponsePromise,
} from "../types/index.js";
import OpenAPIPath from "./OpenAPIPath.js";
import {
  AxiosInstance,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from "axios";

export class Request<TOp extends OpenAPIOperation> {
  private readonly operationDescriptor: TOp;
  private readonly requestObject?: RequestObject<TOp>;
  public readonly requestConfig: AxiosRequestConfig;

  public constructor(
    operationDescriptor: TOp,
    requestObject?: RequestObject<TOp>,
  ) {
    this.operationDescriptor = operationDescriptor;
    this.requestObject = requestObject;
    this.requestConfig = this.buildAxiosConfig();
  }

  public execute(axios: AxiosInstance): ResponsePromise<TOp> {
    return axios.request(this.requestConfig) as ResponsePromise<TOp>;
  }

  private buildAxiosConfig(): AxiosRequestConfig {
    const { method, path } = this.operationDescriptor;

    const pathParameters = this.requestObject;

    const openApiPath = new OpenAPIPath(path, pathParameters as PathParameters);
    const url = openApiPath.buildUrl();

    const data =
      this.requestObject && "data" in this.requestObject
        ? this.requestObject.data
        : undefined;

    const headersConfig =
      this.requestObject && "headers" in this.requestObject
        ? this.requestObject.headers
        : undefined;

    const headers = headersConfig
      ? this.makeAxiosHeaders(headersConfig)
      : undefined;

    const queryParametersConfig =
      this.requestObject && "queryParameters" in this.requestObject
        ? this.requestObject.queryParameters
        : undefined;
    const params = this.convertQueryToUrlSearchParams(queryParametersConfig);

    return {
      url,
      method,
      headers,
      // Must be a plain object or an URLSearchParams object
      params,
      data,
      validateStatus: () => true,
    };
  }

  private makeAxiosHeaders(headers: HttpHeaders): RawAxiosRequestHeaders {
    return Object.fromEntries(
      Object.entries(headers).map(([key, value]) => [key, value?.toString()]),
    );
  }

  private convertQueryToUrlSearchParams(
    query?: unknown,
  ): URLSearchParams | undefined {
    if (query === undefined || query === null) {
      return undefined;
    }

    if (query instanceof URLSearchParams) {
      return query;
    }

    if (typeof query === "string") {
      return new URLSearchParams(query);
    }

    if (typeof query === "object") {
      const searchParams = new URLSearchParams();

      for (const [key, value] of Object.entries(query)) {
        if (value === undefined) {
          continue;
        }

        if (Array.isArray(value)) {
          for (const arrayItem of value) {
            searchParams.append(key, arrayItem);
          }
        } else {
          searchParams.append(
            key,
            typeof value === "string" ||
              typeof value === "number" ||
              typeof value === "boolean"
              ? value.toString()
              : JSON.stringify(value),
          );
        }
      }

      return searchParams;
    }

    throw new Error(`Unexpected query parameter type (${typeof query})`);
  }
}

export default Request;
