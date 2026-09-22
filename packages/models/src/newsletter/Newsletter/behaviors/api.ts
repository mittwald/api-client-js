import type { MittwaldAPIV2Client } from "@mittwald/api-client";
import type { AxiosRequestConfig } from "axios";

import type { NewsletterBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { withAxiosRequestConfig } from "../../../base";

export const apiNewsletterBehaviors = (
  client: MittwaldAPIV2Client,
): NewsletterBehaviors => ({
  getInfo: async (requestConfig?: AxiosRequestConfig) => {
    const response = await client.notification.newsletterGetInfo(
      {},
      withAxiosRequestConfig(requestConfig),
    );

    validateResponse(response, 200);

    return response.data;
  },

  subscribe: async (data) => {
    const response = await client.notification.newsletterSubscribeUser({
      data,
    });

    validateResponse(response, 200);
  },

  unsubscribe: async () => {
    const response = await client.notification.newsletterUnsubscribeUser();

    validateResponse(response, 204);
  },
});
