import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { MailAddressBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount } from "../../../base/index.js";

export const apiMailAddressBehaviors = (
  client: MittwaldAPIV2Client,
): MailAddressBehaviors => ({
  updateForwardAddresses: async (mailAddressId, forwardAddresses) => {
    const response = await client.mail.updateMailAddressForwardAddresses({
      data: { forwardAddresses },
      mailAddressId,
    });

    validateResponse(response, 204, {
      validationError: {
        typeMappings: {
          "*": (e) =>
            e.message?.includes("must not forward to itself")
              ? "forwardToItself"
              : undefined,
        },
        pathMappings: {
          "*address*": "forwardAddress",
        },
      },
    });
  },
  createForward: async (projectId, data) => {
    const response = await client.mail.createMailAddress({
      projectId,
      data,
    });

    validateResponse(response, 201, {
      validationError: {
        typeMappings: {
          "*": (e) =>
            e.message?.includes("must not forward to itself")
              ? "forwardToItself"
              : undefined,
        },
        pathMappings: {
          "*forward_address*": "forwardAddress",
        },
      },
    });
    return response.data;
  },
  detectPhishingMail: async (file: File) => {
    const formData = new FormData();
    formData.append("emailEml", file);

    const response = await client.misc.verificationDetectPhishingEmail({
      data: formData as unknown as Record<string, unknown>,
    });

    validateResponse(response, 200, {
      validationError: {
        pathMappings: {
          emailEml: "files",
        },
      },
    });
    return response.data.result;
  },
  list: async (projectId, query) => {
    const response = await client.mail.listMailAddresses({
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
    const response = await client.mail.listMailAddressesForUser({
      queryParameters: query,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },
  listBackups: async (mailAddressId) => {
    const response = await client.mail.listBackupsForMailAddress({
      mailAddressId,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },
  requestRateLimitChange: async (
    mailAddressId: string,
    rateLimitId: string,
  ) => {
    const response = await client.mail.requestMailAddressRateLimitChange({
      data: { rateLimitId },
      mailAddressId,
    });
    validateResponse(response, 204);
  },
  updateSpamProtection: async (mailAddressId, data) => {
    const response = await client.mail.updateMailAddressSpamProtection({
      data: {
        spamProtection: data,
      },
      mailAddressId,
    });
    validateResponse(response, 204);
  },
  updateCatchAll: async (mailAddressId, enabled) => {
    const response = await client.mail.updateMailAddressCatchAll({
      data: {
        active: enabled,
      },
      mailAddressId,
    });
    validateResponse(response, 204);
  },
  updateAutoResponder: async (mailAddressId, data) => {
    const response = await client.mail.updateMailAddressAutoresponder({
      data: { autoResponder: data },
      mailAddressId,
    });
    validateResponse(response, 204);
  },
  updatePassword: async (mailAddressId, password) => {
    const response = await client.mail.updateMailAddressPassword({
      data: {
        password,
      },
      mailAddressId,
    });
    validateResponse(response, 204);
  },
  updateAddress: async (mailAddressId, address) => {
    const response = await client.mail.updateMailAddressAddress({
      data: {
        address,
      },
      mailAddressId,
    });

    validateResponse(response, 204);
  },
  find: async (mailAddressId) => {
    const response = await client.mail.getMailAddress({ mailAddressId });
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, [403, 404]);
  },
  updateQuota: async (mailAddressId, bytes) => {
    const response = await client.mail.updateMailAddressQuota({
      data: { quotaInBytes: bytes },
      mailAddressId,
    });
    validateResponse(response, 204);
  },
  createMailAddress: async (projectId, data) => {
    const response = await client.mail.createMailAddress({
      projectId,
      data,
    });

    validateResponse(response, 201);
    return response.data;
  },
  restoreBackup: async (mailAddressId, backupId) => {
    const response = await client.mail.recoverMailAddressEmails({
      mailAddressId,
      backupId,
    });
    validateResponse(response, 204);
  },
  disableMailArchive: async (mailAddressId) => {
    const response = await client.mail.disableMailArchive({ mailAddressId });
    validateResponse(response, 204);
  },
  delete: async (mailAddressId) => {
    const response = await client.mail.deleteMailAddress({ mailAddressId });
    validateResponse(response, 204);
  },
});
