import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { CustomerInviteBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { anyStatus403 } from "../../../base/api/typeFixes.js";
import { resolveTotalCount } from "../../../base/index.js";
import { ValidationError } from "../../../errors/index.js";

export const apiCustomerInviteBehaviors = (
  client: MittwaldAPIV2Client,
): CustomerInviteBehaviors => ({
  create: async (customerId, data) => {
    const response = await client.customer.createCustomerInvite({
      customerId,
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

  find: async (customerInviteId) => {
    const response = await client.customer.getCustomerInvite({
      customerInviteId,
    });
    if (response.status === 200) {
      return response.data;
    }
    // API-DRIFT: getCustomerInvite omits 403 in its generated response type, so anyStatus403 (403 as any) is passed (resolve: use the literal 403 once the client type declares it)
    validateResponse(response, [anyStatus403, 404]);
  },

  list: async (customerId, query) => {
    const response = await client.customer.listInvitesForCustomer({
      queryParameters: query,
      customerId,
    });

    validateResponse(response, 200);

    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  getByToken: async (invitationToken) => {
    const response = await client.customer.getCustomerTokenInvite({
      headers: { token: invitationToken },
    });
    validateResponse(response, 200);

    return response.data;
  },

  accept: async (customerInviteId, invitationToken) => {
    const response = await client.customer.acceptCustomerInvite({
      data: { invitationToken },
      customerInviteId,
    });
    validateResponse(response, 204);
  },

  listIncoming: async (query) => {
    const response = await client.customer.listCustomerInvites({
      queryParameters: query,
    });

    validateResponse(response, 200);

    return {
      items: response.data,
    };
  },

  decline: async (customerInviteId) => {
    const response = await client.customer.declineCustomerInvite({
      customerInviteId,
    });
    validateResponse(response, 204);
  },

  delete: async (customerInviteId) => {
    const response = await client.customer.deleteCustomerInvite({
      customerInviteId,
    });
    validateResponse(response, 204);
  },
});
