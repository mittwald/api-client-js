import { afterEach, describe, expect, test, vi } from "vitest";

import { buildNewsletterSubscriberUserData } from "../../testing/builders/buildNewsletterSubscriberUserData.js";
import { buildNewsletterInfoData } from "../../testing/builders/buildNewsletterInfoData.js";
import { NewsletterInfo, Newsletter } from "./Newsletter.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";

afterEach(resetBehaviors);

describe("Newsletter.getInfo", () => {
  test("returns newsletter info and forwards the request config", async () => {
    const data = buildNewsletterInfoData();
    const getInfo = vi.fn().mockResolvedValue(data);
    const requestConfig = { headers: { "x-test": "newsletter" } };
    installBehaviors({ newsletter: { getInfo } });

    const result = await Newsletter.getInfo(requestConfig);

    expect(result).toBeInstanceOf(NewsletterInfo);
    expect(getInfo).toHaveBeenCalledWith(requestConfig);
  });

  test.each([
    [{ registered: false, active: true }, "active"],
    [{ registered: true, active: false }, "confirmationPending"],
    [{ registered: false, active: false }, "inactive"],
  ] as const)("derives status %s as %s", async (overrides, status) => {
    const getInfo = vi
      .fn()
      .mockResolvedValue(buildNewsletterInfoData(overrides));
    installBehaviors({ newsletter: { getInfo } });

    const result = await Newsletter.getInfo();

    expect(result.status).toBe(status);
  });

  test("uses the email as the newsletter info id", async () => {
    const data = buildNewsletterInfoData({ email: "newsletter@example.com" });
    const getInfo = vi.fn().mockResolvedValue(data);
    installBehaviors({ newsletter: { getInfo } });

    const result = await Newsletter.getInfo();

    expect(result.id).toBe(data.email);
  });
});

describe("Newsletter.subscribe", () => {
  test("subscribes with explicit subscriber data without loading the user", async () => {
    const subscribe = vi.fn().mockResolvedValue(undefined);
    const find = vi.fn();
    installBehaviors({ newsletter: { subscribe }, user: { find } });

    await Newsletter.subscribe({ firstName: "Grace", lastName: "Hopper" });

    expect(subscribe).toHaveBeenCalledOnce();
    expect(subscribe).toHaveBeenCalledWith({
      firstName: "Grace",
      lastName: "Hopper",
    });
    expect(find).not.toHaveBeenCalled();
  });

  test("subscribes with subscriber data from the current user", async () => {
    const userData = buildNewsletterSubscriberUserData();
    const subscribe = vi.fn().mockResolvedValue(undefined);
    const find = vi.fn().mockResolvedValue(userData);
    installBehaviors({ newsletter: { subscribe }, user: { find } });

    await Newsletter.subscribe();

    expect(find).toHaveBeenCalledWith("self", undefined);
    expect(subscribe).toHaveBeenCalledWith({
      firstName: userData.person.firstName,
      lastName: userData.person.lastName,
    });
  });
});

describe("Newsletter.unsubscribe", () => {
  test("unsubscribes once", async () => {
    const unsubscribe = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ newsletter: { unsubscribe } });

    await Newsletter.unsubscribe();

    expect(unsubscribe).toHaveBeenCalledOnce();
  });
});
