import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { ExtensionBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount } from "../../../base/index.js";
import { ValidationError } from "../../../errors/index.js";

export const apiExtensionBehaviors = (
  client: MittwaldAPIV2Client,
): ExtensionBehaviors => ({
  order: async (extensionId, data) => {
    const response = await client.marketplace.extensionOrderExtension(
      "projectId" in data
        ? {
            data: {
              consentedScopes: data.consentedScopes,
              variantKey: data.variantKey,
              projectId: data.projectId,
            },
            extensionId,
          }
        : {
            data: {
              consentedScopes: data.consentedScopes,
              customerId: data.customerId,
              variantKey: data.variantKey,
            },
            extensionId,
          },
    );

    if (
      response.status === 412 &&
      "type" in response.data &&
      typeof response.data.type === "string"
    ) {
      throw new ValidationError({
        type: response.data.type,
        path: "root",
      });
    }

    validateResponse(response, 201);
  },

  list: async (query) => {
    const response = await client.marketplace.extensionListExtensions({
      queryParameters: query,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  find: async (extensionId) => {
    const response = await client.marketplace.extensionGetExtension({
      extensionId,
    });

    if (response.status === 200) {
      return response.data;
    }

    validateResponse(response, 404);
  },
});
