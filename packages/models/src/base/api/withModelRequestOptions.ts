import type { Commons } from "@mittwald/api-client";
import type { AxiosRequestConfig } from "axios";

import { executeDefaultOnBeforeRequestHandlers } from "../../base/api/onBeforeRequest.js";

export const withAxiosRequestConfig = (
  requestOptions: AxiosRequestConfig = {},
): Commons.RequestOptions => {
  return {
    onBeforeRequest: (config) => {
      const requestConfig = config.requestConfig;
      Object.assign(requestConfig, requestOptions);
      executeDefaultOnBeforeRequestHandlers(config);
    },
  };
};
