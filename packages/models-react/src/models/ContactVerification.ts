import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ContactVerificationGhost = makeGhost(Models.ContactVerification);
export type ContactVerificationGhost =
  MaybeReactGhost<Models.ContactVerification>;

export const ContactVerificationListQueryGhost = makeGhost(
  Models.ContactVerificationListQuery,
);
export type ContactVerificationListQueryGhost =
  MaybeReactGhost<Models.ContactVerificationListQuery>;
