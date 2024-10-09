import {
  assertStatus,
  MittwaldAPIV2Client,
  assertOneOfStatus,
} from "@mittwald/api-client";
import { MailAddressBehaviors } from "./types.js";
export const apiMailAddressBehaviors = (
  client: MittwaldAPIV2Client,
): MailAddressBehaviors => ({
  find: async (id) => {
    const response = await client.mail.getMailAddress({
      mailAddressId: id,
    });
    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [404]);
  },
  query: async (projectId) => {
    const response = await client.mail.listMailAddresses({
      projectId,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: response.data.length,
    };
  },
});
