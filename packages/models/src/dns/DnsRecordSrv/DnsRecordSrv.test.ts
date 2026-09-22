import { afterEach, describe, expect, test, vi } from "vitest";

import { buildDnsRecordSrvComponentData } from "../../testing/builders/buildDnsRecordSrvComponentData";
import { buildDnsZoneData } from "../../testing/builders/buildDnsZoneData";
import { DnsZoneCommon } from "../DnsZone";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";

afterEach(resetBehaviors);

describe("DnsRecordSrv", () => {
  test("materializes component data and derived values", () => {
    const zone = new DnsZoneCommon(
      buildDnsZoneData({ recordSet: { srv: buildDnsRecordSrvComponentData() } }),
    );
    const record = zone.recordSet.srv;

    expect(record.records).toHaveLength(1);
    expect(record.getTtl()).toBe(3600);
    expect(record.asList()).toEqual([
      expect.objectContaining({ fqdn: "srv.example.com", recordType: "srv" }),
    ]);
    expect(record.isEmpty()).toBe(false);
  });

  test("materializes unset data as empty", () => {
    const record = new DnsZoneCommon(buildDnsZoneData()).recordSet.srv;

    expect(record.records).toBeUndefined();
    expect(record.settings).toBeUndefined();
    expect(record.getTtl()).toBe("auto");
    expect(record.asList()).toEqual([]);
    expect(record.isEmpty()).toBe(true);
  });

  test("delegates additions and clearing to the zone behavior", async () => {
    const existing = buildDnsRecordSrvComponentData();
    const zone = new DnsZoneCommon(
      buildDnsZoneData({ recordSet: { srv: existing } }),
    );
    const setSrvRecord = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ dnsZone: { setSrvRecord } });
    const entry = { fqdn: "new.example.com", port: 8443 };

    await zone.recordSet.srv.addEntry(entry);
    expect(setSrvRecord).toHaveBeenCalledWith(
      zone.id,
      [entry, ...existing.records],
      { ttl: { auto: true } },
    );

    await zone.recordSet.srv.setEmpty();
    expect(setSrvRecord).toHaveBeenLastCalledWith(zone.id, [], {
      ttl: { auto: true },
    });
  });
});
