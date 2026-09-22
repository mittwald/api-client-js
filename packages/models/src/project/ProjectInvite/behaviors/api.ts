import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { ProjectInviteBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { anyStatus403 } from "../../../base/api/typeFixes.js";
import { resolveTotalCount } from "../../../base/index.js";
import { ValidationError } from "../../../errors/index.js";

export const apiProjectInviteBehaviors = (
  client: MittwaldAPIV2Client,
): ProjectInviteBehaviors => ({
  create: async (projectId, data) => {
    const response = await client.project.createProjectInvite({
      projectId,
      data,
    });
    if (response.status === 409) {
      const message =
        response.data.message && typeof response.data.message === "string"
          ? response.data.message
          : undefined;

      if (message?.includes("already exists")) {
        throw new ValidationError({
          message: "inviteAlreadyExists",
          type: "inviteAlreadyExists",
          path: "mailAddress",
        });
      }
      if (message?.includes("already member")) {
        throw new ValidationError({
          message: "alreadyMember",
          type: "alreadyMember",
          path: "mailAddress",
        });
      }
    }

    validateResponse(response, 201, {
      validationError: {
        pathMappings: {
          mail_address: "mailAddress",
        },
      },
    });
    return response.data;
  },

  find: async (projectInviteId) => {
    const response = await client.project.getProjectInvite({
      projectInviteId,
    });
    if (response.status === 200) {
      return response.data;
    }
    // API-DRIFT: getProjectInvite omits 403 in its generated response type, so anyStatus403 (403 as any) is passed (resolve: use the literal 403 once the client type declares it)
    validateResponse(response, [404, anyStatus403]);
  },

  list: async (projectId, query) => {
    const response = await client.project.listInvitesForProject({
      queryParameters: query,
      projectId,
    });

    validateResponse(response, 200);

    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  getByToken: async (invitationToken) => {
    const response = await client.project.getProjectTokenInvite({
      headers: { token: invitationToken },
    });
    validateResponse(response, 200);

    return response.data;
  },

  listIncoming: async (query) => {
    const response = await client.project.listProjectInvites({
      queryParameters: query,
    });

    validateResponse(response, 200);

    return {
      items: response.data,
    };
  },

  accept: async (projectInviteId, invitationToken) => {
    const response = await client.project.acceptProjectInvite({
      data: { invitationToken },
      projectInviteId,
    });
    validateResponse(response, 204);
  },

  decline: async (projectInviteId) => {
    const response = await client.project.declineProjectInvite({
      projectInviteId,
    });
    validateResponse(response, 204);
  },

  delete: async (projectInviteId) => {
    const response = await client.project.deleteProjectInvite({
      projectInviteId,
    });
    validateResponse(response, 204);
  },
});
