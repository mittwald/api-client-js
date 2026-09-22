import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { DomainMigrationBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { resolveTotalCount } from "../../../base";
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
