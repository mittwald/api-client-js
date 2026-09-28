import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const LicenseOrderRequestGhost = makeGhost(Models.LicenseOrderRequest);
export type LicenseOrderRequestGhost =
  MaybeReactGhost<Models.LicenseOrderRequest>;
