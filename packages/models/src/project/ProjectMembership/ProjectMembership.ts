import { classes } from "polytype";
import type {
  ProjectMembershipData,
  ProjectMembershipListItemData,
} from "./types.js";
import { DataModel, ReferenceModel } from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";

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
    ProjectMembershipDetailed | undefined,
    []
  >;

  public getDetailed = provideReact((): Promise<ProjectMembershipDetailed> => {
    return ProjectMembership.get(this.id);
  }, [this.id]) as AsyncResourceVariant<ProjectMembershipDetailed, []>;
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
