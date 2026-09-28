import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ConversationMessageGhost = makeGhost(Models.ConversationMessage);
export type ConversationMessageGhost =
  MaybeReactGhost<Models.ConversationMessage>;
