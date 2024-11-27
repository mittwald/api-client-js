import { ConversationStatusData } from "./types.js";
import { language } from "../../base/i18n/setup.js";

export class ConversationStatus {
  public readonly name: ConversationStatusData;
  public readonly translatedName: string;

  public constructor(name: ConversationStatusData) {
    this.name = name;
    this.translatedName = language.default.conversation.status[name];
  }
}
