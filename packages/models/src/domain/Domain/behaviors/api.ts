import {
  assertStatus,
  MittwaldAPIV2Client,
  extractTotalCountHeader,
  assertOneOfStatus,
} from "@mittwald/api-client";
import { DomainBehaviors } from "./types.js";
import { DomainTransferableReasons, HandleField } from "../types.js";

export const apiDomainBehaviors = (
  client: MittwaldAPIV2Client,
): DomainBehaviors => ({
  find: async (domainId: string) => {
    const response = await client.domain.getDomain({ domainId });
    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [404]);
  },
  query: async (query = {}) => {
    const response = await client.domain.listDomains({
      queryParameters: query,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },
  delete: async (domainId: string) => {
    const response = await client.domain.deleteDomain({ domainId });
    assertStatus(response, 200);
  },
  createAuthCode: async (domainId: string) => {
    const response = await client.domain.createDomainAuthCode({ domainId });
    assertStatus(response, 201);
    return response.data;
  },
  updateAuthCode: async (domainId: string, authCode: string) => {
    const response = await client.domain.updateDomainAuthCode({
      domainId,
      data: { authCode },
    });
    assertStatus(response, 200);
    return {
      isAsync: response.data.isAsync as boolean,
      transactionId: response.data.transactionId as string,
    };
  },
  updateNameservers: async (
    domainId: string,
    nameservers: [string, string, ...string[]],
  ) => {
    const response = await client.domain.updateDomainNameservers({
      domainId,
      data: { nameservers },
    });
    assertStatus(response, 204);
  },
  checkDomainRegistrable: async (domain: string) => {
    const response = await client.domain.checkDomainRegistrability({
      data: { domain },
    });
    assertStatus(response, 200);
    return response.data;
  },
  checkDomainTransferable: async (domain: string, authCode: string) => {
    const response = await client.domain.checkDomainTransferability({
      data: { domain, authCode },
    });
    assertStatus(response, 200);
    return {
      transferable: response.data.transferable as boolean,
      reasons: response.data.reasons as DomainTransferableReasons,
    };
  },
  resendEmail: async (domainId: string) => {
    const response = await client.domain.resendDomainEmail({ domainId });
    assertStatus(response, 204);
  },
  updateOwnerContact: async (
    domainId: string,
    handleFields: [HandleField, ...HandleField[]],
  ) => {
    const response = await client.domain.updateDomainContact({
      domainId,
      contact: "owner",
      data: {
        contact: handleFields,
      },
    });
    assertStatus(response, 200);
  },
  getSuggestions: async (
    prompt: string,
    domainCount?: number,
    tlds?: string[],
  ) => {
    const response = await client.domain.suggest({
      queryParameters: {
        prompt,
        domainCount: domainCount ?? 6,
        tlds: tlds ?? [],
      },
    });
    assertStatus(response, 200);
    return response.data.domains;
  },
  abortDomainDeclaration: async (domainId: string) => {
    const response = await client.domain.abortDomainDeclaration({
      domainId,
    });
    assertStatus(response, 204);
  },
  getDomainContract: async (domainId: string) => {
    const response = await client.contract.getDetailOfContractByDomain({
      domainId,
    });
    assertStatus(response, 200);
    return response.data;
  },
  getLatestScreenshot: async (
    domainId: string,
    domainName: string,
    path: string,
  ) => {
    const response = await client.domain.getLatestScreenshot({
      domainId,
      data: { domainName, path },
    });
    assertStatus(response, 200);
    return response.data;
  },
});
