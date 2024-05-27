import {
  ExtensionData,
  ExtensionListItemData,
  ExtensionListQuery,
} from "../types.js";

export interface ExtensionBehaviors {
  get: (id: string) => Promise<ExtensionData>;

  list: (query: ExtensionListQuery) => Promise<ExtensionListItemData[]>;
}
