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

  terminate: async (contractId, contractItemId, data) => {
    const response = await client.contract.terminateContractItem({
      contractId,
      contractItemId,
      data,
    });
    assertStatus(response, 201);
  },

  cancelTermination: async (contractId, contractItemId) => {
    const response = await client.contract.cancelContractItemTermination({
      contractId,
      contractItemId,
    });
    assertStatus(response, 200);
  },

  cancelTariffChange: async (
    contractId: string,
    contractItemId: string,
  ): Promise<void> => {
    const response = await client.contract.cancelContractTariffChange({
      contractId,
      contractItemId,
    });
    assertStatus(response, 200);
  },
});
