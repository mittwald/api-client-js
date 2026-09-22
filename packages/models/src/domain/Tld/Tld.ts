import { GhostMakerModel } from "@mittwald/react-ghostmaker";

import type {
  TransferAuthenticationData,
  TldListQueryData,
  TldListItemData,
  TldData,
} from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "Tld",
})
export class Tld extends ReferenceModel {
  public static async find(tld: string) {
    const data = await config.behaviors.tld.query({});
    const item = data.items.find((i) => i.tld === tld);
    if (item) {
      return new TldDetailed(item);
    }
  }

  public static async get(tld: string) {
    const item = await Tld.find(tld);
    assertObjectFound(item, Tld, tld);
    return item;
  }

  public static async getContactSchemasForTld(tld: string) {
    return await config.behaviors.tld.getContactSchemas(tld);
  }

  public static ofTld(tld: string) {
    return new Tld(tld);
  }

  public static query = (query: TldListQueryData = {}) => {
    return new TldListQuery(query);
  };

  public async findCommon(): Promise<TldCommon | undefined> {
    return this instanceof TldCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<TldDetailed | undefined> {
    return Tld.find(this.id);
  }

  public async getCommon(): Promise<TldCommon> {
    return this instanceof TldCommon ? this : this.getDetailed();
  }

  public async getContactSchemas() {
    return await config.behaviors.tld.getContactSchemas(this.id);
  }

  public async getDetailed(): Promise<TldDetailed> {
    return Tld.get(this.id);
  }
}

export class TldCommon extends WithData<TldData>()(Tld) {
  public override readonly data: TldData;
  public readonly irtp: boolean;
  public readonly rgpDays: number;
  public readonly tld: string;
  public readonly transferAuthentication: TransferAuthenticationData;
  public constructor(data: TldData) {
    super(data.tld);
    this.data = data;
    this.tld = data.tld;
    this.irtp = data.irtp;
    this.rgpDays = data.rgpDays;
    this.transferAuthentication = data.transferAuthentication;
  }
}

export class TldDetailed extends TldCommon {
  public constructor(data: TldData) {
    super(data);
  }
}

export class TldListItem extends TldCommon {
  public constructor(data: TldListItemData) {
    super(data);
  }
}

export class TldListQuery extends ListQueryModel<TldListQueryData> {
  public constructor(query: TldListQueryData = {}) {
    super(query);
  }

  public async execute() {
    const { ...query } = this.query;
    const { totalCount, items } = await config.behaviors.tld.query({
      ...query,
    });

    return new TldList(
      this.query,
      items.map((t) => new TldListItem(t)),
      totalCount,
    );
  }

  public refine(query: TldListQueryData) {
    return new TldListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class TldList extends WithListData<TldListItem>()(TldListQuery) {
  public override readonly items: readonly TldListItem[];
  public override readonly totalCount: number;
  public constructor(
    data: TldListQueryData,
    tlds: TldListItem[],
    totalCount: number,
  ) {
    super(data);
    this.items = Object.freeze(tlds);
    this.totalCount = totalCount;
  }

  public includesTld(tld: string) {
    return this.items.some((i) => i.tld === tld);
  }
}
