import { DateTime } from "luxon";

import type { HostingOrderRequest } from "../Request/HostingOrderRequest.js";
import type { HostingOrderPreviewData } from "../types.js";

import { DataModel } from "../../../base/index.js";
import { Money } from "../../../common/index.js";

export class HostingOrderPreview extends DataModel<HostingOrderPreviewData> {
  public readonly freeTrialUntil?: DateTime;
  public readonly machineTypePrice: Money;
  public readonly request: HostingOrderRequest;
  public readonly storagePrice: Money;
  public readonly totalPrice: Money;

  public constructor(
    request: HostingOrderRequest,
    data: HostingOrderPreviewData,
  ) {
    super(data);
    this.request = request;
    this.totalPrice = Money({ amount: data.totalPrice, currency: "EUR" });
    this.storagePrice = Money({ amount: data.storagePrice, currency: "EUR" });
    this.machineTypePrice = Money({
      amount: data.machineTypePrice,
      currency: "EUR",
    });
    this.freeTrialUntil = data.freeTrialUntil
      ? DateTime.fromISO(data.freeTrialUntil)
      : undefined;
  }

  public async getNextPossibleDowngradeDate() {
    const contract = this.request.contract;
    if (!contract) {
      return;
    }

    const detailedContract = await contract.getDetailed();

    const isDowngrade = this.totalPrice.lessThan(
      detailedContract.baseItem.totalPrice,
    );

    return isDowngrade
      ? detailedContract.baseItem.nextPossibleDowngradeDate
      : undefined;
  }
}
