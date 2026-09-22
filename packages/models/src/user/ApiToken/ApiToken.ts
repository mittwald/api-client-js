import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type {
  ApiTokenCreateRequestData,
  ApiTokenUpdateRequestData,
  ApiTokenListItemData,
  ApiTokenData,
} from "./types";

import assertObjectFound from "../../base/lib/assertObjectFound";
import { config } from "../../config";
import {
  ListQueryModel,
  ReferenceModel,
  ListDataModel,
  WithData,
} from "../../base";

@GhostMakerModel({
  name: "ApiToken",
})
export class ApiToken extends ReferenceModel {
  public static async create(data: ApiTokenCreateRequestData) {
    return await config.behaviors.apiToken.create(data);
  }

  public static async find(id: string) {
    const data = await config.behaviors.apiToken.find(id);
    if (data) {
      return new ApiTokenDetailed(data);
    }
  }

  public static async get(id: string) {
    const apiToken = await this.find(id);
    assertObjectFound(apiToken, ApiToken, id);
    return apiToken;
  }

  public static ofId(id: string) {
    return new ApiToken(id);
  }

  public static query() {
    return new ApiTokenListQuery({});
  }

  public async delete() {
    await config.behaviors.apiToken.delete(this.id);
  }

  public async findCommon(): Promise<ApiTokenCommon | undefined> {
    return this instanceof ApiTokenCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<ApiTokenDetailed | undefined> {
    return ApiToken.find(this.id);
  }

  public async getCommon(): Promise<ApiTokenCommon> {
    return this instanceof ApiTokenCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<ApiTokenDetailed> {
    return ApiToken.get(this.id);
  }

  public async update(data: ApiTokenUpdateRequestData) {
    await config.behaviors.apiToken.update(this.id, data);
  }
}

export class ApiTokenCommon extends WithData<ApiTokenListItemData | ApiTokenData>()(
  ApiToken,
) {
  public override readonly data: ApiTokenListItemData | ApiTokenData;
  public readonly description: string;
  public readonly expired: boolean;
  public readonly expiresAt?: DateTime;

  public constructor(data: ApiTokenListItemData | ApiTokenData) {
    super(data.apiTokenId);
    this.data = data;
    this.description = data.description;
    this.expiresAt = data.expiresAt
      ? DateTime.fromISO(data.expiresAt)
      : undefined;
    this.expired = !!this.expiresAt && this.expiresAt < DateTime.now();
  }
}

export class ApiTokenDetailed extends ApiTokenCommon {
  public override readonly data: ApiTokenData;
  public constructor(data: ApiTokenData) {
    super(data);
    this.data = data;
  }
}

export class ApiTokenListItem extends ApiTokenCommon {
  public override readonly data: ApiTokenListItemData;
  public constructor(data: ApiTokenListItemData) {
    super(data);
    this.data = data;
  }
}

export class ApiTokenListQuery extends ListQueryModel<Record<string, never>> {
  public async execute() {
    const { totalCount, items } = await config.behaviors.apiToken.list();

    return new ApiTokenList(
      items.map((d) => new ApiTokenListItem(d)),
      totalCount,
    );
  }}

export class ApiTokenList extends ListDataModel<ApiTokenListItem> {
  public constructor(apiTokens: ApiTokenListItem[], totalCount: number) {
    super(apiTokens, totalCount);
  }
}
