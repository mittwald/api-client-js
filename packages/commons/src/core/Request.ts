import {
  HttpHeaders,
  OpenAPIOperation,
  PathParameters,
  RequestConfig,
  ResponsePromise,
} from "../types/index.js";
import OpenAPIPath from "./OpenAPIPath.js";
import {
  AxiosInstance,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from "axios";

export class Request<TOp extends OpenAPIOperation> {
  private readonly axios: AxiosInstance;
  private readonly operationDescriptor: TOp;
  private readonly config?: RequestConfig<TOp>;

  public constructor(
    axiosInstance: AxiosInstance,
    operationDescriptor: TOp,
    config?: RequestConfig<TOp>,
  ) {
    this.axios = axiosInstance;
    this.operationDescriptor = operationDescriptor;
    this.config = config;
  }

  public execute(): ResponsePromise<TOp> {
    return this.axios.request(this.buildAxiosConfig()) as ResponsePromise<TOp>;
  }

  private buildAxiosConfig(): AxiosRequestConfig {
    const { method, path } = this.operationDescriptor;

    const pathParameters = this.config;

    const openApiPath = new OpenAPIPath(path, pathParameters as PathParameters);
    const url = openApiPath.buildUrl();

    const data =
      this.config && "data" in this.config ? this.config.data : undefined;

    const headersConfig =
      this.config && "headers" in this.config ? this.config.headers : undefined;

    const headers = headersConfig
      ? this.makeAxiosHeaders(headersConfig)
      : undefined;

    const queryParametersConfig =
      this.config && "queryParameters" in this.config
        ? this.config.queryParameters
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
