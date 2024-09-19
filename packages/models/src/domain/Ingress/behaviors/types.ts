import {
  IngressListItemData,
  IngressData,
  IngressListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface IngressBehaviors {
  find: (id: string) => Promise<IngressData | undefined>;
  list: (
    query?: IngressListQueryData,
  ) => Promise<QueryResponseData<IngressListItemData>>;
}
