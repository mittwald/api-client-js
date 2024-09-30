import { TariffChangeBehaviors } from "./types.js";
import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import {
  TariffChangeCancelRequestData,
  TariffChangeCancelResponseData,
  TariffChangePreviewRequestData,
  TariffChangePreviewResponseData,
  TariffChangeRequestData,
  TariffChangeResponseData,
} from "../types.js";

export const apiTariffChangeBehaviors = (
  client: MittwaldAPIV2Client,
): TariffChangeBehaviors => ({
  createTariffChange: async (
    tariffChangeData: TariffChangeRequestData,
  ): Promise<TariffChangeResponseData> => {
    const response = await client.contract.orderCreateTariffChange({
      data: tariffChangeData,
    });
    assertStatus(response, 201);
    return response.data;
  },

  cancelTariffChange: async (
    tariffChangeCancelData: TariffChangeCancelRequestData,
  ): Promise<TariffChangeCancelResponseData> => {
    const response = await client.contract.cancelContractTariffChange(
      tariffChangeCancelData,
    );
    assertStatus(response, 200);
    return response.data;
  },

  previewTariffChange: async (
    tariffChangePreviewData: TariffChangePreviewRequestData,
  ): Promise<TariffChangePreviewResponseData> => {
    const response = await client.contract.orderPreviewTariffChange({
      data: tariffChangePreviewData,
    });
    assertStatus(response, 200);
    return response.data;
  },
});
