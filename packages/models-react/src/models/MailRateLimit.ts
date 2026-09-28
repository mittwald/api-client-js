import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const MailRateLimitGhost = makeGhost(Models.MailRateLimit);
export type MailRateLimitGhost = MaybeReactGhost<Models.MailRateLimit>;

export const MailRateLimitListQueryGhost = makeGhost(
  Models.MailRateLimitListQuery,
);
export type MailRateLimitListQueryGhost =
  MaybeReactGhost<Models.MailRateLimitListQuery>;
