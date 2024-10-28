import {
  assertStatus,
  MittwaldAPIV2Client,
  assertOneOfStatus,
} from "@mittwald/api-client";
import { DnsZoneBehaviors } from "./types.js";
import { DnsMxRecord, DnsRecordSettings, DnsSrvRecord } from "../types.js";
export const apiDnsZoneBehaviors = (
  client: MittwaldAPIV2Client,
): DnsZoneBehaviors => ({
  find: async (id) => {
    const response = await client.domain.dnsGetDnsZone({
      dnsZoneId: id,
    });

    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [400]);
  },
  query: async (projectId) => {
    const response = await client.domain.dnsListDnsZones({
      projectId,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: response.data.length,
    };
  },
  delete: async (zoneId: string) => {
    const response = await client.domain.dnsDeleteDnsZone({
      dnsZoneId: zoneId,
    });
    assertStatus(response, 200);
  },
  create: async (name: string, parentZoneId: string) => {
    const response = await client.domain.dnsCreateDnsZone({
      data: { name, parentZoneId },
    });
    assertStatus(response, 201);
    return {
      id: response.data.id,
    };
  },
  setRecordManaged: async (zoneId: string, recordSet: "a" | "mx") => {
    const response = await client.domain.dnsSetRecordSetManaged({
      recordSet,
      dnsZoneId: zoneId,
    });
    assertStatus(response, 204);
  },
  setARecord: async (
    dnsZoneId: string,
    a: string[],
    aaaa: string[],
    settings: DnsRecordSettings,
  ) => {
    const response = await client.domain.dnsUpdateRecordSet({
      dnsZoneId,
      recordSet: "a",
      data: { a, aaaa, settings },
    });
    assertStatus(response, 204);
  },
  setMxRecord: async (
    dnsZoneId: string,
    records: [DnsMxRecord, ...DnsMxRecord[]],
    settings: DnsRecordSettings,
  ) => {
    const response = await client.domain.dnsUpdateRecordSet({
      dnsZoneId,
      recordSet: "mx",
      data: { records, settings },
    });
    assertStatus(response, 204);
  },
  setTxtRecord: async (
    dnsZoneId: string,
    entries: string[],
    settings: DnsRecordSettings,
  ) => {
    const response = await client.domain.dnsUpdateRecordSet({
      dnsZoneId,
      recordSet: "txt",
      data: { entries, settings },
    });
    assertStatus(response, 204);
  },
  setSrvRecord: async (
    dnsZoneId: string,
    records: [DnsSrvRecord, ...DnsSrvRecord[]],
    settings: DnsRecordSettings,
  ) => {
    const response = await client.domain.dnsUpdateRecordSet({
      dnsZoneId,
      recordSet: "srv",
      data: { records, settings },
    });
    assertStatus(response, 204);
  },
  setCname: async (
    dnsZoneId: string,
    fqdn: string,
    settings: DnsRecordSettings,
  ) => {
    const response = await client.domain.dnsUpdateRecordSet({
      dnsZoneId,
      recordSet: "cname",
      data: { fqdn, settings },
    });
    assertStatus(response, 204);
  },
});
