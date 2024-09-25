import {
  assertStatus,
  MittwaldAPIV2Client,
  extractTotalCountHeader,
} from "@mittwald/api-client";
import { ContractBehaviors } from "./types.js";

export const apiContractBehaviors = (
  client: MittwaldAPIV2Client,
): ContractBehaviors => ({
  find: async (id) => {
    const response = await client.contract.getDetailOfContract({
      contractId: id,
    });

    if (response.status === 200) {
      return response.data;
    }
    assertStatus(response, 404);
  },

  list: async (request) => {
    const response = await client.contract.listContracts(request);
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },
});
