import {
  ProjectData,
  ProjectListItemData,
  ProjectListQueryData,
  ProjectListQueryModelData,
} from "./types.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { Server } from "../../server/index.js";
import {
  AsyncResourceVariant,
  provideReact,
} from "../../react/provideReact.js";
import { Customer } from "../../customer/Customer/Customer.js";
import { ReferenceModel } from "../../base/ReferenceModel.js";
import {
  Ingress,
  IngressListItem,
  IngressListQuery,
} from "../../domain/index.js";
import { ListQueryModel } from "../../base/ListQueryModel.js";
import { ListDataModel } from "../../base/ListDataModel.js";
import { AppInstallationListQuery } from "../../app/index.js";

export class Project extends ReferenceModel {
  public readonly ingresses: IngressListQuery;
  public readonly appInstallations: AppInstallationListQuery;

  public constructor(id: string) {
    super(id);
    this.ingresses = new IngressListQuery({
      project: this,
    });
    this.appInstallations = new AppInstallationListQuery(this);
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

  public static query(query: ProjectListQueryModelData = {}) {
    return new ProjectListQuery(query);
  }

  /** @deprecated: use query(), Customer.projects or Server.projects */
  public static list = provideReact(
    async (
      query: ProjectListQueryData = {},
    ): Promise<Readonly<Array<ProjectListItem>>> => {
      return new ProjectListQuery(query).execute().then((r) => r.items);
    },
  );

  public static async create(
    serverId: string,
    description: string,
  ): Promise<Project> {
    const { id } = await config.behaviors.project.create(serverId, description);
    return new Project(id);
  }

  public getDetailed = provideReact(
    () => Project.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<ProjectDetailed>>;

  public findDetailed = provideReact(
    () => Project.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<ProjectDetailed | undefined>>;

  /** @deprecated: use ingresses property */
  public listIngresses = provideReact(() =>
    Ingress.list({ projectId: this.id }),
  );

  public getDefaultIngress = provideReact(async () => {
    const ingresses = await Project.ofId(this.id).listIngresses();
    const defaultIngress = ingresses.find((i) => i.data.isDefault);
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

  public constructor(data: ProjectListItemData | ProjectData) {
    super([data], [data.id]);
    this.server = data.serverId ? Server.ofId(data.serverId) : undefined;
    this.customer = Customer.ofId(data.customerId);
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
