import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";
import {
  RequestObject,
  RequestFunction,
  RequestOptions,
  ResponsePromise,
} from "../types/index.js";
import { OpenAPIOperation } from "../types/index.js";
import Request from "./Request.js";
import {
  defaultDeprecationHandler,
  DeprecationHandler,
  notifyDeprecation,
  parseDeprecationHeaders,
} from "./deprecation.js";

export interface ApiClientOptions {
  /**
   * Called each time a deprecated operation is used: one marked as deprecated
   * in the OpenAPI spec, or one whose response carries a `Deprecation` or
   * `Sunset` header. Defaults to a warning once per operation (Node
   * `DeprecationWarning`, `console.warn` in browsers). Pass `() => {}` to
   * silence it, or wrap your own handler in `oncePerOperation` to dedupe.
   */
  onDeprecation?: DeprecationHandler;
}

export abstract class ApiClientBase {
  public readonly axios: AxiosInstance;
  public readonly defaultRequestOptions: RequestOptions = {};
  public readonly onDeprecation: DeprecationHandler;

  public constructor(
    axiosOrConfig: AxiosInstance | CreateAxiosDefaults = axios,
    options: ApiClientOptions = {},
  ) {
    this.onDeprecation = options.onDeprecation ?? defaultDeprecationHandler;

    if (
      "request" in axiosOrConfig &&
      typeof axiosOrConfig.request === "function"
    ) {
      this.axios = axiosOrConfig;
    } else if (typeof axiosOrConfig === "object") {
      this.axios = axios.create(axiosOrConfig);
    } else {
      throw new Error("missing axios instance");
    }
  }

  private buildRequestOptions<TOp extends OpenAPIOperation>(
    fromRequest: RequestOptions<TOp>,
  ): RequestOptions<TOp> {
    return {
      ...this.defaultRequestOptions,
      ...fromRequest,
    };
  }

  protected requestFunctionFactory<TOp extends OpenAPIOperation>(
    operation: TOp,
  ): RequestFunction<TOp> {
    return (conf?: RequestObject<TOp>, opts: RequestOptions<TOp> = {}) => {
      const { onBeforeRequest } = this.buildRequestOptions(opts);

      const request = new Request(operation, conf);
      if (onBeforeRequest) {
        onBeforeRequest(request);
      }
      return this.reportDeprecation(operation, request.execute(this.axios));
    };
  }

  private async reportDeprecation<TOp extends OpenAPIOperation>(
    operation: TOp,
    response: ResponsePromise<TOp>,
  ): ResponsePromise<TOp> {
    let headers: Parameters<typeof parseDeprecationHeaders>[0];
    try {
      const settled = await response;
      headers = (settled as { headers?: typeof headers }).headers;
      return settled;
    } finally {
      const fromHeaders = parseDeprecationHeaders(headers);
      if (operation.deprecated || fromHeaders) {
        notifyDeprecation(this.onDeprecation, {
          operationId: operation.operationId,
          method: operation.method,
          path: operation.path,
          source: operation.deprecated ? "spec" : "response-header",
          ...fromHeaders,
        });
      }
    }
  }
}

export default ApiClientBase;
