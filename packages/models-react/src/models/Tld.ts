import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const TldGhost = makeGhost(Models.Tld);
export type TldGhost = MaybeReactGhost<Models.Tld>;

export const TldPriceGhost = makeGhost(Models.TldPrice);
export type TldPriceGhost = MaybeReactGhost<Models.TldPrice>;

export const TldListQueryGhost = makeGhost(Models.TldListQuery);
export type TldListQueryGhost = MaybeReactGhost<Models.TldListQuery>;
