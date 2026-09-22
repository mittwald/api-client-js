import { afterEach, describe, expect, test, vi } from "vitest";
import { DateTime } from "luxon";

import { buildDomainMigrationDnsRecordData } from "../../testing/builders/buildDomainMigrationDnsRecordData";
import { buildDomainMigrationDomainData } from "../../testing/builders/buildDomainMigrationDomainData";
import { buildDomainMigrationData } from "../../testing/builders/buildDomainMigrationData";
import { DomainMigrationDomain } from "../DomainMigrationDomain";
import { ListQueryModel } from "../../base";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";
import {
  DomainMigrationListQuery,
  DomainMigrationListItem,
  DomainMigrationList,
  DomainMigration,
} from "./DomainMigration";

afterEach(resetBehaviors);

describe("DomainMigration list query", () => {
  test("creates a project-scoped list query", () => {
    const query = DomainMigration.queryByProjectId("project-1");

    expect(query).toBeInstanceOf(DomainMigrationListQuery);
    expect(query).toBeInstanceOf(ListQueryModel);
  });

  test("delegates execution and materializes the returned list", async () => {
    const queryByProjectId = vi.fn().mockResolvedValue({
      items: [buildDomainMigrationData({ id: "m-1" })],
      totalCount: 1,
    });
    installBehaviors({ domainMigration: { queryByProjectId } });

    const result =
      await DomainMigration.queryByProjectId("project-1").execute();

    expect(queryByProjectId).toHaveBeenCalledWith("project-1");
    expect(result).toBeInstanceOf(DomainMigrationList);
    expect(result.items).toHaveLength(1);
    expect(result.items[0]).toBeInstanceOf(DomainMigrationListItem);
    expect(result.totalCount).toBe(1);
  });
});

describe("DomainMigrationListItem", () => {
  test("finds included domains", () => {
    const item = new DomainMigrationListItem(
      buildDomainMigrationData({
        domains: [buildDomainMigrationDomainData({ domain: "a.com" })],
      }),
    );

    expect(item.includesDomain("a.com")).toBe(true);
    expect(item.includesDomain("b.com")).toBe(false);
    expect(item.findDomain("a.com")).toBeInstanceOf(DomainMigrationDomain);
    expect(item.findDomain("a.com")?.domain).toBe("a.com");
    expect(item.findDomain("b.com")).toBeUndefined();
  });

  test("returns the first unique A-record value across domains", () => {
    const item = new DomainMigrationListItem(
      buildDomainMigrationData({
        domains: [
          buildDomainMigrationDomainData({
            coabData: {
              dnsRecords: [
                buildDomainMigrationDnsRecordData({
                  value: "9.9.9.9",
                  type: "A",
                }),
              ],
            },
            domain: "a.com",
          }),
        ],
      }),
    );

    expect(item.findFirstARecord()).toBe("9.9.9.9");
  });

  test("leaves finishedAt undefined when absent", () => {
    const item = new DomainMigrationListItem(buildDomainMigrationData());

    expect(item.finishedAt).toBeUndefined();
  });

  test("converts finishedAt to a Luxon DateTime", () => {
    const item = new DomainMigrationListItem(
      buildDomainMigrationData({ finishedAt: "2024-02-01T00:00:00.000Z" }),
    );

    expect(DateTime.isDateTime(item.finishedAt)).toBe(true);
    expect(item.finishedAt?.toMillis()).toBe(
      DateTime.fromISO("2024-02-01T00:00:00.000Z").toMillis(),
    );
  });
});

