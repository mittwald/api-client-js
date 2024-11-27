import { MittwaldAPIV2Client } from "@mittwald/api-client";
import { SystemSoftwareBehaviors } from "./types.js";
import { assertStatus } from "@mittwald/api-client";

export const apiSystemSoftwareBehaviors = (
  client: MittwaldAPIV2Client,
): SystemSoftwareBehaviors => ({
  find: async (id) => {
    const response = await client.app.getSystemsoftware({
      systemSoftwareId: id,
    });
    if (response.status === 200) {
      return response.data;
    }
    assertStatus(response, 404);
  },
});
