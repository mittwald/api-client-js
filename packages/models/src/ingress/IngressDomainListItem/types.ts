import type { DomainListItem } from "../../domain/Domain/index.js";
import type { IngressListItem } from "../Ingress/index.js";
import type { OrderListItem } from "../../order/index.js";
import type { Project } from "../../project/index.js";

export interface IngressDomainListItemData {
  ingress?: IngressListItem;
  domain?: DomainListItem;
  order?: OrderListItem;
  hostname: string;
  project: Project;
}
