import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { OpenAPIOperation } from "../types/OpenAPIOperation";
import { AnyResponse } from "../types/Response";

export class ApiClientError<T = unknown, D = unknown> extends AxiosError<T, D> {
  public constructor(
    message?: string,
    code?: string,
    config?: InternalAxiosRequestConfig<D>,
    request?: unknown,
    response?: AxiosResponse<T, D>,
  ) {
    super(message, code, config, request, response);
    Object.setPrototypeOf(this, ApiClientError.prototype);
    this.name = "ApiClientError";
  }

  public static fromResponse(
    message: string,
    response: AnyResponse,
  ): ApiClientError {
    return new ApiClientError<OpenAPIOperation>(
      message,
      undefined,
      response.config,
      response.request,
      response,
    );
  }
}

export default ApiClientError;
