import { InvoiceData } from "../types.js";

export interface InvoiceBehaviors {
  find: (id: string) => Promise<InvoiceData | undefined>;
}
