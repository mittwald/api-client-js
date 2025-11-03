import { AxiosResponseHeaders, AxiosInstance, AxiosRequestConfig } from "axios";
import ApiClientBase from "../core/ApiClientBase.js";

function isMutatingRequest(request: AxiosRequestConfig): boolean {
  return ["post", "put", "delete", "patch"].includes(
    request.method?.toLowerCase() ?? "",
  );
}

function configureConsistencyHandlingInterceptor(axios: AxiosInstance): void {
  let lastEventId: string | undefined = undefined;

  axios.interceptors.request.use((config) => {
    if (
      lastEventId !== undefined &&
      !isMutatingRequest(config) &&
      config.headers["if-event-reached"] === undefined
    ) {
      config.headers["if-event-reached"] = lastEventId;
    }
    return config;
  });

  axios.interceptors.response.use((response) => {
    const headers = response.headers as AxiosResponseHeaders;

    if (headers.has("etag") && isMutatingRequest(response.config)) {
      lastEventId = headers.get("etag") as string;
    }
    return response;
  });
}

export function withEventConsistencyHandling<
  T extends ApiClientBase | AxiosInstance,
>(clientOrAxiosInstance: T): T {
  const axiosInstance: AxiosInstance =
    clientOrAxiosInstance instanceof ApiClientBase
      ? clientOrAxiosInstance.axios
      : clientOrAxiosInstance;
  configureConsistencyHandlingInterceptor(axiosInstance);
  return clientOrAxiosInstance;
}
