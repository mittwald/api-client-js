import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { CertificateRequestBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { resolveTotalCount } from "../../../base";
import { ValidationError } from "../../../errors";

export const apiCertificateRequestBehaviors = (
  client: MittwaldAPIV2Client,
): CertificateRequestBehaviors => ({
  createDnsCertificate: async (commonName, projectId) => {
    const data = { commonName, projectId };
    const response = await client.domain.sslCreateCertificateRequest({
      data,
    });
    if (response.status === 409) {
      throw new ValidationError({
        message: "certificateAlreadyExists",
        type: "certificateAlreadyExists",
        path: "domain",
      });
    }

    if (response.status === 400) {
      if (
        typeof response.data.message === "string" &&
        response.data.message.toLowerCase().includes("does not match pattern")
      ) {
        throw new ValidationError({
          message: "invalidDomain",
          type: "invalidDomain",
          path: "domain",
        });
      }
    }
    validateResponse(response, 201);
    return response.data;
  },
  create: async (
    projectId,
    certificateData,
    privateKey,
    certificateAuthority,
  ) => {
    const certificate = certificateAuthority
      ? [certificateData, certificateAuthority].join("\n")
      : certificateData;
    const data = { certificate, privateKey, projectId };
    const response = await client.domain.sslCreateCertificateRequest({ data });

    if (response.status === 400 && typeof response.data.message === "string") {
      const field = response.data.message.includes("private_key")
        ? "privateKey"
        : "certificate";

      throw new ValidationError({
        message: response.data.message,
        type: response.data.message,
        path: field,
      });
    }

    validateResponse(response, 201);
    return response.data;
  },
  query: async (query = {}) => {
    const response = await client.domain.sslListCertificateRequests({
      queryParameters: query,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },
  find: async (certificateRequestId) => {
    const response = await client.domain.sslGetCertificateRequest({
      certificateRequestId,
    });
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, [404]);
  },
  delete: async (certificateRequestId) => {
    const response = await client.domain.sslDeleteCertificateRequest({
      certificateRequestId,
    });
    validateResponse(response, 204);
  },
});
