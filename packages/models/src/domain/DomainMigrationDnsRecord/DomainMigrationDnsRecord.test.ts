import { afterEach, describe, expect, test } from "vitest";

import { buildDomainMigrationDnsRecordData } from "../../testing/builders/buildDomainMigrationDnsRecordData.js";
import { DomainMigrationDnsRecord } from "./DomainMigrationDnsRecord.js";
import { resetBehaviors } from "../../testing/installBehaviors.js";
import { DataModel } from "../../base/index.js";

afterEach(resetBehaviors);

describe("DomainMigrationDnsRecord", () => {
  test("constructs from data and exposes its values", () => {
    const data = buildDomainMigrationDnsRecordData({
      value: "2001:db8::1",
      type: "AAAA",
      ttl: 7200,
    });
    const record = new DomainMigrationDnsRecord(data);

    expect(record).toBeInstanceOf(DomainMigrationDnsRecord);
    expect(record).toBeInstanceOf(DataModel);
    expect(record.type).toBe(data.type);
    expect(record.value).toBe(data.value);
    expect(record.ttl).toBe(data.ttl);
  });
});
