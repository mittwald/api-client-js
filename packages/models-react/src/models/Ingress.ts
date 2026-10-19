import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const IngressGhost = makeGhost(Models.Ingress);
export type IngressGhost = MaybeReactGhost<Models.Ingress>;

export const IngressListQueryGhost = makeGhost(Models.IngressListQuery);
export type IngressListQueryGhost = MaybeReactGhost<Models.IngressListQuery>;
