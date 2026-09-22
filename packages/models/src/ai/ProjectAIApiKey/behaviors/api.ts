import type { MittwaldAPIV2Client } from "@mittwald/api-client";
import type { AxiosRequestConfig } from "axios";

import type { ProjectAIApiKeyBehaviors } from "./types.js";

import {
  withAxiosRequestConfig,
  resolveTotalCount,
} from "../../../base/index.js";
import { validateResponse } from "../../../base/api/validateResponse.js";
import { ValidationError } from "../../../errors/index.js";

export const apiProjectAIApiKeyBehaviors = (
  client: MittwaldAPIV2Client,
): ProjectAIApiKeyBehaviors => ({
  find: async (projectId, apiKeyId) => {
    const response = await client.aiHosting.projectGetKey({
      keyId: apiKeyId,
      projectId,
    });

    if (response.status === 200) {
      return response.data;
    }

    const validationError = ValidationError.fromResponse(response);
    // invalid uuid in URL
    if (
      validationError &&
      validationError.errors.some(
        (e) => e.path === "licenceId" || e.path === "licenseId",
      )
    ) {
      return;
    }

    validateResponse(response, 404);
  },
  list: async (projectId, options?: AxiosRequestConfig) => {
    const response = await client.aiHosting.projectGetKeys(
      {
        projectId,
      },
      withAxiosRequestConfig(options),
    );

    validateResponse(response, 200);

    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },
  linkContainer: async (projectId, apiKeyId, data) => {
    const response = await client.aiHosting.projectLinkContainer({
      keyId: apiKeyId,
      projectId,
      data,
    });

    validateResponse(response, 204);
  },
  create: async (projectId, data) => {
    const response = await client.aiHosting.projectCreateKey({
      projectId,
      data,
    });

    validateResponse(response, 201);

    return { id: response.data.keyId };
  },
  update: async (projectId, apiKeyId, data) => {
    const response = await client.aiHosting.projectUpdateKey({
      keyId: apiKeyId,
      projectId,
      data,
    });

    validateResponse(response, 200);
  },
  delete: async (projectId, apiKeyId) => {
    const response = await client.aiHosting.projectDeleteKey({
      keyId: apiKeyId,
      projectId,
    });

    validateResponse(response, 204);
  },
});
