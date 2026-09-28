import { afterEach, describe, expect, test } from "vitest";

import { buildIngressPathData } from "../../testing/builders/buildIngressPathData.js";
import { buildIngressData } from "../../testing/builders/buildIngressData.js";
import { resetBehaviors } from "../../testing/installBehaviors.js";
import { IngressListItem } from "../Ingress/index.js";
import { IngressPath } from "./IngressPath.js";
import { Project } from "../../project/index.js";
import {
  IngressUndefinedTarget,
  IngressRedirectTarget,
} from "../IngressTarget/index.js";

afterEach(resetBehaviors);

describe("IngressPath", () => {
  const ingress = new IngressListItem(
    buildIngressData({ hostname: "example.com", projectId: "proj-9" }),
  );

  test("derives its URL and project from the ingress", () => {
    const path = new IngressPath(
      ingress,
      buildIngressPathData({ path: "/foo" }),
    );

    expect(path.path).toBe("/foo");
    expect(path.url).toBeInstanceOf(URL);
    expect(path.url.href).toBe("https://example.com/foo");
    expect(path.project).toBeInstanceOf(Project);
    expect(path.project.id).toBe("proj-9");
    expect(path.ingress).toBe(ingress);
  });

  test("selects a redirect target", () => {
    const path = new IngressPath(
      ingress,
      buildIngressPathData({
        target: { url: "https://target.example/" },
        path: "/r",
      }),
    );

    expect(path.target).toBeInstanceOf(IngressRedirectTarget);
    expect(path.target?.type).toBe("redirect");
  });

  test("selects an undefined target for the default page", () => {
    const path = new IngressPath(
      ingress,
      buildIngressPathData({ target: { useDefaultPage: true } }),
    );

    expect(path.target).toBeInstanceOf(IngressUndefinedTarget);
    expect(path.target?.type).toBe("undefined");
  });
});
