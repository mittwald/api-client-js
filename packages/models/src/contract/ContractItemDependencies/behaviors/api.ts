import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import { ContractItemDependenciesBehaviors } from "./types.js";
import { Server } from "../../../server/index.js";

export const apiContractItemDependenciesBehaviors = (
  client: MittwaldAPIV2Client,
): ContractItemDependenciesBehaviors => ({
  find: async (contractId, contractItemId) => {
    const contractItemResponse = await client.contract.getDetailOfContractItem({
      contractId,
      contractItemId,
    });

    if (contractItemResponse.status !== 200) {
      assertStatus(contractItemResponse, 404);
      return undefined;
    }

    const contractResponse = await client.contract.getDetailOfContract({
      contractId,
    });

    if (contractResponse.status !== 200) {
      assertStatus(contractResponse, 404);
      return undefined;
    }

    const contractItemData = contractItemResponse.data;
    const contractData = contractResponse.data;
    const domainCount = contractData.additionalItems?.filter(
      (item) => item.aggregateReference?.aggregate === "domain",
    ).length;

    const certificateCount = contractData.additionalItems?.filter(
      (item) => item.aggregateReference?.aggregate === "certificate",
    ).length;

    if (
      contractItemData.aggregateReference?.aggregate !== "server" ||
      !contractItemData.aggregateReference?.id
    ) {
      return {
        domainCount,
        certificateCount,
        projectCount: 1,
        isEmpty: !domainCount && !certificateCount,
      };
    }

    const serverId = contractItemData.aggregateReference?.id;
    const server = Server.ofId(serverId);
    const projectCount = await server.projects.getTotalCount();

    return {
      domainCount,
      certificateCount,
      projectCount,
      isEmpty: projectCount === 0,
    };
  },
});
