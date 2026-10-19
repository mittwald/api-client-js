import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const DnsZoneGhost = makeGhost(Models.DnsZone);
export type DnsZoneGhost = MaybeReactGhost<Models.DnsZone>;

export const DnsZoneListQueryGhost = makeGhost(Models.DnsZoneListQuery);
export type DnsZoneListQueryGhost = MaybeReactGhost<Models.DnsZoneListQuery>;
