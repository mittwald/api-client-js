import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import { AppInstallationBehaviors } from "./types.js";

export const apiAppInstallationBehaviors = (
  client: MittwaldAPIV2Client,
): AppInstallationBehaviors => ({
  find: async (id) => {
    const response = await client.app.getAppinstallation({
      appInstallationId: id,
    });

    if (response.status === 200) {
      return response.data;
    }

    assertStatus(response, 404);
  },

  list: async (projectId, query) => {
    const response = await client.app.listAppinstallations({
      queryParameters: query,
      projectId,
    });

    assertStatus(response, 200);

    return response.data;
  },

  create: async (projectId, data) => {
    const response = await client.app.requestAppinstallation({
      projectId,
      data,
    });

    assertStatus(response, 201);

    return response.data;
  },

  update: async (id, data) => {
    const response = await client.app.patchAppinstallation({
      appInstallationId: id,
      data,
    });

    assertStatus(response, 204);
  },

  delete: async (id) => {
    const response = await client.app.uninstallAppinstallation({
      appInstallationId: id,
    });

    assertStatus(response, 204);
  },

  linkDatabase: async (id, data) => {
    const response = await client.app.linkDatabase({
      appInstallationId: id,
      data,
    });

    assertStatus(response, 204);
  },

  unlinkDatabase: async (id, databaseId) => {
    const response = await client.app.unlinkDatabase({
      appInstallationId: id,
      databaseId,
    });

    assertStatus(response, 204);
  },

  executeAction: async (id, action) => {
    const response = await client.app.executeAction({
      appInstallationId: id,
      action,
    });

    assertStatus(response, 204);
  },

  retrieveStatus: async (id) => {
    const response = await client.app.retrieveStatus({
      appInstallationId: id,
    });

    assertStatus(response, 200);

    return response.data;
  },

  copy: async (id, data) => {
    const response = await client.app.requestAppinstallationCopy({
      appInstallationId: id,
      data,
    });

    assertStatus(response, 201);
  },

  getMissingDependencies: async (id, targetAppVersionId) => {
    const response = await client.app.getMissingDependenciesForAppinstallation({
      appInstallationId: id,
      queryParameters: { targetAppVersionID: targetAppVersionId },
    });

    assertStatus(response, 200);

    return response.data;
  },
});
