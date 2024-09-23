import axios, { Axios, AxiosInstance, CreateAxiosDefaults } from "axios";
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

  public constructor(axiosConfig: AxiosInstance | CreateAxiosDefaults = axios) {
    this.axios =
      axiosConfig instanceof Axios ? axiosConfig : axios.create(axiosConfig);
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
