import type { ContributorExtensionDetailed } from "../ContributorExtension/index.js";
import type { ExtensionDetailed } from "./Extension.js";
import type {
  ExtensionPricePlanVariantData,
  MarketplacePricePlanDetails,
  ExtensionPricePlanData,
} from "./types.js";

import { ExtensionPricePlanVariantDetailed } from "./ExtensionPricePlanVariant.js";
import { Money } from "../../common/index.js";

type ExtensionPricePlanVariants = [
  ExtensionPricePlanVariantDetailed,
  ExtensionPricePlanVariantDetailed,
  ...ExtensionPricePlanVariantDetailed[],
];

export const extensionVariantsPricePlanFactory = (
  extension: ContributorExtensionDetailed | ExtensionDetailed,
  data: ExtensionPricePlanData = [],
  pricingDetails?: MarketplacePricePlanDetails,
) => {
  if (data.length === 0) {
    return new ExtensionFreePricePlan(extension, data);
  }

  const bookableData = data.filter((d) => !d.isBookingStopped);

  if (bookableData.length === 0) {
    return new ExtensionNotBookablePricePlan(extension, data, pricingDetails);
  }

  if (bookableData.length === 1) {
    if (bookableData[0]!.priceInCents === 0) {
      return new ExtensionFreePricePlan(
        extension,
        data,
        bookableData[0],
        pricingDetails,
      );
    }
    return new ExtensionSinglePricePlan(
      extension,
      Money({ amount: bookableData[0]!.priceInCents, currency: "EUR" }),
      data,
      bookableData[0]!,
      pricingDetails,
    );
  }

  return new ExtensionVariantsPricePlan(extension, data, pricingDetails);
};

export abstract class ExtensionPricePlan {
  public readonly allVariants: ExtensionPricePlanVariantDetailed[];
  public readonly extension: ContributorExtensionDetailed | ExtensionDetailed;
  public readonly pricingDetails?: MarketplacePricePlanDetails;

  public constructor(
    extension: ContributorExtensionDetailed | ExtensionDetailed,
    data: ExtensionPricePlanVariantData[],
    pricingDetails?: MarketplacePricePlanDetails,
  ) {
    this.extension = extension;
    this.allVariants = data
      .sort((a, b) => a.priceInCents - b.priceInCents)
      .map((d) => new ExtensionPricePlanVariantDetailed(this, d));
    this.pricingDetails = pricingDetails;
  }

  public getVariant(
    key: string,
  ): ExtensionPricePlanVariantDetailed | undefined {
    return this.allVariants.find((variant) => variant.key === key);
  }
}

export class ExtensionFreePricePlan extends ExtensionPricePlan {
  public readonly freeVariant?: ExtensionPricePlanVariantDetailed;
  public constructor(
    extension: ContributorExtensionDetailed | ExtensionDetailed,
    data: ExtensionPricePlanVariantData[],
    freeVariant?: ExtensionPricePlanVariantData,
    pricingDetails?: MarketplacePricePlanDetails,
  ) {
    super(extension, data, pricingDetails);
    if (freeVariant) {
      this.freeVariant = new ExtensionPricePlanVariantDetailed(
        this,
        freeVariant,
      );
    }
  }
}

export class ExtensionNotBookablePricePlan extends ExtensionPricePlan {
  public constructor(
    extension: ContributorExtensionDetailed | ExtensionDetailed,
    data: ExtensionPricePlanVariantData[],
    pricingDetails?: MarketplacePricePlanDetails,
  ) {
    super(extension, data, pricingDetails);
  }
}

export class ExtensionVariantsPricePlan extends ExtensionPricePlan {
  public readonly bookableVariants: ExtensionPricePlanVariants;

  public constructor(
    extension: ContributorExtensionDetailed | ExtensionDetailed,
    data: ExtensionPricePlanVariantData[],
    pricingDetails?: MarketplacePricePlanDetails,
  ) {
    super(extension, data, pricingDetails);

    this.bookableVariants = this.allVariants.filter(
      (variant) => !variant.isBookingStopped,
    ) as ExtensionPricePlanVariants;
  }

  public getBookableVariant(
    key: string,
  ): ExtensionPricePlanVariantDetailed | undefined {
    return this.bookableVariants.find((variant) => variant.key === key);
  }

  public getCheapestBookableVariant(): ExtensionPricePlanVariantDetailed {
    return this.bookableVariants.reduce((min, v) =>
      v.price.getAmount() < min.price.getAmount() ? v : min,
    );
  }
}

export class ExtensionSinglePricePlan extends ExtensionPricePlan {
  public readonly bookableVariant: ExtensionPricePlanVariantDetailed;
  public readonly price: Money;

  public constructor(
    extension: ContributorExtensionDetailed | ExtensionDetailed,
    price: Money,
    data: ExtensionPricePlanVariantData[],
    bookableVariant: ExtensionPricePlanVariantData,
    pricingDetails?: MarketplacePricePlanDetails,
  ) {
    super(extension, data, pricingDetails);
    this.price = price;
    this.bookableVariant = new ExtensionPricePlanVariantDetailed(
      this,
      bookableVariant,
    );
  }

  public getBookableVariant(): ExtensionPricePlanVariantDetailed | undefined {
    return this.bookableVariant;
  }
}
