import { AxiosInstance } from "axios";
import ApiClientBase from "../core/ApiClientBase.js";

function configureAccessTokenInterceptor(
  axios: AxiosInstance,
  token: string,
  headerName: string = "x-access-token",
) {
  axios.interceptors.request.use((conf) => {
    if (!conf.headers.has(headerName)) {
      conf.headers.set(headerName, token);
    }
    return conf;
  });
}

export function withAccessToken<T extends ApiClientBase | AxiosInstance>(
  clientOrAxiosInstance: T,
  token: string | undefined,
  headerName: string = "x-access-token",
): T {
  if (token) {
    const axiosInstance: AxiosInstance =
      clientOrAxiosInstance instanceof ApiClientBase
        ? clientOrAxiosInstance.axios
        : clientOrAxiosInstance;
    configureAccessTokenInterceptor(axiosInstance, token, headerName);
  }
  return clientOrAxiosInstance;
}

export default withAccessToken;
