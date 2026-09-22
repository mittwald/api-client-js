import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { AppInstallationBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { anyStatus403 } from "../../../base/api/typeFixes";
import { resolveTotalCount } from "../../../base";

export const apiAppInstallationBehaviors = (
  client: MittwaldAPIV2Client,
): AppInstallationBehaviors => ({
  list: async (projectId, query) => {
    const response = await client.app.listAppinstallations({
      queryParameters: query,
      projectId,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  listForUser: async (query) => {
    const response = await client.app.listAppinstallationsForUser({
      queryParameters: query,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  getInstalledSystemSoftware: async (appInstallationId, query) => {
    const response = await client.app.getAppInstallationSystemSoftware({
      queryParameters: query,
      appInstallationId,
    });

    validateResponse(response, 200);

    return response.data;
  },

  find: async (appInstallationId) => {
    const response = await client.app.getAppinstallation({ appInstallationId });
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, [404, anyStatus403]);
  },

  createStaging: async (appInstallationId, data) => {
    const response = await client.app.requestAppinstallationStaging({
      appInstallationId,
      data,
    });
    validateResponse(response, 201);
    return response.data;
  },

  detachStaging: async (appInstallationId, data) => {
    const response = await client.app.detachAppinstallationStaging({
      appInstallationId,
      data,
    });
    validateResponse(response, 204);
  },

  unlinkDatabase: async (appInstallationId, databaseId) => {
    const response = await client.app.unlinkDatabase({
      appInstallationId,
      databaseId,
    });

    validateResponse(response, 204);
  },

  create: async (projectId, data) => {
    const response = await client.app.requestAppinstallation({
      projectId,
      data,
    });

    validateResponse(response, 201);

    return response.data;
  },

  copy: async (appInstallationId, data) => {
    const response = await client.app.requestAppinstallationCopy({
      appInstallationId,
      data,
    });

    validateResponse(response, 201);
  },

  update: async (appInstallationId, data) => {
    const response = await client.app.patchAppinstallation({
      appInstallationId,
      data,
    });

    validateResponse(response, 204);
  },

  goLive: async (appInstallationId) => {
    const response = await client.app.promoteAppinstallationStaging({
      appInstallationId,
    });
    validateResponse(response, 204);
  },

  delete: async (appInstallationId) => {
    const response = await client.app.uninstallAppinstallation({
      appInstallationId,
    });

    validateResponse(response, 204);
  },
});
