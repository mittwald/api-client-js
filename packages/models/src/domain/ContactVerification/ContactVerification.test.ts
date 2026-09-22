import { afterEach, describe, expect, test, vi } from "vitest";

import { buildContactVerificationData } from "../../testing/builders/buildContactVerificationData";
import { ReferenceModel } from "../../base";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";
import {
  ContactVerificationDetailed,
  ContactVerificationListItem,
  ContactVerificationCommon,
  ContactVerificationList,
  ContactVerification,
} from "./ContactVerification";

afterEach(resetBehaviors);

describe("ContactVerification", () => {
  test("findCommon delegates to a detailed variant for a reference", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildContactVerificationData({ id: "cv-1" }));
    installBehaviors({ contactVerification: { find } });

    const common = await ContactVerification.ofId("cv-1").findCommon();

    expect(common).toBeInstanceOf(ContactVerificationCommon);
    expect(find).toHaveBeenCalledWith("cv-1");
  });

  test("getCommon throws for a missing reference", async () => {
    installBehaviors({
      contactVerification: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      ContactVerification.ofId("cv-1").getCommon(),
    ).rejects.toThrow();
  });

  test("getCommon/findCommon are idempotent on materialized models", async () => {
    const find = vi.fn();
    installBehaviors({ contactVerification: { find } });
    const detailed = new ContactVerificationDetailed(
      buildContactVerificationData(),
    );
    const item = new ContactVerificationListItem(
      buildContactVerificationData(),
    );

    expect(await detailed.getCommon()).toBe(detailed);
    expect(await detailed.findCommon()).toBe(detailed);
    expect(await item.getCommon()).toBe(item);
    expect(await item.findCommon()).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });

  test("find delegates and returns a detailed verification", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildContactVerificationData({ id: "cv-1" }));
    installBehaviors({ contactVerification: { find } });

    const result = await ContactVerification.find("cv-1");

    expect(find).toHaveBeenCalledWith("cv-1");
    expect(result).toBeInstanceOf(ContactVerificationDetailed);
    expect(result?.id).toBe("cv-1");
  });

  test("find returns undefined when the verification is missing", async () => {
    installBehaviors({
      contactVerification: { find: vi.fn().mockResolvedValue(undefined) },
    });

    expect(await ContactVerification.find("missing")).toBeUndefined();
  });

  test("ofId creates a verification reference", () => {
    const verification = ContactVerification.ofId("cv-ref");

    expect(verification).toBeInstanceOf(ContactVerification);
    expect(verification.id).toBe("cv-ref");
  });

  test("query delegates and materializes a verification list", async () => {
    const query = vi.fn().mockResolvedValue({
      items: [buildContactVerificationData({ id: "cv-list" })],
      totalCount: 2,
    });
    installBehaviors({ contactVerification: { query } });

    const result = await ContactVerification.query().execute();

    expect(query).toHaveBeenCalledWith({});
    expect(result).toBeInstanceOf(ContactVerificationList);
    expect(result.items[0]).toBeInstanceOf(ContactVerificationListItem);
    expect(result.items[0]?.id).toBe("cv-list");
    expect(result.totalCount).toBe(2);
  });

  test("checks one or several statuses", () => {
    const verification = new ContactVerificationDetailed(
      buildContactVerificationData({ status: "pending" }),
    );

    expect(verification.hasStatus("pending")).toBe(true);
    expect(verification.hasStatus("completed")).toBe(false);
    expect(verification.hasStatus(["created", "pending"])).toBe(true);
  });

  test("creates typed verification data", () => {
    const verification = new ContactVerificationDetailed(
      buildContactVerificationData(),
    );

    expect(verification.typeData.type).toBe("email");
  });

  test("findByEmail finds an email case-insensitively", async () => {
    const matching = buildContactVerificationData({
      typeData: { value: "Foo@Example.com", type: "email" },
      id: "matching",
    });
    const query = vi.fn().mockResolvedValue({
      items: [
        buildContactVerificationData({
          typeData: { value: "other@example.com", type: "email" },
          id: "other",
        }),
        matching,
      ],
      totalCount: 2,
    });
    installBehaviors({ contactVerification: { query } });

    const result = await ContactVerification.findByEmail("foo@example.com");

    expect(query).toHaveBeenCalledWith({
      value: "foo@example.com",
      type: "email",
    });
    expect(result?.id).toBe("matching");
  });

  test("resendVerificationMail delegates for email verifications", async () => {
    const resendVerificationEmail = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ contactVerification: { resendVerificationEmail } });
    const verification = new ContactVerificationDetailed(
      buildContactVerificationData({ id: "cv-email" }),
    );

    await verification.resendVerificationMail();

    expect(resendVerificationEmail).toHaveBeenCalledWith("cv-email");
  });

  test("preserves the list item identity chain", () => {
    const item = new ContactVerificationListItem(
      buildContactVerificationData(),
    );

    expect(item).toBeInstanceOf(ContactVerificationListItem);
    expect(item).toBeInstanceOf(ContactVerificationCommon);
    expect(item).toBeInstanceOf(ContactVerification);
    expect(item).toBeInstanceOf(ReferenceModel);
    expect(item.data).toBeDefined();
  });
});
