import { ContributorListItemData, ContributorData } from "../types.js";

export interface ContributorBehaviors {
  find: (id: string) => Promise<ContributorData | undefined>;

  list: () => Promise<ContributorListItemData[]>;
}
