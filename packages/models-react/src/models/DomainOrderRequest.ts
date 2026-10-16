import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const DomainOrderRequestGhost = makeGhost(Models.DomainOrderRequest);
export type DomainOrderRequestGhost =
  MaybeReactGhost<Models.DomainOrderRequest>;
