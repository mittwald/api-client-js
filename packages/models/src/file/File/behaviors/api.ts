import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import type { Writable } from "type-fest";
import { FileBehaviors } from "./types.js";

export const apiFileBehaviors = (
  client: MittwaldAPIV2Client,
): FileBehaviors => ({
  buildUrl: (refId, token?: string) => {
    return client.axios.getUri({
      url: `/v2/files/${refId}`,
      params: {
        token,
      },
    });
  },

  download: async (id, token) => {
    const response = await client.file.getFile(
      {
        fileId: id,
        headers: { Token: token },
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

    assertStatus(response, 200);
    return response.data as unknown as ArrayBuffer;
  },

  upload: async (file, token) => {
    const uploadFormData = new FormData();
    uploadFormData.append("file", file);

    const response = await client.file.createFile({
      data: uploadFormData as never,
      headers: {
        Token: token,
      },
    });

    assertStatus(response, 201);

    return response.data;
  },

  findMetaData: async (id, token) => {
    const response = await client.file.getFileMeta({
      fileId: id,
      headers: {
        Token: token,
      },
    });

    if (response.status === 200) {
      return response.data;
    }
    assertStatus(response, 404);
  },

  getUploadRules: async (fileUploadType) => {
    const response = await client.file.getFileUploadTypeRules({
      fileUploadType,
    });

    assertStatus(response, 200);

    return response.data;
  },
});
