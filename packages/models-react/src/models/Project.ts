import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ProjectGhost = makeGhost(Models.Project);
export type ProjectGhost = MaybeReactGhost<Models.Project>;

export const ProjectListQueryGhost = makeGhost(Models.ProjectListQuery);
export type ProjectListQueryGhost = MaybeReactGhost<Models.ProjectListQuery>;
