import { OpenAPIOperation } from "../types/OpenAPIOperation";
import { RequestConfig, ResponsePromise } from "../types/RequestFunction";
import OpenAPIPath from "./OpenAPIPath";
import { AxiosInstance, AxiosRequestConfig } from "axios";

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

    const pathParameters =
      this.config &&
      "pathParameters" in this.config &&
      this.config.pathParameters !== null
        ? this.config.pathParameters
        : undefined;

    const openApiPath = new OpenAPIPath(path, pathParameters);

    const data =
      this.config && "data" in this.config ? this.config.data : undefined;

    const headers =
      this.config && "headers" in this.config ? this.config.headers : undefined;

    return {
      url: openApiPath.buildUrl(),
      method,
      headers,
      data,
    };
  }
}

export default Request;
