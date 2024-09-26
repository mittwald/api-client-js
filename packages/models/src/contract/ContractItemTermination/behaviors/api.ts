import { MittwaldAPIV2Client } from "@mittwald/api-client";
import { ContractItemTerminationBehaviors } from "./types.js";

export const apiContractItemTerminationBehaviors = (
  client: MittwaldAPIV2Client,
): ContractItemTerminationBehaviors => {
  return {
    scheduleTermination: async (contractId, contractItemId, data) => {
      const response = await client.contract.terminateContractItem({
        contractId,
        contractItemId,
        data,
      });

      return response.data;
    },

    cancelTermination: async (contractId, contractItemId) => {
      const response = await client.contract.cancelContractItemTermination({
        contractId,
        contractItemId,
      });

      return response.data;
    },
  };
};
