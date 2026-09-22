import { afterEach, describe, expect, test } from "vitest";

import { buildDomainListItemData } from "../../testing/builders/buildDomainListItemData";
import { IngressDomainListQuery, IngressDomainList } from "./IngressDomainList";
import { buildIngressData } from "../../testing/builders/buildIngressData";
import { resetBehaviors } from "../../testing/installBehaviors";
import { DomainListItem } from "../../domain/Domain";
import { IngressListItem } from "../Ingress";
import { Project } from "../../project";

afterEach(resetBehaviors);

describe("IngressDomainList", () => {
  test("groups an ingress and finds it by id", () => {
    const ingress = new IngressListItem(
      buildIngressData({ hostname: "a.example.com", id: "ing-1" }),
    );
    const list = new IngressDomainList(Project.ofId("p-1"), [ingress], [], []);

    expect(list.items).toHaveLength(1);
    expect(list.items[0].hostname).toBe("a.example.com");
    expect(list.findById("ing-1")).toBe(list.items[0]);
    expect(list.findById("ing-1")?.ingress?.id).toBe("ing-1");
  });

  test("does not duplicate a domain matching an ingress hostname", () => {
    const ingress = new IngressListItem(
      buildIngressData({ hostname: "a.example.com" }),
    );
    const domain = new DomainListItem(
      buildDomainListItemData({
        domain: "a.example.com",
        domainId: "dom-1",
      }),
    );

    expect(
      new IngressDomainList(Project.ofId("p-1"), [ingress], [domain], []).items,
    ).toHaveLength(1);
  });

  test("adds and finds a domain with a different hostname", () => {
    const ingress = new IngressListItem(
      buildIngressData({ hostname: "a.example.com" }),
    );
    const domain = new DomainListItem(
      buildDomainListItemData({
        domain: "b.example.com",
        domainId: "dom-1",
      }),
    );
    const list = new IngressDomainList(
      Project.ofId("p-1"),
      [ingress],
      [domain],
      [],
    );

    expect(list.items).toHaveLength(2);
    expect(list.findById("dom-1")?.domain).toBe(domain);
  });

  test("creates a project-scoped query", () => {
    const query = IngressDomainList.query({ project: "p-1" });

    expect(query).toBeInstanceOf(IngressDomainListQuery);
    expect(query.project).toBeInstanceOf(Project);
    expect(query.project.id).toBe("p-1");
  });
});
