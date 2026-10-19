import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const DomainGhost = makeGhost(Models.Domain);
export type DomainGhost = MaybeReactGhost<Models.Domain>;

export const DomainListQueryGhost = makeGhost(Models.DomainListQuery);
export type DomainListQueryGhost = MaybeReactGhost<Models.DomainListQuery>;
