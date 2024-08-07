import { ProjectListItemData, ProjectData, ProjectListQuery } from "./types.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { Server } from "../../server/index.js";
import {
  type AsyncResourceVariant,
  provideReact,
} from "../../lib/provideReact.js";
import { Customer } from "../../customer/Customer/Customer.js";
import { ReferenceModel } from "../../base/ReferenceModel.js";
import { Ingress, IngressListItem } from "../../domain/index.js";

export class Project extends ReferenceModel {
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

  public static list = provideReact(
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

  public getDetailed = provideReact(
    () => Project.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<ProjectDetailed, []>;

  public listIngresses = provideReact(() =>
    Ingress.list({ projectId: this.id }),
  ) as AsyncResourceVariant<IngressListItem[], []>;

  public getDefaultIngress = provideReact(async () => {
    const ingresses = await Project.ofId(this.id).listIngresses();
    const defaultIngress = ingresses.find((i) => i.data.isDefault);
    assertObjectFound(defaultIngress, IngressListItem, this);
    return defaultIngress;
  }) as AsyncResourceVariant<IngressListItem, []>;

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
