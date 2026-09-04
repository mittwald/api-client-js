import {
  IngressAppInstallationTarget,
  IngressRedirectTarget,
  IngressUndefinedTarget,
  ingressTargetFactory,
} from "./IngressTarget.js";
import { IngressTargetData } from "./types.js";
import { IngressPath } from "../IngressPath/IngressPath.js";

/**
 * The factory only reads the data, so a placeholder is enough to keep the tests
 * independent of the Ingress construction chain.
 */
const path = {} as IngressPath;

const targetOf = (data: unknown) =>
  ingressTargetFactory(path, data as IngressTargetData);

describe("redirect targets", () => {
  const data = { url: "https://example.com/target" };

  test("are built for data carrying a url", () => {
    expect(targetOf(data)).toBeInstanceOf(IngressRedirectTarget);
  });

  test("are tagged as 'redirect'", () => {
    expect(targetOf(data).type).toBe("redirect");
  });

  test("parse the url", () => {
    const target = targetOf(data) as IngressRedirectTarget;

    expect(target.url).toBeInstanceOf(URL);
    expect(target.url.href).toBe("https://example.com/target");
    expect(target.url.hostname).toBe("example.com");
  });

  test("reject a malformed url", () => {
    expect(() => targetOf({ url: "not a url" })).toThrow();
  });
});

describe("app installation targets", () => {
  const data = { installationId: "install-1" };

  test("are built for data carrying an installationId", () => {
    expect(targetOf(data)).toBeInstanceOf(IngressAppInstallationTarget);
  });

  test("are tagged as 'appInstallation'", () => {
    expect(targetOf(data).type).toBe("appInstallation");
  });

  test("expose the app installation reference", () => {
    const target = targetOf(data) as IngressAppInstallationTarget;

    expect(target.appInstallation.id).toBe("install-1");
  });
});

describe("undefined targets", () => {
  const data = { useDefaultPage: true };

  test("are built for data carrying useDefaultPage", () => {
    expect(targetOf(data)).toBeInstanceOf(IngressUndefinedTarget);
  });

  test("are tagged as 'undefined'", () => {
    expect(targetOf(data).type).toBe("undefined");
  });

  test("are built even when useDefaultPage is false", () => {
    expect(targetOf({ useDefaultPage: false })).toBeInstanceOf(
      IngressUndefinedTarget,
    );
  });
});

describe("unsupported targets", () => {
  test("are rejected for empty data", () => {
    expect(() => targetOf({})).toThrow("Ingress target type is not supported.");
  });

  /**
   * `IngressContainerTargetData` is part of the `IngressTargetData` union but
   * the factory has no branch for it, so container targets fail at runtime.
   */
  test("are rejected for container targets, which the data union does allow", () => {
    expect(() =>
      targetOf({ container: { containerId: "c-1", portProtocol: "80/tcp" } }),
    ).toThrow("Ingress target type is not supported.");
  });
});

describe("every target", () => {
  test("keeps a reference to the owning path", () => {
    expect(targetOf({ useDefaultPage: true }).path).toBe(path);
  });

  test("exposes the raw data, frozen", () => {
    const target = targetOf({ useDefaultPage: true });

    expect(target.data).toEqual({ useDefaultPage: true });
    expect(Object.isFrozen(target.data)).toBe(true);
  });
});
