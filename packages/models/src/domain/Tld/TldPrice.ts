import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";

import type { TldPriceListQueryData, TldPriceData } from "./types.js";

import { config } from "../../config/index.js";
import { Money } from "../../common/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "TldPrice",
})
export class TldPrice extends ReferenceModel {
  public static query = (query: TldPriceListQueryData = {}) => {
    return new TldPriceListQuery(query);
  };
}

export class TldPriceListQuery extends ListQueryModel<TldPriceListQueryData> {
  public constructor(query: TldPriceListQueryData = {}) {
    super(query);
  }

  public async execute() {
    const { ...query } = this.query;
    const { totalCount, items } = await config.behaviors.tld.queryPrices({
      ...query,
    });

    return new TldPriceList(
      this.query,
      items.map((t) => new TldPriceListItem(t)),
      totalCount,
    );
  }
}

export class TldPriceCommon extends WithData<TldPriceData>()(TldPrice) {
  public readonly contractDurationInMonth: number;
  public override readonly data: TldPriceData;
  public readonly description?: string;
  public readonly name?: string;
  public readonly price?: Money;
  public readonly tld: string;
  public constructor(data: TldPriceData) {
    super(data.articleId);
    this.data = data;

    const topLevelAttr = (
      data.attributes as { value: string; key: string }[] | undefined
    )?.find((a) => a.key === "toplevel");

    this.tld = topLevelAttr?.value ?? "";
    if (data.price) {
      this.price = Money({ amount: data.price, currency: "EUR" });
    }
    this.name = data.name;
    this.description = data.description;
    this.contractDurationInMonth = data.contractDurationInMonth;
  }
}

export class TldPriceListItem extends TldPriceCommon {
  public constructor(data: TldPriceData) {
    super(data);
  }
}

export class TldPriceList extends WithListData<TldPriceListItem>()(
  TldPriceListQuery,
) {
  private static readonly SORTED_PRIO_TLDS = [
    "de",
    "com",
    "at",
    "eu",
    "net",
    "info",
    "org",
    "ch",
    "biz",
    "shop",
  ];
  public override readonly items: readonly TldPriceListItem[];
  public override readonly totalCount: number;

  public constructor(
    data: TldPriceListQueryData,
    tlds: TldPriceListItem[],
    totalCount: number,
  ) {
    super(data);
    this.items = Object.freeze(tlds);
    this.totalCount = totalCount;
  }

  public readonly findByTld = (tld: string) => {
    if (tld === "") {
      return undefined;
    }
    return this.items.find((i) => i.tld === tld);
  };

  public readonly sort = () => {
    const sortedItems = [...this.items].sort((left, right) => {
      const leftIndex = TldPriceList.SORTED_PRIO_TLDS.indexOf(left.tld ?? "");
      const rightIndex = TldPriceList.SORTED_PRIO_TLDS.indexOf(right.tld ?? "");

      const leftIsPrio = leftIndex !== -1;
      const rightIsPrio = rightIndex !== -1;

      // Priority TLDs first
      if (leftIsPrio && !rightIsPrio) return -1;
      if (!leftIsPrio && rightIsPrio) return 1;

      // Priority: sort by priority order
      if (leftIsPrio && rightIsPrio) return leftIndex - rightIndex;

      // Non-priority: sort alphabetically
      const leftTld = left.tld ?? "";
      const rightTld = right.tld ?? "";
      return leftTld.localeCompare(rightTld);
    });

    return new TldPriceList(this.query, sortedItems, this.totalCount);
  };
}
