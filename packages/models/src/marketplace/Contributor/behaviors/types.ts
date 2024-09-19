import {
  ContributorListItemData,
  ContributorData,
  ContributorListQuery,
} from "../types.js";

export interface ContributorBehaviors {
  find: (id: string) => Promise<ContributorData | undefined>;

  list: (query?: ContributorListQuery) => Promise<ContributorListItemData[]>;
}
