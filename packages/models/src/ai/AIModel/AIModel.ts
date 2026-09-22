import { GhostMakerModel } from "@mittwald/react-ghostmaker";

import type {
  AIModelListQueryData,
  AIModelListItemData,
  AIModelLabel,
  AIModelData,
} from "./types.js";

import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "AIModel",
})
export class AIModel extends ReferenceModel {
  public constructor(id: string) {
    super(id);
  }

  public static query = () => {
    return new AIModelListQuery();
  };
}

export class AIModelCommon extends WithData<
  AIModelListItemData | AIModelData
>()(AIModel) {
  public override readonly data: AIModelListItemData | AIModelData;
  public readonly displayName: string;
  public readonly documentationLink: string;
  public readonly label?: AIModelLabel;
  public readonly name: string;
  public readonly termsOfServiceLink: string;
  public readonly tokenFactor: number;

  public constructor(data: AIModelListItemData | AIModelData) {
    super(data.name);
    this.data = data;
    this.name = data.name;
    this.displayName = data.displayName;
    this.documentationLink = data.docLink;
    this.termsOfServiceLink = data.termsOfServiceLink;
    this.tokenFactor = data.tokenFactor;
    this.label = data.label;
  }
}

export class AIModelDetailed extends AIModelCommon {
  public override readonly data: AIModelData;
  public constructor(data: AIModelData) {
    super(data);
    this.data = data;
  }
}

export class AIModelListItem extends AIModelCommon {
  public override readonly data: AIModelListItemData;
  public constructor(data: AIModelListItemData) {
    super(data);
    this.data = data;
  }
}

export class AIModelListQuery extends ListQueryModel<AIModelListQueryData> {
  public constructor(query: AIModelListQueryData = {}) {
    super(query);
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.aiModel.list(
      this.query,
    );

    return new AIModelList(
      this.query,
      items.map((item) => new AIModelListItem(item)),
      totalCount,
    );
  }
}

export class AIModelList extends WithListData<AIModelListItem>()(
  AIModelListQuery,
) {
  public override readonly items: readonly AIModelListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: AIModelListQueryData,
    items: AIModelListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(items);
    this.totalCount = totalCount;
  }
}
