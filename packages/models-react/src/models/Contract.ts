import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ContractGhost = makeGhost(Models.Contract);
export type ContractGhost = MaybeReactGhost<Models.Contract>;

export const ContractListQueryGhost = makeGhost(Models.ContractListQuery);
export type ContractListQueryGhost = MaybeReactGhost<Models.ContractListQuery>;
