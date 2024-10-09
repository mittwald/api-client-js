import { classes } from "polytype";
import {
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import { Ingress } from "../../domain/index.js";
import {
  MailAddressData,
  MailAddressListItemData,
  MailAddressListQueryModelData,
} from "./types.js";
import { provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { Project } from "../../project/index.js";

export class MailAddress extends ReferenceModel {
  public static ofId(id: string): MailAddress {
    return new Ingress(id);
  }

  public static find = provideReact(
    async (id: string): Promise<MailAddress | undefined> => {
      const data = await config.behaviors.mailAddress.find(id);
      if (data !== undefined) {
        return new MailAddressDetailed(data);
      }
    },
  );

  public static get = provideReact(async (id: string): Promise<MailAddress> => {
    const mailAddress = await this.find(id);
    assertObjectFound(mailAddress, this, id);
    return mailAddress;
  });
}

export class MailAddressCommon extends classes(
  DataModel<MailAddressData>,
  MailAddress,
) {
  public constructor(data: MailAddressData) {
    super([data], [data.id]);
  }
}

export class MailAddressDetailed extends classes(
  MailAddressCommon,
  DataModel<MailAddressData>,
) {
  public constructor(data: MailAddressData) {
    super([data], [data]);
  }
}

export class MailAddressListItem extends classes(
  MailAddressCommon,
  DataModel<MailAddressData>,
) {
  public constructor(data: MailAddressListItemData) {
    super([data], [data]);
  }
}

export class MailAddressListQuery extends ListQueryModel<MailAddressListQueryModelData> {
  public readonly project: Project;
  public constructor(
    project: Project,
    query: MailAddressListQueryModelData = {},
  ) {
    super(query, {
      dependencies: [project.id],
    });
    this.project = project;
  }

  public refine(query: MailAddressListQueryModelData = {}) {
    return new MailAddressListQuery(this.project, {
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { items, totalCount } = await config.behaviors.mailAddress.query(
      this.project.id,
    );
    return new MailAddressList(
      this.project,
      this.query,
      items.map((m) => new MailAddressListItem(m)),
      totalCount,
    );
  }, [this.queryId]);

  public getTotalCount = provideReact(async () => {
    const { items } = await this.refine({}).execute();
    return items.length;
  }, [this.queryId]);

  public findOneAndOnly = provideReact(async () => {
    const { items, totalCount } = await this.refine({}).execute();
    if (totalCount === 1) {
      return items[0];
    }
  }, [this.queryId]);
}

export class MailAddressList extends classes(
  MailAddressListQuery,
  ListDataModel<MailAddressListItem>,
) {
  public constructor(
    project: Project,
    query: MailAddressListQueryModelData,
    mailAddresses: MailAddressListItem[],
    totalCount: number,
  ) {
    super([project, query], [mailAddresses, totalCount]);
  }
}
