import { beforeEach, afterEach, describe, expect, test } from "vitest";

import { buildDnsCertificateStatusData } from "../../testing/builders/buildDnsCertificateStatusData";
import { DnsCertificateStatus } from "./DnsCertificateStatus";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";

beforeEach(() => installBehaviors({}));
afterEach(resetBehaviors);

describe("DnsCertificateStatus", () => {
  test("constructs without an update timestamp", () => {
    const status = new DnsCertificateStatus(
      buildDnsCertificateStatusData({ updatedAt: undefined }),
    );

    expect(status.status).toBe("ready");
    expect(status.message).toBe("all good");
    expect(status.updatedAt).toBeUndefined();
  });

  test("converts the update timestamp to a DateTime", () => {
    const status = new DnsCertificateStatus(buildDnsCertificateStatusData());

    expect(status.updatedAt?.toISODate()).toBe("2024-05-01");
  });
});
