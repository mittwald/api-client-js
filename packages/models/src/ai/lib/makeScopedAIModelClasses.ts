import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type { AIModelLabel } from "../AIModel/index.js";

import { ListQueryModel, ReferenceModel, WithListData, WithData } from "../../base/index.js";

type AIDetailedModelStatus =
  MittwaldAPIV2.Components.Schemas.AihostingDetailedModelStatus;

/**
 * The detailed-model shape shared by the customer- and project-scoped AI-model
 * list endpoints (`aiHosting.{customer,project}GetDetailedModels`). Both scopes
 * return the identical payload; only the endpoint differs.
 */
export interface ScopedAIDetailedModelData {
  status: AIDetailedModelStatus;
  termsOfServiceLink: string;
  replacesModelName?: string;
  label?: AIModelLabel;
  displayName: string;
  removalAt?: string;
  activeAt: string;
  docLink: string;
  name: string;
}

export interface ScopedAIModelListBehavior<TData, TQuery> {
  list: (
    scopeId: string,
    query?: TQuery,
  ) => Promise<{ totalCount: number; items: TData[]; }>;
}

/**
 * Builds the identical `ReferenceModel → Common → ListItem` + `ListQuery → List`
 * class family for a scoped AI-model context. `CustomerAIModel` and
 * `ProjectAIModel` are 100 % identical apart from the ghost name and which
 * scoped `list` behavior they call, so both are produced from this one factory
 * (DDD-review finding #5). The generic keeps each scope's public data type.
 */
export const makeScopedAIModelClasses = <
  TData extends ScopedAIDetailedModelData,
  TQuery extends object,
>(cfg: {
  resolveBehavior: () => ScopedAIModelListBehavior<TData, TQuery>;
  ghostName: string;
}) => {
  @GhostMakerModel({
    name: cfg.ghostName,
  })
  class ScopedAIModel extends ReferenceModel {
    public constructor(id: string) {
      super(id);
    }

    public static query = (scopeId: string, query?: TQuery) => {
      return new ScopedAIModelListQuery(scopeId, query);
    };
  }

  class ScopedAIModelCommon extends WithData<TData>()(ScopedAIModel) {
    public readonly activeAt: DateTime;
    public override readonly data: TData;
    public readonly displayName: string;
    public readonly documentationLink: string;
    public readonly label?: AIModelLabel;
    public readonly name: string;
    public readonly removalAt: DateTime | undefined;
    public readonly replacesModelName: string | undefined;
    public readonly status: AIDetailedModelStatus;
    public readonly termsOfServiceLink: string;

    public constructor(data: TData) {
      super(data.name);
      this.data = data;
      this.name = data.name;
      this.displayName = data.displayName;
      this.documentationLink = data.docLink;
      this.termsOfServiceLink = data.termsOfServiceLink;
      this.status = data.status;
      this.activeAt = DateTime.fromISO(data.activeAt);
      this.removalAt = data.removalAt
        ? DateTime.fromISO(data.removalAt)
        : undefined;
      this.replacesModelName = data.replacesModelName;
      this.label = data.label;
    }
  }

  class ScopedAIModelListItem extends ScopedAIModelCommon {
    public override readonly data: TData;
    public constructor(data: TData) {
      super(data);
      this.data = data;
    }
  }

  class ScopedAIModelListQuery extends ListQueryModel<TQuery> {
    private readonly scopeId: string;
    public constructor(scopeId: string, query: TQuery = {} as TQuery) {
      super(query);
      this.scopeId = scopeId;
    }

    public async execute() {
      const { totalCount, items } = await cfg
        .resolveBehavior()
        .list(this.scopeId, this.query);

      return new ScopedAIModelList(
        this.scopeId,
        this.query,
        items.map((item) => new ScopedAIModelListItem(item)),
        totalCount,
      );
    }
  }

  class ScopedAIModelList extends WithListData<ScopedAIModelListItem>()(
    ScopedAIModelListQuery,
  ) {
    public override readonly items: readonly ScopedAIModelListItem[];
    public override readonly totalCount: number;
    public constructor(
      scopeId: string,
      query: TQuery,
      items: ScopedAIModelListItem[],
      totalCount: number,
    ) {
      super(scopeId, query);
      this.items = Object.freeze(items);
      this.totalCount = totalCount;
    }
  }

  return {
    ScopedAIModelListQuery,
    ScopedAIModelListItem,
    ScopedAIModelCommon,
    ScopedAIModelList,
    ScopedAIModel,
  };
};
