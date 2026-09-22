import type { DomainListItem } from "../../domain/Domain";
import type { IngressListItem } from "../Ingress";
import type { OrderListItem } from "../../order";
import type { Project } from "../../project";

export interface IngressDomainListItemData {
  ingress?: IngressListItem;
  domain?: DomainListItem;
  order?: OrderListItem;
  hostname: string;
  project: Project;
}
