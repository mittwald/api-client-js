import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const MySqlGhost = makeGhost(Models.MySql);
export type MySqlGhost = MaybeReactGhost<Models.MySql>;

export const MySqlListQueryGhost = makeGhost(Models.MySqlListQuery);
export type MySqlListQueryGhost = MaybeReactGhost<Models.MySqlListQuery>;
