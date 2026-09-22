import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const InvoiceGhost = makeGhost(Models.Invoice);
export type InvoiceGhost = MaybeReactGhost<Models.Invoice>;

export const InvoiceListQueryGhost = makeGhost(Models.InvoiceListQuery);
export type InvoiceListQueryGhost = MaybeReactGhost<Models.InvoiceListQuery>;
