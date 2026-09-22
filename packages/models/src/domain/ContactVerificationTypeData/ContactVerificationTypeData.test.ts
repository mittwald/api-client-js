import { describe, expect, test } from "vitest";
import { DateTime } from "luxon";

import type { ContactVerificationEmailDataData } from "./types";

import {
  contactVerificationTypeDataFactory,
  ContactVerificationAddressData,
  ContactVerificationEmailData,
  ContactVerificationNameData,
} from "./ContactVerificationTypeData";

describe("contactVerificationTypeDataFactory", () => {
  test("creates address data", () => {
    const result = contactVerificationTypeDataFactory({
      type: "address",
      value: "x",
    });

    expect(result).toBeInstanceOf(ContactVerificationAddressData);
    expect(result.type).toBe("address");
    expect(result.value).toBe("x");
  });

  test("creates name data", () => {
    const result = contactVerificationTypeDataFactory({
      type: "name",
      value: "y",
    });

    expect(result).toBeInstanceOf(ContactVerificationNameData);
    expect(result.type).toBe("name");
    expect(result.value).toBe("y");
  });

  test("creates email data", () => {
    const result = contactVerificationTypeDataFactory({
      value: "z@e.com",
      type: "email",
    });

    expect(result).toBeInstanceOf(ContactVerificationEmailData);
    expect(result.type).toBe("email");
    expect(result.value).toBe("z@e.com");
  });
});

describe("ContactVerificationEmailData", () => {
  const buildEmailData = (
    overrides: Partial<ContactVerificationEmailDataData> = {},
  ): ContactVerificationEmailDataData => ({
    value: "user@example.com",
    type: "email",
    ...overrides,
  });

  test("allows resending when no email has been sent", () => {
    const email = new ContactVerificationEmailData(buildEmailData());

    expect(email.isEmailResendAllowed()).toBe(true);
  });

  test("recognizes an expired verification deadline", () => {
    const email = new ContactVerificationEmailData(
      buildEmailData({
        emailVerificationDeadline: DateTime.now().minus({ hour: 1 }).toISO(),
      }),
    );

    expect(email.hasDeadlineExpired()).toBe(true);
  });

  test("disallows a recent resend before the deadline", () => {
    const email = new ContactVerificationEmailData(
      buildEmailData({
        emailVerificationDeadline: DateTime.now().plus({ hour: 1 }).toISO(),
        lastEmailSentDate: DateTime.now().toISO(),
      }),
    );

    expect(email.hasDeadlineExpired()).toBe(false);
    expect(email.isEmailResendAllowed()).toBe(false);
  });
});
