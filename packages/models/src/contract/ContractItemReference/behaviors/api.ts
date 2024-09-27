import { MittwaldAPIV2Client } from "@mittwald/api-client";
import { ContractItemReferenceBehaviors } from "./types.js";
import { ContractItem } from "../../ContractItem/index.js";

export const apiContractItemReferenceBehaviors = (
  client: MittwaldAPIV2Client,
): ContractItemReferenceBehaviors => ({
  find: async (contractId, contractItemId) => {
    const contractItem = await ContractItem.find(contractId, contractItemId);
    const contractItemData = contractItem?.data;
    const aggregateReference = contractItemData?.aggregateReference;
    const description = contractItemData?.description ?? "";

    let shortId: string | undefined;
    let itemDescription: string = description;

    if (aggregateReference) {
      const refId = aggregateReference.id;

      if (contractItem?.isProSpace) {
        const projectResponse = await client.project.getProject({
          projectId: refId,
        });
        if (projectResponse.status === 200) {
          const projectData = projectResponse.data;
          shortId = projectData.serverShortId;
          itemDescription = projectData.description ?? description;
        }
      } else if (contractItem?.isSpaceServer) {
        const serverResponse = await client.project.getServer({
          serverId: refId,
        });
        if (serverResponse.status === 200) {
          const serverData = serverResponse.data;
          shortId = serverData.shortId;
          itemDescription = serverData.description ?? description;
        }
      }
    }

    return {
      shortId,
      description: itemDescription,
    };
  },
});
