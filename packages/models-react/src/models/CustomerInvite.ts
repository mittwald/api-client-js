import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const CustomerInviteGhost = makeGhost(Models.CustomerInvite);
export type CustomerInviteGhost = MaybeReactGhost<Models.CustomerInvite>;

export const CustomerInviteListQueryGhost = makeGhost(
  Models.CustomerInviteListQuery,
);
export type CustomerInviteListQueryGhost =
  MaybeReactGhost<Models.CustomerInviteListQuery>;
