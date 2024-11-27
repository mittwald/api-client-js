import { MittwaldAPIV2Client } from "@mittwald/api-client";
import { ProjectMembershipBehaviors } from "./types.js";
import { assertStatus } from "@mittwald/api-client";

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
});
