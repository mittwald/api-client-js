import {
  ExtensionData,
  ExtensionListItemData,
  MarketplaceContext,
} from "../types.js";

export interface ExtensionBehaviors {
  find: (id: string) => Promise<ExtensionData | undefined>;

  list: (context: MarketplaceContext) => Promise<ExtensionListItemData[]>;
}
