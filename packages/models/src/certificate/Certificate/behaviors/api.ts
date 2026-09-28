import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { CertificateBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount, anyStatus403 } from "../../../base/index.js";

export const apiCertificateBehaviors = (
  client: MittwaldAPIV2Client,
): CertificateBehaviors => ({
  checkReplace: async (
    certificateId,
    certificateData,
    privateKey,
    certificateAuthority,
  ) => {
    const certificate = certificateAuthority
      ? [certificateData, certificateAuthority].join("\n")
      : certificateData;

    const response = await client.domain.sslCheckReplaceCertificate({
      data: { certificate, privateKey },
      certificateId,
    });
    validateResponse(response, 200);
    return response.data;
  },
  find: async (certificateId) => {
    const response = await client.domain.sslGetCertificate({
      certificateId,
    });
    if (response.status === 200) {
      return response.data;
    }
    // API-DRIFT: sslGetCertificate omits 403 in its generated response type, so anyStatus403 (403 as any) is passed (resolve: use the literal 403 once the client type declares it)
    validateResponse(response, [anyStatus403, 404]);
  },
  replace: async (
    certificateId,
    certificateData,
    privateKey,
    certificateAuthority,
  ) => {
    const certificate = certificateAuthority
      ? [certificateData, certificateAuthority].join("\n")
      : certificateData;
    const response = await client.domain.sslReplaceCertificate({
      data: { certificate, privateKey },
      certificateId,
    });
    validateResponse(response, 204);
  },
  query: async (query = {}) => {
    const response = await client.domain.sslListCertificates({
      queryParameters: query,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },
  delete: async (certificateId) => {
    const response = await client.domain.sslDeleteCertificate({
      certificateId,
    });
    validateResponse(response, 204);
  },
});
