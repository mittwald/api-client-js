import type { MittwaldAPIV2Client } from "@mittwald/api-client";
import type { AxiosRequestConfig } from "axios";

import type { AuthBehaviors } from "./types";

import { ValidationError } from "../../../errors";
import { withAxiosRequestConfig, validateResponse,anyStatus401, anyStatus403  } from "../../../base";

export const apiAuthBehaviors = (
  client: MittwaldAPIV2Client,
): AuthBehaviors => ({
  authenticate: async (data, requestOptions?: AxiosRequestConfig) => {
    const { multiFactorCode, cookieOnly, ...bodyData } = data;

    const response = multiFactorCode
      ? await client.user.authenticateMfa(
          {
            data: {
              ...bodyData,
              multiFactorCode,
            },
            queryParameters: {
              cookieOnly,
            },
          },
          withAxiosRequestConfig(requestOptions),
        )
      : await client.user.authenticate(
          {
            queryParameters: {
              cookieOnly,
            },
            data: bodyData,
          },
          withAxiosRequestConfig(requestOptions),
        );

    if (
      response.status === 401 ||
      // API-DRIFT: user.authenticate omits 403 in its generated response type, so anyStatus403 (403 as any) is compared (resolve: use the literal 403 once the client type declares it)
      response.status === anyStatus403 ||
      (response.data as { type?: string } | undefined)?.type ===
        "WrongEmailOrPassword"
    ) {
      throw new ValidationError({
        message: "invalidCredentials",
        type: "invalidCredentials",
        path: "root",
      });
    }

    validateResponse(response, [200, 202, 204], {
      validationError: {
        typeMappings: {
          custom: (e) =>
            e.message?.includes("code is not valid")
              ? "mfaCodeInvalid"
              : undefined,
        },
      },
    });

    if (response.status === 202) {
      return "mfaRequired";
    }

    if (response.status === 204) {
      return;
    }

    return response.data;
  },

  checkIsAuthenticated: async (requestConfig) => {
    // API-DRIFT: uses getUser({ userId: "self" }) as an auth probe instead of client.user.checkToken() (resolve: switch to checkToken() once the API is fixed)
    const response = await client.user.getUser(
      {
        userId: "self",
      },
      withAxiosRequestConfig(requestConfig),
    );

    // const response = await client.user.checkToken(
    //   {},
    //   withAxiosRequestConfig(requestOptions),
    // );

    // API-DRIFT: user.getUser (auth probe) omits 401 in its generated response type, so anyStatus401 (401 as any) is passed (resolve: use the literal 401 once the client type declares it)
    validateResponse(response, [200, anyStatus401, 412]);

    return response.status === 200;
  },

  logout: async (requestConfig) => {
    const response = await client.user.logout(
      {},
      withAxiosRequestConfig(requestConfig),
    );

    // API-DRIFT: user.logout omits 401 in its generated response type, so anyStatus401 (401 as any) is passed (resolve: use the literal 401 once the client type declares it)
    validateResponse(response, [204, anyStatus401]);
  },
});
