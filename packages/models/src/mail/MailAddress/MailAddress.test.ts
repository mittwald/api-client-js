import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";
vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import type { MailAddressRequestData } from "./types";

import ObjectNotFoundError from "../../errors/ObjectNotFoundError";
import {
  buildMailAddressData,
  buildMailbox,
} from "../../testing/builders/buildMailAddressData";
import { AggregateMetaData } from "../../common";
import { Autoresponder } from "../Autoresponder";
import { MailRateLimit } from "../MailRateLimit";
import { config } from "../../config/config";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";
import { Project } from "../../project";
import {
  MailAddressListQuery,
  MailAddressDetailed,
  MailAddressListItem,
  MailAddressCommon,
  MailAddressList,
  MailAddress,
} from "./MailAddress";

afterEach(resetBehaviors);

describe("MailAddress", () => {
  test("find delegates and returns detailed data", async () => {
    const find = vi.fn().mockResolvedValue(buildMailAddressData({ id: "m-1" }));
    installBehaviors({ mailAddress: { find } });

    const result = await MailAddress.find("m-1");

    expect(find).toHaveBeenCalledWith("m-1");
    expect(result).toBeInstanceOf(MailAddressDetailed);
    expect(result?.id).toBe("m-1");
  });

  test("find returns undefined when no mail address exists", async () => {
    installBehaviors({
      mailAddress: { find: vi.fn().mockResolvedValue(undefined) },
    });

    expect(await MailAddress.find("missing")).toBeUndefined();
  });

  test("references find their detailed data by id", async () => {
    const find = vi.fn().mockResolvedValue(buildMailAddressData({ id: "m-1" }));
    installBehaviors({ mailAddress: { find } });
    const reference = MailAddress.ofId("m-1");

    expect(reference).toBeInstanceOf(MailAddress);
    await reference.findDetailed();
    expect(find).toHaveBeenCalledWith("m-1");
  });

  test("create delegates and returns a reference", async () => {
    const createMailAddress = vi.fn().mockResolvedValue({ id: "m-new" });
    installBehaviors({ mailAddress: { createMailAddress } });
    const project = Project.ofId("p-1");
    const data: MailAddressRequestData = {
      mailbox: {
        enableSpamProtection: true,
        quotaInBytes: 1073741824,
        password: "secret",
      },
      address: "info@example.com",
      isCatchAll: false,
    };

    const result = await MailAddress.create(project, data);

    expect(createMailAddress).toHaveBeenCalledWith("p-1", data);
    expect(result).toBeInstanceOf(MailAddress);
    expect(result.id).toBe("m-new");
  });

  test("mutation methods delegate with the reference id", async () => {
    const updateAddress = vi.fn();
    const updatePassword = vi.fn();
    const deleteBehavior = vi.fn();
    const updateCatchAll = vi.fn();
    const updateForwardAddresses = vi.fn();
    const requestRateLimitChange = vi.fn();
    installBehaviors({
      mailAddress: {
        delete: deleteBehavior,
        requestRateLimitChange,
        updateForwardAddresses,
        updateCatchAll,
        updatePassword,
        updateAddress,
      },
    });
    const mailAddress = MailAddress.ofId("m-1");

    await mailAddress.updateAddress("a");
    await mailAddress.updatePassword("pw");
    await mailAddress.delete();
    await mailAddress.activateCatchAll();
    await mailAddress.deactivateCatchAll();
    await mailAddress.updateForwardAddresses(["x"]);
    await mailAddress.requestRateLimitChange("rl-1");
    await mailAddress.requestRateLimitChange(MailRateLimit.ofId("rl-9"));

    expect(updateAddress).toHaveBeenCalledWith("m-1", "a");
    expect(updatePassword).toHaveBeenCalledWith("m-1", "pw");
    expect(deleteBehavior).toHaveBeenCalledWith("m-1");
    expect(updateCatchAll).toHaveBeenNthCalledWith(1, "m-1", true);
    expect(updateCatchAll).toHaveBeenNthCalledWith(2, "m-1", false);
    expect(updateForwardAddresses).toHaveBeenCalledWith("m-1", ["x"]);
    expect(requestRateLimitChange).toHaveBeenNthCalledWith(1, "m-1", "rl-1");
    expect(requestRateLimitChange).toHaveBeenNthCalledWith(2, "m-1", "rl-9");
  });

  test("converts quota from GiB to bytes", async () => {
    const updateQuota = vi.fn();
    installBehaviors({ mailAddress: { updateQuota } });

    await MailAddress.ofId("m-1").updateQuota(1);

    expect(updateQuota).toHaveBeenCalledWith("m-1", 1073741824);
  });

  test("derives forward address values without a mailbox", () => {
    const address = new MailAddressDetailed(buildMailAddressData());

    expect(address.isForward).toBe(true);
    expect(address.storageUsagePercent).toBe(0);
    expect(address.autoresponder).toBeInstanceOf(Autoresponder);
  });

  test("derives mailbox values and related references", () => {
    const address = new MailAddressDetailed(
      buildMailAddressData({
        mailbox: buildMailbox({
          spamProtection: {
            relocationMinSpamScore: 1,
            autoDeleteSpam: false,
            folder: "spam",
            active: true,
          },
          storageInBytes: {
            current: { updatedAt: "2024-01-01T00:00:00.000Z", value: 90 },
            limit: 100,
          },
          sendingEnabled: false,
        }),
        rateLimitChangeRequest: { rateLimitId: "rl-requested" },
        address: "local@example.com",
      }),
    );

    expect(address.isForward).toBe(false);
    expect(address.sendingDisabled).toBe(true);
    expect(address.storageUsagePercent).toBe(0.9);
    expect(address.hasStorageUsageWarning).toBe(false);
    expect(address.isStorageUsageCritical).toBe(true);
    expect(address.storageLimit.in("bytes")).toBe(100);
    expect(address.storageUsage.in("bytes")).toBe(90);
    expect(address.domain).toBe("example.com");
    expect(address.localPart).toBe("local");
    expect(address.spamProtectionActive).toBe(true);
    expect(address.rateLimit).toBeInstanceOf(MailRateLimit);
    expect(address.rateLimit?.id).toBe("rl-1");
    expect(address.requestedRateLimit).toBeInstanceOf(MailRateLimit);
    expect(address.requestedRateLimit?.id).toBe("rl-requested");
  });

  test("distinguishes warning storage usage from critical usage", () => {
    const address = new MailAddressDetailed(
      buildMailAddressData({
        mailbox: buildMailbox({
          storageInBytes: {
            current: { updatedAt: "2024-01-01T00:00:00.000Z", value: 80 },
            limit: 100,
          },
        }),
      }),
    );

    expect(address.hasStorageUsageWarning).toBe(true);
    expect(address.isStorageUsageCritical).toBe(false);
  });

  test("splits email addresses into local and domain components", () => {
    expect(MailAddress.getEmailAddressComponents("a@b.de")).toEqual({
      domain: "b.de",
      local: "a",
    });
    expect(MailAddress.getEmailAddressComponents("a")).toEqual({
      domain: "",
      local: "a",
    });
  });

  test("queries project mail addresses with default pagination", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildMailAddressData()],
      totalCount: 3,
    });
    installBehaviors({ mailAddress: { list } });
    const project = Project.ofId("p-1");

    const listQuery = MailAddress.query({ project });
    expect(listQuery).toBeInstanceOf(MailAddressListQuery);
    const result = await listQuery.execute();

    expect(list).toHaveBeenCalledWith(
      "p-1",
      expect.objectContaining({ limit: config.defaultPaginationLimit }),
    );
    expect(result).toBeInstanceOf(MailAddressList);
    expect(result.items[0]).toBeInstanceOf(MailAddressListItem);
    expect(result.totalCount).toBe(3);
  });

  test("queries user mail addresses when no project is provided", async () => {
    const listForUser = vi.fn().mockResolvedValue({
      items: [buildMailAddressData()],
      totalCount: 2,
    });
    installBehaviors({ mailAddress: { listForUser } });

    const listQuery = MailAddress.query();
    expect(listQuery).toBeInstanceOf(MailAddressListQuery);
    const result = await listQuery.execute();

    expect(listForUser).toHaveBeenCalledWith(
      expect.objectContaining({ limit: config.defaultPaginationLimit }),
    );
    expect(result).toBeInstanceOf(MailAddressList);
    expect(result.items[0]).toBeInstanceOf(MailAddressListItem);
    expect(result.totalCount).toBe(2);
  });

  test("list items retain ghostmaker class identity", () => {
    const item = new MailAddressListItem(buildMailAddressData());

    expect(item).toBeInstanceOf(MailAddressListItem);
    expect(item).toBeInstanceOf(MailAddressCommon);
    expect(item).toBeInstanceOf(MailAddress);
  });

  test("findCommon and getCommon delegate for a plain reference", async () => {
    const find = vi.fn().mockResolvedValue(buildMailAddressData({ id: "m-1" }));
    installBehaviors({ mailAddress: { find } });
    const reference = MailAddress.ofId("m-1");

    await expect(reference.findCommon()).resolves.toBeInstanceOf(
      MailAddressCommon,
    );
    await expect(reference.getCommon()).resolves.toBeInstanceOf(
      MailAddressCommon,
    );
    expect(find).toHaveBeenNthCalledWith(1, "m-1");
    expect(find).toHaveBeenNthCalledWith(2, "m-1");
  });

  test("findCommon returns undefined when the reference cannot be resolved", async () => {
    installBehaviors({
      mailAddress: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      MailAddress.ofId("missing").findCommon(),
    ).resolves.toBeUndefined();
  });

  test("getCommon throws when the reference cannot be resolved", async () => {
    installBehaviors({
      mailAddress: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(MailAddress.ofId("missing").getCommon()).rejects.toThrow(
      ObjectNotFoundError,
    );
  });

  test("findCommon and getCommon reuse an already materialized model without refetching", async () => {
    const find = vi.fn().mockResolvedValue(buildMailAddressData());
    installBehaviors({ mailAddress: { find } });
    const detailed = await MailAddress.get("mailaddr-id");
    find.mockClear();

    await expect(detailed.findCommon()).resolves.toBe(detailed);
    await expect(detailed.getCommon()).resolves.toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("list items are already common and return themselves from findCommon and getCommon", async () => {
    const item = new MailAddressListItem(buildMailAddressData());

    await expect(item.findCommon()).resolves.toBe(item);
    await expect(item.getCommon()).resolves.toBe(item);
  });

  test("aggregateMetaData pins the mail/mailaddress identity", () => {
    expect(MailAddress.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(MailAddress.aggregateMetaData.domain).toBe("mail");
    expect(MailAddress.aggregateMetaData.aggregate).toBe("mailaddress");
  });

  test("leaves rate limit and spam data unset for a forward without a mailbox", () => {
    const address = new MailAddressDetailed(
      buildMailAddressData({ address: "catchall" }),
    );

    expect(address.rateLimit).toBeUndefined();
    expect(address.requestedRateLimit).toBeUndefined();
    expect(address.sendingDisabled).toBe(false);
    expect(address.spamProtectionActive).toBe(false);
    expect(address.domain).toBeUndefined();
    expect(address.localPart).toBe("catchall");
  });
});
