import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { MfaBehaviors } from "./types.js";

import { withAxiosRequestConfig, validateResponse } from "../../../base/index.js";

export const apiMfaBehaviors = (client: MittwaldAPIV2Client): MfaBehaviors => ({
  resetRecoveryCodes: async (multiFactorCode) => {
    const response = await client.user.resetRecoverycodes({
      data: { multiFactorCode },
    });

    validateResponse(response, 200);

    return response.data;
  },

  init: async (requestConfig) => {
    const response = await client.user.initMfa(
      {},
      withAxiosRequestConfig(requestConfig),
    );

    validateResponse(response, 200);

    return response.data;
  },

  confirm: async (multiFactorCode) => {
    const response = await client.user.confirmMfa({
      data: { multiFactorCode },
    });

    validateResponse(response, 200);

    return response.data;
  },

  authenticateMfa: async (data) => {
    const response = await client.user.authenticateMfa({
      data,
    });

    validateResponse(response, 200);

    return response.data;
  },

  disable: async (multiFactorCode) => {
    const response = await client.user.disableMfa({
      data: { multiFactorCode },
    });

    validateResponse(response, 204);
  },

  getStatus: async () => {
    const response = await client.user.getMfaStatus({});

    validateResponse(response, 200);

    return response.data;
  },
});
