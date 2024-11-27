import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import { MfaBehaviors } from "./types.js";

export const apiMfaBehaviors = (client: MittwaldAPIV2Client): MfaBehaviors => ({
  authenticateMfa: async (data) => {
    const response = await client.user.authenticateMfa({
      data,
    });

    assertStatus(response, 200);

    return response.data;
  },

  getStatus: async () => {
    const response = await client.user.getMfaStatus({});

    assertStatus(response, 200);

    return response.data;
  },

  recover: async (data) => {
    const { recoveryCode, ...restData } = data;
    const response = await client.user.authenticateMfa({
      data: {
        multiFactorCode: recoveryCode,
        ...restData,
      },
    });

    assertStatus(response, 200);

    return response.data;
  },

  confirm: async (multiFactorCode: string) => {
    const response = await client.user.confirmMfa({
      data: { multiFactorCode },
    });

    assertStatus(response, 200);

    return response.data;
  },

  resetRecoveryCodes: async (multiFactorCode: string) => {
    const response = await client.user.resetRecoverycodes({
      data: { multiFactorCode },
    });

    assertStatus(response, 200);

    return response.data;
  },

  disable: async (multiFactorCode: string) => {
    const response = await client.user.disableMfa({
      data: { multiFactorCode },
    });

    assertStatus(response, 204);
  },
});
