import type { DomainListItem } from "../../domain/Domain/index.js";
import type { IngressDomainListQueryData } from "./types.js";
import type { IngressListItem } from "../Ingress/index.js";
import type { OrderListItem } from "../../order/index.js";

import { IngressDomainListItem } from "../IngressDomainListItem/index.js";
import { ListQueryModel, extractId } from "../../base/index.js";
import { DomainArticleTemplate } from "../../article/index.js";
import { Project } from "../../project/internal.js";

export class IngressDomainList {
  public readonly items: IngressDomainListItem[];
  // Client-side merged list (no backend pagination), so the total is simply the
  // number of materialized items.
  public readonly totalCount: number;
  public constructor(
    project: Project,
    ingresses: IngressListItem[],
    domains: DomainListItem[],
    orders: OrderListItem[],
  ) {
    const ingressesWithDomains: IngressDomainListItem[] = [];

    ingresses.forEach((ingress: IngressListItem) => {
      const domain = domains.find(
        (domain) => domain.domain === ingress.hostname,
      );
      const { hostname } = ingress;
      ingressesWithDomains.push(
        new IngressDomainListItem({ hostname, ingress, project, domain }),
      );
    });
    domains.forEach((domain: DomainListItem) => {
      const existingDomain = ingressesWithDomains.find(
        (d) => d.hostname === domain.domain,
      );
      if (existingDomain) {
        return;
      }
      ingressesWithDomains.push(
        new IngressDomainListItem({ hostname: domain.domain, project, domain }),
      );
    });

    orders.forEach((order: OrderListItem) => {
      const domainAttribute = order.getOrderItemAttribute("domain");

      if (domainAttribute && domainAttribute.value) {
        const hostname = domainAttribute.value;
        const existingDomain = ingressesWithDomains.find(
          (i) => i.hostname === hostname,
        );
        // dont add order if a domain/ingress for this hostname is already in the list, to avoid duplicates if something goes wrong with the order but the domain/ingress are there
        if (existingDomain) {
          return;
        }
        ingressesWithDomains.push(
          new IngressDomainListItem({ hostname, project, order }),
        );
      }
    });

    this.items = ingressesWithDomains.map((i) => new IngressDomainListItem(i));
    this.totalCount = this.items.length;
  }

  public static query(query: IngressDomainListQueryData) {
    return new IngressDomainListQuery(query);
  }

  public readonly findById = (id: string) => {
    const ingress = this.items.find((item) => item.ingress?.id === id);
    if (ingress) {
      return ingress;
    }
    const domain = this.items.find((item) => item.domain?.id === id);
    if (domain) {
      return domain;
    }
    const order = this.items.find((item) => item.order?.id === id);
    if (order) {
      return order;
    }
    return undefined;
  };
}

export class IngressDomainListQuery extends ListQueryModel<IngressDomainListQueryData> {
  public readonly project: Project;

  public constructor(query: IngressDomainListQueryData) {
    super(query);
    this.project = Project.ofId(extractId(query.project));
  }

  public static query(query: IngressDomainListQueryData) {
    return new IngressDomainListQuery(query);
  }

  public async execute() {
    const [domainList, ingressList, orderList] = await Promise.all([
      this.project.domains.execute(),
      this.project.ingresses.execute(),
      this.project.orders
        .refine({
          templateNames: [DomainArticleTemplate.templateName],
          includesStatus: ["CONFIRMED"],
        })
        .executeOptional(),
    ]);
    const ingresses = ingressList.items.map((i) => i);
    const domains = domainList.items.map((i) => i);
    const orders = orderList.items.filter((i) => i.type === "NEW_ORDER");
    return new IngressDomainList(this.project, ingresses, domains, orders);
  }
}
