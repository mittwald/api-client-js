import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const SessionGhost = makeGhost(Models.Session);
export type SessionGhost = MaybeReactGhost<Models.Session>;

export const SessionListQueryGhost = makeGhost(Models.SessionListQuery);
export type SessionListQueryGhost = MaybeReactGhost<Models.SessionListQuery>;
