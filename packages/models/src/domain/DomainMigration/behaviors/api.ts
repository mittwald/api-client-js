import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { DomainMigrationBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount } from "../../../base/index.js";
export const apiDomainMigrationBehavior = (
  client: MittwaldAPIV2Client,
): DomainMigrationBehaviors => ({
  queryByProjectId: async (projectId) => {
    const response = await client.domain.migrationListMigrationsByProjectId({
      projectId,
    });
    validateResponse(response, 200);

    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },
});
