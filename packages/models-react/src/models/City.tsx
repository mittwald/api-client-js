import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const CityGhost = makeGhost(Models.City);
export type CityGhost = MaybeReactGhost<Models.City>;

export const CityListQueryGhost = makeGhost(Models.CityListQuery);
export type CityListQueryGhost = MaybeReactGhost<Models.CityListQuery>;
