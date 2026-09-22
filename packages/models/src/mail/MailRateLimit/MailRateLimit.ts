import { GhostMakerModel } from "@mittwald/react-ghostmaker";

import type { MailRateLimitQueryData, MailRateLimitData } from "./types";

import assertObjectFound from "../../base/lib/assertObjectFound";
import { config } from "../../config";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  WithData,
} from "../../base";

@GhostMakerModel({
  name: "MailRateLimit",
})
export class MailRateLimit extends ReferenceModel {
  public static warningThreshold = 5000;

  public constructor(id: string) {
    super(id);
  }

  public static async find(id: string) {
    const data = await config.behaviors.mailRateLimit.find(id);
    if (data !== undefined) {
      return new MailRateLimitDetailed(data);
    }
  }

  public static async get(id: string) {
    const rateLimit = await MailRateLimit.find(id);
    assertObjectFound(rateLimit, MailRateLimit, id);
    return rateLimit;
  }

  public static ofId(id: string) {
    return new MailRateLimit(id);
  }

  public static query() {
    return new MailRateLimitListQuery({});
  }

  public async findCommon(): Promise<MailRateLimitCommon | undefined> {
    return this instanceof MailRateLimitCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<MailRateLimitDetailed | undefined> {
    return MailRateLimit.find(this.id);
  }

  public async getCommon(): Promise<MailRateLimitCommon> {
    return this instanceof MailRateLimitCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<MailRateLimitDetailed> {
    return MailRateLimit.get(this.id);
  }
}

export class MailRateLimitCommon extends WithData<MailRateLimitData>()(
  MailRateLimit,
) {
  public override readonly data: MailRateLimitData;
  public readonly rateLimit: number;
  public constructor(data: MailRateLimitData) {
    super(data.id);
    this.data = data;
    this.rateLimit = data.rateLimit;
  }
}

export class MailRateLimitDetailed extends MailRateLimitCommon {
  public constructor(data: MailRateLimitData) {
    super(data);
  }
}

export class MailRateLimitListItem extends MailRateLimitCommon {
  public constructor(data: MailRateLimitData) {
    super(data);
  }
}

export class MailRateLimitListQuery extends ListQueryModel<MailRateLimitQueryData> {
  public async execute() {
    const { totalCount, items } = await config.behaviors.mailRateLimit.query();
    return new MailRateLimitList(
      this.query,
      items.map((i) => new MailRateLimitListItem(i)),
      totalCount,
    );
  }
}

export class MailRateLimitList extends WithListData<MailRateLimitListItem>()(
  MailRateLimitListQuery,
) {
  public override readonly items: readonly MailRateLimitListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: MailRateLimitQueryData,
    rateLimits: MailRateLimitListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(rateLimits);
    this.totalCount = totalCount;
  }
}
