import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ConversationUserGhost = makeGhost(Models.ConversationUser);
export type ConversationUserGhost = MaybeReactGhost<Models.ConversationUser>;

export const ConversationUserListQueryGhost = makeGhost(
  Models.ConversationUserListQuery,
);
export type ConversationUserListQueryGhost =
  MaybeReactGhost<Models.ConversationUserListQuery>;
