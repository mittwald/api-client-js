import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const CronjobExecutionGhost = makeGhost(Models.CronjobExecution);
export type CronjobExecutionGhost = MaybeReactGhost<Models.CronjobExecution>;

export const CronjobExecutionListQueryGhost = makeGhost(
  Models.CronjobExecutionListQuery,
);
export type CronjobExecutionListQueryGhost =
  MaybeReactGhost<Models.CronjobExecutionListQuery>;
