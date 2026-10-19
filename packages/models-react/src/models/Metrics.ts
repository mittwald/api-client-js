import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const StorageMetricsGhost = makeGhost(Models.StorageMetrics);
export type StorageMetricsGhost = MaybeReactGhost<Models.StorageMetrics>;

export const ProjectUsageMetricsGhost = makeGhost(Models.ProjectUsageMetrics);
export type ProjectUsageMetricsGhost =
  MaybeReactGhost<Models.ProjectUsageMetrics>;

export const ServerUsageMetricsGhost = makeGhost(Models.ServerUsageMetrics);
export type ServerUsageMetricsGhost =
  MaybeReactGhost<Models.ServerUsageMetrics>;
