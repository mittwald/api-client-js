import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const LeadFyndrGhost = makeGhost(Models.LeadFyndr);
export type LeadFyndrGhost = MaybeReactGhost<Models.LeadFyndr>;
