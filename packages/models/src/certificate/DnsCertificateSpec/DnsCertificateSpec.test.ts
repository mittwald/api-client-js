import { beforeEach, afterEach, describe, expect, test } from "vitest";

import { buildDnsCertificateStatusData } from "../../testing/builders/buildDnsCertificateStatusData.js";
import { buildDnsCertificateSpecData } from "../../testing/builders/buildDnsCertificateSpecData.js";
import { DnsCertificateStatus } from "../DnsCertificateStatus/index.js";
import { DnsCertificateSpec } from "./DnsCertificateSpecData.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";

beforeEach(() => installBehaviors({}));
afterEach(resetBehaviors);

describe("DnsCertificateSpec", () => {
  test("constructs without a status", () => {
    const spec = new DnsCertificateSpec(
      buildDnsCertificateSpecData({ status: undefined }),
    );

    expect(spec.cnameTarget).toBe("cname.example.com");
    expect(spec.status).toBeUndefined();
  });

  test("constructs its status model", () => {
    const spec = new DnsCertificateSpec(
      buildDnsCertificateSpecData({
        status: buildDnsCertificateStatusData(),
      }),
    );

    expect(spec.status).toBeInstanceOf(DnsCertificateStatus);
    expect(spec.status?.status).toBe("ready");
  });
});
