import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const HostingArticleGhost = makeGhost(Models.HostingArticle);
export type HostingArticleGhost = MaybeReactGhost<Models.HostingArticle>;
