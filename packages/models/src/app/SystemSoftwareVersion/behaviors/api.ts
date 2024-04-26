import {
  assertStatus,
  assertOneOfStatus,
  MittwaldAPIV2Client,
} from "@mittwald/api-client";
import { SystemSoftwareVersionBehaviors } from "./types.js";

export const apiSystemSoftwareBehaviors = (
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

    assertOneOfStatus(response, [404]);
  },

  list: async (systemSoftwareId, query) => {
    const response = await client.app.listSystemsoftwareversions({
      systemSoftwareId,
      queryParameters: query,
    });

    assertStatus(response, 200);

    return response.data;
  },
});
