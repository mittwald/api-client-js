import { MittwaldAPIV2 } from "@mittwald/api-client";

export type ConversationCategoryListItemData =
  MittwaldAPIV2.Operations.ConversationListCategories.ResponseData[number];

export type ConversationCategoryData =
  MittwaldAPIV2.Components.Schemas.ConversationCategory;

export type ConversationCategoryReferenceType =
  MittwaldAPIV2.Components.Schemas.ConversationCategoryReferenceType;
