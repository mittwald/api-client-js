import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { ProjectBehaviors } from "./types";

import { withAxiosRequestConfig,resolveTotalCount } from "../../../base";
import { validateResponse } from "../../../base/api/validateResponse";
import { anyStatus404 } from "../../../base/api/typeFixes";

export const apiProjectBehaviors = (
  client: MittwaldAPIV2Client,
): ProjectBehaviors => ({
  find: async (projectId, options) => {
    const response = await client.project.getProject(
      {
        projectId,
      },
      withAxiosRequestConfig(options),
    );

    if (response.status === 200) {
      return response.data;
    }
    // API-DRIFT: getProject omits 404 in its generated response type, so anyStatus404 (404 as any) is passed (resolve: use the literal 404 once the client type declares it)
    validateResponse(response, [403, anyStatus404]);
  },

  findFileSystemDirectories: async (projectId, directory, requestConfig) => {
    const response = await client.projectFileSystem.getDirectories(
      {
        queryParameters: { directory },
        projectId,
      },
      withAxiosRequestConfig(requestConfig),
    );

    if (response.status === 200) {
      return response.data;
    }
  },

  updateStorageNotificationThreshold: async (
    projectId,
    thresholdInBytes?: number,
  ) => {
    const response = await client.project.storagespaceUpdateProjectStatistics({
      data: { notificationThresholdInBytes: thresholdInBytes },
      projectId,
    });

    validateResponse(response, 204);
  },

  createAvatarUploadToken: async (projectId) => {
    const response = await client.project.requestProjectAvatarUpload({
      projectId,
    });
    validateResponse(response, 200);
    return {
      token: response.data.refId,
      rules: response.data.rules,
    };
  },

  list: async (query) => {
    const response = await client.project.listProjects({
      queryParameters: query,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  create: async (serverId, description) => {
    const response = await client.project.createProject({
      data: {
        description,
      },
      serverId,
    });
    validateResponse(response, 201);
    return response.data;
  },

  updateDescription: async (projectId, description) => {
    const response = await client.project.updateProject({
      data: {
        description,
      },
      projectId,
    });
    validateResponse(response, 204);
  },

  removeAvatar: async (projectId) => {
    const response = await client.project.deleteProjectAvatar({ projectId });

    validateResponse(response, 204);
  },

  delete: async (projectId) => {
    const response = await client.project.deleteProject({ projectId });
    validateResponse(response, 204);
  },
});
