import { afterEach, expect, test } from "vitest";

import {
  buildMailAddressArchiveData,
  resetBehaviors,
} from "../../testing";
import { MailAddressArchive } from "./MailAddressArchive";

afterEach(resetBehaviors);

test("derives byte values and usage percentage", () => {
  const data = buildMailAddressArchiveData({
    usedBytes: 268435456,
    quota: 1073741824,
  });
  const archive = new MailAddressArchive(data);

  expect(archive.quota.value).toBe(1073741824);
  expect(archive.quota.gib).toBe(1);
  expect(archive.usedBytes.value).toBe(268435456);
  expect(archive.usedBytes.gib).toBe(0.25);
  expect(archive.usagePercentage).toBe(0.25);
});
