import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, test, vi } from "vitest";

import { buildDomainMigrationDnsRecordData } from "../../testing/builders/buildDomainMigrationDnsRecordData.js";
import { buildDomainMigrationDomainData } from "../../testing/builders/buildDomainMigrationDomainData.js";
import { buildDnsRecordCombinedACustomData } from "../../testing/builders/buildDnsRecordCombinedAData.js";
import { buildDomainMigrationData } from "../../testing/builders/buildDomainMigrationData.js";
import { buildDnsZoneData } from "../../testing/builders/buildDnsZoneData.js";
import { AggregateMetaData } from "../../common/index.js";
import { DomainMigration } from "../../domain/index.js";
import { ReferenceModel } from "../../base/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import { Project } from "../../project/index.js";
import {
  DnsZoneDetailed,
  DnsZoneListItem,
  DnsZoneCommon,
  DnsZoneList,
  DnsZone,
} from "./DnsZone.js";

vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? type.name : undefined,
}));

afterEach(resetBehaviors);

describe("DnsZone aggregate + common variant", () => {
  test("aggregateMetaData carries the dns/zone identity", () => {
    expect(DnsZone.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(DnsZone.aggregateMetaData.domain).toBe("dns");
    expect(DnsZone.aggregateMetaData.aggregate).toBe("zone");
  });

  test("findCommon delegates to a detailed variant for a reference", async () => {
    const find = vi.fn().mockResolvedValue(buildDnsZoneData({ id: "z-1" }));
    installBehaviors({ dnsZone: { find } });

    const common = await DnsZone.ofId("z-1").findCommon();

    expect(common).toBeInstanceOf(DnsZoneCommon);
    expect(find).toHaveBeenCalledWith("z-1");
  });

  test("getCommon throws for a missing reference", async () => {
    installBehaviors({
      dnsZone: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(DnsZone.ofId("z-1").getCommon()).rejects.toThrow();
  });

  test("getCommon/findCommon are idempotent on materialized models", async () => {
    const find = vi.fn();
    installBehaviors({ dnsZone: { find } });
    const detailed = new DnsZoneDetailed(buildDnsZoneData());
    const item = new DnsZoneListItem(buildDnsZoneData());

    expect(await detailed.getCommon()).toBe(detailed);
    expect(await detailed.findCommon()).toBe(detailed);
    expect(await item.getCommon()).toBe(item);
    expect(await item.findCommon()).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });

  test("reports no CNAME when optional CNAME data is absent", () => {
    const zone = new DnsZoneCommon(buildDnsZoneData());

    expect(zone.hasCname()).toBe(false);
  });
});

describe("DnsZone migration A-record", () => {
  test("finds a succeeded migration A-record in the zone", async () => {
    const queryByProjectId = vi.fn().mockResolvedValue({
      items: [
        buildDomainMigrationData({
          domains: [
            buildDomainMigrationDomainData({
              coabData: {
                dnsRecords: [
                  buildDomainMigrationDnsRecordData({
                    value: "1.2.3.4",
                    type: "A",
                  }),
                ],
              },
              domain: "example.com",
              state: "succeeded",
            }),
          ],
        }),
      ],
      totalCount: 1,
    });
    installBehaviors({ domainMigration: { queryByProjectId } });
    const migrations =
      await DomainMigration.queryByProjectId("project-1").execute();
    const zone = new DnsZoneCommon(
      buildDnsZoneData({
        recordSet: {
          combinedARecords: buildDnsRecordCombinedACustomData({
            a: ["1.2.3.4"],
          }),
        },
      }),
    );

    expect(zone.findMigrationARecordIp(migrations)).toBe("1.2.3.4");
    expect(zone.hasARecordOfMigration(migrations)).toBe(true);
  });

  test("ignores a pending migration A-record in the zone", async () => {
    const queryByProjectId = vi.fn().mockResolvedValue({
      items: [
        buildDomainMigrationData({
          domains: [
            buildDomainMigrationDomainData({
              coabData: {
                dnsRecords: [
                  buildDomainMigrationDnsRecordData({
                    value: "1.2.3.4",
                    type: "A",
                  }),
                ],
              },
              domain: "example.com",
              state: "pending",
            }),
          ],
        }),
      ],
      totalCount: 1,
    });
    installBehaviors({ domainMigration: { queryByProjectId } });
    const migrations =
      await DomainMigration.queryByProjectId("project-1").execute();
    const zone = new DnsZoneCommon(
      buildDnsZoneData({
        recordSet: {
          combinedARecords: buildDnsRecordCombinedACustomData({
            a: ["1.2.3.4"],
          }),
        },
      }),
    );

    expect(zone.findMigrationARecordIp(migrations)).toBeUndefined();
    expect(zone.hasARecordOfMigration(migrations)).toBe(false);
  });

  test("ignores a migration A-record absent from the zone", async () => {
    const queryByProjectId = vi.fn().mockResolvedValue({
      items: [
        buildDomainMigrationData({
          domains: [
            buildDomainMigrationDomainData({
              coabData: {
                dnsRecords: [
                  buildDomainMigrationDnsRecordData({
                    value: "1.2.3.4",
                    type: "A",
                  }),
                ],
              },
              domain: "example.com",
              state: "succeeded",
            }),
          ],
        }),
      ],
      totalCount: 1,
    });
    installBehaviors({ domainMigration: { queryByProjectId } });
    const migrations =
      await DomainMigration.queryByProjectId("project-1").execute();
    const zone = new DnsZoneCommon(
      buildDnsZoneData({
        recordSet: {
          combinedARecords: buildDnsRecordCombinedACustomData({
            a: ["5.6.7.8"],
          }),
        },
      }),
    );

    expect(zone.findMigrationARecordIp(migrations)).toBeUndefined();
    expect(zone.hasARecordOfMigration(migrations)).toBe(false);
  });

  test("ignores an absent migration domain", async () => {
    const queryByProjectId = vi.fn().mockResolvedValue({
      items: [
        buildDomainMigrationData({
          domains: [
            buildDomainMigrationDomainData({
              coabData: {
                dnsRecords: [
                  buildDomainMigrationDnsRecordData({
                    value: "1.2.3.4",
                    type: "A",
                  }),
                ],
              },
              domain: "other.com",
              state: "succeeded",
            }),
          ],
        }),
      ],
      totalCount: 1,
    });
    installBehaviors({ domainMigration: { queryByProjectId } });
    const migrations =
      await DomainMigration.queryByProjectId("project-1").execute();
    const zone = new DnsZoneCommon(
      buildDnsZoneData({
        recordSet: {
          combinedARecords: buildDnsRecordCombinedACustomData({
            a: ["1.2.3.4"],
          }),
        },
      }),
    );

    expect(zone.findMigrationARecordIp(migrations)).toBeUndefined();
    expect(zone.hasARecordOfMigration(migrations)).toBe(false);
  });
});

describe("DnsZone reference and delegation", () => {
  test("creates a reference", () => {
    const zone = DnsZone.ofId("z-1");
    expect(zone).toBeInstanceOf(DnsZone);
    expect(zone).toBeInstanceOf(ReferenceModel);
    expect(zone.id).toBe("z-1");
  });

  test("find materializes detailed data and preserves undefined", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildDnsZoneData({ id: "z-1" }))
      .mockResolvedValueOnce(undefined);
    installBehaviors({ dnsZone: { find } });

    const found = await DnsZone.find("z-1");
    expect(found).toBeInstanceOf(DnsZoneDetailed);
    expect(found).toBeInstanceOf(DnsZoneCommon);
    expect(found?.domain).toBe("example.com");
    expect(await DnsZone.find("missing")).toBeUndefined();
  });

  test("get throws when the zone is missing", async () => {
    installBehaviors({
      dnsZone: { find: vi.fn().mockResolvedValue(undefined) },
    });
    await expect(DnsZone.get("missing")).rejects.toThrow();
  });

  test("creates a zone reference through the behavior", async () => {
    const create = vi.fn().mockResolvedValue({ id: "new-zone" });
    installBehaviors({ dnsZone: { create } });

    const result = await DnsZone.create("p-1", "_autoconfig.example.com");
    expect(result).toBeInstanceOf(DnsZone);
    expect(result.id).toBe("new-zone");
    expect(create).toHaveBeenCalledWith("p-1", "_autoconfig.example.com");
  });

  test("returns a downloadable zone file", async () => {
    const getZoneFile = vi.fn().mockResolvedValue("file-content");
    installBehaviors({ dnsZone: { getZoneFile } });
    const zone = new DnsZoneCommon(buildDnsZoneData());

    await expect(zone.getZoneFileDownload()).resolves.toEqual({
      filename: "example.com.txt",
      content: "file-content",
    });
    expect(getZoneFile).toHaveBeenCalledWith(zone.id);
  });
});

describe("DnsZone query", () => {
  test("materializes and filters query results", async () => {
    const query = vi.fn().mockResolvedValue({
      items: [
        buildDnsZoneData({ domain: "a.example.com" }),
        buildDnsZoneData({ domain: "b.other.com" }),
      ],
      totalCount: 2,
    });
    installBehaviors({ dnsZone: { query } });
    const project = Project.ofId("p-1");

    const result = await DnsZone.query({ project: project }).execute();
    expect(result).toBeInstanceOf(DnsZoneList);
    expect(result.items).toHaveLength(2);
    expect(result.items[0]).toBeInstanceOf(DnsZoneListItem);
    expect(result.totalCount).toBe(2);

    const filtered = await DnsZone.query({
      domain: "other.com",
      project: project,
    }).execute();
    expect(filtered.items.map((item) => item.domain)).toEqual(["b.other.com"]);
  });
});
