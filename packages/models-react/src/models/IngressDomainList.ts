import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const IngressDomainListGhost = makeGhost(Models.IngressDomainList);
export type IngressDomainListGhost = MaybeReactGhost<Models.IngressDomainList>;
