import { classes } from "polytype";
import {
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import {
  DnsZoneData,
  DnsZoneListItemData,
  DnsZoneListQueryData,
  DnsZoneListQueryModelData,
} from "./types.js";
import { AsyncResourceVariant, provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import { Project } from "../../project/index.js";
import assertObjectFound from "../../base/assertObjectFound.js";

export class DnsZone extends ReferenceModel {
  public static ofId(id: string): DnsZone {
    return new DnsZone(id);
  }

  public static find = provideReact(
    async (id: string): Promise<DnsZoneDetailed | undefined> => {
      const data = await config.behaviors.zones.find(id);
      if (data !== undefined) {
        return new DnsZoneDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<DnsZoneDetailed> => {
      const zone = await this.find(id);
      assertObjectFound(zone, this, id);
      return zone;
    },
  );

  public static query(project: Project, query: DnsZoneListQueryData = {}) {
    return new DnsZoneListQuery(project, query);
  }

  public getDetailed = provideReact(
    () => DnsZone.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<DnsZoneDetailed>>;

  public findDetailed = provideReact(
    () => DnsZone.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<DnsZoneDetailed | undefined>>;
}

export class DnsZoneCommon extends classes(DataModel<DnsZoneData>, DnsZone) {
  public constructor(data: DnsZoneData) {
    super([data], [data.id]);
  }
}

export class DnsZoneDetailed extends classes(
  DnsZoneCommon,
  DataModel<DnsZoneData>,
) {
  public constructor(data: DnsZoneData) {
    super([data], [data]);
  }
}

export class DnsZoneListQuery extends ListQueryModel<DnsZoneListQueryModelData> {
  public readonly project: Project;
  public constructor(project: Project, query: DnsZoneListQueryModelData = {}) {
    super(query, { dependencies: [project.id] });
    this.project = project;
  }

  public refine(query: DnsZoneListQueryModelData = {}) {
    return new DnsZoneListQuery(this.project, {
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { items, totalCount } = await config.behaviors.zones.query(
      this.project.id,
      {
        ...this.query,
      },
    );
    return new DnsZoneList(
      this.project,
      this.query,
      items.map((z) => new DnsZoneListItem(z)),
      totalCount,
    );
  }, [this.queryId]);
}

export class DnsZoneListItem extends classes(
  DnsZoneCommon,
  DataModel<DnsZoneListItemData>,
) {
  public constructor(data: DnsZoneListItemData) {
    super([data], [data]);
  }
}

export class DnsZoneList extends classes(
  DnsZoneListQuery,
  ListDataModel<DnsZoneListItem>,
) {
  public constructor(
    project: Project,
    query: DnsZoneListQueryModelData,
    zones: DnsZoneListItem[],
    totalCount: number,
  ) {
    super([project, query], [zones, totalCount]);
  }
}
