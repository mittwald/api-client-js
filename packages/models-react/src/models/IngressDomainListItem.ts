import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const IngressDomainListItemGhost = makeGhost(
  Models.IngressDomainListItem,
);
export type IngressDomainListItemGhost =
  MaybeReactGhost<Models.IngressDomainListItem>;
