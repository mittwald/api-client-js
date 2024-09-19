import {
  ContributorListItemData,
  ContributorData,
  ContributorListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface ContributorBehaviors {
  find: (id: string) => Promise<ContributorData | undefined>;

  list: (
    query?: ContributorListQueryData,
  ) => Promise<QueryResponseData<ContributorListItemData>>;
}
