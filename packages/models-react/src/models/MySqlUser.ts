import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const MySqlUserGhost = makeGhost(Models.MySqlUser);
export type MySqlUserGhost = MaybeReactGhost<Models.MySqlUser>;

export const MySqlUserListQueryGhost = makeGhost(Models.MySqlUserListQuery);
export type MySqlUserListQueryGhost =
  MaybeReactGhost<Models.MySqlUserListQuery>;
