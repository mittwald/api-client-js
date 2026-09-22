import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { DateTime } from "luxon";

import {
  SshKeyDetailed,
  SshKeyListItem,
  SshKeyList,
  SshKey,
} from "./SshKey.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import {
  buildSshKeyListItemData,
  buildSshKeyData,
} from "../../testing/builders/buildSshKeyData.js";
import { ReferenceModel } from "../../base/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";

afterEach(resetBehaviors);

test("find/get map found and missing keys", async () => {
  const find = vi
    .fn()
    .mockResolvedValueOnce(buildSshKeyData({ sshKeyId: "k-1" }))
    .mockResolvedValueOnce(buildSshKeyData({ sshKeyId: "k-2" }))
    .mockResolvedValueOnce(undefined)
    .mockResolvedValueOnce(undefined);
  installBehaviors({ sshKey: { find } });
  const found = await SshKey.find("k-1");
  expect(find).toHaveBeenCalledWith("k-1");
  expect(found).toBeInstanceOf(SshKeyDetailed);
  expect(found?.id).toBe("k-1");
  expect(await SshKey.get("k-2")).toBeInstanceOf(SshKeyDetailed);
  expect(await SshKey.find("missing")).toBeUndefined();
  await expect(SshKey.get("missing")).rejects.toBeInstanceOf(
    ObjectNotFoundError,
  );
});

test("findDetailed delegates with the reference id", async () => {
  const find = vi.fn().mockResolvedValue(buildSshKeyData({ sshKeyId: "k-3" }));
  installBehaviors({ sshKey: { find } });
  await SshKey.ofId("k-3").findDetailed();
  expect(find).toHaveBeenCalledWith("k-3");
});

test("maps comment and optional expiration", () => {
  const expiring = new SshKeyDetailed(
    buildSshKeyData({ expiresAt: "2025-01-01T00:00:00.000Z" }),
  );
  expect(expiring.comment).toBe("laptop");
  expect(expiring.expiresAt).toBeInstanceOf(DateTime);
  expect(new SshKeyDetailed(buildSshKeyData()).expiresAt).toBeUndefined();
});

test("findCommon/getCommon resolve a reference and stay idempotent once materialized", async () => {
  const find = vi
    .fn()
    .mockResolvedValueOnce(buildSshKeyData({ sshKeyId: "k-c" }))
    .mockResolvedValueOnce(buildSshKeyData({ sshKeyId: "k-g" }));
  installBehaviors({ sshKey: { find } });
  const common = await SshKey.ofId("k-c").findCommon();
  expect(common).toBeInstanceOf(SshKeyDetailed);
  expect(common?.id).toBe("k-c");
  expect(await SshKey.ofId("k-g").getCommon()).toBeInstanceOf(SshKeyDetailed);

  const materialized = new SshKeyDetailed(buildSshKeyData({ sshKeyId: "k-1" }));
  find.mockClear();
  expect(await materialized.findCommon()).toBe(materialized);
  expect(await materialized.getCommon()).toBe(materialized);
  expect(find).not.toHaveBeenCalled();
});

test("findCommon yields undefined and getCommon throws for missing keys", async () => {
  installBehaviors({ sshKey: { find: vi.fn().mockResolvedValue(undefined) } });
  expect(await SshKey.ofId("missing").findCommon()).toBeUndefined();
  await expect(SshKey.ofId("missing").getCommon()).rejects.toBeInstanceOf(
    ObjectNotFoundError,
  );
});

test("materializes list data and item composition", async () => {
  const list = vi
    .fn()
    .mockResolvedValue({ items: [buildSshKeyListItemData()], totalCount: 2 });
  installBehaviors({ sshKey: { list } });
  const result = await SshKey.query().execute();
  const item = result.items[0];
  expect(result).toBeInstanceOf(SshKeyList);
  expect(item).toBeInstanceOf(SshKeyListItem);
  expect(item).toBeInstanceOf(ReferenceModel);
  expect(item.data).toBeDefined();
  expect(result.totalCount).toBe(2);
});
