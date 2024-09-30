import { MittwaldAPIV2 } from "@mittwald/api-client";

export type TariffChangeRequestData =
  MittwaldAPIV2.Operations.OrderCreateTariffChange.RequestData;

export type TariffChangeResponseData =
  MittwaldAPIV2.Operations.OrderCreateTariffChange.ResponseData<201>;

export type TariffChangeCancelRequestData =
  MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTariffChange.Delete.Parameters.Path;

export type TariffChangeCancelResponseData =
  MittwaldAPIV2.Operations.ContractCancelContractTariffChange.ResponseData;

export type TariffChangePreviewRequestData =
  MittwaldAPIV2.Operations.OrderPreviewTariffChange.RequestData;
export type TariffChangePreviewResponseData =
  MittwaldAPIV2.Operations.OrderPreviewTariffChange.ResponseData;
