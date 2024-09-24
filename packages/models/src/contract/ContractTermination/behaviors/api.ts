import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { ContractTerminationBehaviors } from "./types.js";

export const apiContractTerminationBehaviors = (
  client: MittwaldAPIV2Client,
): ContractTerminationBehaviors => ({
  scheduleTermination: async (contractId, data) => {
    const response = await client.contract.terminateContract({
      contractId,
      data,
    });

    assertStatus(response, 201);

    return response.data;
  },

  cancelTermination: async (contractId) => {
    const response = await client.contract.cancelContractTermination({
      contractId,
    });

    assertStatus(response, 200);

    return response.data;
  },
});
