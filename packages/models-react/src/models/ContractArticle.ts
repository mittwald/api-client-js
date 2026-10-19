import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ContractArticleGhost = makeGhost(Models.ContractArticle);
export type ContractArticleGhost = MaybeReactGhost<Models.ContractArticle>;
