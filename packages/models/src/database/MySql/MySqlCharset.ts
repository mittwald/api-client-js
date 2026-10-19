import type {
  MySqlCharsetListQueryData,
  MySqlCharsetListItemData,
  MySqlListQueryData,
} from "./types.js";

import { ListQueryModel, WithListData, DataModel } from "../../base/index.js";
import { config } from "../../config/index.js";

export class MySqlCharset {
  public static query(query: MySqlCharsetListQueryData = {}) {
    return new MySqlCharsetListQuery(query);
  }
}

export class MySqlCharsetListItem extends DataModel<MySqlCharsetListItemData> {
  public readonly collations: string[];
  public readonly name: string;
  public constructor(data: MySqlCharsetListItemData) {
    super(data);
    this.name = data.name;
    this.collations = data.collations;
  }
}

export class MySqlCharsetListQuery extends ListQueryModel<MySqlCharsetListQueryData> {
  public constructor(query: MySqlListQueryData = {}) {
    super(query);
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.mySql.listCharsets(
      this.query,
    );
    return new MySqlCharsetList(
      this.query,
      items.map((d) => new MySqlCharsetListItem(d)),
      totalCount,
    );
  }
}

export class MySqlCharsetList extends WithListData<MySqlCharsetListItem>()(
  MySqlCharsetListQuery,
) {
  public override readonly items: readonly MySqlCharsetListItem[];
  public override readonly totalCount: number;

  public constructor(
    query: MySqlListQueryData,
    charsets: MySqlCharsetListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(charsets);
    this.totalCount = totalCount;
  }
}
