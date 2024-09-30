import {
  TariffChangeCancelRequestData,
  TariffChangeCancelResponseData,
  TariffChangePreviewRequestData,
  TariffChangePreviewResponseData,
  TariffChangeRequestData,
  TariffChangeResponseData,
} from "../types.js";

export interface TariffChangeBehaviors {
  createTariffChange: (
    tariffChangeData: TariffChangeRequestData,
  ) => Promise<TariffChangeResponseData>;

  cancelTariffChange: (
    tariffChangeCancelData: TariffChangeCancelRequestData,
  ) => Promise<TariffChangeCancelResponseData>;

  previewTariffChange: (
    tariffChangePreviewData: TariffChangePreviewRequestData,
  ) => Promise<TariffChangePreviewResponseData>;
}
