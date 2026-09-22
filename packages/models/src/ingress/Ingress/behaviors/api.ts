import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { IngressBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { ValidationError } from "../../../errors";
import { IngressListItem } from "../Ingress";
import {
  withAxiosRequestConfig,
  resolveTotalCount,
  anyStatus403,
} from "../../../base";

export const apiIngressBehaviors = (
  client: MittwaldAPIV2Client,
): IngressBehaviors => ({
  create: async (projectId, hostname, paths) => {
    const response = await client.domain.ingressCreateIngress({
      data: { projectId, hostname, paths },
    });

    if (response.status === 409) {
      const message =
        response.data.message && typeof response.data.message === "string"
          ? response.data.message
          : undefined;
      if (message?.includes("another project")) {
        throw new ValidationError({
          message: "alreadyRegisteredInAnotherProject",
          type: "alreadyRegisteredInAnotherProject",
          path: "hostname",
        });
      }
      throw new ValidationError({
        message: "alreadyRegistered",
        type: "alreadyRegistered",
        path: "hostname",
      });
    }
    validateResponse(response, 201);
    return response.data;
  },

  listCompatibleWithCertificate: async (certificate) => {
    const response =
      "certificateId" in certificate
        ? await client.domain.ingressListIngressesCompatibleWithCertificate({
            data: { certificateId: certificate.certificateId },
          })
        : await client.domain.ingressListIngressesCompatibleWithCertificate({
            data: {
              certificate: certificate.certificateContent,
              projectId: certificate.projectId,
            },
          });
    validateResponse(response, 200);
    return response.data.map((i) => new IngressListItem(i));
  },

  updateTls: async (ingressId, certificate) => {
    if (certificate.type == "acme") {
      const response = await client.domain.ingressUpdateIngressTls({
        data: {
          acme: certificate.acme,
        },
        ingressId,
      });
      validateResponse(response, 200);
      return;
    }
    const response = await client.domain.ingressUpdateIngressTls({
      data: {
        certificateId: certificate.certificateId,
      },
      ingressId,
    });
    validateResponse(response, 200);
  },
  find: async (ingressId) => {
    const response = await client.domain.ingressGetIngress({ ingressId });

    if (response.status === 200) {
      return response.data;
    }
    // API-DRIFT: ingressGetIngress omits 403 in its generated response type, so anyStatus403 (403 as any) is passed (resolve: use the literal 403 once the client type declares it)
    validateResponse(response, [404, anyStatus403]);
  },
  list: async (query = {}, options) => {
    const response = await client.domain.ingressListIngresses(
      {
        queryParameters: query,
      },
      withAxiosRequestConfig(options),
    );
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },
  verifyOwnership: async (ingressId) => {
    const response = await client.domain.ingressIngressVerifyOwnership({
      ingressId,
    });
    if (response.status === 412) {
      return false;
    }
    validateResponse(response, 200);
    return true;
  },
  requestAcmeCertificate: async (ingressId) => {
    const response =
      await client.domain.ingressRequestIngressAcmeCertificateIssuance({
        ingressId,
      });
    validateResponse(response, 204);
  },
  updatePaths: async (ingressId, paths) => {
    const response = await client.domain.ingressUpdateIngressPaths({
      data: paths,
      ingressId,
    });
    validateResponse(response, 204);
  },
  delete: async (ingressId) => {
    const response = await client.domain.ingressDeleteIngress({
      ingressId,
    });
    validateResponse(response, 204);
  },
});
