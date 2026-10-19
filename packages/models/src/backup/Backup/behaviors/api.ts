import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { BackupBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount } from "../../../base/index.js";

export const apiBackupBehaviors = (
  client: MittwaldAPIV2Client,
): BackupBehaviors => ({
  list: async (projectId, query) => {
    const response = await client.backup.listProjectBackups({
      queryParameters: query,
      projectId,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  findToc: async (projectBackupId, directory) => {
    const response = await client.backup.getProjectBackupDirectories({
      queryParameters: { directory },
      projectBackupId,
    });

    if (response.status === 200) {
      return response.data;
    }
  },

  updateExpiryDate: async (projectBackupId, expiryDate) => {
    const response = await client.backup.updateProjectBackup({
      data: { expirationTime: expiryDate },
      projectBackupId,
    });
    validateResponse(response, 204);
  },

  find: async (projectBackupId) => {
    const response = await client.backup.getProjectBackup({ projectBackupId });
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, [404, 403]);
  },

  findDatabaseBackups: async (projectBackupId) => {
    const response = await client.backup.getProjectBackupDatabaseDumps({
      projectBackupId,
    });

    if (response.status === 200) {
      return response.data;
    }
  },

  updateDescription: async (projectBackupId, description) => {
    const response = await client.backup.updateProjectBackup({
      data: { description },
      projectBackupId,
    });
    validateResponse(response, 204);
  },

  createRestoreRequest: async (projectBackupId, data) => {
    const response = await client.backup.requestProjectBackupRestore({
      projectBackupId,
      data,
    });
    validateResponse(response, 204);
  },

  create: async (projectId, data) => {
    const response = await client.backup.createProjectBackup({
      projectId,
      data,
    });
    validateResponse(response, 201);
    return response.data;
  },

  createExport: async (projectBackupId, data) => {
    const response = await client.backup.createProjectBackupExport({
      projectBackupId,
      data,
    });
    validateResponse(response, 204);
  },

  delete: async (projectBackupId) => {
    const response = await client.backup.deleteProjectBackup({
      projectBackupId,
    });
    validateResponse(response, 204);
  },
});
