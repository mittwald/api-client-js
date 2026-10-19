import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { ContractBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import {
  withAxiosRequestConfig,
  resolveTotalCount,
  anyStatus403,
} from "../../../base/index.js";

export const apiContractBehaviors = (
  client: MittwaldAPIV2Client,
): ContractBehaviors => ({
  findByProject: async (projectId, requestConfig) => {
    const response = await client.contract.getDetailOfContractByProject(
      {
        projectId,
      },
      withAxiosRequestConfig(requestConfig),
    );

    if (response.status === 200) {
      return response.data;
    }
    // API-DRIFT: getDetailOfContractByProject omits 403 in its generated response type, so anyStatus403 (403 as any) is passed (resolve: use the literal 403 once the client type declares it)
    validateResponse(response, [404, anyStatus403]);
  },

  findByServer: async (serverId) => {
    const response = await client.contract.getDetailOfContractByServer({
      serverId,
    });

    if (response.status === 200) {
      return response.data;
    }
    // API-DRIFT: getDetailOfContractByServer omits 403 in its generated response type, so anyStatus403 (403 as any) is passed (resolve: use the literal 403 once the client type declares it)
    validateResponse(response, [404, anyStatus403]);
  },

  find: async (contractId) => {
    const response = await client.contract.getDetailOfContract({ contractId });

    if (response.status === 200) {
      return response.data;
    }
    // API-DRIFT: getDetailOfContract omits 403 in its generated response type, so anyStatus403 (403 as any) is passed (resolve: use the literal 403 once the client type declares it)
    validateResponse(response, [anyStatus403, 404]);
  },

  list: async (customerId, query) => {
    const response = await client.contract.listContracts({
      queryParameters: query,
      customerId,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  cancelPlanChange: async (contractId, contractItemId) => {
    const response = await client.contract.cancelContractTariffChange({
      contractItemId,
      contractId,
    });

    validateResponse(response, 200);
  },

  terminate: async (contractId, data) => {
    const response = await client.contract.terminateContract({
      contractId,
      data,
    });

    validateResponse(response, 201);
  },

  cancelTermination: async (contractId) => {
    const response = await client.contract.cancelContractTermination({
      contractId,
    });

    validateResponse(response, 200);
  },
});
