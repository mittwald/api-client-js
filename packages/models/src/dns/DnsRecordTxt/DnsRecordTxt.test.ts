import { afterEach, describe, expect, test, vi } from "vitest";

import { buildDnsRecordTxtComponentData } from "../../testing/builders/buildDnsRecordTxtComponentData";
import { buildDnsZoneData } from "../../testing/builders/buildDnsZoneData";
import { DnsZoneCommon } from "../DnsZone";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";

afterEach(resetBehaviors);

describe("DnsRecordTxt", () => {
  test("materializes component data and derived values", () => {
    const zone = new DnsZoneCommon(
      buildDnsZoneData({ recordSet: { txt: buildDnsRecordTxtComponentData() } }),
    );
    const record = zone.recordSet.txt;

    expect(record.getTtl()).toBe(3600);
    expect(record.asList()).toEqual([
      { entry: "v=spf1 ~all", recordType: "txt" },
    ]);
    expect(record.isEmpty()).toBe(false);
  });

  test("materializes unset data as empty", () => {
    const record = new DnsZoneCommon(buildDnsZoneData()).recordSet.txt;

    expect(record.entries).toBeUndefined();
    expect(record.settings).toBeUndefined();
    expect(record.getTtl()).toBe("auto");
    expect(record.asList()).toEqual([]);
    expect(record.isEmpty()).toBe(true);
  });

  test("delegates additions and clearing to the zone behavior", async () => {
    const existing = buildDnsRecordTxtComponentData();
    const zone = new DnsZoneCommon(
      buildDnsZoneData({ recordSet: { txt: existing } }),
    );
    const setTxtRecord = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ dnsZone: { setTxtRecord } });

    await zone.recordSet.txt.addEntry("new-entry");
    expect(setTxtRecord).toHaveBeenCalledWith(
      zone.id,
      ["new-entry", ...existing.entries],
      { ttl: { auto: true } },
    );

    await zone.recordSet.txt.setEmpty();
    expect(setTxtRecord).toHaveBeenLastCalledWith(zone.id, [], {
      ttl: { auto: true },
    });
  });
});
