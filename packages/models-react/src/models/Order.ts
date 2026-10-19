import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const OrderGhost = makeGhost(Models.Order);
export type OrderGhost = MaybeReactGhost<Models.Order>;

export const OrderListQueryGhost = makeGhost(Models.OrderListQuery);
export type OrderListQueryGhost = MaybeReactGhost<Models.OrderListQuery>;
