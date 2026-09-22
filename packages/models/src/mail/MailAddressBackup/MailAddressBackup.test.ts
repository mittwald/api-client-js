import { afterEach, describe, expect, test, vi } from "vitest";

import { buildMailAddressBackupData } from "../../testing/builders/buildMailAddressBackupData";
import { MailAddress } from "../MailAddress";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";
import {
  MailAddressBackupListQuery,
  MailAddressBackupList,
  MailAddressBackup,
} from "./MailAddressBackup";

afterEach(resetBehaviors);

describe("MailAddressBackup", () => {
  test("parses a valid backup date", () => {
    const backup = new MailAddressBackup(
      buildMailAddressBackupData({ name: "20240102" }),
      MailAddress.ofId("m-1"),
    );

    expect(backup.name).toBe("20240102");
    expect(backup.date?.isValid).toBe(true);
    expect(backup.date?.year).toBe(2024);
  });

  test("leaves date undefined for an invalid backup name", () => {
    const backup = new MailAddressBackup(
      buildMailAddressBackupData({ name: "not-a-date" }),
      MailAddress.ofId("m-1"),
    );

    expect(backup.date).toBeUndefined();
  });

  test("retains its mail address", () => {
    const mailAddress = MailAddress.ofId("m-1");
    const backup = new MailAddressBackup(
      buildMailAddressBackupData(),
      mailAddress,
    );

    expect(backup.mailAddress).toBe(mailAddress);
  });

  test("restore delegates with the mail address id and backup name", async () => {
    const restoreBackup = vi.fn();
    installBehaviors({ mailAddress: { restoreBackup } });
    const backup = new MailAddressBackup(
      buildMailAddressBackupData({ name: "20240102" }),
      MailAddress.ofId("m-1"),
    );

    await backup.restore();

    expect(restoreBackup).toHaveBeenCalledWith("m-1", "20240102");
  });

  test("query delegates and maps backup list data", async () => {
    const listBackups = vi.fn().mockResolvedValue({
      items: [buildMailAddressBackupData({ name: "20240102" })],
      totalCount: 2,
    });
    installBehaviors({ mailAddress: { listBackups } });
    const mailAddress = MailAddress.ofId("m-1");

    const listQuery = MailAddressBackup.query({ mailAddress: mailAddress });
    expect(listQuery).toBeInstanceOf(MailAddressBackupListQuery);
    const result = await listQuery.execute();

    expect(listBackups).toHaveBeenCalledWith("m-1");
    expect(result).toBeInstanceOf(MailAddressBackupList);
    expect(result.items[0]).toBeInstanceOf(MailAddressBackup);
    expect(result.items[0]?.name).toBe("20240102");
    expect(result.totalCount).toBe(2);
  });
});
