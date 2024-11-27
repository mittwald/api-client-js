import { MittwaldAPIV2Client, assertOneOfStatus } from "@mittwald/api-client";
import { UserBehaviors } from "./types.js";

export const apiUserBehaviors = (
  client: MittwaldAPIV2Client,
): UserBehaviors => ({
  find: async (id) => {
    const response = await client.user.getUser({ userId: id });

    if (response.status === 200) {
      return response.data;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    assertOneOfStatus(response, [400, 403, 404]);
  },
});
