import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const RegistryGhost = makeGhost(Models.Registry);
export type RegistryGhost = MaybeReactGhost<Models.Registry>;

export const RegistryListQueryGhost = makeGhost(Models.RegistryListQuery);
export type RegistryListQueryGhost = MaybeReactGhost<Models.RegistryListQuery>;
