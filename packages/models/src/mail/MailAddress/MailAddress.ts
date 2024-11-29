import { classes } from "polytype";
import {
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import {
  MailAddressData,
  MailAddressListItemData,
  MailAddressListQueryData,
} from "./types.js";
import { AsyncResourceVariant, provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { Project } from "../../project/index.js";

export class MailAddress extends ReferenceModel {
  public static ofId(id: string): MailAddress {
    return new MailAddress(id);
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

  public findDetailed = provideReact(
    () => MailAddress.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<MailAddressDetailed | undefined>>;

  public getDetailed = provideReact(
    () => MailAddress.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<MailAddressDetailed>>;

  public static query(project: Project, query: MailAddressListQueryData = {}) {
    return new MailAddressListQuery(project, query);
  }

  public static async create(
    project: Project,
    mailAddress: string,
    password: string,
    isCatchAll: boolean,
    enableSpamProtection: boolean,
    quotaInBytes: number,
  ): Promise<MailAddress> {
    const { id } = await config.behaviors.mailAddress.create(
      project.id,
      mailAddress,
      password,
      isCatchAll,
      enableSpamProtection,
      quotaInBytes,
    );
    return new MailAddress(id);
  }

  public static async createForward(
    project: Project,
    address: string,
    forwardAddresses: string[],
  ): Promise<MailAddress> {
    const { id } = await config.behaviors.mailAddress.createForward(
      project.id,
      address,
      forwardAddresses,
    );
    return new MailAddress(id);
  }
  public async updateAddress(address: string): Promise<void> {
    await config.behaviors.mailAddress.updateAddress(this.id, address);
  }
  public async updatePassword(password: string): Promise<void> {
    await config.behaviors.mailAddress.updatePassword(this.id, password);
  }

  public async updateSpamProtection(
    active: boolean,
    autoDeleteSpam: boolean,
    folder: "inbox" | "spam",
    relocationMinSpamScore: number,
  ): Promise<void> {
    await config.behaviors.mailAddress.updateSpamProtection(
      this.id,
      active,
      autoDeleteSpam,
      folder,
      relocationMinSpamScore,
    );
  }

  public async updateQuota(quota: number): Promise<void> {
    await config.behaviors.mailAddress.updateQuota(this.id, quota);
  }

  public async updateForwardAddresses(addresses: string[]): Promise<void> {
    await config.behaviors.mailAddress.updateForwardAddresses(
      this.id,
      addresses,
    );
  }

  public async updateCatchAll(active: boolean): Promise<void> {
    await config.behaviors.mailAddress.updateCatchAll(this.id, active);
  }

  public async updateAutoResponder(
    active: boolean,
    expiresAt: Date,
    message: string,
    startsAt: Date,
  ): Promise<void> {
    await config.behaviors.mailAddress.updateAutoResponder(
      this.id,
      active,
      expiresAt,
      message,
      startsAt,
    );
  }
}

export class MailAddressCommon extends classes(
  DataModel<MailAddressData>,
  MailAddress,
) {
  public readonly project: Project;
  public readonly isForward: boolean;
  public readonly receivingDisabled: boolean;
  public readonly sendingDisabled: boolean;
  public readonly mStudioPath: string;

  public constructor(data: MailAddressData) {
    super([data], [data.id]);
    this.project = Project.ofId(data.projectId);
    this.isForward = !this.data.mailbox;
    this.receivingDisabled = data.receivingDisabled;
    this.sendingDisabled = data.mailbox?.sendingEnabled === false;
    this.mStudioPath = `/app/projects/${this.project.id}/email/addresses/${this.id}`;
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

export class MailAddressListQuery extends ListQueryModel<MailAddressListQueryData> {
  public readonly project: Project;
  public constructor(project: Project, query: MailAddressListQueryData = {}) {
    super(query, {
      dependencies: [project.id],
    });
    this.project = project;
  }

  public refine(query: MailAddressListQueryData = {}) {
    return new MailAddressListQuery(this.project, {
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { items, totalCount } = await config.behaviors.mailAddress.list(
      this.project.id,
      {
        limit: config.defaultPaginationLimit,
        ...this.query,
      },
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
    query: MailAddressListQueryData,
    mailAddresses: MailAddressListItem[],
    totalCount: number,
  ) {
    super([project, query], [mailAddresses, totalCount]);
  }
}
