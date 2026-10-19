import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ProjectMembershipGhost = makeGhost(Models.ProjectMembership);
export type ProjectMembershipGhost = MaybeReactGhost<Models.ProjectMembership>;

export const ProjectMembershipListQueryGhost = makeGhost(
  Models.ProjectMembershipListQuery,
);
export type ProjectMembershipListQueryGhost =
  MaybeReactGhost<Models.ProjectMembershipListQuery>;
