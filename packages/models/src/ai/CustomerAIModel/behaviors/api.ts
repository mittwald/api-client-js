import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { CustomerAIModelBehaviors } from "./types";

import { resolveTotalCount, validateResponse } from "../../../base";

export const apiCustomerAIModelBehaviors = (
  client: MittwaldAPIV2Client,
): CustomerAIModelBehaviors => ({
  list: async (customerId: string) => {
    const response = await client.aiHosting.customerGetDetailedModels({
      customerId,
    });
    if (response.status !== 200) {
      validateResponse(response, 404);
      return { totalCount: 0, items: [] };
    }

    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },
});
