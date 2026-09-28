import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { ProjectMembershipBehaviors } from "./types.js";

import {
  withAxiosRequestConfig,
  resolveTotalCount,
} from "../../../base/index.js";
import { validateResponse } from "../../../base/api/validateResponse.js";

export const apiProjectMembershipBehaviors = (
  client: MittwaldAPIV2Client,
): ProjectMembershipBehaviors => ({
  find: async (projectMembershipId, options) => {
    const response = await client.project.getProjectMembership(
      {
        projectMembershipId,
      },
      withAxiosRequestConfig(options),
    );
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, 404);
  },

  list: async (projectId, query) => {
    const response = await client.project.listMembershipsForProject({
      queryParameters: query,
      projectId,
    });

    validateResponse(response, 200);

    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  findOwn: async (projectId) => {
    const response = await client.project.getSelfMembershipForProject({
      projectId,
    });
    if (response.status === 200) {
      return response.data;
    }

    validateResponse(response, [404, 403]);
  },

  update: async (projectMembershipId, data) => {
    const response = await client.project.updateProjectMembership({
      projectMembershipId,
      data,
    });
    validateResponse(response, 204);
  },

  remove: async (projectMembershipId) => {
    const response = await client.project.deleteProjectMembership({
      projectMembershipId,
    });
    validateResponse(response, 204);
  },
});
