import {
  DomainData,
  DomainListItemData,
  DomainListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface DomainBehaviors {
  find: (id: string) => Promise<DomainData | undefined>;
  query: (
    query?: DomainListQueryData,
  ) => Promise<QueryResponseData<DomainListItemData>>;

  delete: (domainId: string) => Promise<void>;
}
