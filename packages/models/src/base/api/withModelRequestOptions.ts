import type { Commons } from "@mittwald/api-client";
import type { AxiosRequestConfig } from "axios";

// Loads the `declare module "axios"` augmentation that contributes the
// `retryCache` request option consumed by this package's call sites.
import type {} from "@mittwald/axios-cache-with-retry";

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
