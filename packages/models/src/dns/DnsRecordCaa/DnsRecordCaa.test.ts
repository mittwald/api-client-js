import { beforeEach, afterEach, describe, expect, test, vi } from "vitest";

import type { DnsZoneCommon } from "../DnsZone/index.js";

import {
  buildDnsRecordCaaComponentData,
  buildDnsRecordCaaEntry,
} from "../../testing/builders/buildDnsRecordCaaData.js";
import { DnsRecordCaa } from "./DnsRecordCaa.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";

beforeEach(() => installBehaviors({}));
afterEach(resetBehaviors);

describe("DnsRecordCaa", () => {
  test("represents an unset record", () => {
    const dnsZone = {} as unknown as DnsZoneCommon;
    const record = new DnsRecordCaa(dnsZone, {});

    expect(record.records).toBeUndefined();
    expect(record.getTtl()).toBe("auto");
    expect(record.asList()).toEqual([]);
    expect(record.isEmpty()).toBe(true);
  });

  test("maps a component record to its observable values", () => {
    const dnsZone = {} as unknown as DnsZoneCommon;
    const record = new DnsRecordCaa(
      dnsZone,
      buildDnsRecordCaaComponentData(),
    );

    expect(record.getTtl()).toBe(3600);
    expect(record.asList()).toEqual([
      {
        value: "letsencrypt.org",
        recordType: "caa",
        tag: "issue",
        flags: 0,
      },
    ]);
    expect(record.isEmpty()).toBe(false);
  });

  test("delegates adding a record", async () => {
    const setCaaRecord = vi.fn();
    const existingRecord = buildDnsRecordCaaEntry();
    const dnsZone = {
      recordSet: { caa: { records: [existingRecord] } },
      setCaaRecord,
    } as unknown as DnsZoneCommon;
    const record = new DnsRecordCaa(
      dnsZone,
      buildDnsRecordCaaComponentData({ records: [existingRecord] }),
    );
    const newRecord = buildDnsRecordCaaEntry({ value: "example.com" });

    await record.addRecord(newRecord);

    expect(setCaaRecord).toHaveBeenCalledOnce();
    expect(setCaaRecord).toHaveBeenCalledWith(
      [existingRecord, newRecord],
      undefined,
    );
  });

  test("delegates clearing the record", async () => {
    const setCaaRecord = vi.fn();
    const dnsZone = { setCaaRecord } as unknown as DnsZoneCommon;
    const record = new DnsRecordCaa(dnsZone, {});

    await record.setEmpty();

    expect(setCaaRecord).toHaveBeenCalledWith([]);
  });
});
