import {
  assertStatus,
  assertOneOfStatus,
  MittwaldAPIV2Client,
} from "@mittwald/api-client";
import { UserBehaviors } from "./types.js";
import { UserAuthenticateRequestData } from "../types.js";

export const apiUserBehaviors = (
  client: MittwaldAPIV2Client,
): UserBehaviors => ({
  find: async (id) => {
    const response = await client.user.getUser({ userId: id });

    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [403, 404]);
  },

  updatePersonalInformation: async (id, data) => {
    const response = await client.user.updatePersonalInformation({
      userId: id,
      data,
    });

    assertStatus(response, 204);
  },

  addPhoneNumber: async (id, data) => {
    const response = await client.user.addPhoneNumber({ userId: id, data });

    assertStatus(response, 204);
  },

  removePhoneNumber: async (id) => {
    const response = await client.user.removePhoneNumber({ userId: id });

    assertStatus(response, 204);
  },

  verifyPhoneNumber: async (id, data) => {
    const response = await client.user.verifyPhoneNumber({ userId: id, data });

    // ToDo: 400 abfangen?

    assertStatus(response, 204);
  },

  requestAvatarUpload: async (id) => {
    const response = await client.user.requestAvatarUpload({ userId: id });

    assertStatus(response, 200);

    return { id: response.data.refId };
  },

  removeAvatar: async (id) => {
    const response = await client.user.removeAvatar({ userId: id });

    assertStatus(response, 204);
  },

  authenticate: async (data: UserAuthenticateRequestData) => {
    const response = await client.user.authenticate({ data });

    assertOneOfStatus(response, [200, 202]);

    // ToDo: 400/401 abfangen?

    return response.data;
  },
});
