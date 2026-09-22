import { expect, test } from "vitest";

import { buildCertificateContactData } from "../../testing/builders/buildCertificateContactData";
import { CertificateContact } from "./CertificateContact";

test("copies certificate contact fields", () => {
  const data = buildCertificateContactData();
  const contact = new CertificateContact(data);

  expect(contact.city).toBe(data.city);
  expect(contact.company).toBe(data.company);
  expect(contact.country).toBe(data.country);
  expect(contact.organizationalUnit).toBe(data.organizationalUnit);
  expect(contact.state).toBe(data.state);
});
