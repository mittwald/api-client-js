import {
  assertStatus,
  MittwaldAPIV2Client,
  assertOneOfStatus,
} from "@mittwald/api-client";
import { MailAddressBehaviors } from "./types.js";
export const apiMailAddressBehaviors = (
  client: MittwaldAPIV2Client,
): MailAddressBehaviors => ({
  find: async (mailAddressId: string) => {
    const response = await client.mail.getMailAddress({ mailAddressId });
    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [404]);
  },
  query: async (projectId: string) => {
    const response = await client.mail.listMailAddresses({
      projectId,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: response.data.length,
    };
  },
  delete: async (mailAddressId: string) => {
    const response = await client.mail.deleteMailAddress({ mailAddressId });
    assertStatus(response, 204);
  },
  create: async (
    projectId: string,
    address: string,
    forwardAddresses: string[],
  ) => {
    const response = await client.mail.createMailAddress({
      projectId,
      data: { address, forwardAddresses },
    });
    assertStatus(response, 201);
  },
  updateAddress: async (mailAddressId: string, address: string) => {
    const response = await client.mail.updateMailAddressAddress({
      mailAddressId,
      data: {
        address,
      },
    });
    assertStatus(response, 204);
  },
  updatePassword: async (mailAddressId: string, password: string) => {
    const response = await client.mail.updateMailAddressPassword({
      mailAddressId,
      data: {
        password,
      },
    });
    assertStatus(response, 204);
  },
  updateSpamProtection: async (
    mailAddressId: string,
    active: boolean,
    autoDeleteSpam: boolean,
    folder: "inbox" | "spam",
    relocationMinSpamScore: number,
  ) => {
    const response = await client.mail.updateMailAddressSpamProtection({
      mailAddressId,
      data: {
        spamProtection: {
          active,
          autoDeleteSpam,
          folder,
          relocationMinSpamScore,
        },
      },
    });
    assertStatus(response, 204);
  },
  updateQuotaInBytes: async (mailAddressId: string, bytes: number) => {
    const response = await client.mail.updateMailAddressQuota({
      mailAddressId,
      data: { quotaInBytes: bytes },
    });
    assertStatus(response, 204);
  },
  updateForwardAddresses: async (
    mailAddressId: string,
    forwardAddresses: string[],
  ) => {
    const response = await client.mail.updateMailAddressForwardAddresses({
      mailAddressId,
      data: { forwardAddresses },
    });
    assertStatus(response, 204);
  },
  updateCatchAll: async (mailAddressId: string, enabled: boolean) => {
    const response = await client.mail.updateMailAddressCatchAll({
      mailAddressId,
      data: {
        active: enabled,
      },
    });
    assertStatus(response, 204);
  },
  updateAutoResponder: async (
    mailAddressId: string,
    active: boolean,
    expiresAt: Date,
    message: string,
    startsAt: Date,
  ) => {
    const response = await client.mail.updateMailAddressAutoresponder({
      mailAddressId,
      data: {
        autoResponder: {
          active,
          expiresAt: expiresAt.toISOString(),
          message,
          startsAt: startsAt.toISOString(),
        },
      },
    });
    assertStatus(response, 204);
  },
});
