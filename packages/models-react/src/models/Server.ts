import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ServerGhost = makeGhost(Models.Server);
export type ServerGhost = MaybeReactGhost<Models.Server>;

export const ServerListQueryGhost = makeGhost(Models.ServerListQuery);
export type ServerListQueryGhost = MaybeReactGhost<Models.ServerListQuery>;
