import { ReferenceModel } from "../../base/ReferenceModel.js";
import { provideReact } from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import {
  ApiTokenCreateData,
  ApiTokenData,
  ApiTokenListItemData,
  ApiTokenUpdateData,
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

  public static list = provideReact(
    async (): Promise<Readonly<Array<ApiTokenListItem>>> => {
      const data = await config.behaviors.apiToken.list();

      return Object.freeze(data.map((d) => new ApiTokenListItem(d)));
    },
  );

  public static async create(data: ApiTokenCreateData): Promise<ApiToken> {
    const { id } = await config.behaviors.apiToken.create(data);

    return new ApiToken(id);
  }

  public async update(data: ApiTokenUpdateData): Promise<void> {
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
