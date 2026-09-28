import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const HostingContractItemGhost = makeGhost(Models.HostingContractItem);
export type HostingContractItemGhost =
  MaybeReactGhost<Models.HostingContractItem>;
