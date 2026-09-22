import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { ContributorBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import {
  withAxiosRequestConfig,
  resolveTotalCount,
  anyStatus403,
} from "../../../base";

export const apiContributorBehaviors = (
  client: MittwaldAPIV2Client,
): ContributorBehaviors => ({
  find: async (contributorId, options) => {
    const response = await client.marketplace.extensionGetContributor(
      {
        contributorId,
      },
      withAxiosRequestConfig(options),
    );

    if (response.status === 200) {
      return response.data;
    }
    // API-DRIFT: extensionGetContributor omits 403 in its generated response type, so anyStatus403 (403 as any) is passed (resolve: use the literal 403 once the client type declares it)
    validateResponse(response, [anyStatus403, 404]);
  },

  listIncomingInvoices: async (contributorId, queryParameters) => {
    const response = await client.marketplace.contributorListIncomingInvoices({
      queryParameters,
      contributorId,
    });

    if (response.status === 200) {
      return {
        totalCount: resolveTotalCount(response),
        items: response.data,
      };
    }

    validateResponse(response, 404);
    return {
      totalCount: resolveTotalCount({ ...response, data: [] }),
      items: [],
    };
  },

  update: async (contributorId, data) => {
    const response = await client.marketplace.contributorPatchContributor({
      contributorId,
      data,
    });

    validateResponse(response, 200, {
      validationError: {
        pathMappings: {
          "contributor.homepage": "homepage",
          "*imprint*": "imprintUrl",
          "*phone*": "phone",
          "*mail*": "email",
        },
      },
    });
  },

  getFileAccessToken: async (
    contributorId,
    contributorReceiptId,
    requestConfig,
  ) => {
    const response =
      await client.marketplace.contributorReceiptGetFileAccessToken(
        {
          contributorReceiptId,
          contributorId,
        },
        withAxiosRequestConfig(requestConfig),
      );
    validateResponse(response, 200);

    return response.data;
  },

  createAvatarUploadToken: async (contributorId: string) => {
    const response =
      await client.marketplace.contributorRequestDeviatingContributorAvatarUpload(
        {
          contributorId,
        },
      );
    validateResponse(response, 200);

    return {
      token: response.data.avatarRefId,
      rules: response.data.rules,
    };
  },

  getStripeOnboardingLink: async (contributorId) => {
    const response =
      await client.marketplace.extensionCreateContributorOnboardingProcess({
        data: { shippingCountryRestriction: "onlyDomestic" },
        contributorId,
      });
    validateResponse(response, 201);

    return response.data.onboardingLink;
  },

  getStripeLoginLink: async (contributorId) => {
    const response = await client.marketplace.contributorGetLoginLink({
      contributorId,
    });

    if (response.status === 200) {
      return response.data.url;
    }

    validateResponse(response, [403, 404]);
    return undefined;
  },

  listOnBehalfInvoices: async (contributorId) => {
    const response = await client.marketplace.contributorListOnbehalfInvoices({
      contributorId,
    });

    if (response.status === 200) {
      return response.data;
    }

    validateResponse(response, 404);
    return [];
  },

  list: async (query) => {
    const response = await client.marketplace.extensionListContributors({
      queryParameters: query,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  getBillingInformation: async (contributorId) => {
    const response = await client.marketplace.contributorGetBillingInformation({
      contributorId,
    });

    validateResponse(response, 200);

    return response.data;
  },

  contributorRequestVerification: async (contributorId) => {
    const response = await client.marketplace.contributorRequestVerification({
      contributorId,
    });

    validateResponse(response, 204, {});
  },

  removeAvatar: async (contributorId: string) => {
    const response = await client.marketplace.contributorResetContributorAvatar(
      { contributorId },
    );

    validateResponse(response, 204);
  },
});
