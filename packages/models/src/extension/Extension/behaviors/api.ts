import { MittwaldAPIV2Client } from "@mittwald/api-client";
import { ExtensionBehaviors } from "./types.js";
import { assertStatus } from "@mittwald/api-client";

export const apiExtensionBehaviors = (
  client: MittwaldAPIV2Client,
): ExtensionBehaviors => ({
  find: async (id) => {
    const response = await client.marketplace.extensionGetExtension({
      extensionId: id,
    });

    if (response.status === 200) {
      return response.data;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    assertStatus(response, 404);
  },
});
