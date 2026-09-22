import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { RelocationRequestApiData } from "../types";
import type { RelocationBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";

export const apiRelocationBehaviors = (
  client: MittwaldAPIV2Client,
): RelocationBehaviors => ({
  create: async (data: RelocationRequestApiData) => {
    const response = await client.relocation.createRelocation({
      data: data,
    });

    validateResponse(response, 204);
  },
});
