import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const PerformanceGhost = makeGhost(Models.Performance);
export type PerformanceGhost = MaybeReactGhost<Models.Performance>;

export const PerformanceListQueryGhost = makeGhost(Models.PerformanceListQuery);
export type PerformanceListQueryGhost =
  MaybeReactGhost<Models.PerformanceListQuery>;
