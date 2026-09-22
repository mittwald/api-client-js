import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { ContributorExtensionUpdatePricingRequestData } from "../types";
import type { ContributorExtensionBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { resolveTotalCount } from "../../../base";
import { ValidationError } from "../../../errors";

export const apiContributorExtensionBehaviors = (
  client: MittwaldAPIV2Client,
): ContributorExtensionBehaviors => ({
  update: async (contributorId, extensionId, data) => {
    const response = await client.marketplace.extensionPatchExtension({
      contributorId,
      extensionId,
      data,
    });

    const validationErrors = ValidationError.fromResponse(response);
    if (validationErrors) {
      const mappedErrors = validationErrors.errors.map((e) => {
        if (e.params?.["SecretRotated"]) {
          return {
            path: "extensionInstanceSecretRotated",
            type: "invalid",
          };
        }
        if (e.params?.["InstanceRemovedFromContext"]) {
          return {
            path: "extensionInstanceRemovedFromContext",
            type: "invalid",
          };
        }
        if (e.params?.["ExtensionAddedToContext"]) {
          return {
            path: "extensionAddedToContext",
            type: "invalid",
          };
        }
        if (e.params?.["InstanceUpdated"]) {
          return {
            path: "extensionInstanceUpdated",
            type: "invalid",
          };
        }

        const pathStr = Array.isArray(e.path) ? e.path.join(".") : e.path;

        return {
          ...e,
          path:
            e.path == "frontendFragments"
              ? "url"
              : e.path === "webhookUrls"
                ? "oneHookUrl"
                : pathStr.includes("phone")
                  ? "phone"
                  : pathStr.includes("mail")
                    ? "email"
                    : e.path,
        };
      });
      throw new ValidationError(mappedErrors);
    }

    validateResponse(response, 200);
  },

  updatePricing: async (
    extensionId: string,
    contributorId: string,
    data: ContributorExtensionUpdatePricingRequestData,
  ) => {
    let response;

    if ("pricePlan" in data) {
      response = await client.marketplace.extensionUpdateExtensionPricing({
        data: {
          pricePlan: data.pricePlan,
          dryRun: data.dryRun,
        },
        contributorId,
        extensionId,
      });
    } else if ("priceInCents" in data) {
      response = await client.marketplace.extensionUpdateExtensionPricing({
        data: {
          priceInCents: data.priceInCents,
          dryRun: data.dryRun,
        },
        contributorId,
        extensionId,
      });
    } else {
      throw Error("Neither price with money value nor pricePlan were given.");
    }

    if (response.status === 412) {
      const rawMessage =
        typeof response.data.message === "string"
          ? response.data.message
          : "Precondition Failed";

      const match = /\b\d{2}\.\d{2}\.\d{4}\b/.exec(rawMessage);
      const extractedDate = match?.[0];

      throw new ValidationError({
        meta: {
          date: extractedDate,
        },
        message: "preconditionFailed",
        type: "preconditionFailed",
        path: "price",
      });
    }

    validateResponse(response, 200, {
      validationError: {
        pathMappings: {
          "*priceInCents": "priceInEuro",
          "*name": "name",
          "*key": "key",
        },
      },
    });

    return response.data;
  },

  requestVerification: async (contributorId, extensionId) => {
    const response =
      await client.marketplace.extensionRequestExtensionVerification({
        contributorId,
        extensionId,
      });

    validateResponse(response, 204, {
      validationError: {
        typeMappings: {
          "*": (e) =>
            e.message?.includes("verification failed for field 'name'")
              ? "nameAlreadyTaken"
              : undefined,
        },
        pathMappings: { name: "root" },
      },
    });
  },

  createAssetUploadToken: async (
    contributorId: string,
    extensionId: string,
    assetType: "image" | "video",
  ) => {
    const response = await client.marketplace.extensionRequestAssetUpload({
      data: { assetType },
      contributorId,
      extensionId,
    });
    validateResponse(response, 200);

    return {
      token: response.data.assetRefId,
      rules: response.data.rules,
    };
  },

  deleteExtensionSecret: async (
    contributorId: string,
    extensionId: string,
    secretId: string,
  ) => {
    const response =
      await client.marketplace.extensionInvalidateExtensionSecret({
        contributorId: contributorId,
        extensionSecretId: secretId,
        extensionId: extensionId,
      });

    validateResponse(response, 204);
  },

  createLogoUploadToken: async (contributorId: string, extensionId: string) => {
    const response = await client.marketplace.extensionRequestLogoUpload({
      contributorId,
      extensionId,
    });
    validateResponse(response, 200);

    return {
      token: response.data.logoRefId,
      rules: response.data.rules,
    };
  },

  unpublish: async (contributorId, extensionId, reason) => {
    const response =
      await client.marketplace.extensionSetExtensionPublishedState({
        data: {
          published: false,
          reason,
        },
        contributorId,
        extensionId,
      });

    validateResponse(response, 200);
  },

  list: async (contributorId, query) => {
    const response = await client.marketplace.extensionListOwnExtensions({
      queryParameters: query,
      contributorId,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  find: async (contributorId: string, extensionId: string) => {
    const response = await client.marketplace.extensionGetOwnExtension({
      contributorId,
      extensionId,
    });

    if (response.status === 200) {
      return response.data;
    }

    validateResponse(response, 404);
  },

  deleteExtensionAsset: async (
    contributorId: string,
    extensionId: string,
    assetRefId: string,
  ) => {
    const response = await client.marketplace.extensionRemoveAsset({
      contributorId,
      extensionId,
      assetRefId,
    });

    validateResponse(response, 204);
  },

  generateExtensionSecret: async (
    contributorId: string,
    extensionId: string,
  ) => {
    const response = await client.marketplace.extensionGenerateExtensionSecret({
      contributorId,
      extensionId,
    });
    validateResponse(response, 200);

    return response.data;
  },

  publish: async (contributorId, extensionId) => {
    const response =
      await client.marketplace.extensionSetExtensionPublishedState({
        data: {
          published: true,
        },
        contributorId,
        extensionId,
      });

    validateResponse(response, 200);
  },

  updateContext: async (context, contributorId, extensionId) => {
    const response = await client.marketplace.extensionChangeContext({
      data: { context },
      contributorId,
      extensionId,
    });

    validateResponse(response, 200);
  },

  create: async (contributorId, name) => {
    const response = await client.marketplace.extensionRegisterExtension({
      data: {
        name,
      },
      contributorId,
    });
    validateResponse(response, 201);
    return response.data;
  },

  delete: async (contributorId, extensionId) => {
    const response = await client.marketplace.extensionDeleteExtension({
      contributorId,
      extensionId,
    });

    validateResponse(response, 204);
  },

  getPossibleScopes: async () => {
    const response = await client.marketplace.extensionListScopes();
    validateResponse(response, 200);

    return response.data;
  },
});
