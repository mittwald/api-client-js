import {
  MittwaldAPIV2Client,
  assertOneOfStatus,
  assertStatus,
} from "@mittwald/api-client";
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

  createAvatarUploadToken: async (userId) => {
    const response = await client.user.requestAvatarUpload({ userId });
    assertStatus(response, 200);
    return {
      token: response.data.refId,
      rules: response.data.rules,
    };
  },
});
