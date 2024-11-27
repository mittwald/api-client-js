import { DataModel } from "@mittwald/api-models";
import {
  ConversationCategoryData,
  ConversationCategoryReferenceType,
} from "./types.js";
import { language } from "../../base/i18n/setup.js";

export class ConversationCategory extends DataModel<ConversationCategoryData> {
  public readonly id: string;
  public readonly name: string;
  public readonly translatedName: string;
  public readonly referenceType: ConversationCategoryReferenceType;

  constructor(data: ConversationCategoryData) {
    super(data);
    this.id = data.categoryId;
    this.name = data.name;
    this.translatedName =
      this.name in language.default.conversation.category
        ? language.default.conversation.category[
            this.name as AvailableCategoryTranslation
          ]
        : this.name;
    this.referenceType = data.referenceType;
  }
}

type AvailableCategoryTranslation =
  | "apps"
  | "articles"
  | "backups"
  | "contractOwner"
  | "cronjobs"
  | "databases"
  | "domains"
  | "emails"
  | "general"
  | "invoices"
  | "payment"
  | "ssh"
  | "workload"
  | "extension";
