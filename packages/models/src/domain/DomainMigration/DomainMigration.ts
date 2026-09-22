import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type {
  DomainMigrationListQueryData,
  DomainMigrationListItemData,
  DomainMigrationData,
} from "./types.js";

import { DomainMigrationDomain } from "../DomainMigrationDomain/index.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "DomainMigration",
})
export class DomainMigration extends ReferenceModel {
  public constructor(id: string) {
    super(id);
  }

  public static queryByProjectId = (projectId: string) => {
    return new DomainMigrationListQuery(projectId);
  };
}

export class DomainMigrationCommon extends WithData<
  DomainMigrationListItemData | DomainMigrationData
>()(DomainMigration) {
  public override readonly data:
    DomainMigrationListItemData | DomainMigrationData;
  public readonly domains: DomainMigrationDomain[];
  public readonly finishedAt?: DateTime;
  public constructor(data: DomainMigrationListItemData | DomainMigrationData) {
    super(data.id);
    this.data = data;
    this.domains = data.domains.map((i) => new DomainMigrationDomain(i));
    if (data.finishedAt) {
      this.finishedAt = DateTime.fromISO(data.finishedAt);
    }
  }

  public findDomain(domain: string) {
    return this.domains.find((d) => d.domain === domain);
  }

  public findFirstARecord(): string | undefined {
    const allARecords = this.domains
      .flatMap((d) => d.dnsRecords)
      .filter((r) => r.type === "A")
      .map((i) => i.value);

    const uniqueRecords = [...new Set(allARecords)];
    return uniqueRecords[0];
  }

  public includesDomain(domain: string) {
    return this.domains.some((d) => d.domain === domain);
  }
}

export class DomainMigrationListItem extends DomainMigrationCommon {
  public override readonly data: DomainMigrationListItemData;
  public constructor(data: DomainMigrationListItemData) {
    super(data);
    this.data = data;
  }
}

export class DomainMigrationListQuery extends ListQueryModel<DomainMigrationListQueryData> {
  private readonly projectId: string;

  public constructor(
    projectId: string,
    query: DomainMigrationListQueryData = {},
  ) {
    super(query);
    this.projectId = projectId;
  }

  public async execute() {
    const { totalCount, items } =
      await config.behaviors.domainMigration.queryByProjectId(this.projectId);
    return new DomainMigrationList(
      this.projectId,
      this.query,
      items.map((i) => new DomainMigrationListItem(i)),
      totalCount,
    );
  }
}

export class DomainMigrationList extends WithListData<DomainMigrationListItem>()(
  DomainMigrationListQuery,
) {
  public override readonly items: readonly DomainMigrationListItem[];
  public override readonly totalCount: number;
  public constructor(
    projectId: string,
    query: DomainMigrationListQueryData,
    items: DomainMigrationListItem[],
    totalCount: number,
  ) {
    super(projectId, query);
    this.items = Object.freeze(items);
    this.totalCount = totalCount;
  }

  public findMigrationByDomain(
    domain: string,
  ): DomainMigrationListItem | undefined {
    return this.items.find((i) => i.includesDomain(domain));
  }

  public findMostRecentFinishedMigration():
    DomainMigrationListItem | undefined {
    let migration: DomainMigrationListItem | undefined = undefined;

    for (const i of this.items) {
      if (!i.finishedAt) {
        continue;
      }
      if (!migration || !migration.finishedAt) {
        migration = i;
        continue;
      }
      if (migration.finishedAt.diff(i.finishedAt).toMillis() < 0) {
        migration = i;
      }
    }

    return migration;
  }

  public findSucceededMigrationDomain(
    domain: string,
  ): DomainMigrationDomain | undefined {
    return this.items
      .flatMap((i) => i.domains)
      .find((d) => d.domain === domain && d.state === "succeeded");
  }

  public hasPendingMigration() {
    return this.items.some((i) => !i.finishedAt);
  }
}
