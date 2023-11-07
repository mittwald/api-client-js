import { ProjectCompactData, ProjectData, ProjectListQuery } from "./types.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { ServerProxy } from "../../server/index.js";
import {
  type AsyncResourceVariant,
  withAsyncResourceVariant,
} from "../../react/index.js";
import { CustomerProxy } from "../../customer/Customer/Customer.js";
import { ProxyModel } from "../../base/ProxyModel.js";
import { isUuid } from "../../lib/isUuid.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import { Ingress, IngressListItem } from "../../domain/index.js";

export class ProjectProxy extends ProxyModel {
  protected async getUuid(): Promise<string> {
    return ProjectProxy.getUuid(this.id);
  }

  public static async getUuid(shortIdOrUuid: string): Promise<string> {
    if (isUuid(shortIdOrUuid)) {
      return shortIdOrUuid;
    }
    const allProjects = await ProjectListItem.list();

    const uuid = allProjects.find((p) => p.data.shortId === shortIdOrUuid)?.id;

    if (uuid === undefined) {
      throw new ObjectNotFoundError(Project.name, shortIdOrUuid);
    }

    return uuid;
  }

  public async updateDescription(description: string): Promise<void> {
    await config.behaviors.project.updateDescription(
      await this.getUuid(),
      description,
    );
  }

  public async leave(): Promise<void> {
    await config.behaviors.project.leave(await this.getUuid());
  }

  public async delete(): Promise<void> {
    await config.behaviors.project.delete(await this.getUuid());
  }

  public getDetailed = withAsyncResourceVariant(() =>
    Project.get(this.id),
  ) as AsyncResourceVariant<ProjectDetailed, []>;

  public listIngresses = withAsyncResourceVariant(() =>
    Ingress.list({ projectId: this.id }),
  ) as AsyncResourceVariant<IngressListItem[], []>;

  public getDefaultIngress = withAsyncResourceVariant(async () => {
    const ingresses = await ProjectProxy.ofId(this.id).listIngresses();
    const defaultIngress = ingresses.find((i) => i.data.isDefault);
    assertObjectFound(defaultIngress, IngressListItem, this);
    return defaultIngress;
  }) as AsyncResourceVariant<IngressListItem, []>;

  public static ofId(id: string): ProjectProxy {
    return new ProjectProxy(id);
  }
}

class ProjectBase extends classes(
  DataModel<ProjectCompactData | ProjectData>,
  ProjectProxy,
) {
  public readonly server: ServerProxy | undefined;
  public readonly customer: CustomerProxy;

  public constructor(data: ProjectCompactData | ProjectData) {
    super([data], [data.id]);
    this.server = data.serverId ? ServerProxy.ofId(data.serverId) : undefined;
    this.customer = CustomerProxy.ofId(data.customerId);
  }
}

export class ProjectDetailed extends classes(
  ProjectBase,
  DataModel<ProjectData>,
) {
  public constructor(data: ProjectData) {
    super([data], [data]);
  }

  public static find = withAsyncResourceVariant(
    async (id: string): Promise<ProjectDetailed | undefined> => {
      const data = await config.behaviors.project.find(
        await ProjectProxy.getUuid(id),
      );
      if (data !== undefined) {
        return new ProjectDetailed(data);
      }
    },
  );

  public static get = withAsyncResourceVariant(
    async (id: string): Promise<ProjectDetailed> => {
      const project = await this.find(id);
      assertObjectFound(project, this, id);
      return project;
    },
  );
}

export class ProjectListItem extends classes(
  ProjectBase,
  DataModel<ProjectCompactData>,
) {
  public constructor(data: ProjectCompactData) {
    super([data], [data]);
  }

  public static list = withAsyncResourceVariant(
    async (query: ProjectListQuery = {}): Promise<Array<ProjectListItem>> => {
      const data = await config.behaviors.project.list(query);
      return data.map((d) => new ProjectListItem(d));
    },
  );
}

export class Project extends classes(ProjectDetailed, ProjectListItem) {
  public static async create(
    serverId: string,
    description: string,
  ): Promise<ProjectProxy> {
    const { id } = await config.behaviors.project.create(serverId, description);
    return new ProjectProxy(id);
  }
}
