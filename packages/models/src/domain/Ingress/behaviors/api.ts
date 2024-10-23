import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import {
  CertificateSettings,
  IngressBehaviors,
  PathSettings,
} from "./types.js";
import { assertOneOfStatus } from "@mittwald/api-client";

export const apiIngressBehaviors = (
  client: MittwaldAPIV2Client,
): IngressBehaviors => ({
  find: async (id) => {
    const response = await client.domain.ingressGetIngress({
      ingressId: id,
    });

    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [404]);
  },

  list: async (query = {}) => {
    const response = await client.domain.ingressListIngresses({
      queryParameters: query,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: response.data.length,
      /** @todo: use this code when pagination is supported by API */
      // totalCount: extractTotalCountHeader(response),
    };
  },
  delete: async (ingressId: string) => {
    const response = await client.domain.ingressDeleteIngress({
      ingressId,
    });
    assertStatus(response, 204);
  },
  requestAcmeCertificate: async (ingressId: string) => {
    const response =
      await client.domain.ingressRequestIngressAcmeCertificateIssuance({
        ingressId,
      });
    assertStatus(response, 204);
  },
  updateTls: async (ingressId: string, certificate: CertificateSettings) => {
    if (certificate.type == "acme") {
      const response = await client.domain.ingressUpdateIngressTls({
        ingressId,
        data: {
          acme: true,
        },
      });
      assertStatus(response, 200);
      return;
    }
    const response = await client.domain.ingressUpdateIngressTls({
      ingressId,
      data: {
        certificateId: certificate.certificateId,
      },
    });
    assertStatus(response, 200);
  },
  updatePaths: async (ingressId: string, paths: PathSettings[]) => {
    const response = await client.domain.ingressUpdateIngressPaths({
      ingressId,
      data: paths,
    });
    assertStatus(response, 204);
  },
});
