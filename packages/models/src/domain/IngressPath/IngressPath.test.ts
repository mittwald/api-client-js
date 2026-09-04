import { IngressTargetData } from "../IngressTarget/index.js";
import { IngressPath } from "./IngressPath.js";
import { IngressData, IngressDetailed } from "../Ingress/index.js";
import { IngressPathData } from "./types.js";

const ingressData: Partial<IngressData> = {
  id: "abc",
  paths: [],
};

const corruptIngressTargetData = {} as IngressTargetData;

const ingressPathData: Partial<IngressPathData> = {
  path: "/",
  target: corruptIngressTargetData,
};

test("Creating IngressPath with corrupt IngressTarget throws error", () => {
  expect(() => {
    new IngressPath(
      new IngressDetailed(ingressData as IngressData),
      ingressPathData as IngressPathData,
    );
  }).toThrowError("Ingress IngressDetailed@abc has no default path.");
});

const validIngressData = (paths: unknown[]): IngressData =>
  ({
    id: "ingress-1",
    hostname: "example.com",
    isDefault: false,
    paths,
  }) as unknown as IngressData;

const pathOf = (path: string, target: unknown): IngressPath => {
  const ingress = new IngressDetailed(
    validIngressData([{ path: "/", target: { useDefaultPage: true } }]),
  );

  return new IngressPath(ingress, {
    path,
    target,
  } as unknown as IngressPathData);
};

describe("url", () => {
  test("resolves the root path against the ingress base url", () => {
    expect(pathOf("/", { useDefaultPage: true }).url.href).toBe(
      "https://example.com/",
    );
  });

  test("resolves a sub path against the ingress base url", () => {
    expect(pathOf("/api/v1", { useDefaultPage: true }).url.href).toBe(
      "https://example.com/api/v1",
    );
  });

  test("is a real URL instance", () => {
    expect(pathOf("/api", { useDefaultPage: true }).url).toBeInstanceOf(URL);
  });
});

describe("ingress and target", () => {
  test("keeps a reference to the owning ingress", () => {
    const ingress = new IngressDetailed(
      validIngressData([{ path: "/", target: { useDefaultPage: true } }]),
    );

    const ingressPath = new IngressPath(ingress, {
      path: "/api",
      target: { useDefaultPage: true },
    } as unknown as IngressPathData);

    expect(ingressPath.ingress).toBe(ingress);
  });

  test("exposes the raw path", () => {
    expect(pathOf("/api", { useDefaultPage: true }).path).toBe("/api");
  });

  test("builds a redirect target from url target data", () => {
    const target = pathOf("/api", { url: "https://api.example.com" }).target;

    expect(target.type).toBe("redirect");
  });

  test("builds an app installation target from installationId target data", () => {
    const target = pathOf("/api", { installationId: "install-1" }).target;

    expect(target.type).toBe("appInstallation");
  });
});
