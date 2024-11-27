import {
  MittwaldAPIV2Client,
  assertStatus,
  extractTotalCountHeader,
} from "@mittwald/api-client";
import { AppInstallationBehaviors } from "./types.js";

export const apiAppInstallationBehaviors = (
  client: MittwaldAPIV2Client,
): AppInstallationBehaviors => ({
  find: async (id) => {
    const response = await client.app.getAppinstallation({
      appInstallationId: id,
    });
    if (response.status === 200) {
      return response.data;
    }
    assertStatus(response, 404);
  },

  list: async (projectId, query) => {
    const response = await client.app.listAppinstallations({
      queryParameters: query,
      projectId,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },
});
