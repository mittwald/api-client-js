import { DataModel, ReferenceModel } from "../../base/index.js";
import { provideReact } from "../../react/index.js";
import {
  TariffChangeCancelRequestData,
  TariffChangeCancelResponseData,
  TariffChangePreviewRequestData,
  TariffChangePreviewResponseData,
  TariffChangeRequestData,
  TariffChangeResponseData,
} from "./types.js";
import { classes } from "polytype";
import { config } from "../../config/config.js";

export class TariffChange extends ReferenceModel {
  ofId(id: string): TariffChange {
    return new TariffChange(id);
  }

  public static createTariffChange = provideReact(
    async (
      tariffChangeData: TariffChangeRequestData,
    ): Promise<TariffChangeDetailed> => {
      const response =
        await config.behaviors.tariffChange.createTariffChange(
          tariffChangeData,
        );
      return new TariffChangeDetailed(response);
    },
  );

  public static cancelTariffChange = provideReact(
    async (
      tariffChangeCancelData: TariffChangeCancelRequestData,
    ): Promise<TariffChangeCancelResponseData> => {
      const response = await config.behaviors.tariffChange.cancelTariffChange(
        tariffChangeCancelData,
      );
      return new TariffChangeCancelDetailed(response);
    },
  );

  public static previewTariffChange = provideReact(
    async (
      tariffChangePreviewData: TariffChangePreviewRequestData,
    ): Promise<TariffChangePreviewResponseData> => {
      const response = await config.behaviors.tariffChange.previewTariffChange(
        tariffChangePreviewData,
      );
      return new TariffChangePreviewDetailed(response);
    },
  );

  constructor(id: string) {
    super(id);
  }
}

class TariffChangeCommon extends classes(
  DataModel<TariffChangeResponseData>,
  TariffChange,
) {
  public constructor(data: TariffChangeResponseData) {
    super([data], [data.orderId]);
  }
}

class TariffChangeDetailed extends TariffChangeCommon {
  public constructor(orderId: TariffChangeResponseData) {
    super(orderId);
  }
}

class TariffChangeCancelCommon extends classes(
  DataModel<TariffChangeCancelResponseData>,
  TariffChange,
) {
  public readonly contractId?: string;
  public readonly contractItemId?: string;
  public readonly isCancelled?: boolean;
  public constructor(data: TariffChangeCancelResponseData) {
    super([data]);
    this.contractId = data.contractId;
    this.contractItemId = data.contractItemId;
    this.isCancelled = data.isCancelled;
  }
}

class TariffChangeCancelDetailed extends TariffChangeCancelCommon {
  public constructor(data: TariffChangeCancelResponseData) {
    super(data);
  }
}

class TariffChangePreviewCommon extends classes(
  DataModel<TariffChangePreviewResponseData>,
  TariffChange,
) {
  public readonly totalPrice: number;
  public readonly storagePrice: number;
  public readonly machineTypePrice: number;
  public constructor(data: TariffChangePreviewResponseData) {
    super([data]);
    this.totalPrice = data.totalPrice;
    this.storagePrice = data.storagePrice;
    this.machineTypePrice = data.machineTypePrice;
  }
}

class TariffChangePreviewDetailed extends TariffChangePreviewCommon {
  public constructor(data: TariffChangePreviewResponseData) {
    super(data);
  }
}
