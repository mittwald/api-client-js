import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { LicenseBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { resolveTotalCount } from "../../../base";

export const apiLicenseBehaviors = (
  client: MittwaldAPIV2Client,
): LicenseBehaviors => ({
  list: async (projectId, query) => {
    const response = await client.license.listLicensesForProject({
      queryParameters: query,
      projectId,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  find: async (licenseId) => {
    const response = await client.license.getLicense({ licenseId });
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, 403);
  },

  getContract: async (licenseId) => {
    const response = await client.contract.getDetailOfContractByLicense({
      licenseId,
    });
    validateResponse(response, 200);
    return response.data;
  },

  rotateKey: async (licenseId) => {
    const response = await client.license.rotateLicenseKey({ licenseId });
    validateResponse(response, 200);
  },
});
