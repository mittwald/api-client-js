import { afterEach, describe, expect, test } from "vitest";

import { buildInvoiceRecipientData } from "../../testing/builders/buildInvoiceRecipientData.js";
import { resetBehaviors } from "../../testing/installBehaviors.js";
import { InvoiceRecipient } from "./InvoiceRecipient.js";

afterEach(resetBehaviors);

describe("InvoiceRecipient", () => {
  test("maps recipient fields", () => {
    const data = buildInvoiceRecipientData({
      phoneNumbers: ["+49 123", "+49 456"],
      emailAddress: "test@example.com",
      company: "Example GmbH",
      useFormalTerm: true,
      firstName: "First",
      lastName: "Last",
      title: "Dr.",
    });

    const recipient = new InvoiceRecipient(data);

    expect(recipient).toMatchObject({
      emailAddress: "test@example.com",
      salutation: data.salutation,
      company: "Example GmbH",
      phoneNumber: "+49 123",
      address: data.address,
      useFormalTerm: true,
      firstName: "First",
      lastName: "Last",
      title: "Dr.",
    });
  });

  test.each([undefined, []])(
    "leaves phoneNumber undefined for %s phone numbers",
    (phoneNumbers) => {
      const recipient = new InvoiceRecipient(
        buildInvoiceRecipientData({ phoneNumbers }),
      );

      expect(recipient.phoneNumber).toBeUndefined();
    },
  );

  test("derives the full name and leaves it undefined without names", () => {
    const named = new InvoiceRecipient(
      buildInvoiceRecipientData({ firstName: "First", lastName: "Last" }),
    );
    const unnamed = new InvoiceRecipient(buildInvoiceRecipientData());

    expect(named.fullName).toBe("First Last");
    expect(unnamed.fullName).toBeUndefined();
  });

  test("uses company as display name and falls back to full name", () => {
    const company = new InvoiceRecipient(
      buildInvoiceRecipientData({
        company: "Example GmbH",
        firstName: "First",
        lastName: "Last",
      }),
    );
    const person = new InvoiceRecipient(
      buildInvoiceRecipientData({ firstName: "First", lastName: "Last" }),
    );

    expect(company.displayName).toBe("Example GmbH");
    expect(person.displayName).toBe("First Last");
  });
});
