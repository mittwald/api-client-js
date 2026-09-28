import { afterEach, describe, expect, test } from "vitest";

import { buildDomainMigrationDnsRecordData } from "../../testing/builders/buildDomainMigrationDnsRecordData.js";
import { buildDomainMigrationDomainData } from "../../testing/builders/buildDomainMigrationDomainData.js";
import { DomainMigrationDnsRecord } from "../DomainMigrationDnsRecord/index.js";
import { resetBehaviors } from "../../testing/installBehaviors.js";
import { DomainMigrationDomain } from "./DomainMigrationDomain.js";

afterEach(resetBehaviors);

describe("DomainMigrationDomain", () => {
  test("constructs from data", () => {
    const data = buildDomainMigrationDomainData();
    const domain = new DomainMigrationDomain(data);

    expect(domain.domain).toBe(data.domain);
    expect(domain.domainId).toBe(data.domainId);
    expect(domain.state).toBe(data.state);
  });

  test("maps DNS data to DomainMigrationDnsRecord instances", () => {
    const domain = new DomainMigrationDomain(buildDomainMigrationDomainData());

    expect(domain.dnsRecords).toHaveLength(1);
    expect(domain.dnsRecords[0]).toBeInstanceOf(DomainMigrationDnsRecord);
  });

  test("defaults DNS records to an empty array without coabData", () => {
    const domain = new DomainMigrationDomain(
      buildDomainMigrationDomainData({ coabData: undefined }),
    );

    expect(domain.dnsRecords).toEqual([]);
  });

  test("finds the first A record", () => {
    const aRecord = buildDomainMigrationDnsRecordData({
      value: "9.9.9.9",
      type: "A",
    });
    const domain = new DomainMigrationDomain(
      buildDomainMigrationDomainData({
        coabData: {
          dnsRecords: [
            buildDomainMigrationDnsRecordData({ value: "text", type: "TXT" }),
            aRecord,
          ],
        },
      }),
    );

    expect(domain.findFirstARecord()?.value).toBe(aRecord.value);
  });

  test("returns undefined without an A record", () => {
    const domain = new DomainMigrationDomain(
      buildDomainMigrationDomainData({
        coabData: {
          dnsRecords: [
            buildDomainMigrationDnsRecordData({ value: "text", type: "TXT" }),
          ],
        },
      }),
    );

    expect(domain.findFirstARecord()).toBeUndefined();
  });
});
