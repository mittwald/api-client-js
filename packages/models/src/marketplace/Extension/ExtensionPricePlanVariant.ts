import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type { ContributorExtension } from "../ContributorExtension";
import type { ExtensionPricePlan } from "./ExtensionPricePlan";
import type {
  ExtensionPricePlanVariantBaseData,
  ExtensionPricePlanVariantData,
} from "./types";

import { ReferenceModel, DataModel, WithData } from "../../base/index";
import assertObjectFound from "../../base/lib/assertObjectFound";
import { Extension } from "./Extension";
import { Money } from "../../common";

export class ExtensionPricePlanVariantBase extends DataModel<ExtensionPricePlanVariantBaseData> {
  public readonly deletionDeadline?: DateTime;
  public readonly description?: string;
  public readonly isBookingStopped?: boolean;
  public readonly isDeletionScheduled?: boolean;
  public readonly key: string;
  public readonly name?: string;
  public readonly price: Money;

  public constructor(data: ExtensionPricePlanVariantBaseData) {
    super(data);
    this.key = data.key;
    this.description = data.description;
    this.name = data.name;
    this.price = Money({ amount: data.priceInCents, currency: "EUR" });
    this.isBookingStopped = data.isBookingStopped;
    this.isDeletionScheduled = data.isDeletionScheduled;
    this.deletionDeadline = data.deletionDeadline
      ? DateTime.fromISO(data.deletionDeadline)
      : undefined;
  }
}

@GhostMakerModel({
  name: "ExtensionPricePlanVariant",
})
export class ExtensionPricePlanVariant extends ReferenceModel {
  public readonly extension: ContributorExtension | Extension;
  public readonly key: string;

  public constructor(extension: ContributorExtension | Extension, key: string) {
    super(`${extension.id}::${key}`);
    this.extension = extension;
    this.key = key;
  }

  public static async find(extensionId: string, key: string) {
    const extension = await Extension.get(extensionId);
    if (!extension.pricing) {
      return undefined;
    }
    return extension.pricing.getVariant(key);
  }

  public static async get(extensionId: string, key: string) {
    const detailed = await ExtensionPricePlanVariant.find(extensionId, key);
    assertObjectFound(
      detailed,
      ExtensionPricePlanVariant,
      `${extensionId}::${key}`,
    );
    return detailed;
  }

  public static ofId(extension: Extension | string, key: string) {
    return new ExtensionPricePlanVariant(
      typeof extension === "string" ? Extension.ofId(extension) : extension,
      key,
    );
  }

  public async findCommon() {
    return this instanceof ExtensionPricePlanVariantDetailed
      ? this
      : this.findDetailed();
  }

  public async findDetailed() {
    return ExtensionPricePlanVariant.find(this.extension.id, this.key);
  }

  public async getCommon() {
    return this instanceof ExtensionPricePlanVariantDetailed
      ? this
      : this.getDetailed();
  }

  public async getDetailed() {
    return ExtensionPricePlanVariant.get(this.extension.id, this.key);
  }
}

export class ExtensionPricePlanVariantDetailed extends WithData<ExtensionPricePlanVariantData>()(
  ExtensionPricePlanVariant,
) {
  public override readonly data: ExtensionPricePlanVariantData;
  public readonly deletionDeadline?: DateTime;
  public readonly description?: string;
  public readonly isBookingStopped?: boolean;
  public readonly isDeletionScheduled?: boolean;
  public readonly name?: string;
  public readonly plan: ExtensionPricePlan;
  public readonly price: Money;

  public constructor(
    plan: ExtensionPricePlan,
    data: ExtensionPricePlanVariantData,
  ) {
    super(plan.extension, data.key);
    this.data = data;
    this.description = data.description;
    this.name = data.name;
    this.price = Money({ amount: data.priceInCents, currency: "EUR" });
    this.isBookingStopped = data.isBookingStopped;
    this.isDeletionScheduled = data.isDeletionScheduled;
    this.deletionDeadline = data.deletionDeadline
      ? DateTime.fromISO(data.deletionDeadline)
      : undefined;
    this.plan = plan;
  }
}
