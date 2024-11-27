import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { SystemSoftwareVersionBehaviors } from "./types.js";

export const apiSystemSoftwareVersionBehaviors = (
  client: MittwaldAPIV2Client,
): SystemSoftwareVersionBehaviors => ({
  find: async (id, systemSoftwareId) => {
    const response = await client.app.getSystemsoftwareversion({
      systemSoftwareVersionId: id,
      systemSoftwareId,
    });

    if (response.status === 200) {
      return response.data;
    }

    assertStatus(response, 404);
  },
});
