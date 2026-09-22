import { afterEach, describe, expect, test } from "vitest";
import { DateTime } from "luxon";

import { buildTlsCertificateData } from "../../testing/builders/buildTlsCertificateData";
import { buildTlsAcmeData } from "../../testing/builders/buildTlsAcmeData";
import { resetBehaviors } from "../../testing/installBehaviors";
import { TlsCertificate, tlsFactory, TlsAcme } from "./Tls";
import { Certificate } from "../Certificate";
import { DataModel } from "../../base";

afterEach(resetBehaviors);

describe("TlsCertificate", () => {
  test("constructs a certificate TLS model", () => {
    const data = buildTlsCertificateData({
      certificateId: "custom-certificate-id",
    });

    const tls = new TlsCertificate(data);

    expect(tls.type).toBe("certificate");
    expect(tls.certificate).toBeInstanceOf(Certificate);
    expect(tls.certificate.id).toBe(data.certificateId);
    expect(tls).toBeInstanceOf(DataModel);
  });
});

describe("TlsAcme", () => {
  test("constructs an ACME TLS model with a request deadline", () => {
    const requestDeadline = "2998-12-31T23:00:00.000Z";
    const data = buildTlsAcmeData({
      isCreated: true,
      requestDeadline,
      acme: false,
    });

    const tls = new TlsAcme(data);

    expect(tls.type).toBe("acme");
    expect(tls.acme).toBe(data.acme);
    expect(tls.isCreated).toBe(data.isCreated);
    expect(DateTime.isDateTime(tls.requestDeadline)).toBe(true);
    expect(tls.requestDeadline?.toMillis()).toBe(
      DateTime.fromISO(requestDeadline).toMillis(),
    );
    expect(tls).toBeInstanceOf(DataModel);
  });

  test("constructs an ACME TLS model without a request deadline", () => {
    const tls = new TlsAcme(
      buildTlsAcmeData({ requestDeadline: undefined }),
    );

    expect(tls.requestDeadline).toBeUndefined();
  });

  describe("getStatus", () => {
    test("returns undefined when ACME setup is created", () => {
      const tls = new TlsAcme(buildTlsAcmeData({ isCreated: true }));

      expect(tls.getStatus()).toBeUndefined();
    });

    test("returns disabled when ACME is disabled", () => {
      const tls = new TlsAcme(
        buildTlsAcmeData({ isCreated: false, acme: false }),
      );

      expect(tls.getStatus()).toBe("disabled");
    });

    test("returns exceeded when there is no request deadline", () => {
      const tls = new TlsAcme(
        buildTlsAcmeData({
          requestDeadline: undefined,
          isCreated: false,
          acme: true,
        }),
      );

      expect(tls.getStatus()).toBe("exceeded");
    });

    test("returns exceeded when the request deadline is in the past", () => {
      const tls = new TlsAcme(
        buildTlsAcmeData({
          requestDeadline: "2000-01-01T00:00:00.000Z",
          isCreated: false,
          acme: true,
        }),
      );

      expect(tls.getStatus()).toBe("exceeded");
    });

    test("returns running when the request deadline is in the future", () => {
      const tls = new TlsAcme(
        buildTlsAcmeData({
          requestDeadline: "2999-01-01T00:00:00.000Z",
          isCreated: false,
          acme: true,
        }),
      );

      expect(tls.getStatus()).toBe("running");
    });
  });
});

describe("tlsFactory", () => {
  test("returns a TlsCertificate for certificate data", () => {
    const tls = tlsFactory(buildTlsCertificateData());

    expect(tls).toBeInstanceOf(TlsCertificate);
  });

  test("returns a TlsAcme for data without a certificate ID", () => {
    const tls = tlsFactory(buildTlsAcmeData());

    expect(tls).toBeInstanceOf(TlsAcme);
  });
});
