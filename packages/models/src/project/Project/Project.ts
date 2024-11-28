import {
  ProjectData,
  ProjectListItemData,
  ProjectListQueryModelData,
} from "./types.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import assertObjectFound from "../../base/assertObjectFound.js";
import { Server } from "../../server/index.js";
import { AsyncResourceVariant, provideReact } from "../../react/index.js";
import { Customer } from "../../customer/index.js";
import {
  Domain,
  DomainListQuery,
  Ingress,
  IngressListItem,
  IngressListQuery,
} from "../../domain/index.js";
import {
  AggregateMetaData,
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import { AppInstallation, AppInstallationListQuery } from "../../app/index.js";
import {
  ProjectMembership,
  ProjectMembershipListQuery,
} from "../ProjectMembership/index.js";
import { DateTime } from "luxon";
import { File } from "../../file/index.js";
import { DnsZone, DnsZoneListQuery } from "../../dns/index.js";
import { MailAddress, MailAddressListQuery } from "../../mail/index.js";

export class Project extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData("project", "project");
  public readonly ingresses: IngressListQuery;
  public readonly domains: DomainListQuery;
  public readonly dnsZones: DnsZoneListQuery;
  public readonly appInstallations: AppInstallationListQuery;
  public readonly projectMemberships: ProjectMembershipListQuery;
  public readonly mailAddresses: MailAddressListQuery;

  public constructor(id: string) {
    super(id);
    this.ingresses = Ingress.query({
      project: this,
    });
    this.domains = Domain.query({
      project: this,
    });
    this.dnsZones = DnsZone.query(this);
    this.appInstallations = AppInstallation.query(this);
    this.projectMemberships = ProjectMembership.query(this);
    this.mailAddresses = MailAddress.query(this);
  }

  public static ofId(id: string): Project {
    return new Project(id);
  }

  public static find = provideReact(
    async (id: string): Promise<ProjectDetailed | undefined> => {
      const data = await config.behaviors.project.find(id);

      if (data !== undefined) {
        return new ProjectDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<ProjectDetailed> => {
      const project = await this.find(id);
      assertObjectFound(project, this, id);
      return project;
    },
  );

  public findDetailed = provideReact(
    () => Project.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<ProjectDetailed | undefined>>;

  public getDetailed = provideReact(
    () => Project.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<ProjectDetailed>>;

  public static query(query: ProjectListQueryModelData = {}) {
    return new ProjectListQuery(query);
  }

  public static async create(
    serverId: string,
    description: string,
  ): Promise<Project> {
    const { id } = await config.behaviors.project.create(serverId, description);
    return new Project(id);
  }

  public getDefaultIngress = provideReact(async () => {
    const ingresses = await this.ingresses.execute();
    const defaultIngress = ingresses.items.find((i) => i.data.isDefault);
    assertObjectFound(defaultIngress, IngressListItem, this);
    return defaultIngress;
  });

  public async updateDescription(description: string): Promise<void> {
    await config.behaviors.project.updateDescription(this.id, description);
  }

  public async leave(): Promise<void> {
    await config.behaviors.project.leave(this.id);
  }

  public async delete(): Promise<void> {
    await config.behaviors.project.delete(this.id);
  }
}

class ProjectCommon extends classes(
  DataModel<ProjectListItemData | ProjectData>,
  Project,
) {
  public readonly server: Server | undefined;
  public readonly customer: Customer;
  public readonly shortId: string;
  public readonly description: string;
  public readonly disabledAt?: DateTime;
  public readonly createdAt: DateTime;
  public readonly avatar?: File;

  public constructor(data: ProjectListItemData | ProjectData) {
    super([data], [data.id]);
    this.server =
      !data.projectHostingId && data.serverId
        ? Server.ofId(data.serverId)
        : undefined;
    this.customer = Customer.ofId(data.customerId);
    this.shortId = data.shortId;
    this.description = data.description;
    if (data.disabledAt) {
      this.disabledAt = DateTime.fromISO(data.disabledAt);
    }
    this.createdAt = DateTime.fromISO(data.createdAt);
    this.avatar = data.imageRefId ? File.ofId(data.imageRefId) : undefined;
  }
}

export class ProjectDetailed extends classes(
  ProjectCommon,
  DataModel<ProjectData>,
) {
  public constructor(data: ProjectData) {
    super([data], [data]);
  }
}

export class ProjectListItem extends classes(
  ProjectCommon,
  DataModel<ProjectListItemData>,
) {
  public constructor(data: ProjectListItemData) {
    super([data], [data]);
  }
}

export class ProjectListQuery extends ListQueryModel<ProjectListQueryModelData> {
  public constructor(query: ProjectListQueryModelData = {}) {
    super(query);
  }

  public refine(query: ProjectListQueryModelData) {
    return new ProjectListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { server, customer, ...query } = this.query;
    const { items, totalCount } = await config.behaviors.project.list({
      ...query,
      serverId: server?.id,
      customerId: customer?.id,
    });

    return new ProjectList(
      this.query,
      items.map((d) => new ProjectListItem(d)),
      totalCount,
    );
  }, [this.queryId]);

  public getTotalCount = provideReact(async () => {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }, [this.queryId]);

  public findOneAndOnly = provideReact(async () => {
    const { items, totalCount } = await this.refine({ limit: 2 }).execute();
    if (totalCount === 1) {
      return items[0];
    }
  }, [this.queryId]);
}

export class ProjectList extends classes(
  ProjectListQuery,
  ListDataModel<ProjectListItem>,
) {
  public constructor(
    query: ProjectListQueryModelData,
    projects: ProjectListItem[],
    totalCount: number,
  ) {
    super([query], [projects, totalCount]);
  }
}
