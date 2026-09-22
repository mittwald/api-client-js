import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ArticleGhost = makeGhost(Models.Article);
export type ArticleGhost = MaybeReactGhost<Models.Article>;

export const ArticleListQueryGhost = makeGhost(Models.ArticleListQuery);
export type ArticleListQueryGhost = MaybeReactGhost<Models.ArticleListQuery>;
