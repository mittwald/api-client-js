import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { DnsZoneBehaviors } from "./types.js";
import type {
  DnsRecordCAARecord,
  DnsRecordSRVRecord,
  DnsRecordMXRecord,
} from "../../../domain/Domain/index.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount } from "../../../base/index.js";

export const apiDnsZoneBehaviors = (
  client: MittwaldAPIV2Client,
): DnsZoneBehaviors => ({
  setCaaRecord: async (dnsZoneId, records, settings) => {
    if (records.length === 0) {
      const response = await client.domain.dnsUpdateRecordSet({
        recordSet: "caa",
        data: undefined,
        dnsZoneId,
      });

      validateResponse(response, 204);
      return;
    }
    const response = await client.domain.dnsUpdateRecordSet({
      data: {
        records: records as [DnsRecordCAARecord, ...DnsRecordCAARecord[]],
        settings,
      },
      recordSet: "caa",
      dnsZoneId,
    });

    validateResponse(response, 204, {
      validationError: { pathMappings: { "*": "root" } },
    });
  },
  setSrvRecord: async (dnsZoneId, records, settings) => {
    if (records.length === 0) {
      const response = await client.domain.dnsUpdateRecordSet({
        recordSet: "srv",
        data: undefined,
        dnsZoneId,
      });
      validateResponse(response, 204);
      return;
    }
    const response = await client.domain.dnsUpdateRecordSet({
      data: {
        records: records as [DnsRecordSRVRecord, ...DnsRecordSRVRecord[]],
        settings,
      },
      recordSet: "srv",
      dnsZoneId,
    });

    validateResponse(response, 204, {
      validationError: { pathMappings: { "*": "root" } },
    });
  },
  setTxtRecord: async (dnsZoneId, entries, settings) => {
    if (entries.length === 0) {
      const response = await client.domain.dnsUpdateRecordSet({
        recordSet: "txt",
        dnsZoneId,
      });
      validateResponse(response, 204);
      return;
    }

    const response = await client.domain.dnsUpdateRecordSet({
      data: { settings, entries },
      recordSet: "txt",
      dnsZoneId,
    });
    validateResponse(response, 204, {
      validationError: { pathMappings: { "*": "root" } },
    });
  },
  setCname: async (dnsZoneId, fqdn, settings) => {
    if (fqdn && settings) {
      const response = await client.domain.dnsUpdateRecordSet({
        data: { settings, fqdn },
        recordSet: "cname",
        dnsZoneId,
      });
      validateResponse(response, 204);
      return;
    }
    const response = await client.domain.dnsUpdateRecordSet({
      recordSet: "cname",
      data: undefined,
      dnsZoneId,
    });
    validateResponse(response, 204);
  },
  setMxRecord: async (dnsZoneId, records, settings) => {
    const response = await client.domain.dnsUpdateRecordSet({
      data:
        records.length > 0
          ? {
              records: records as [DnsRecordMXRecord, ...DnsRecordMXRecord[]],
              settings,
            }
          : undefined,
      recordSet: "mx",
      dnsZoneId,
    });

    validateResponse(response, 204, {
      validationError: { pathMappings: { "*": "root" } },
    });
  },
  setARecord: async (dnsZoneId, a, aaaa, settings) => {
    const response = await client.domain.dnsUpdateRecordSet({
      data: a.length > 0 || aaaa.length > 0 ? { settings, aaaa, a } : undefined,
      recordSet: "a",
      dnsZoneId,
    });

    validateResponse(response, 204, {
      validationError: { pathMappings: { "*": "root" } },
    });
  },

  query: async (projectId) => {
    const response = await client.domain.dnsListDnsZones({
      projectId,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  create: async (projectId, name) => {
    const response = await client.domain.dnsCreateProjectDnsZone({
      data: { name },
      projectId,
    });

    validateResponse(response, 201);
    return {
      id: response.data.id,
    };
  },
  find: async (dnsZoneId) => {
    const response = await client.domain.dnsGetDnsZone({ dnsZoneId });

    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, [400]);
  },

  removeCname: async (dnsZoneId) => {
    const response = await client.domain.dnsUpdateRecordSet({
      recordSet: "cname",
      data: undefined,
      dnsZoneId,
    });
    validateResponse(response, 204);
  },
  setRecordManaged: async (dnsZoneId, recordSet) => {
    const response = await client.domain.dnsSetRecordSetManaged({
      recordSet,
      dnsZoneId,
    });
    validateResponse(response, 200);
  },
  getZoneFile: async (dnsZoneId) => {
    const response = await client.domain.dnsGetZoneFile({ dnsZoneId });
    validateResponse(response, 200);
    return response.data;
  },
  delete: async (dnsZoneId) => {
    const response = await client.domain.dnsDeleteDnsZone({ dnsZoneId });
    validateResponse(response, 204);
  },
});
