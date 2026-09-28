import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const SystemSoftwareVersionGhost = makeGhost(
  Models.SystemSoftwareVersion,
);
export type SystemSoftwareVersionGhost =
  MaybeReactGhost<Models.SystemSoftwareVersion>;

export const SystemSoftwareVersionListQueryGhost = makeGhost(
  Models.SystemSoftwareVersionListQuery,
);
export type SystemSoftwareVersionListQueryGhost =
  MaybeReactGhost<Models.SystemSoftwareVersionListQuery>;
