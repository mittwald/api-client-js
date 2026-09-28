import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const HostingOrderRequestGhost = makeGhost(Models.HostingOrderRequest);
export type HostingOrderRequestGhost =
  MaybeReactGhost<Models.HostingOrderRequest>;
