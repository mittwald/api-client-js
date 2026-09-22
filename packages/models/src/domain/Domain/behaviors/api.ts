import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { DomainTransferableReasons } from "../types";
import type { HandleField } from "../../DomainHandle";
import type { DomainBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { resolveTotalCount } from "../../../base";
import { ValidationError } from "../../../errors";

export const apiDomainBehaviors = (
  client: MittwaldAPIV2Client,
): DomainBehaviors => ({
  checkDomainTransferable: async (domain, authCode) => {
    const response = await client.domain.checkDomainTransferability({
      data: { authCode, domain },
    });
    if (response.status === 412) {
      const message =
        typeof response.data.message === "string"
          ? response.data.message
          : undefined;
      if (message?.toLowerCase().includes("declaration in progress")) {
        throw new ValidationError({
          message: "domainDeclarationInProgress",
          type: "domainDeclarationInProgress",
          path: "domain",
        });
      }
      if (
        message?.includes("ErrServerConnection") &&
        message.includes("RegistrarError")
      ) {
        throw new ValidationError({
          message: "registrarConnectionFailed",
          type: "registrarConnectionFailed",
          path: "domain",
        });
      }
      if (message?.toLowerCase().includes("changes are not allowed")) {
        throw new ValidationError({
          message: "domainHasRunningProcess",
          type: "domainHasRunningProcess",
          path: "domain",
        });
      }
      throw new ValidationError({
        message: "domainNotTransferable",
        type: "domainNotTransferable",
        path: "domain",
      });
    }
    validateResponse(response, 200);

    return {
      reasons: response.data.reasons as DomainTransferableReasons,
      transferable: response.data.transferable as boolean,
    };
  },
  checkDomainRegistrable: async (domain) => {
    const response = await client.domain.checkDomainRegistrability({
      data: { domain },
    });
    if (response.status === 400) {
      return {
        tldAvailable: false,
        invalidDomain: true,
        registrable: false,
        isPremium: false,
        domain,
      };
    }
    validateResponse(response, 200);
    return {
      invalidDomain: false,
      tldAvailable: true,
      domain,
      ...response.data,
    };
  },
  updateNameservers: async (domainId, nameservers) => {
    const [first, second] = nameservers.slice(0, 2);
    const remaining = nameservers.slice(2);

    const response = await client.domain.updateDomainNameservers({
      data: {
        nameservers: [first ?? "", second ?? "", ...remaining],
      },
      domainId,
    });

    validateResponse(response, 204);
  },
  updateOwnerContact: async (
    domainId,
    handleFields,
    avoidEmailConfirmation,
  ) => {
    const response = await client.domain.updateDomainContact({
      data: {
        contact: handleFields as [HandleField, ...HandleField[]],
        avoidEmailConfirmation,
      },
      contact: "owner",
      domainId,
    });
    validateResponse(response, 200);
  },
  createScheduledDeletion: async (domainId, date, deleteIngresses) => {
    const deletionDate = date.toISO();
    if (deletionDate === null) {
      return;
    }
    const response = await client.domain.createScheduledDeletion({
      data: { deleteIngresses, deletionDate },
      domainId,
    });

    validateResponse(response, 204);
  },
  updateAuthCode: async (domainId, authCode) => {
    const response = await client.domain.updateDomainAuthCode({
      data: { authCode },
      domainId,
    });
    validateResponse(response, 200);
    return {
      transactionId: response.data.transactionId as string,
      isAsync: response.data.isAsync as boolean,
    };
  },
  getSuggestions: async (prompt, domainCount, tlds) => {
    const response = await client.domain.suggest({
      queryParameters: {
        domainCount: domainCount ?? 6,
        tlds: tlds ?? [],
        prompt,
      },
    });
    validateResponse(response, 200);
    return response.data.domains;
  },
  list: async (query = {}) => {
    const response = await client.domain.listDomains({
      queryParameters: query,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },
  getLatestScreenshot: async (domainName) => {
    const response = await client.domain.getLatestScreenshot({
      queryParameters: {
        domainName,
      },
    });
    validateResponse(response, 200);
    return response.data;
  },
  delete: async (domainId, transit, deleteIngresses) => {
    const response = await client.domain.deleteDomain({
      queryParameters: { deleteIngresses, transit },
      domainId,
    });
    validateResponse(response, 200);
  },
  updateProjectId: async (domainId, projectId) => {
    const response = await client.domain.updateDomainProjectId({
      data: {
        projectId,
      },
      domainId,
    });
    validateResponse(response, 204);
  },
  find: async (domainId) => {
    const response = await client.domain.getDomain({ domainId });
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, [404, 403]);
  },
  verifyAddress: async (address) => {
    const response = await client.misc.verificationVerifyAddress({
      data: address,
    });
    validateResponse(response, 200);
    return response.data.exists;
  },
  getDomainContract: async (domainId) => {
    const response = await client.contract.getDetailOfContractByDomain({
      domainId,
    });
    validateResponse(response, 200);
    return response.data;
  },
  verifyCompany: async (name) => {
    const response = await client.misc.verificationVerifyCompany({
      data: { name },
    });
    validateResponse(response, 200);
    return response.data.exists;
  },
  createAuthCode: async (domainId) => {
    const response = await client.domain.createDomainAuthCode({ domainId });

    validateResponse(response, 201);
    return response.data;
  },
  cancelScheduledDeletion: async (domainId) => {
    const response = await client.domain.cancelScheduledDeletion({
      domainId,
    });
    validateResponse(response, 204);
  },
  abortDomainDeclaration: async (domainId) => {
    const response = await client.domain.abortDomainDeclaration({
      domainId,
    });
    validateResponse(response, 204);
  },
  resendEmail: async (domainId) => {
    const response = await client.domain.resendDomainEmail({ domainId });
    validateResponse(response, 204);
  },
});
