import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import { ContractItemBehaviors } from "./types.js";

export const apiContractItemBehaviors = (
  client: MittwaldAPIV2Client,
): ContractItemBehaviors => ({
  find: async (contractId, contractItemId) => {
    const response = await client.contract.getDetailOfContractItem({
      contractId,
      contractItemId,
    });

    if (response.status === 200) {
      return response.data;
    }
    assertStatus(response, 404);
  },
});
