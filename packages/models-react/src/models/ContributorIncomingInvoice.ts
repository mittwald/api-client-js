import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ContributorIncomingInvoiceGhost = makeGhost(
  Models.ContributorIncomingInvoice,
);
export type ContributorIncomingInvoiceGhost =
  MaybeReactGhost<Models.ContributorIncomingInvoice>;

export const ContributorIncomingInvoiceListQueryGhost = makeGhost(
  Models.ContributorIncomingInvoiceListQuery,
);
export type ContributorIncomingInvoiceListQueryGhost =
  MaybeReactGhost<Models.ContributorIncomingInvoiceListQuery>;
