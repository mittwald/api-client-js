import { DateTime } from "luxon";

import type {
  MailAddressBackupListQueryModelData,
  MailAddressBackupData,
} from "./types.js";

import {
  ListQueryModel,
  WithListData,
  DataModel,
  extractId,
} from "../../base/index.js";
import { MailAddress } from "../MailAddress/index.js";
import { config } from "../../config/index.js";

export class MailAddressBackup extends DataModel<MailAddressBackupData> {
  public readonly date?: DateTime;
  public readonly mailAddress: MailAddress;
  public readonly name: string;

  public constructor(data: MailAddressBackupData, mailAddress: MailAddress) {
    super(data);
    this.name = data.name;
    this.mailAddress = mailAddress;
    const parsedDate = DateTime.fromFormat(data.name, "yyyyMMdd");
    if (parsedDate.isValid) {
      this.date = parsedDate;
    }
  }

  public static query(query: MailAddressBackupListQueryModelData) {
    return new MailAddressBackupListQuery(query);
  }

  public async restore(): Promise<void> {
    await config.behaviors.mailAddress.restoreBackup(
      this.mailAddress.id,
      this.name,
    );
  }
}

export class MailAddressBackupListQuery extends ListQueryModel<MailAddressBackupListQueryModelData> {
  public constructor(query: MailAddressBackupListQueryModelData) {
    super(query, { dependencies: [extractId(query.mailAddress)] });
  }

  public async execute() {
    const mailAddress =
      typeof this.query.mailAddress === "string"
        ? MailAddress.ofId(this.query.mailAddress)
        : this.query.mailAddress;
    const { totalCount, items } =
      await config.behaviors.mailAddress.listBackups(mailAddress.id);
    return new MailAddressBackupList(
      this.query,
      items.map((i) => new MailAddressBackup(i, mailAddress)),
      totalCount,
    );
  }
}

export class MailAddressBackupList extends WithListData<MailAddressBackup>()(
  MailAddressBackupListQuery,
) {
  public override readonly items: readonly MailAddressBackup[];
  public override readonly totalCount: number;
  public constructor(
    query: MailAddressBackupListQueryModelData,
    backups: MailAddressBackup[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(backups);
    this.totalCount = totalCount;
  }
}
