import { ConversationData } from "../types.js";

export interface ConversationBehaviors {
  find: (id: string) => Promise<ConversationData | undefined>;
}
