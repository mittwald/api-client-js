import type { AxiosRequestConfig } from "axios";

import type { AuthenticateRequestData, AuthenticateData } from "../types";

export interface AuthBehaviors {
  authenticate: (
    data: AuthenticateRequestData,
    options?: AxiosRequestConfig,
  ) => Promise<AuthenticateData | void>;

  checkIsAuthenticated: (
    requestConfig?: AxiosRequestConfig,
  ) => Promise<boolean>;

  logout: (requestConfig?: AxiosRequestConfig) => Promise<void>;
}
