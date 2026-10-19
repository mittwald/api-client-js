import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ConversationGhost = makeGhost(Models.Conversation);
export type ConversationGhost = MaybeReactGhost<Models.Conversation>;

export const ConversationListQueryGhost = makeGhost(
  Models.ConversationListQuery,
);
export type ConversationListQueryGhost =
  MaybeReactGhost<Models.ConversationListQuery>;
