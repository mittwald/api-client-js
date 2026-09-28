import * as Models from "@mittwald/api-models";
import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";

export const ProjectAIApiKeyGhost = makeGhost(Models.ProjectAIApiKey);
export type ProjectAIApiKeyGhost = MaybeReactGhost<Models.ProjectAIApiKey>;

export const ProjectAIPlanGhost = makeGhost(Models.ProjectAIPlan);
export type ProjectAIPlanGhost = MaybeReactGhost<Models.ProjectAIPlan>;

export const CustomerAIApiKeyGhost = makeGhost(Models.CustomerAIApiKey);
export type CustomerAIApiKeyGhost = MaybeReactGhost<Models.CustomerAIApiKey>;

export const CustomerAIPlanGhost = makeGhost(Models.CustomerAIPlan);
export type CustomerAIPlanGhost = MaybeReactGhost<Models.CustomerAIPlan>;

export const AITokenStatisticsGhost = makeGhost(Models.AITokenStatistics);
export type AITokenStatisticsGhost = MaybeReactGhost<Models.AITokenStatistics>;
