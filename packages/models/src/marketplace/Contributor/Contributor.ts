import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import {
  type AsyncResourceVariant,
  provideReact,
} from "../../lib/provideReact.js";
import { ReferenceModel } from "../../base/ReferenceModel.js";
import { ContributorData, ContributorListItemData } from "./types.js";
import { Customer } from "../../customer/index.js";

export class Contributor extends ReferenceModel {
  public static ofId(id: string): Contributor {
    return new Contributor(id);
  }

  public static find = provideReact(
    async (id: string): Promise<ContributorDetailed | undefined> => {
      const data = await config.behaviors.contributor.find(id);

      if (data !== undefined) {
        return new ContributorDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<ContributorDetailed> => {
      const contributor = await this.find(id);
      assertObjectFound(contributor, this, id);
      return contributor;
    },
  );

  public getDetailed = provideReact(() =>
    Contributor.get(this.id),
  ) as AsyncResourceVariant<ContributorDetailed, []>;

  public static list = provideReact(
    async (): Promise<Readonly<Array<ContributorListItem>>> => {
      const data = await config.behaviors.contributor.list();
      return Object.freeze(data.map((d) => new ContributorListItem(d)));
    },
  );
}

class ContributorCommon extends classes(
  DataModel<ContributorData | ContributorListItemData>,
  Contributor,
) {
  public readonly customer: Customer;

  public constructor(data: ContributorData | ContributorListItemData) {
    super([data], [data.id]);
    this.customer = Customer.ofId(data.customerId);
  }
}

export class ContributorDetailed extends classes(
  ContributorCommon,
  DataModel<ContributorData>,
) {
  public constructor(data: ContributorData) {
    super([data], [data]);
  }
}

export class ContributorListItem extends classes(
  ContributorCommon,
  DataModel<ContributorListItemData>,
) {
  public constructor(data: ContributorListItemData) {
    super([data], [data]);
  }
}
