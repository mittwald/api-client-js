import { describe, expect, test } from "vitest";

import type { DnsRecordSetActionData } from "./DnsRecordSetAction.js";

import { DnsMxRecordSetAction } from "./DnsMxRecordSetAction.js";
import { getDnsRecordChangeType } from "./DnsRecordSetAction.js";

const changesOf = (changes: object): DnsRecordSetActionData["changes"] =>
  changes as DnsRecordSetActionData["changes"];

describe("getDnsRecordChangeType", () => {
  test("detects a created record set", () => {
    expect(
      getDnsRecordChangeType(changesOf({ after: { txt: ["v=spf1 -all"] } })),
    ).toBe("created");
  });

  test("detects a deleted record set", () => {
    expect(
      getDnsRecordChangeType(changesOf({ before: { txt: ["v=spf1 -all"] } })),
    ).toBe("deleted");
  });

  test("detects a changed record set", () => {
    expect(
      getDnsRecordChangeType(
        changesOf({ before: { txt: ["a"] }, after: { txt: ["b"] } }),
      ),
    ).toBe("changed");
  });

  test("treats empty values as an absent side", () => {
    expect(
      getDnsRecordChangeType(
        changesOf({ before: { aaaaRecords: [], aRecords: [] }, after: {} }),
      ),
    ).toBe("changed");

    expect(
      getDnsRecordChangeType(
        changesOf({
          after: { aRecords: ["127.0.0.1"] },
          before: { aRecords: [] },
        }),
      ),
    ).toBe("created");

    expect(
      getDnsRecordChangeType(
        changesOf({
          before: { cname: "www.example.com" },
          after: { cname: "" },
        }),
      ),
    ).toBe("deleted");
  });
});

describe("DnsRecordSetAction", () => {
  test("derives activity type and title key from the change type", () => {
    const action = new DnsMxRecordSetAction({
      parameters: { domain: { name: "example.com" } },
      changes: { before: { mx: [{}] } },
      name: "dns.mx-record-set",
    } as never);

    expect(action.recordChangeType).toBe("deleted");
    expect(action.type).toBe("delete");
    expect(action.titleKey).toBe("dns.mx-record-set.deleted");
    expect(action.displayName).toBe("example.com");
  });
});
