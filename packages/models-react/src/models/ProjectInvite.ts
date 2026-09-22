import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ProjectInviteGhost = makeGhost(Models.ProjectInvite);
export type ProjectInviteGhost = MaybeReactGhost<Models.ProjectInvite>;

export const ProjectInviteListQueryGhost = makeGhost(
  Models.ProjectInviteListQuery,
);
export type ProjectInviteListQueryGhost =
  MaybeReactGhost<Models.ProjectInviteListQuery>;
