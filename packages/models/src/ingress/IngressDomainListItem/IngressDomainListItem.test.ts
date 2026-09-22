import { afterEach, describe, expect, test } from "vitest";

import { buildDomainListItemData } from "../../testing/builders/buildDomainListItemData.js";
import { buildIngressData } from "../../testing/builders/buildIngressData.js";
import { resetBehaviors } from "../../testing/installBehaviors.js";
import { IngressDomainListItem } from "./IngressDomainListItem.js";
import { DomainListItem } from "../../domain/Domain/index.js";
import { IngressListItem } from "../Ingress/index.js";
import { Project } from "../../project/index.js";
import { DataModel } from "../../base/index.js";

afterEach(resetBehaviors);

describe("IngressDomainListItem", () => {
  test("represents a hostname-only virtual host", () => {
    const item = new IngressDomainListItem({
      project: Project.ofId("p-1"),
      hostname: "example.com",
    });

    expect(item.type).toBe("vhost");
    expect(item.hostname).toBe("example.com");
    expect(item.ingress).toBeUndefined();
    expect(item.domain).toBeUndefined();
    expect(item.order).toBeUndefined();
    expect(item.project.id).toBe("p-1");
    expect(item).toBeInstanceOf(DataModel);
  });

  test("represents a subdomain ingress", () => {
    const ingress = new IngressListItem(
      buildIngressData({ hostname: "sub.example.com" }),
    );
    const item = new IngressDomainListItem({
      project: Project.ofId("p-1"),
      hostname: ingress.hostname,
      ingress,
    });

    expect(item.type).toBe("subdomain");
    expect(item.ingress).toBe(ingress);
    expect(item.ingress?.project).toBeInstanceOf(Project);
  });

  test("represents a non-subdomain ingress as a virtual host", () => {
    const ingress = new IngressListItem(
      buildIngressData({ hostname: "example.com" }),
    );
    const item = new IngressDomainListItem({
      project: Project.ofId("p-1"),
      hostname: ingress.hostname,
      ingress,
    });

    expect(item.type).toBe("vhost");
  });

  test("represents a domain", () => {
    const domain = new DomainListItem(buildDomainListItemData());
    const item = new IngressDomainListItem({
      project: Project.ofId("p-1"),
      hostname: domain.domain,
      domain,
    });

    expect(item.type).toBe("domain");
    expect(item.domain).toBe(domain);
  });
});
