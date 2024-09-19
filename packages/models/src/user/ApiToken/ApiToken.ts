import {
  DataModel,
  ReferenceModel,
  ListDataModel,
  ListQueryModel,
} from "../../base/index.js";
import {
  type AsyncResourceVariant,
  provideReact,
} from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import {
  ApiTokenCreateRequestData,
  ApiTokenData,
  ApiTokenListItemData,
  ApiTokenUpdateRequestData,
} from "./types.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { DateTime } from "luxon";

export class ApiToken extends ReferenceModel {
  public static ofId(id: string): ApiToken {
    return new ApiToken(id);
  }

  public static find = provideReact(
    async (id: string): Promise<ApiTokenDetailed | undefined> => {
      const data = await config.behaviors.apiToken.find(id);
      if (data !== undefined) {
        return new ApiTokenDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<ApiTokenDetailed> => {
      const apiToken = await this.find(id);
      assertObjectFound(apiToken, this, id);
      return apiToken;
    },
  );

  public getDetailed = provideReact(
    () => ApiToken.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<ApiTokenDetailed, []>;

  public findDetailed = provideReact(
    () => ApiToken.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<ApiTokenDetailed | undefined, []>;

  public static async create(
    data: ApiTokenCreateRequestData,
  ): Promise<ApiToken> {
    const { id } = await config.behaviors.apiToken.create(data);
    return new ApiToken(id);
  }

  public async update(data: ApiTokenUpdateRequestData): Promise<void> {
    await config.behaviors.apiToken.update(this.id, data);
  }

  public async delete(): Promise<void> {
    await config.behaviors.apiToken.delete(this.id);
  }
}

class ApiTokenCommon extends classes(
  DataModel<ApiTokenData | ApiTokenListItemData>,
  ApiToken,
) {
  public readonly expiresSoon: boolean;

  public constructor(data: ApiTokenData | ApiTokenListItemData) {
    super([data], [data.apiTokenId]);

    this.expiresSoon =
      !!data.expiresAt &&
      data.expiresAt < DateTime.now().plus({ day: 7 }).toString();
  }
}

export class ApiTokenDetailed extends classes(
  ApiTokenCommon,
  DataModel<ApiTokenData>,
) {
  public constructor(data: ApiTokenData) {
    super([data], [data]);
  }
}

export class ApiTokenListItem extends classes(
  ApiTokenCommon,
  DataModel<ApiTokenListItemData>,
) {
  public constructor(data: ApiTokenListItemData) {
    super([data], [data]);
  }
}

export class ApiTokenListQuery extends ListQueryModel<Record<string, never>> {
  public execute = provideReact(async () => {
    const { items, totalCount } = await config.behaviors.apiToken.list();

    return new ApiTokenList(
      items.map((d) => new ApiTokenListItem(d)),
      totalCount,
    );
  }, [this.queryId]);

  public refine() {
    return new ApiTokenListQuery({});
  }

  public getTotalCount = provideReact(async () => {
    const { totalCount } = await this.refine().execute();
    return totalCount;
  }, [this.queryId]);

  public findOneAndOnly = provideReact(async () => {
    const { items, totalCount } = await this.refine().execute();
    if (totalCount === 1) {
      return items[0];
    }
  }, [this.queryId]);
}

export class ApiTokenList extends ListDataModel<ApiTokenListItem> {
  public constructor(apiTokens: ApiTokenListItem[], totalCount: number) {
    super(apiTokens, totalCount);
  }
}
