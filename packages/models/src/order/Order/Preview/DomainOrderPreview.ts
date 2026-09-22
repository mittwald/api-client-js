import type { DomainOrderRequest } from "../Request/DomainOrderRequest";

import { type DomainOrderPreviewData } from "../types";
import { DataModel } from "../../../base";
import { Money } from "../../../common";

export class DomainOrderPreview extends DataModel<DomainOrderPreviewData> {
  public readonly authCode?: string;
  public readonly domain: string;
  public readonly domainContractDuration: number;
  public readonly domainPrice: Money;
  public readonly feePrice: Money;
  public readonly request: DomainOrderRequest;
  public readonly totalPrice: Money;

  public constructor(
    request: DomainOrderRequest,
    data: DomainOrderPreviewData,
  ) {
    super(data);
    this.request = request;
    this.domainPrice = Money({ amount: data.domainPrice, currency: "EUR" });
    this.totalPrice = Money({ amount: data.totalPrice, currency: "EUR" });
    this.feePrice = Money({
      amount: data.feePrice,
      currency: "EUR",
    });
    this.domainContractDuration = data.domainContractDuration;
    this.domain = request.domain;
    this.authCode = request.authCode;
  }
}
