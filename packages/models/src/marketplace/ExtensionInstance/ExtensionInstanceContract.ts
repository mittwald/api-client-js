import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type {
  ExtensionInstanceContractStatus,
  ExtensionInstanceContractData,
} from "./types";

import assertObjectFound from "../../base/lib/assertObjectFound";
import { ExtensionPricePlanVariantBase } from "../Extension";
import { AggregateMetaData, Money } from "../../common";
import { ReferenceModel, WithData } from "../../base";
import { config } from "../../config";

@GhostMakerModel({
  name: "ExtensionInstanceContract",
})
export class ExtensionInstanceContract extends ReferenceModel {
  public static readonly aggregateMetaData = new AggregateMetaData(
    "extension",
    "extensionInstanceContract",
  );

  public static async find(id: string, requestConfig?: AxiosRequestConfig) {
    const data = await config.behaviors.extensionInstance.findContract(
      id,
      requestConfig,
    );

    if (data) {
      return new ExtensionInstanceContractDetailed(id, data);
    }
  }

  public static findAggregate(extensionInstanceContractId?: string) {
    return extensionInstanceContractId
      ? {
          id: extensionInstanceContractId,
          ...ExtensionInstanceContract.aggregateMetaData,
        }
      : undefined;
  }

  public static async get(id: string, requestConfig?: AxiosRequestConfig) {
    const extensionInstanceContract = await this.find(id, requestConfig);
    assertObjectFound(extensionInstanceContract, ExtensionInstanceContract, id);
    return extensionInstanceContract;
  }

  public static ofId(id: string) {
    return new ExtensionInstanceContract(id);
  }

  public async findCommon(
    requestConfig?: AxiosRequestConfig,
  ): Promise<ExtensionInstanceContractDetailed | undefined> {
    return this instanceof ExtensionInstanceContractDetailed
      ? this
      : this.findDetailed(requestConfig);
  }

  public async findDetailed(requestConfig?: AxiosRequestConfig) {
    return ExtensionInstanceContract.find(this.id, requestConfig);
  }

  public async getCommon(
    requestConfig?: AxiosRequestConfig,
  ): Promise<ExtensionInstanceContractDetailed> {
    return this instanceof ExtensionInstanceContractDetailed
      ? this
      : this.getDetailed(requestConfig);
  }

  public async getDetailed(requestConfig?: AxiosRequestConfig) {
    return ExtensionInstanceContract.get(this.id, requestConfig);
  }

  public async update(variantKey?: string) {
    return await config.behaviors.extensionInstance.updateContract(
      this.id,
      variantKey,
    );
  }
}

export class ExtensionInstanceContractDetailed extends WithData<ExtensionInstanceContractData>()(
  ExtensionInstanceContract,
) {
  public readonly contractPeriodEndDate?: DateTime;
  public override readonly data: ExtensionInstanceContractData;
  public readonly interactionDeadline?: DateTime;
  public readonly interactionRequired: boolean;
  public readonly pendingVariantChange?: {
    targetVariantKey: string;
    effectiveDate: DateTime;
  };
  public readonly price: Money;
  public readonly pricePlanVariant?: ExtensionPricePlanVariantBase;
  public readonly status?: ExtensionInstanceContractStatus;
  public readonly terminationTargetDate?: DateTime;

  public constructor(id: string, data: ExtensionInstanceContractData) {
    super(id);
    this.data = data;

    this.interactionDeadline = data.interactionDeadline
      ? DateTime.fromISO(data.interactionDeadline)
      : undefined;

    this.terminationTargetDate = data.terminationTargetDate
      ? DateTime.fromISO(data.terminationTargetDate)
      : undefined;

    this.contractPeriodEndDate = data.contractPeriodEndDate
      ? DateTime.fromISO(data.contractPeriodEndDate)
      : undefined;

    this.status = data.status;
    this.interactionRequired = data.interactionRequired;

    this.price = Money({
      amount: data.currentPrice ?? 0,
      currency: "EUR",
    });

    this.pendingVariantChange = data.pendingVariantChange
      ? {
          effectiveDate: DateTime.fromISO(
            data.pendingVariantChange.effectiveDate,
          ),
          targetVariantKey: data.pendingVariantChange.targetVariantKey,
        }
      : undefined;

    if (data.variantKey) {
      this.pricePlanVariant = new ExtensionPricePlanVariantBase({
        description: data.variantDescription,
        priceInCents: data.currentPrice ?? 0,
        isDeletionScheduled: false,
        isBookingStopped: false,
        name: data.variantName,
        key: data.variantKey,
      });
    }
  }
}
