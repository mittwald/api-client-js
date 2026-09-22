import type { MittwaldAPIV2Client } from "@mittwald/api-client";
import type { AxiosRequestConfig } from "axios";

import type { ContainerBehaviors } from "./types";
import type {
  ContainerStackUpdateSchedulePatchRequestData,
  ContainerStackPatchRequestData,
} from "../types";

import {
  withAxiosRequestConfig,
  resolveTotalCount,
  validateResponse,
} from "../../../base";

const resolveTemplateAssetUrls = <
  T extends {
    screenshots?: { screenshot: string; bg: string }[];
    iconUrl: string;
  },
>(
  client: MittwaldAPIV2Client,
  template: T,
): T => ({
  ...template,
  screenshots: template.screenshots?.map((screenshot) => ({
    ...screenshot,
    screenshot: client.axios.getUri({ url: screenshot.screenshot }),
    bg: client.axios.getUri({ url: screenshot.bg }),
  })),
  iconUrl: client.axios.getUri({ url: template.iconUrl }),
});

export const apiContainerBehaviors = (
  client: MittwaldAPIV2Client,
): ContainerBehaviors => ({
  getImageMeta: async (imageRef, projectId, generateAiData, language) => {
    const acceptLanguage =
      language === "en" || language === "de" ? language : undefined;

    const response = await client.container.getContainerImageConfig({
      queryParameters: {
        useCredentialsForProjectId: projectId,
        imageReference: imageRef,
        generateAiData,
      },
      headers: acceptLanguage
        ? { "Accept-Language": acceptLanguage }
        : undefined,
    });

    if (response.status !== 200) {
      if (response.status === 403) {
        return "noImageAccess";
      } else if (response.status === 429) {
        return "rateLimitReached";
      } else if (response.status >= 400 && response.status < 500) {
        if (typeof response.data.message === "string") {
          if (response.data.message.endsWith("'linux/amd64' platform")) {
            return "invalidImageArchitecture";
          }
          if (response.data.message.endsWith("is not reachable")) {
            return "registryNotReachable";
          }
          if (response.data.message.endsWith("does not host a registry")) {
            return "noRegistryHosted";
          }
          if (
            response.data.message.endsWith("unsupported with schema 1 manifest")
          ) {
            return "unsupportedManifest";
          }
          if (response.data.message.endsWith("does not exist")) {
            return "imageRefNotFound";
          }
        }
      }

      return "invalidImageRef";
    }

    validateResponse(response, 200);
    return response.data;
  },

  getLogChunk: async (containerId, stackId, range, requestOptions) => {
    const response = await client.container.getServiceLogs(
      {
        headers: { Range: range },
        serviceId: containerId,
        stackId,
      },
      withAxiosRequestConfig(requestOptions),
    );

    return {
      contentRange: response.headers["content-range"] as string | undefined,
      content: typeof response.data === "string" ? response.data : "",
      status: response.status,
    };
  },

  list: async (projectId, queryParameters, options?: AxiosRequestConfig) => {
    const response = await client.container.listServices(
      {
        queryParameters,
        projectId,
      },
      withAxiosRequestConfig(options),
    );
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  listAccessible: async (queryParameters, options?: AxiosRequestConfig) => {
    const response = await client.container.listAccessibleServices(
      {
        queryParameters,
      },
      withAxiosRequestConfig(options),
    );
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  updateStackUpdateSchedule: async (stackId, updateSchedule) => {
    const data: ContainerStackUpdateSchedulePatchRequestData = {
      updateSchedule,
    };

    const response = await client.container.updateStack({
      data: data as ContainerStackPatchRequestData,
      stackId,
    });

    validateResponse(response, 200);
    return response.data;
  },

  listTemplates: async (queryParameters) => {
    const response = await client.container.listTemplates({
      queryParameters,
    });
    validateResponse(response, 200);
    return {
      items: response.data.map((template) =>
        resolveTemplateAssetUrls(client, template),
      ),
      totalCount: resolveTotalCount(response),
    };
  },

  findStack: async (stackId, options?: AxiosRequestConfig) => {
    const response = await client.container.getStack(
      {
        stackId,
      },
      withAxiosRequestConfig(options),
    );
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, 403);
  },

  listStacksOfProject: async (projectId, queryParameters) => {
    const response = await client.container.listStacks({
      queryParameters,
      projectId,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  listStacks: async (queryParameters) => {
    const response = await client.container.listSelfStacks({
      queryParameters,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  rotateImagePullWebhook: async (containerId, stackId) => {
    const response = await client.container.rotatePullImageWebhookForService({
      serviceId: containerId,
      stackId,
    });
    validateResponse(response, 200);
    return response.data.webhookUrl;
  },

  find: async (containerId, stackId) => {
    const response = await client.container.getService({
      serviceId: containerId,
      stackId,
    });
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, [403, 404]);
  },

  findTemplate: async (templateId) => {
    const response = await client.container.getTemplate({
      templateId,
    });

    if (response.status === 200) {
      return resolveTemplateAssetUrls(client, response.data);
    }
    validateResponse(response, 404);
  },

  getLog: async (containerId, stackId) => {
    const response = await client.container.getServiceLogs({
      queryParameters: { tail: 10000 },
      serviceId: containerId,
      stackId,
    });
    validateResponse(response, 200);
    return response.data;
  },

  delete: async (serviceName, stackId) => {
    const response = await client.container.updateStack({
      data: { services: { [serviceName]: {} } },
      stackId,
    });
    validateResponse(response, 200);
  },

  updateStackDescription: async (stackId, description) => {
    const response = await client.container.updateStack({
      data: { description },
      stackId,
    });

    validateResponse(response, 200);
  },

  pullImage: async (containerId, stackId) => {
    const response = await client.container.pullImageForService({
      serviceId: containerId,
      stackId,
    });
    validateResponse(response, 204);
  },

  declareStack: async (stackId, data) => {
    const response = await client.container.declareStack({
      stackId,
      data,
    });

    validateResponse(response, 200);
    return response.data;
  },

  updateStack: async (stackId, data) => {
    const response = await client.container.updateStack({
      stackId,
      data,
    });

    validateResponse(response, 200);
    return response.data;
  },

  recreate: async (containerId, stackId) => {
    const response = await client.container.recreateService({
      serviceId: containerId,
      stackId,
    });
    validateResponse(response, 204);
  },

  restart: async (containerId, stackId) => {
    const response = await client.container.restartService({
      serviceId: containerId,
      stackId,
    });
    validateResponse(response, 204);
  },

  create: async (stackId, data) => {
    const response = await client.container.updateStack({
      stackId,
      data,
    });

    validateResponse(response, 200);
    return response.data;
  },

  start: async (containerId, stackId) => {
    const response = await client.container.startService({
      serviceId: containerId,
      stackId,
    });
    validateResponse(response, 204);
  },

  addTemplateComponent: async (stackId, data) => {
    const response = await client.container.addTemplateComponent({
      stackId,
      data,
    });
    validateResponse(response, 204);
  },

  stop: async (containerId, stackId) => {
    const response = await client.container.stopService({
      serviceId: containerId,
      stackId,
    });
    validateResponse(response, 204);
  },

  createStack: async (data, projectId) => {
    const response = await client.container.createStack({ projectId, data });
    validateResponse(response, 201);
    return response.data;
  },

  getStack: async (stackId) => {
    const response = await client.container.getStack({
      stackId,
    });
    validateResponse(response, 200);
    return response.data;
  },

  deleteStack: async (stackId) => {
    const response = await client.container.deleteStack({ stackId });
    validateResponse(response, 204);
  },
});
