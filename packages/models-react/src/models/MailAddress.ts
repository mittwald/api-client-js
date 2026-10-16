import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const MailAddressGhost = makeGhost(Models.MailAddress);
export type MailAddressGhost = MaybeReactGhost<Models.MailAddress>;

export const MailAddressListQueryGhost = makeGhost(Models.MailAddressListQuery);
export type MailAddressListQueryGhost =
  MaybeReactGhost<Models.MailAddressListQuery>;
