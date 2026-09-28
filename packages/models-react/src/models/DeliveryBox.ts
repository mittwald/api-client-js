import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const DeliveryBoxGhost = makeGhost(Models.DeliveryBox);
export type DeliveryBoxGhost = MaybeReactGhost<Models.DeliveryBox>;

export const DeliveryBoxListQueryGhost = makeGhost(Models.DeliveryBoxListQuery);
export type DeliveryBoxListQueryGhost =
  MaybeReactGhost<Models.DeliveryBoxListQuery>;
