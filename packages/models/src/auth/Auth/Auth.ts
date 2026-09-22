import type { AxiosRequestConfig } from "axios";

import type { AuthenticateRequestData } from "./types";

import { SessionToken } from "../SessionToken";
import { config } from "../../config";

export class Auth {
  public static async checkIsAuthenticated(requestConfig?: AxiosRequestConfig) {
    return await config.behaviors.auth.checkIsAuthenticated(requestConfig);
  }

  public static async login(
    data: AuthenticateRequestData,
  ): Promise<"mfaRequired" | SessionToken>;

  public static async login(
    data: AuthenticateRequestData & { cookieOnly: true },
  ): Promise<void>;

  public static async login(
    data: AuthenticateRequestData,
  ): Promise<"mfaRequired" | SessionToken | void> {
    const response = await config.behaviors.auth.authenticate(data);

    if (response === "mfaRequired" || response === undefined) {
      return response;
    }

    return new SessionToken(response);
  }

  public static async logout(requestConfig?: AxiosRequestConfig) {
    await config.behaviors.auth.logout(requestConfig);
  }
}
