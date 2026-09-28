import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const CustomerMembershipGhost = makeGhost(Models.CustomerMembership);
export type CustomerMembershipGhost =
  MaybeReactGhost<Models.CustomerMembership>;

export const CustomerMembershipListQueryGhost = makeGhost(
  Models.CustomerMembershipListQuery,
);
export type CustomerMembershipListQueryGhost =
  MaybeReactGhost<Models.CustomerMembershipListQuery>;
