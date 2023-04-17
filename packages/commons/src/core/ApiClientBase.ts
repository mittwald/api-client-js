import axios, { Axios, AxiosInstance, CreateAxiosDefaults } from "axios";
import { RequestConfig, RequestFunction } from "../types/RequestFunction";
import { OpenAPIOperation } from "../types/OpenAPIOperation";
import Request from "./Request";

export abstract class ApiClientBase {
  public axios: AxiosInstance;

  public constructor(axiosConfig: AxiosInstance | CreateAxiosDefaults = axios) {
    this.axios =
      axiosConfig instanceof Axios ? axiosConfig : axios.create(axiosConfig);
  }

  protected requestFunctionFactory<TOp extends OpenAPIOperation>(
    operation: TOp,
  ): RequestFunction<TOp> {
    return (conf?: RequestConfig<TOp>) =>
      new Request(this.axios, operation, conf).execute();
  }
}

export default ApiClientBase;
