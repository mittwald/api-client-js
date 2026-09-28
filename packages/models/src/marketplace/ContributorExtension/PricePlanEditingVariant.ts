import { DateTime } from "luxon";

import type { ExtensionPricePlanVariantDetailed } from "../Extension/index.js";
import type { PricePlanEditingVariantData } from "./types.js";

import { DataModel } from "../../base/index.js";
import { Money } from "../../common/index.js";

export class PricePlanEditingVariant extends DataModel<PricePlanEditingVariantData> {
  public readonly deletionDeadline?: DateTime;
  public readonly description?: string;
  public readonly descriptionChangeType:
    | "FEATURE_SET_UNCHANGED"
    | "FEATURE_SET_MODIFIED";
  public readonly isBookingStopped: boolean;
  public readonly isDeletionScheduled: boolean;
  public readonly isNew: boolean;
  public readonly key: string;
  public readonly name?: string;
  public readonly price: Money;

  public constructor(data: PricePlanEditingVariantData, isNew: boolean) {
    super(data);
    this.description = data.description;
    this.key = data.key;
    this.name = data.name;
    this.price = Money({ amount: data.priceInCents, currency: "EUR" });
    this.descriptionChangeType =
      data.descriptionChangeType ?? "FEATURE_SET_UNCHANGED";
    this.isNew = isNew;
    this.isBookingStopped = data.isBookingStopped ?? isNew;
    this.isDeletionScheduled = data.isDeletionScheduled ?? isNew;
    this.deletionDeadline = data.deletionDeadline
      ? DateTime.fromISO(data.deletionDeadline)
      : undefined;
  }

  public static fromPricePlanVariant(
    variant: ExtensionPricePlanVariantDetailed,
  ) {
    return new PricePlanEditingVariant(
      {
        deletionDeadline: variant.deletionDeadline?.toISO() ?? undefined,
        isDeletionScheduled: variant.isDeletionScheduled,
        descriptionChangeType: "FEATURE_SET_UNCHANGED",
        isBookingStopped: variant.isBookingStopped,
        priceInCents: variant.price.getAmount(),
        description: variant.description,
        name: variant.name,
        key: variant.key,
      },
      false,
    );
  }
}
