import {
  ExtensionData,
  ExtensionListItemData,
  ExtensionListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface ExtensionBehaviors {
  find: (id: string) => Promise<ExtensionData | undefined>;

  list: (
    query: ExtensionListQueryData,
  ) => Promise<QueryResponseData<ExtensionListItemData>>;
}
