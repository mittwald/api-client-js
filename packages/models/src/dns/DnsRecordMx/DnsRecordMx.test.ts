import { beforeEach, afterEach, describe, expect, test, vi } from "vitest";

import type { DnsZoneCommon } from "../DnsZone/index.js";

import {
  buildDnsRecordMxManagedData,
  buildDnsRecordMxCustomData,
  buildDnsRecordMxUnsetData,
  buildDnsRecordMxEntry,
} from "../../testing/builders/buildDnsRecordMxData.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import {
  dnsRecordMxFactory,
  DnsRecordMxManaged,
  DnsRecordMxCustom,
  DnsRecordMxUnset,
} from "./DnsRecordMx.js";

beforeEach(() => installBehaviors({}));
afterEach(resetBehaviors);

describe("dnsRecordMxFactory", () => {
  test("constructs a custom record", () => {
    const dnsZone = {} as unknown as DnsZoneCommon;
    const record = dnsRecordMxFactory(dnsZone, buildDnsRecordMxCustomData());

    expect(record).toBeInstanceOf(DnsRecordMxCustom);
    expect(record.type).toBe("custom");
    expect(record.getTtl()).toBe(900);
    expect(record.asList()).toEqual([
      {
        fqdn: "mx.example.com",
        recordType: "mx",
        type: "custom",
        priority: 10,
      },
    ]);
    expect(record.isEmpty()).toBe(false);
  });

  test("constructs a managed record", () => {
    const dnsZone = {} as unknown as DnsZoneCommon;
    const record = dnsRecordMxFactory(dnsZone, buildDnsRecordMxManagedData());

    expect(record).toBeInstanceOf(DnsRecordMxManaged);
    expect(record.type).toBe("managed");
    expect(record.getTtl()).toBe("auto");
    expect(record.asList()).toHaveLength(4);
    expect(record.asList()[0]).toEqual({
      fqdn: "mx1.agenturserver.de",
      recordType: "mx",
      type: "managed",
      priority: 10,
    });
    expect(record.isEmpty()).toBe(false);
  });

  test("constructs an unset record", () => {
    const dnsZone = {} as unknown as DnsZoneCommon;
    const record = dnsRecordMxFactory(dnsZone, buildDnsRecordMxUnsetData());

    expect(record).toBeInstanceOf(DnsRecordMxUnset);
    expect(record.type).toBe("unset");
    expect(record.getTtl()).toBe("auto");
    expect(record.asList()).toEqual([]);
    expect(record.isEmpty()).toBe(true);
  });

  test("delegates adding an entry to a custom record", async () => {
    const setCustomMxRecord = vi.fn();
    const existingEntry = buildDnsRecordMxEntry();
    const dnsZone = {
      recordSet: {
        mx: { records: [existingEntry], type: "custom" },
      },
      setCustomMxRecord,
    } as unknown as DnsZoneCommon;
    const record = dnsRecordMxFactory(
      dnsZone,
      buildDnsRecordMxCustomData({ records: [existingEntry] }),
    );
    const newEntry = buildDnsRecordMxEntry({
      fqdn: "mx2.example.com",
      priority: 20,
    });

    await record.addEntry(newEntry);

    expect(setCustomMxRecord).toHaveBeenCalledWith(
      [newEntry, existingEntry],
      undefined,
    );
  });
});
