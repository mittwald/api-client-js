import { describe, expect, test } from "vitest";

import { buildCertificateCheckReplaceResponseData } from "../../testing/builders/buildCertificateCheckReplaceResponseData";
import { CertificateCheckReplaceResponse } from "./CertificateCheckReplaceResponse";

describe("CertificateCheckReplaceResponse", () => {
  test("copies response data and defaults errors", () => {
    const changes = {
      commonName: { oldValue: "old.example.com", newValue: "new.example.com" },
    };
    const response = new CertificateCheckReplaceResponse(
      buildCertificateCheckReplaceResponseData({
        isReplaceable: false,
        changes,
      }),
    );

    expect(response.isReplaceable).toBe(false);
    expect(response.changes).toEqual(changes);
    expect(response.errors).toEqual([]);
  });

  test("combines added DNS names and includes the new common name by default", () => {
    const response = new CertificateCheckReplaceResponse(
      buildCertificateCheckReplaceResponseData({
        changes: {
          dnsNames: {
            addedValues: ["added.example.com"],
            values: ["current.example.com"],
            removedValues: [],
          },
          commonName: {
            oldValue: "old.example.com",
            newValue: "new.example.com",
          },
        },
      }),
    );

    expect(response.getAddedDnsNames()).toEqual([
      "added.example.com",
      "current.example.com",
      "new.example.com",
    ]);
    expect(response.getAddedDnsNames(false)).toEqual([
      "added.example.com",
      "current.example.com",
    ]);
  });

  test("returns removed DNS names or an empty array", () => {
    const response = new CertificateCheckReplaceResponse(
      buildCertificateCheckReplaceResponseData({
        changes: {
          dnsNames: {
            removedValues: ["removed.example.com"],
            addedValues: [],
            values: [],
          },
        },
      }),
    );

    expect(response.getRemovedDnsNames()).toEqual(["removed.example.com"]);
    expect(
      new CertificateCheckReplaceResponse(
        buildCertificateCheckReplaceResponseData(),
      ).getRemovedDnsNames(),
    ).toEqual([]);
  });
});
