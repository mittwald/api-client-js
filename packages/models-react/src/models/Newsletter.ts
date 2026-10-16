import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const NewsletterGhost = makeGhost(Models.Newsletter);
export type NewsletterGhost = MaybeReactGhost<Models.Newsletter>;
