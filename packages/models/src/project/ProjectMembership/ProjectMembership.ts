import { classes } from "polytype";
import type {
  ProjectMembershipData,
  ProjectMembershipListItemData,
  ProjectMembershipListQueryData,
} from "./types.js";
import {
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { Project } from "../Project/index.js";

export class ProjectMembership extends ReferenceModel {
  public static ofId(id: string): ProjectMembership {
    return new ProjectMembership(id);
  }

  public static find = provideReact(
    async (id: string): Promise<ProjectMembershipDetailed | undefined> => {
      const data = await config.behaviors.projectMembership.find(id);
      if (data) {
        return new ProjectMembershipDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<ProjectMembershipDetailed> => {
      const projectMembership = await this.find(id);
      assertObjectFound(projectMembership, this, id);
      return projectMembership;
    },
  );

  public findDetailed = provideReact((): Promise<
    ProjectMembershipDetailed | undefined
  > => {
    return ProjectMembership.find(this.id);
  }, [this.id]) as AsyncResourceVariant<
    () => Promise<ProjectMembershipDetailed | undefined>
  >;

  public getDetailed = provideReact((): Promise<ProjectMembershipDetailed> => {
    return ProjectMembership.get(this.id);
  }, [this.id]) as AsyncResourceVariant<
    () => Promise<ProjectMembershipDetailed>
  >;

  public static query(
    project: Project,
    query: ProjectMembershipListQueryData = {},
  ) {
    return new ProjectMembershipListQuery(project, query);
  }
}

class ProjectMembershipCommon extends classes(
  DataModel<ProjectMembershipData | ProjectMembershipListItemData>,
  ProjectMembership,
) {
  public constructor(
    data: ProjectMembershipData | ProjectMembershipListItemData,
  ) {
    super([data], [data.id]);
  }
}

export class ProjectMembershipDetailed extends classes(
  ProjectMembershipCommon,
  DataModel<ProjectMembershipData>,
) {
  public constructor(data: ProjectMembershipData) {
    super([data], [data]);
  }
}

export class ProjectMembershipListItem extends classes(
  ProjectMembershipCommon,
  DataModel<ProjectMembershipListItemData>,
) {
  public constructor(data: ProjectMembershipListItemData) {
    super([data], [data]);
  }
}

export class ProjectMembershipListQuery extends ListQueryModel<ProjectMembershipListQueryData> {
  public readonly project: Project;

  public constructor(
    project: Project,
    query: ProjectMembershipListQueryData = {},
  ) {
    super(query, { dependencies: [project.id] });
    this.project = project;
  }

  public refine(query: ProjectMembershipListQueryData) {
    return new ProjectMembershipListQuery(this.project, {
      ...this.query,
      ...query,
    });
  }

  public findOneAndOnly = provideReact(async () => {
    const { items, totalCount } = await this.refine({ limit: 1 }).execute();
    if (totalCount === 1) {
      return items[0];
    }
  }, [this.queryId]);

  public execute = provideReact(async () => {
    const { items, totalCount } = await config.behaviors.projectMembership.list(
      this.project.id,
      this.query,
    );

    return new ProjectMembershipList(
      this.project,
      this.query,
      items.map((d) => new ProjectMembershipListItem(d)),
      totalCount,
    );
  }, [this.queryId]);

  public getTotalCount = provideReact(async () => {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }, [this.queryId]);
}

export class ProjectMembershipList extends classes(
  ProjectMembershipListQuery,
  ListDataModel<ProjectMembershipListItem>,
) {
  public constructor(
    project: Project,
    query: ProjectMembershipListQueryData,
    memberships: ProjectMembershipListItem[],
    totalCount: number,
  ) {
    super([project, query], [memberships, totalCount]);
  }
}
