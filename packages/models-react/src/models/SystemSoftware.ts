import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const SystemSoftwareGhost = makeGhost(Models.SystemSoftware);
export type SystemSoftwareGhost = MaybeReactGhost<Models.SystemSoftware>;

export const SystemSoftwareListQueryGhost = makeGhost(
  Models.SystemSoftwareListQuery,
);
export type SystemSoftwareListQueryGhost =
  MaybeReactGhost<Models.SystemSoftwareListQuery>;
