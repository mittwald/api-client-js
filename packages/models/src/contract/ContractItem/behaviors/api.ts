import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { ContractItemBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";

export const apiContractItemBehaviors = (
  client: MittwaldAPIV2Client,
): ContractItemBehaviors => ({
  find: async (contractId, contractItemId) => {
    const response = await client.contract.getDetailOfContractItem({
      contractItemId,
      contractId,
    });

    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, 404);
  },

  terminate: async (contractId, contractItemId, data) => {
    const response = await client.contract.terminateContractItem({
      contractItemId,
      contractId,
      data,
    });
    validateResponse(response, 201);
  },

  cancelTermination: async (contractId, contractItemId) => {
    const response = await client.contract.cancelContractItemTermination({
      contractItemId,
      contractId,
    });
    validateResponse(response, 200);
  },

  cancelTariffChange: async (contractId, contractItemId) => {
    const response = await client.contract.cancelContractTariffChange({
      contractItemId,
      contractId,
    });
    validateResponse(response, 200);
  },
});
