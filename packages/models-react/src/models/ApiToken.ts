import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ApiTokenGhost = makeGhost(Models.ApiToken);
export type ApiTokenGhost = MaybeReactGhost<Models.ApiToken>;

export const ApiTokenListQueryGhost = makeGhost(Models.ApiTokenListQuery);
export type ApiTokenListQueryGhost = MaybeReactGhost<Models.ApiTokenListQuery>;
