import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const CronjobGhost = makeGhost(Models.Cronjob);
export type CronjobGhost = MaybeReactGhost<Models.Cronjob>;

export const CronjobListQueryGhost = makeGhost(Models.CronjobListQuery);
export type CronjobListQueryGhost = MaybeReactGhost<Models.CronjobListQuery>;