describe("DomainMigrationList", () => {
  test("finds a succeeded migration domain", async () => {
    const queryByProjectId = vi.fn().mockResolvedValue({
      items: [
        buildDomainMigrationData({
          domains: [
            buildDomainMigrationDomainData({
              state: "succeeded",
              domain: "a.com",
            }),
          ],
        }),
      ],
      totalCount: 1,
    });
    installBehaviors({ domainMigration: { queryByProjectId } });
    const list = await DomainMigration.queryByProjectId("project-1").execute();

    expect(list.findSucceededMigrationDomain("a.com")?.domain).toBe("a.com");
    expect(list.findSucceededMigrationDomain("a.com")?.state).toBe("succeeded");
  });

  test("does not find a pending migration domain as succeeded", async () => {
    const queryByProjectId = vi.fn().mockResolvedValue({
      items: [
        buildDomainMigrationData({
          domains: [
            buildDomainMigrationDomainData({
              state: "pending",
              domain: "a.com",
            }),
          ],
        }),
      ],
      totalCount: 1,
    });
    installBehaviors({ domainMigration: { queryByProjectId } });
    const list = await DomainMigration.queryByProjectId("project-1").execute();

    expect(list.findSucceededMigrationDomain("a.com")).toBeUndefined();
  });

  test("does not find a failed migration domain as succeeded", async () => {
    const queryByProjectId = vi.fn().mockResolvedValue({
      items: [
        buildDomainMigrationData({
          domains: [
            buildDomainMigrationDomainData({
              domain: "a.com",
              state: "failed",
            }),
          ],
        }),
      ],
      totalCount: 1,
    });
    installBehaviors({ domainMigration: { queryByProjectId } });
    const list = await DomainMigration.queryByProjectId("project-1").execute();

    expect(list.findSucceededMigrationDomain("a.com")).toBeUndefined();
  });

  test("finds a succeeded retry after a failed migration", async () => {
    const failed = buildDomainMigrationDomainData({
      domain: "a.com",
      state: "failed",
    });
    const succeeded = buildDomainMigrationDomainData({
      state: "succeeded",
      domain: "a.com",
    });
    const queryByProjectId = vi.fn().mockResolvedValue({
      items: [
        buildDomainMigrationData({ domains: [failed] }),
        buildDomainMigrationData({ domains: [succeeded] }),
      ],
      totalCount: 2,
    });
    installBehaviors({ domainMigration: { queryByProjectId } });
    const list = await DomainMigration.queryByProjectId("project-1").execute();

    expect(list.findSucceededMigrationDomain("a.com")?.state).toBe("succeeded");
  });

  test("does not find a migration domain that is absent", async () => {
    const queryByProjectId = vi.fn().mockResolvedValue({
      items: [
        buildDomainMigrationData({
          domains: [
            buildDomainMigrationDomainData({
              state: "succeeded",
              domain: "a.com",
            }),
          ],
        }),
      ],
      totalCount: 1,
    });
    installBehaviors({ domainMigration: { queryByProjectId } });
    const list = await DomainMigration.queryByProjectId("project-1").execute();

    expect(list.findSucceededMigrationDomain("b.com")).toBeUndefined();
  });

  test("detects pending migrations", async () => {
    const queryByProjectId = vi
      .fn()
      .mockResolvedValueOnce({
        items: [buildDomainMigrationData({ finishedAt: undefined })],
        totalCount: 1,
      })
      .mockResolvedValueOnce({
        items: [
          buildDomainMigrationData({
            finishedAt: "2024-01-01T00:00:00.000Z",
          }),
        ],
        totalCount: 1,
      });
    installBehaviors({ domainMigration: { queryByProjectId } });

    const pending =
      await DomainMigration.queryByProjectId("project-1").execute();
    const finished =
      await DomainMigration.queryByProjectId("project-1").execute();

    expect(pending.hasPendingMigration()).toBe(true);
    expect(finished.hasPendingMigration()).toBe(false);
  });

  test("returns the most recent finished migration", async () => {
    const queryByProjectId = vi.fn().mockResolvedValue({
      items: [
        buildDomainMigrationData({
          finishedAt: "2024-03-01T00:00:00.000Z",
          id: "later",
        }),
        buildDomainMigrationData({
          finishedAt: "2024-01-01T00:00:00.000Z",
          id: "earlier",
        }),
        buildDomainMigrationData({ finishedAt: undefined, id: "unfinished" }),
      ],
      totalCount: 3,
    });
    installBehaviors({ domainMigration: { queryByProjectId } });
    const list = await DomainMigration.queryByProjectId("project-1").execute();

    expect(list.findMostRecentFinishedMigration()?.id).toBe("later");
  });

  test("returns the most recent finished migration regardless of item order", async () => {
    const queryByProjectId = vi.fn().mockResolvedValue({
      items: [
        buildDomainMigrationData({
          finishedAt: "2024-01-01T00:00:00.000Z",
          id: "earlier",
        }),
        buildDomainMigrationData({
          finishedAt: "2024-03-01T00:00:00.000Z",
          id: "later",
        }),
        buildDomainMigrationData({ finishedAt: undefined, id: "unfinished" }),
      ],
      totalCount: 3,
    });
    installBehaviors({ domainMigration: { queryByProjectId } });
    const list = await DomainMigration.queryByProjectId("project-1").execute();

    expect(list.findMostRecentFinishedMigration()?.id).toBe("later");
  });

  test("finds a migration by domain", async () => {
    const queryByProjectId = vi.fn().mockResolvedValue({
      items: [
        buildDomainMigrationData({
          domains: [buildDomainMigrationDomainData({ domain: "a.com" })],
          id: "matching",
        }),
      ],
      totalCount: 1,
    });
    installBehaviors({ domainMigration: { queryByProjectId } });
    const list = await DomainMigration.queryByProjectId("project-1").execute();

    expect(list.findMigrationByDomain("a.com")?.id).toBe("matching");
    expect(list.findMigrationByDomain("b.com")).toBeUndefined();
  });
});
