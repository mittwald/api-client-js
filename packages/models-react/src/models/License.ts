import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const LicenseGhost = makeGhost(Models.License);
export type LicenseGhost = MaybeReactGhost<Models.License>;

export const LicenseListQueryGhost = makeGhost(Models.LicenseListQuery);
export type LicenseListQueryGhost = MaybeReactGhost<Models.LicenseListQuery>;
