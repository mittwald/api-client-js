import { beforeEach, afterEach, describe, expect, test, vi } from "vitest";

import type { DnsZoneCommon } from "../DnsZone";

import {
  buildDnsRecordCombinedAManagedData,
  buildDnsRecordCombinedACustomData,
  buildDnsRecordCombinedAUnsetData,
} from "../../testing/builders/buildDnsRecordCombinedAData";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";
import {
  dnsRecordCombinedAFactory,
  DnsRecordCombinedAManaged,
  DnsRecordCombinedACustom,
  DnsRecordCombinedAUnset,
} from "./DnsRecordCombinedA";

beforeEach(() => installBehaviors({}));
afterEach(resetBehaviors);

describe("dnsRecordCombinedAFactory", () => {
  test("constructs a custom record", () => {
    const dnsZone = {} as unknown as DnsZoneCommon;
    const record = dnsRecordCombinedAFactory(
      dnsZone,
      buildDnsRecordCombinedACustomData(),
    );

    expect(record).toBeInstanceOf(DnsRecordCombinedACustom);
    expect(record.type).toBe("custom");
    expect(record.getTtl()).toBe(600);
    expect(record.asList()).toEqual([
      {
        recordType: "a",
        type: "custom",
        ip: "1.2.3.4",
        isIpV6: false,
      },
      {
        ip: "2001:db8::1",
        recordType: "a",
        type: "custom",
        isIpV6: true,
      },
    ]);
    expect(record.isEmpty()).toBe(false);
    expect(record.hasIpAddress("1.2.3.4")).toBe(true);
    expect(record.hasIpAddress("9.9.9.9")).toBe(false);
  });

  test("constructs a managed record", () => {
    const dnsZone = {} as unknown as DnsZoneCommon;
    const record = dnsRecordCombinedAFactory(
      dnsZone,
      buildDnsRecordCombinedAManagedData(),
    );

    expect(record).toBeInstanceOf(DnsRecordCombinedAManaged);
    if (!(record instanceof DnsRecordCombinedAManaged)) {
      throw new Error("Expected a managed record");
    }
    expect(record.type).toBe("managed");
    expect(record.getTtl()).toBe("auto");
    expect(record.asList()).toEqual([{ type: "managed", recordType: "a" }]);
    expect(record.isEmpty()).toBe(false);
    expect(record.hasIpAddress()).toBe(false);
    expect(record.managedBy.id).toBe("ingress-1");
  });

  test("constructs an unset record", () => {
    const dnsZone = {} as unknown as DnsZoneCommon;
    const record = dnsRecordCombinedAFactory(
      dnsZone,
      buildDnsRecordCombinedAUnsetData(),
    );

    expect(record).toBeInstanceOf(DnsRecordCombinedAUnset);
    if (!(record instanceof DnsRecordCombinedAUnset)) {
      throw new Error("Expected an unset record");
    }
    expect(record.type).toBe("unset");
    expect(record.getTtl()).toBe("auto");
    expect(record.asList()).toEqual([]);
    expect(record.isEmpty()).toBe(true);
    expect(record.hasIpAddress()).toBe(false);
  });

  test("delegates clearing a custom record", async () => {
    const setCustomARecord = vi.fn();
    const dnsZone = {
      recordSet: { combinedA: { type: "custom", aaaa: [], a: [] } },
      setCustomARecord,
    } as unknown as DnsZoneCommon;
    const record = dnsRecordCombinedAFactory(
      dnsZone,
      buildDnsRecordCombinedACustomData(),
    );

    await record.setEmpty();

    expect(setCustomARecord).toHaveBeenCalledWith([], []);
  });
});
