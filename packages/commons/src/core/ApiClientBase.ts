import axios, { Axios, AxiosInstance, CreateAxiosDefaults } from "axios";
import { RequestObject, RequestFunction } from "../types/index.js";
import { OpenAPIOperation } from "../types/index.js";
import Request from "./Request.js";

export abstract class ApiClientBase {
  public axios: AxiosInstance;

  public constructor(axiosConfig: AxiosInstance | CreateAxiosDefaults = axios) {
    this.axios =
      axiosConfig instanceof Axios ? axiosConfig : axios.create(axiosConfig);
  }

  protected requestFunctionFactory<TOp extends OpenAPIOperation>(
    operation: TOp,
  ): RequestFunction<TOp> {
    return (conf?: RequestObject<TOp>) =>
      new Request(this.axios, operation, conf).execute();
  }
}

export default ApiClientBase;
