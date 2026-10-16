import type { IngressDomainListItemData } from "./types.js";
import type { Project } from "../../project/index.js";

import {
  type DomainDetailed,
  type DomainListItem,
} from "../../domain/Domain/index.js";
import {
  type IngressDetailed,
  type IngressListItem,
} from "../Ingress/index.js";
import { type OrderDetailed, type OrderListItem } from "../../order/index.js";
import { DataModel } from "../../base/index.js";

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
