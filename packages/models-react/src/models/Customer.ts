import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const CustomerGhost = makeGhost(Models.Customer);
export type CustomerGhost = MaybeReactGhost<Models.Customer>;

export const CustomerListQueryGhost = makeGhost(Models.CustomerListQuery);
export type CustomerListQueryGhost = MaybeReactGhost<Models.CustomerListQuery>;
