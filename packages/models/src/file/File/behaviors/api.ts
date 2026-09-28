import type { MittwaldAPIV2Client } from "@mittwald/api-client";
import type { Writable } from "type-fest";

import type { FileBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { withAxiosRequestConfig } from "../../../base/index.js";
import { ValidationError } from "../../../errors/index.js";
import {
  classifyFileUploadError,
  getMaxUploadSizeInMB,
} from "./classifyFileUploadError.js";

export const apiFileBehaviors = (
  client: MittwaldAPIV2Client,
): FileBehaviors => ({
  upload: async (file, token, onProgress) => {
    const uploadFormData = new FormData();
    uploadFormData.append("file", file);

    const response = await client.file.createFile(
      {
        headers: {
          Token: token,
        },
        data: uploadFormData as never,
      },
      {
        onBeforeRequest: (req) => {
          const writableRequest = req as Writable<typeof req>;
          writableRequest.requestConfig = {
            ...req.requestConfig,
            onUploadProgress: (event) => {
              if (onProgress && event.total) {
                onProgress(Math.round((event.loaded / event.total) * 100));
              }
            },
          };
        },
      },
    );

    if (
      response.status === 400 ||
      response.status === 406 ||
      response.status === 422 ||
      response.status === 429
    ) {
      const message =
        "message" in response.data && typeof response.data.message === "string"
          ? response.data.message
          : undefined;

      const code = message ? classifyFileUploadError(message) : undefined;
      const maxSizeInMB =
        code === "fileTooLarge" && message
          ? getMaxUploadSizeInMB(message)
          : undefined;

      throw new ValidationError({
        type:
          code ??
          (typeof response.data.type === "string"
            ? response.data.type
            : "unknown"),
        path: "files",
        ...(message !== undefined ? { message } : {}),
        ...(maxSizeInMB ? { meta: { maxSizeInMB } } : {}),
      });
    }

    validateResponse(response, 201);

    return response.data;
  },

  download: async (fileId, token) => {
    const response = await client.file.getFile(
      {
        headers: { Token: token },
        fileId,
      },
      {
        onBeforeRequest: (req) => {
          const writableRequest = req as Writable<typeof req>;
          writableRequest.requestConfig = {
            ...req.requestConfig,
            // prevent Axios from returning binary content as text
            responseType: "arraybuffer",
          };
        },
      },
    );

    validateResponse(response, 200);
    return response.data as unknown as ArrayBuffer;
  },

  findMetaData: async (fileId, token, requestConfig) => {
    const response = await client.file.getFileMeta(
      {
        headers: {
          Token: token,
        },
        fileId,
      },
      withAxiosRequestConfig(requestConfig),
    );

    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, 404);
  },

  buildUrl: (refId, name, token) => {
    const path = name ? `/v2/files/${refId}/${name}` : `/v2/files/${refId}`;
    return client.axios.getUri({
      params: {
        token,
      },
      url: path,
    });
  },

  getUploadRules: async (fileUploadType) => {
    const response = await client.file.getFileUploadTypeRules({
      fileUploadType,
    });

    validateResponse(response, 200);

    return response.data;
  },
});
