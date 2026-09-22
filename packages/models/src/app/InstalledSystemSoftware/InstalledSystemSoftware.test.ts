import { describe, expect, test } from "vitest";
import { DateTime } from "luxon";

import { buildInstalledSystemSoftwareData } from "../../testing/builders/buildInstalledSystemSoftwareData";
import { InstalledSystemSoftware } from "./InstalledSystemSoftware";
import { SystemSoftwareVersion } from "../SystemSoftwareVersion";
import { SystemSoftware } from "../SystemSoftware";
import { DataModel } from "../../base";

describe("InstalledSystemSoftware", () => {
  test("maps stable installed software", () => {
    const installed = new InstalledSystemSoftware(
      buildInstalledSystemSoftwareData(),
    );

    expect(installed).toBeInstanceOf(DataModel);
    expect(installed).toMatchObject({
      updateAvailable: false,
      isInstalling: false,
      isUpdating: false,
      version: "8.2",
      id: "sys-id",
    });
    expect(installed.systemSoftware).toBeInstanceOf(SystemSoftware);
    expect(installed.systemSoftware.id).toBe("sys-id");
    expect(installed.systemSoftwareVersion).toBeInstanceOf(
      SystemSoftwareVersion,
    );
    expect(installed.previousSystemSoftwareVersion).toBeUndefined();
  });

  test("detects updating and installing states", () => {
    const updating = new InstalledSystemSoftware(
      buildInstalledSystemSoftwareData({
        systemSoftwareVersion: { current: "v1", desired: "v2" },
      }),
    );
    const installing = new InstalledSystemSoftware(
      buildInstalledSystemSoftwareData({
        systemSoftwareVersion: { desired: "v1" },
      }),
    );

    expect(updating.isUpdating).toBe(true);
    expect(installing.isInstalling).toBe(true);
  });

  test("maps previous version and last-change timestamp", () => {
    const installed = new InstalledSystemSoftware(
      buildInstalledSystemSoftwareData({
        systemSoftwareVersion: {
          lastChangedAt: "2024-01-01T00:00:00.000Z",
          previous: "v1",
          current: "v2",
          desired: "v2",
        },
      }),
    );

    expect(installed.previousSystemSoftwareVersion).toBeInstanceOf(
      SystemSoftwareVersion,
    );
    expect(installed.lastVersionChangedAt).toBeInstanceOf(DateTime);
    expect(installed.lastVersionChangedAt?.isValid).toBe(true);
  });
});
