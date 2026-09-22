import { beforeEach, afterEach, describe, expect, test, vi } from "vitest";

import type { DnsZoneCommon } from "../DnsZone/index.js";

import { buildDnsRecordCnameComponentData } from "../../testing/builders/buildDnsRecordCnameData.js";
import { DnsRecordCname } from "./DnsRecordCname.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";

beforeEach(() => installBehaviors({}));
afterEach(resetBehaviors);

describe("DnsRecordCname", () => {
  test("represents an unset record", () => {
    const dnsZone = {} as unknown as DnsZoneCommon;
    const record = new DnsRecordCname(dnsZone, {});

    expect(record.fqdn).toBeUndefined();
    expect(record.getTtl()).toBe("auto");
    expect(record.asList()).toEqual([]);
    expect(record.isEmpty()).toBe(true);
  });

  test("maps a component record to its observable values", () => {
    const dnsZone = {} as unknown as DnsZoneCommon;
    const record = new DnsRecordCname(
      dnsZone,
      buildDnsRecordCnameComponentData(),
    );

    expect(record.fqdn).toBe("target.example.com");
    expect(record.getTtl()).toBe(300);
    expect(record.asList()).toEqual([
      { fqdn: "target.example.com", recordType: "cname" },
    ]);
    expect(record.isEmpty()).toBe(false);
  });

  test("delegates clearing the record", async () => {
    const removeCname = vi.fn();
    const dnsZone = { removeCname } as unknown as DnsZoneCommon;
    const record = new DnsRecordCname(dnsZone, {});

    await record.setEmpty();

    expect(removeCname).toHaveBeenCalledOnce();
  });
});
