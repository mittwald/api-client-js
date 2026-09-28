import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, test, vi } from "vitest";
vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildMailSettingsData } from "../../testing/builders/buildMailSettingsData.js";
import { MailSettingsDetailed, MailSettings } from "./MailSettings.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";

afterEach(resetBehaviors);

describe("MailSettings", () => {
  test("find delegates and returns detailed data", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildMailSettingsData({ projectId: "p-1" }));
    installBehaviors({ mailSettings: { find } });

    const result = await MailSettings.find("p-1");

    expect(find).toHaveBeenCalledWith("p-1");
    expect(result).toBeInstanceOf(MailSettingsDetailed);
    expect(result?.id).toBe("p-1");
  });

  test("find returns undefined when no settings exist", async () => {
    installBehaviors({
      mailSettings: { find: vi.fn().mockResolvedValue(undefined) },
    });

    expect(await MailSettings.find("missing")).toBeUndefined();
  });

  test("maps blacklist and whitelist to public getters", () => {
    const settings = new MailSettingsDetailed(
      buildMailSettingsData({ blacklist: ["blocked"], whitelist: ["allowed"] }),
    );

    expect(settings.blocklist).toEqual(["blocked"]);
    expect(settings.allowlist).toEqual(["allowed"]);
  });

  test("adds and removes blocklist entries", async () => {
    const updateBlocklist = vi.fn();
    installBehaviors({ mailSettings: { updateBlocklist } });
    const settings = new MailSettingsDetailed(
      buildMailSettingsData({ blacklist: ["existing"], projectId: "p-1" }),
    );

    await settings.addBlocklistEntry("new");
    await settings.removeBlocklistEntry("existing");

    expect(updateBlocklist).toHaveBeenNthCalledWith(1, "p-1", [
      "existing",
      "new",
    ]);
    expect(updateBlocklist).toHaveBeenNthCalledWith(2, "p-1", []);
  });

  test("adds and removes allowlist entries", async () => {
    const updateAllowlist = vi.fn();
    installBehaviors({ mailSettings: { updateAllowlist } });
    const settings = new MailSettingsDetailed(
      buildMailSettingsData({ whitelist: ["existing"], projectId: "p-1" }),
    );

    await settings.addAllowlistEntry("new");
    await settings.removeAllowlistEntry("existing");

    expect(updateAllowlist).toHaveBeenNthCalledWith(1, "p-1", [
      "existing",
      "new",
    ]);
    expect(updateAllowlist).toHaveBeenNthCalledWith(2, "p-1", []);
  });

  test("reference update methods delegate with project id", async () => {
    const updateBlocklist = vi.fn();
    const updateAllowlist = vi.fn();
    installBehaviors({ mailSettings: { updateAllowlist, updateBlocklist } });
    const settings = MailSettings.ofId("p-1");

    await settings.updateBlocklist(["blocked"]);
    await settings.updateAllowlist(["allowed"]);

    expect(updateBlocklist).toHaveBeenCalledWith("p-1", ["blocked"]);
    expect(updateAllowlist).toHaveBeenCalledWith("p-1", ["allowed"]);
  });

  test("detailed settings retain ghostmaker class identity", () => {
    const settings = new MailSettingsDetailed(buildMailSettingsData());

    expect(settings).toBeInstanceOf(MailSettingsDetailed);
    expect(settings).toBeInstanceOf(MailSettings);
  });

  test("findCommon and getCommon delegate for a plain reference", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildMailSettingsData({ projectId: "p-1" }));
    installBehaviors({ mailSettings: { find } });
    const reference = MailSettings.ofId("p-1");

    await expect(reference.findCommon()).resolves.toBeInstanceOf(
      MailSettingsDetailed,
    );
    await expect(reference.getCommon()).resolves.toBeInstanceOf(
      MailSettingsDetailed,
    );
    expect(find).toHaveBeenNthCalledWith(1, "p-1");
    expect(find).toHaveBeenNthCalledWith(2, "p-1");
  });

  test("findCommon returns undefined and getCommon throws when settings are missing", async () => {
    installBehaviors({
      mailSettings: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      MailSettings.ofId("missing").findCommon(),
    ).resolves.toBeUndefined();
    await expect(MailSettings.ofId("missing").getCommon()).rejects.toThrow(
      ObjectNotFoundError,
    );
  });

  test("findCommon and getCommon reuse an already materialized model without refetching", async () => {
    const find = vi.fn().mockResolvedValue(buildMailSettingsData());
    installBehaviors({ mailSettings: { find } });
    const detailed = await MailSettings.get("project-id");
    find.mockClear();

    await expect(detailed.findCommon()).resolves.toBe(detailed);
    await expect(detailed.getCommon()).resolves.toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });
});
