import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import { SshKeyBehaviors } from "./types.js";

export const apiSshKeyBehaviors = (
  client: MittwaldAPIV2Client,
): SshKeyBehaviors => ({
  find: async (id) => {
    const response = await client.user.getSshKey({
      sshKeyId: id,
    });

    if (response.status === 200) {
      return response.data;
    }

    assertStatus(response, 404);
  },

  list: async () => {
    const response = await client.user.listSshKeys();

    assertStatus(response, 200);

    return response.data.sshKeys ?? [];
  },

  create: async (data) => {
    const response = await client.user.createSshKey({ data });

    assertStatus(response, 201);
  },

  update: async (id, data) => {
    const response = await client.user.editSshKey({ sshKeyId: id, data });

    assertStatus(response, 204);
  },

  delete: async (id) => {
    const response = await client.user.deleteSshKey({ sshKeyId: id });

    assertStatus(response, 204);
  },
});
