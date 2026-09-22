import type { IngressDomainListItemData } from "./types";
import type { Project } from "../../project";

import { type DomainDetailed, type DomainListItem } from "../../domain/Domain";
import { type IngressDetailed, type IngressListItem } from "../Ingress";
import { type OrderDetailed, type OrderListItem } from "../../order";
import { DataModel } from "../../base";

export class IngressDomainListItem extends DataModel<IngressDomainListItemData> {
  public readonly domain?: DomainListItem | DomainDetailed;
  public readonly hostname: string;
  public readonly ingress?: IngressListItem | IngressDetailed;
  public readonly order?: OrderListItem | OrderDetailed;
  public readonly project: Project;
  public readonly type: "subdomain" | "domain" | "vhost";

  public constructor(data: IngressDomainListItemData) {
    super(data);
    this.hostname = data.hostname;
    this.project = data.project;
    if (data.domain) {
      this.domain = data.domain;
    }
    if (data.ingress) {
      this.ingress = data.ingress;
    }
    if (data.order) {
      this.order = data.order;
    }
    this.type = data.domain
      ? "domain"
      : data.ingress?.isSubdomain
        ? "subdomain"
        : data.order
          ? "domain"
          : "vhost";
  }
}
