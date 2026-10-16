import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const MySqlCharsetGhost = makeGhost(Models.MySqlCharset);
export type MySqlCharsetGhost = MaybeReactGhost<Models.MySqlCharset>;

export const MySqlCharsetListQueryGhost = makeGhost(
  Models.MySqlCharsetListQuery,
);
export type MySqlCharsetListQueryGhost =
  MaybeReactGhost<Models.MySqlCharsetListQuery>;
