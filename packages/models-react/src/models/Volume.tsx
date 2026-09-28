import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const VolumeGhost = makeGhost(Models.Volume);
export type VolumeGhost = MaybeReactGhost<Models.Volume>;

export const VolumeListQueryGhost = makeGhost(Models.VolumeListQuery);
export type VolumeListQueryGhost = MaybeReactGhost<Models.VolumeListQuery>;
