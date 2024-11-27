import {
  MittwaldAPIV2Client,
  assertStatus,
  extractTotalCountHeader,
} from "@mittwald/api-client";
import { ProjectMembershipBehaviors } from "./types.js";

export const apiProjectMembershipBehaviors = (
  client: MittwaldAPIV2Client,
): ProjectMembershipBehaviors => ({
  find: async (id) => {
    const response = await client.project.getProjectMembership({
      projectMembershipId: id,
    });
    if (response.status === 200) {
      return response.data;
    }
    assertStatus(response, 404);
  },

  list: async (projectId, query) => {
    const response = await client.project.listMembershipsForProject({
      projectId,
      queryParameters: query,
    });

    assertStatus(response, 200);

    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },
});
