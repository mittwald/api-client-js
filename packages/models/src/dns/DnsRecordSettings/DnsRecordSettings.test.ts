import { afterEach, describe, expect, test } from "vitest";

import { buildDnsRecordSettingsData } from "../../testing/builders/buildDnsRecordSettingsData.js";
import { resetBehaviors } from "../../testing/installBehaviors.js";
import { DnsRecordSettings } from "./DnsRecordSettings.js";

afterEach(resetBehaviors);

describe("DnsRecordSettings", () => {
  test.each([
    [buildDnsRecordSettingsData(), 3600],
    [buildDnsRecordSettingsData({ ttl: { auto: true } }), "auto"],
    [buildDnsRecordSettingsData({ ttl: undefined }), "auto"],
  ])("derives the TTL", (data, expected) => {
    expect(new DnsRecordSettings(data).ttl).toBe(expected);
  });
});
