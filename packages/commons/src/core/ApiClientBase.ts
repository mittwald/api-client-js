import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";
import {
  RequestObject,
  RequestFunction,
  RequestOptions,
} from "../types/index.js";
import { OpenAPIOperation } from "../types/index.js";
import Request from "./Request.js";

export abstract class ApiClientBase {
  public readonly axios: AxiosInstance;
  public readonly defaultRequestOptions: RequestOptions = {};

  public constructor(
    axiosOrConfig: AxiosInstance | CreateAxiosDefaults = axios,
  ) {
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
      return request.execute(this.axios);
    };
  }
}

export default ApiClientBase;
