import { ProjectBehaviors } from "./types.js";
import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import { assertOneOfStatus } from "@mittwald/api-client-commons";

export const apiProjectBehaviors = (
  client: MittwaldAPIV2Client,
): ProjectBehaviors => ({
  find: async (id) => {
    const response = await client.project.getProject({
      projectId: id,
    });

    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [403]);
  },

  list: async (query) => {
    const response = await client.project.listProjects({
      queryParameters: query,
    });
    assertStatus(response, 200);
    return response.data;
  },

  create: async (serverId: string, description: string) => {
    const response = await client.project.createProject({
      serverId,
      data: {
        description,
      },
    });
    assertStatus(response, 201);
    return response.data;
  },

  leave: async (id: string) => {
    const response = await client.project.leaveProject({
      projectId: id,
    });
    assertStatus(response, 204);
  },

  delete: async (id: string) => {
    const response = await client.project.deleteProject({
      projectId: id,
    });
    assertStatus(response, 204);
  },

  updateDescription: async (id: string, description: string) => {
    const response = await client.project.updateProjectDescription({
      projectId: id,
      data: {
        description,
      },
    });
    assertStatus(response, 200);
  },
});
