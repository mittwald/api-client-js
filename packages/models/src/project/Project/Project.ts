import { ProjectCompactData, ProjectData, ProjectListQuery } from "./types.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { Server } from "../../server/index.js";
import {
  type AsyncResourceVariant,
  withAsyncResourceVariant,
} from "../../react/index.js";
import { Customer } from "../../customer/Customer/Customer.js";
import { ProxyModel } from "../../base/ProxyModel.js";
import { isUuid } from "../../lib/isUuid.js";
import { Ingress, IngressListItem } from "../../domain/index.js";

export class Project extends ProxyModel {
  public static ofId(id: string): Project {
    return new Project(id);
  }

  public static find = withAsyncResourceVariant(
    async (id: string): Promise<ProjectDetailed | undefined> => {
      const data = await config.behaviors.project.find(
        await Project.getUuid(id),
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

  public static list = withAsyncResourceVariant(
    async (
      query: ProjectListQuery = {},
    ): Promise<Readonly<Array<ProjectListItem>>> => {
      const data = await config.behaviors.project.list(query);
      return Object.freeze(data.map((d) => new ProjectListItem(d)));
    },
  );

  public static async create(
    serverId: string,
    description: string,
  ): Promise<Project> {
    const { id } = await config.behaviors.project.create(serverId, description);
    return new Project(id);
  }

  public getDetailed = withAsyncResourceVariant(() =>
    Project.get(this.id),
  ) as AsyncResourceVariant<ProjectDetailed, []>;

  public listIngresses = withAsyncResourceVariant(() =>
    Ingress.list({ projectId: this.id }),
  ) as AsyncResourceVariant<IngressListItem[], []>;

  public getDefaultIngress = withAsyncResourceVariant(async () => {
    const ingresses = await Project.ofId(this.id).listIngresses();
    const defaultIngress = ingresses.find((i) => i.data.isDefault);
    assertObjectFound(defaultIngress, IngressListItem, this);
    return defaultIngress;
  }) as AsyncResourceVariant<IngressListItem, []>;

  private async getUuid(): Promise<string> {
    return Project.getUuid(this.id);
  }

  protected static async getUuid(shortIdOrUuid: string): Promise<string> {
    if (isUuid(shortIdOrUuid)) {
      return shortIdOrUuid;
    }
    const allProjects = await ProjectListItem.list();

    const uuid = allProjects.find((p) => p.data.shortId === shortIdOrUuid)?.id;
    assertObjectFound(uuid, Project, shortIdOrUuid);
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
}

class ProjectCommon extends classes(
  DataModel<ProjectCompactData | ProjectData>,
  Project,
) {
  public readonly server: Server | undefined;
  public readonly customer: Customer;

  public constructor(data: ProjectCompactData | ProjectData) {
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
  DataModel<ProjectCompactData>,
) {
  public constructor(data: ProjectCompactData) {
    super([data], [data]);
  }
}
