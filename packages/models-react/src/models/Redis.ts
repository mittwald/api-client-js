import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const RedisGhost = makeGhost(Models.Redis);
export type RedisGhost = MaybeReactGhost<Models.Redis>;

export const RedisListQueryGhost = makeGhost(Models.RedisListQuery);
export type RedisListQueryGhost = MaybeReactGhost<Models.RedisListQuery>;
