import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { BackupScheduleBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { resolveTotalCount } from "../../../base";

export const apiBackupScheduleBehaviors = (
  client: MittwaldAPIV2Client,
): BackupScheduleBehaviors => ({
  find: async (projectBackupScheduleId) => {
    const response = await client.backup.getProjectBackupSchedule({
      projectBackupScheduleId,
    });
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, [403, 404]);
  },

  list: async (projectId) => {
    const response = await client.backup.listProjectBackupSchedules({
      projectId,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  update: async (projectBackupScheduleId, data) => {
    const response = await client.backup.updateProjectBackupSchedule({
      projectBackupScheduleId,
      data,
    });

    validateResponse(response, 204);
  },

  create: async (projectId, data) => {
    const response = await client.backup.createProjectBackupSchedule({
      projectId,
      data,
    });

    validateResponse(response, 201);
    return response.data;
  },

  delete: async (projectBackupScheduleId) => {
    const response = await client.backup.deleteProjectBackupSchedule({
      projectBackupScheduleId,
    });
    validateResponse(response, 204);
  },
});
