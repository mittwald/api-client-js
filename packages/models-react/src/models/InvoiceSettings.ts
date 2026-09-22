import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const InvoiceSettingsGhost = makeGhost(Models.InvoiceSettings);
export type InvoiceSettingsGhost = MaybeReactGhost<Models.InvoiceSettings>;
