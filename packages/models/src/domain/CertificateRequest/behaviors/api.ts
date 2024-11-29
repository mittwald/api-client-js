import {
  assertStatus,
  MittwaldAPIV2Client,
  assertOneOfStatus,
} from "@mittwald/api-client";
import { CertificateRequestBehaviors } from "./types.js";

export const apiCertificateRequestBehaviors = (
  client: MittwaldAPIV2Client,
): CertificateRequestBehaviors => ({
  find: async (certificateRequestId: string) => {
    const response = await client.domain.sslGetCertificateRequest({
      certificateRequestId,
    });
    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [404]);
  },
  query: async (query = {}) => {
    const response = await client.domain.sslListCertificateRequests({
      queryParameters: query,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: response.data.length,
    };
  },
  create: async (
    projectId: string,
    certificate: string,
    privateKey: string,
  ) => {
    const response = await client.domain.sslCreateCertificateRequest({
      data: { certificate, privateKey, projectId },
    });
    assertStatus(response, 201);
    return response.data;
  },
  delete: async (certificateRequestId: string) => {
    const response = await client.domain.sslDeleteCertificateRequest({
      certificateRequestId,
    });
    assertStatus(response, 204);
  },
});
