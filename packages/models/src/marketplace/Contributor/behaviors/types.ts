import type { QueryResponseData } from "../../../base/types.js";
import type {
  ContributorData,
  ContributorIncomingInvoiceData,
  ContributorListIncomingInvoiceQueryData,
  ContributorListItemData,
  ContributorListQueryData,
} from "../types.js";

export interface ContributorBehaviors {
  find: (contributorId: string) => Promise<ContributorData | undefined>;

  list: (
    query?: ContributorListQueryData,
  ) => Promise<QueryResponseData<ContributorListItemData>>;

  listIncomingInvoices: (
    contributorId: string,
    queryParameters?: ContributorListIncomingInvoiceQueryData,
  ) => Promise<{
    items: ContributorIncomingInvoiceData[];
    totalCount: number;
  }>;
}
