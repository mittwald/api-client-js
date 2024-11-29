import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import { NewsletterBehaviors } from "./types.js";

export const apiNewsletterBehaviors = (
  client: MittwaldAPIV2Client,
): NewsletterBehaviors => ({
  get: async () => {
    const response = await client.notification.newsletterGetInfo();

    assertStatus(response, 200);

    return response.data;
  },

  subscribe: async (data) => {
    const response = await client.notification.newsletterSubscribeUser({
      data,
    });

    assertStatus(response, 200);
  },

  unsubscribe: async () => {
    const response = await client.notification.newsletterUnsubscribeUser();

    assertStatus(response, 204);
  },
});
