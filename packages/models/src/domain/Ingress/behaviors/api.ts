import {
  assertStatus,
  MittwaldAPIV2Client,
  extractTotalCountHeader,
} from "@mittwald/api-client";
import { IngressBehaviors } from "./types.js";
import { assertOneOfStatus } from "@mittwald/api-client";
import { CertificateSettings, PathSettings } from "../types.js";
import { Ingress } from "../Ingress.js";

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
      totalCount: extractTotalCountHeader(response),
    };
  },

  create: async (
    projectId: string,
    hostname: string,
    paths: PathSettings[],
  ) => {
    const response = await client.domain.ingressCreateIngress({
      data: { projectId, hostname, paths },
    });
    assertStatus(response, 201);
    return response.data;
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
  verifyOwnership: async (ingressId: string) => {
    const response = await client.domain.ingressIngressVerifyOwnership({
      ingressId,
    });
    assertStatus(response, 200);
  },
  listCompatibleWithCertificate: async (
    projectId: string,
    certificate: string,
  ) => {
    const response =
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await client.domain.ingressListIngressesCompatibleWithCertificate({
        data: { projectId, certificate },
      });
    assertStatus(response, 200);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return response.data.map((i) => Ingress.ofId(i.id));
  },
});
