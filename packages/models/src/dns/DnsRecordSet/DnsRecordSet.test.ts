import { afterEach, describe, expect, test, vi } from "vitest";

import { buildDnsRecordSrvComponentData } from "../../testing/builders/buildDnsRecordSrvComponentData.js";
import { buildDnsRecordTxtComponentData } from "../../testing/builders/buildDnsRecordTxtComponentData.js";
import { buildDnsRecordCnameComponentData } from "../../testing/builders/buildDnsRecordCnameData.js";
import { buildDnsZoneData } from "../../testing/builders/buildDnsZoneData.js";
import { DnsZoneCommon } from "../DnsZone/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";

afterEach(resetBehaviors);

describe("DnsRecordSet", () => {
  test("aggregates records and reports counts", () => {
    const recordSet = new DnsZoneCommon(
      buildDnsZoneData({
        recordSet: {
          srv: buildDnsRecordSrvComponentData(),
          txt: buildDnsRecordTxtComponentData(),
        },
      }),
    ).recordSet;

    expect(recordSet.asList()).toEqual([
      { entry: "v=spf1 ~all", recordType: "txt" },
      expect.objectContaining({ fqdn: "srv.example.com", recordType: "srv" }),
    ]);
    expect(recordSet.getRecordCount("srv")).toBe(1);
    expect(recordSet.getRecordCount("txt")).toBe(1);
    expect(recordSet.getRecordCount("combinedA")).toBe(0);
    // `cname` is constructed unconditionally, so the count must reflect whether
    // a CNAME is actually set rather than whether the instance exists.
    expect(recordSet.getRecordCount("cname")).toBe(0);
  });

  test("counts a CNAME record only when one is actually set", () => {
    const withoutCname = new DnsZoneCommon(buildDnsZoneData()).recordSet;
    expect(withoutCname.getRecordCount("cname")).toBe(0);

    const withCname = new DnsZoneCommon(
      buildDnsZoneData({
        recordSet: { cname: buildDnsRecordCnameComponentData() },
      }),
    ).recordSet;
    expect(withCname.getRecordCount("cname")).toBe(1);
  });

  test("clears only non-empty record components", async () => {
    const zone = new DnsZoneCommon(
      buildDnsZoneData({
        recordSet: {
          srv: buildDnsRecordSrvComponentData(),
          txt: buildDnsRecordTxtComponentData(),
        },
      }),
    );
    const setSrvRecord = vi.fn().mockResolvedValue(undefined);
    const setTxtRecord = vi.fn().mockResolvedValue(undefined);
    const setARecord = vi.fn();
    const setMxRecord = vi.fn();
    const removeCname = vi.fn();
    const setCaaRecord = vi.fn();
    installBehaviors({
      dnsZone: {
        setSrvRecord,
        setTxtRecord,
        setCaaRecord,
        setMxRecord,
        removeCname,
        setARecord,
      },
    });

    await zone.recordSet.clearRecords();

    expect(setSrvRecord).toHaveBeenCalledOnce();
    expect(setTxtRecord).toHaveBeenCalledOnce();
    expect(setARecord).not.toHaveBeenCalled();
    expect(setMxRecord).not.toHaveBeenCalled();
    expect(removeCname).not.toHaveBeenCalled();
    expect(setCaaRecord).not.toHaveBeenCalled();
  });
});
