import {
  ExtensionData,
  ExtensionListItemData,
  ExtensionListQuery,
} from "../types.js";

export interface ExtensionBehaviors {
  find: (id: string) => Promise<ExtensionData | undefined>;

  list: (query: ExtensionListQuery) => Promise<ExtensionListItemData[]>;
}
