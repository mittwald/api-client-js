import { afterEach, describe, expect, test } from "vitest";

import { buildIngressPathData } from "../../testing/builders/buildIngressPathData.js";
import { buildIngressData } from "../../testing/builders/buildIngressData.js";
import { resetBehaviors } from "../../testing/installBehaviors.js";
import { IngressListItem } from "../Ingress/index.js";
import { IngressPath } from "../IngressPath/index.js";
import { AppInstallation } from "../../app/index.js";
import { Container } from "../../container/index.js";
import {
  IngressAppInstallationTarget,
  IngressContainerTarget,
  IngressUndefinedTarget,
  IngressRedirectTarget,
  ingressTargetFactory,
} from "./IngressTarget.js";

afterEach(resetBehaviors);

describe("ingressTargetFactory", () => {
  const ingress = new IngressListItem(
    buildIngressData({ projectId: "proj-1" }),
  );
  const path = new IngressPath(ingress, buildIngressPathData());

  test("creates redirect targets", () => {
    const target = ingressTargetFactory(path, {
      url: "https://r.example/",
    });

    expect(target).toBeInstanceOf(IngressRedirectTarget);
    expect(target?.type).toBe("redirect");
    expect(target).toHaveProperty("url.href", "https://r.example/");
  });

  test("creates app installation targets", () => {
    const target = ingressTargetFactory(path, { installationId: "inst-1" });

    expect(target).toBeInstanceOf(IngressAppInstallationTarget);
    expect(target?.type).toBe("appInstallation");
    expect(target).toHaveProperty(
      "appInstallation",
      expect.any(AppInstallation),
    );
    expect(target).toHaveProperty("appInstallation.id", "inst-1");
  });

  test("creates container targets", () => {
    const target = ingressTargetFactory(path, {
      container: { portProtocol: "8080/TCP", id: "cont-1" },
    });

    expect(target).toBeInstanceOf(IngressContainerTarget);
    expect(target?.type).toBe("container");
    expect(target).toHaveProperty("container", expect.any(Container));
    expect(target).toHaveProperty("container.id", "cont-1");
    expect(target).toHaveProperty("portProtocol", "8080/TCP");
  });

  test("creates undefined targets for the default page", () => {
    const target = ingressTargetFactory(path, { useDefaultPage: true });

    expect(target).toBeInstanceOf(IngressUndefinedTarget);
    expect(target?.type).toBe("undefined");
  });
});
