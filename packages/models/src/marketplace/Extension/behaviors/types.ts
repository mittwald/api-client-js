import type { QueryResponseData } from "../../../base/index.js";
import type {
  ExtensionOrderRequestData,
  ExtensionListQueryData,
  ExtensionListItemData,
  ExtensionData,
} from "../types.js";

export interface ExtensionBehaviors {
  list: (
    query: ExtensionListQueryData,
  ) => Promise<QueryResponseData<ExtensionListItemData>>;

  order: (
    extensionId: string,
    data: ExtensionOrderRequestData,
  ) => Promise<void>;

  find: (extensionId: string) => Promise<ExtensionData | undefined>;
}
