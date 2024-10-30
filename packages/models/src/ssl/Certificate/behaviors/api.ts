import {
  assertStatus,
  MittwaldAPIV2Client,
  assertOneOfStatus,
} from "@mittwald/api-client";
import { CertificateBehaviors } from "./types.js";
export const apiCertificateBehaviors = (
  client: MittwaldAPIV2Client,
): CertificateBehaviors => ({
  find: async (certificateId: string) => {
    const response = await client.domain.sslGetCertificate({
      certificateId,
    });
    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [404]);
  },
  query: async (projectId?: string) => {
    const response = await client.domain.sslListCertificates({
      queryParameters: {
        projectId,
      },
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: response.data.length,
    };
  },
  replace: async (certificateId, certificate, privateKey) => {
    const response = await client.domain.sslReplaceCertificate({
      certificateId,
      data: { certificate, privateKey },
    });
    assertStatus(response, 204);
  },
  delete: async (certificateId: string) => {
    const response = await client.domain.sslDeleteCertificate({
      certificateId,
    });
    assertStatus(response, 204);
  },
});
