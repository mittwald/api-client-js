import type { MarketplaceContext } from "./types";
import type { Customer } from "../../customer";

import { Project } from "../../project";
import { required } from "../../base";

export class ExtensionInstanceContext {
  public readonly customer?: Customer;
  public readonly project?: Project;
  public readonly type: MarketplaceContext;
  public readonly value: Customer | Project;

  public constructor(value: Customer | Project) {
    if (value instanceof Project) {
      this.type = "project";
      this.project = value;
    } else {
      this.type = "customer";
      this.customer = value;
    }
    this.value = value;
  }

  public async getCustomer() {
    if (this.customer) {
      return this.customer;
    }
    return Project.get(required(this.project, "Project").id).then(
      (p) => p.customer,
    );
  }
}
