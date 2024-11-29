import {
  MittwaldAPIV2Client,
  assertStatus,
  extractTotalCountHeader,
} from "@mittwald/api-client";
import { ExtensionInstanceBehaviors } from "./types.js";
import {
  ExtensionInstanceConsentToScopesRequestData,
  ExtensionInstanceCreateRequestData,
} from "../types.js";

export const apiExtensionInstanceBehaviors = (
  client: MittwaldAPIV2Client,
): ExtensionInstanceBehaviors => ({
  find: async (id) => {
    const response = await client.marketplace.extensionGetExtensionInstance({
      extensionInstanceId: id,
    });

    if (response.status === 200) {
      return response.data;
    }

    assertStatus(response, 404);
  },

  list: async (query) => {
    const response = await client.marketplace.extensionListExtensionInstances({
      queryParameters: query,
    });

    assertStatus(response, 200);

    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },

  create: async (data: ExtensionInstanceCreateRequestData) => {
    const response = await client.marketplace.extensionCreateExtensionInstance({
      data,
    });

    assertStatus(response, 201);

    return response.data;
  },

  consentToScopes: async (
    extensionInstanceId: string,
    data: ExtensionInstanceConsentToScopesRequestData,
  ) => {
    const response = await client.marketplace.extensionConsentToExtensionScopes(
      { extensionInstanceId, data },
    );

    assertStatus(response, 204);
  },

  enable: async (extensionInstanceId: string) => {
    const response = await client.marketplace.extensionEnableExtensionInstance({
      extensionInstanceId,
    });

    assertStatus(response, 204);
  },

  disable: async (extensionInstanceId: string) => {
    const response = await client.marketplace.extensionDisableExtensionInstance(
      { extensionInstanceId },
    );

    assertStatus(response, 204);
  },

  delete: async (extensionInstanceId: string) => {
    const response = await client.marketplace.extensionDeleteExtensionInstance({
      extensionInstanceId,
    });

    assertStatus(response, 204);
  },
});
